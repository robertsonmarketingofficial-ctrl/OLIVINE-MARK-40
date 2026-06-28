import { useState } from 'react'

function PageHeader({ title, sub, noMargin }) {
  return (
    <div style={{marginBottom:noMargin?0:24}}>
      <h1 style={{fontSize:22,fontWeight:800,color:'var(--text)',margin:'0 0 4px',letterSpacing:'-0.02em'}}>{title}</h1>
      {sub&&<p style={{fontSize:13,color:'var(--text3)',margin:0}}>{sub}</p>}
    </div>
  )
}

function InfoItem({ label, val }) {
  return (
    <div style={{background:'rgba(255,255,255,0.03)',borderRadius:7,padding:'8px 10px'}}>
      <div style={{fontSize:10,color:'var(--text3)',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:2}}>{label}</div>
      <div style={{fontSize:13,fontWeight:600,color:'var(--text)'}}>{val}</div>
    </div>
  )
}

function WebsiteStrengthBar({ signal }) {
  const map = {'No website':{pct:5,color:'#ef4444'},'Social only':{pct:25,color:'#f97316'},'Basic builder':{pct:50,color:'#f59e0b'},'Has website':{pct:80,color:'#6d8a40'}}
  const {pct,color} = map[signal]||{pct:50,color:'#6b7280'}
  return (
    <div style={{width:'100%'}}>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'var(--text3)',marginBottom:3}}>
        <span>Website strength</span><span style={{color}}>{signal}</span>
      </div>
      <div style={{height:4,background:'rgba(255,255,255,0.07)',borderRadius:2}}>
        <div style={{height:'100%',width:`${pct}%`,background:color,borderRadius:2,transition:'width 0.6s'}}/>
      </div>
    </div>
  )
}

function ScoreBar({ score }) {
  const color = score>=75?'#ef4444':score>=50?'#f97316':'#6b7280'
  return (
    <div style={{height:5,background:'rgba(255,255,255,0.07)',borderRadius:3}}>
      <div style={{height:'100%',width:`${score}%`,background:color,borderRadius:3,transition:'width 0.6s'}}/>
    </div>
  )
}

export { PageHeader, InfoItem, WebsiteStrengthBar, ScoreBar }
