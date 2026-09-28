"""Validate indexable HTML, unique metadata, schema URLs and sitemap coverage."""
from html.parser import HTMLParser
from pathlib import Path
import json
import xml.etree.ElementTree as ET

class SEOPage(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ''
        self.in_title = False
        self.in_schema = False
        self.schema_text = ''
        self.schemas = []
        self.meta = {}
        self.canonical = None
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'meta': self.meta[attrs.get('name')] = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical = attrs['href']
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema = True
            self.schema_text = ''
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_schema: self.schema_text += data
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_schema:
            self.schemas.append(json.loads(self.schema_text))
            self.in_schema = False

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
root = ET.parse('out/sitemap.xml').getroot()
urls = [node.text for node in root.findall('s:url/s:loc', ns)]
assert len(urls) == len(set(urls)) == 26, 'Sitemap must contain 26 unique pages'
titles, descriptions = set(), set()
for url in urls:
    route = url.removeprefix('https://www.datalinkcorporation.com')
    page = SEOPage()
    page.feed((Path('out') / route.strip('/') / 'index.html').read_text())
    assert page.canonical == url, (url, 'canonical')
    assert page.title and page.title not in titles, (url, 'duplicate title')
    desc = page.meta.get('description')
    assert desc and desc not in descriptions, (url, 'duplicate description')
    assert 'noindex' not in page.meta.get('robots', ''), (url, 'noindex')
    assert 'index' in page.meta.get('robots', ''), (url, 'missing robots')
    titles.add(page.title); descriptions.add(desc)
    types = {schema.get('@type') for schema in page.schemas}
    assert {'Organization', 'WebSite'} <= types, (url, 'missing identity')
    for schema in page.schemas:
        if schema.get('@type') == 'Service': assert schema['url'] == url, (url, 'service URL')
        if schema.get('@type') == 'BreadcrumbList':
            assert schema['itemListElement'][-1]['item'] == url, (url, 'breadcrumb URL')
    for node in root.findall('s:url', ns):
        alternates = node.findall('x:link', ns)
        assert {a.get('hreflang') for a in alternates} >= {'es', 'en'}
        assert all(a.get('href') in urls for a in alternates)
print('SEO audit passed: 26 indexable pages, unique metadata, sitemap and schema URLs.')
