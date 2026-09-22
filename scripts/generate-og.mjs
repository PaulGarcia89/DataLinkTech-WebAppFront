import { ImageResponse } from 'next/og.js';
import { createElement as h } from 'react';
import fs from 'node:fs';
const logo = 'data:image/png;base64,' + fs.readFileSync('public/datalink-logo.png').toString('base64');
const response = new ImageResponse(h('div', {style:{display:'flex',flexDirection:'column',width:'100%',height:'100%',background:'#06172d',padding:'60px',color:'#fff',justifyContent:'space-between'}},
  h('div',{style:{display:'flex',background:'#fff',borderRadius:12,width:360,padding:12}},h('img',{src:logo,width:336,height:112,alt:'DataLink Tech Corp'})),
  h('div',{style:{display:'flex',flexDirection:'column',fontSize:68,lineHeight:1.1,fontWeight:700}},'Tecnología e IA para negocios',h('span',{style:{color:'#00d1ff'}},'que avanzan.')),
  h('div',{style:{display:'flex',fontSize:23,color:'#b6cbe0'}},'Automatización · Software · Marketing · Infraestructura'),
  h('div',{style:{display:'flex',fontSize:22,color:'#00d1ff'}},'www.datalinkcorporation.com')
),{width:1200,height:630});
response.arrayBuffer().then(data=>fs.writeFileSync('public/opengraph-image.png',Buffer.from(data)));
