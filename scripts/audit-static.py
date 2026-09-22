"""Validate exported pages, canonical URLs, local links, assets and structured data."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import json

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.h1 = 0
        self.links = []
        self.assets = []
        self.ids = set()
        self.canonical = None
        self.description = None
        self.schema = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.h1 += tag == 'h1'
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag in ('img', 'script') and 'src' in attrs:
            self.assets.append(attrs['src'])
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description = attrs.get('content')
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schema = True

pages = [p for p in Path('out').rglob('index.html')
         if not any(part in ('_next', '_not-found', '404') for part in p.parts)]
errors = []
for path in pages:
    page = Page()
    page.feed(path.read_text())
    route = '/' + str(path.parent.relative_to('out')) if path.parent != Path('out') else '/'
    route = route.rstrip('/') + '/'
    if (page.h1 != 1 or not page.description or not page.schema
            or page.canonical != 'https://www.datalinkcorporation.com' + route):
        errors.append((str(path), 'Invalid metadata or heading'))
    for href in page.links + page.assets:
        url = urlparse(href)
        if url.scheme or url.netloc:
            continue
        if not url.path and url.fragment and unquote(url.fragment) not in page.ids:
            errors.append((str(path), href, 'Missing anchor'))
        if url.path.startswith('/'):
            target = Path('out') / unquote(url.path.lstrip('/'))
            if not target.exists():
                errors.append((str(path), href, 'Missing local destination'))
print(json.dumps({'pages': len(pages), 'errors': errors}, indent=2))
assert len(pages) == 12 and not errors
