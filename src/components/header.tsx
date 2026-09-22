'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { services } from '@/lib/content';
export function Logo() { return <Link href="/" className="logo" aria-label="DataLink Tech Corp, inicio"><Image src="/datalink-logo.png" alt="DataLink Tech Corp — Ideas conectadas a tu crecimiento" width={2172} height={724} priority /></Link>; }
export function Header() {
 const [open, setOpen] = useState(false); const pathname = usePathname();
 return <header className="site-header"><div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="Navegación principal"><Link className={pathname === '/' ? 'active' : ''} href="/">Inicio</Link><div className="nav-dropdown"><button type="button">Soluciones <ChevronDown size={13}/></button><div className="dropdown-panel">{services.map(s => <Link key={s.slug} href={`/${s.slug}/`}>{s.name}</Link>)}</div></div><Link href="/nosotros/" className={pathname.includes('nosotros') ? 'active' : ''}>Nosotros</Link></nav><Link href="/contacto/" className="button header-cta">Hablemos de tu proyecto <ArrowUpRight size={16}/></Link><button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil">{[{slug:'', name:'Inicio'}, ...services, {slug:'nosotros',name:'Nosotros'}, {slug:'contacto',name:'Contacto'}].map(s => <Link key={s.slug} href={`/${s.slug}${s.slug ? '/' : ''}`} onClick={() => setOpen(false)}>{s.name}<ArrowUpRight size={16}/></Link>)}</nav>}</header>;
}
