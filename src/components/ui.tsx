'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChartNoAxesCombined, Code2, Headset, Network, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { services } from '@/lib/content';
const icons = { Sparkles, ChartNoAxesCombined, Code2, Network, ShieldCheck, Headset };
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? undefined : { y: [16, 0], opacity: [0.65, 1] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>{children}</motion.div>;
}
export function ServiceCards() { return <div className="service-grid">{services.map((service, i) => { const Icon = icons[service.icon]; return <Reveal key={service.slug}><Link className="service-card" href={`/${service.slug}/`}><div className="card-top"><Icon size={25}/><span>0{i + 1}</span></div><h3>{service.name}</h3><p>{service.short}</p><span className="card-link">Explorar solución <ArrowUpRight size={18}/></span></Link></Reveal>; })}</div>; }
