import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteUrl } from '@/lib/content';
import { organizationSchema, pageMetadata, siteDescription } from '@/lib/seo';
import { StructuredData } from '@/components/structured-data';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import './globals.css';
export const metadata: Metadata = {
  ...pageMetadata('DataLink Tech Corp | Tecnología que impulsa tu negocio', siteDescription, '/'),
  metadataBase: new URL(siteUrl),
  title: { default: 'DataLink Tech Corp | Tecnología que impulsa tu negocio', template: '%s | DataLink Tech Corp' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body><StructuredData data={organizationSchema}/><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido">{children}</main><Footer/></body></html>; }
