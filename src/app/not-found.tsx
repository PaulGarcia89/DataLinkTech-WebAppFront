import Link from 'next/link';
export default function NotFound() { return <section className="container section"><span className="eyebrow">404</span><h1>Esta conexión<br/>no existe.</h1><p>La página que buscas no está disponible.</p><Link href="/" className="button button-lime">Volver al inicio</Link></section>; }
