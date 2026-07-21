import { ARTICLES } from '../data.js';

export default function DatoExperto() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 70px' }}>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 8px' }}>Dato experto</h1>
      <p style={{ color: '#6B6459', fontSize: 14.5, margin: '0 0 28px' }}>Guías y recomendaciones generales. Para tu proyecto específico, siempre consulta con un especialista.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
        {ARTICLES.map((a) => (
          <div key={a.title} style={{ border: '1px solid #E7E1D8', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
            <div style={{ height: 150, overflow: 'hidden' }}><img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.35, marginBottom: 10 }}>{a.title}</div>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ fontWeight: 700, fontSize: 13 }}>Leer más →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
