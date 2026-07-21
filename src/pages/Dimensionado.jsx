import { DIM_STEPS } from '../data.js';

const inputStyle = { padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8 };

export default function Dimensionado({ dimSubmitted, submitDim, newDim }) {
  return (
    <div style={{ maxWidth: 840, margin: '0 auto', padding: '40px 24px 70px' }}>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 8px' }}>Servicio de dimensionado</h1>
      <p style={{ color: '#6B6459', fontSize: 14.5, margin: '0 0 24px' }}>Compra solo lo que necesitas. Reduce desperdicios y recibe tus materiales listos para trabajar.</p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {DIM_STEPS.map((label, i) => (
          <div key={label} style={{ flex: '1 1 110px', background: '#fff', border: '1px solid #E7E1D8', borderRadius: 10, padding: 12, textAlign: 'center' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#1B6B3C', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>{i + 1}</div>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>{label}</div>
          </div>
        ))}
      </div>

      {dimSubmitted && (
        <div style={{ background: '#eaf5ec', border: '1px solid #1B6B3C', borderRadius: 12, padding: 28, textAlign: 'center' }}>
          <div style={{ fontSize: 34, marginBottom: 10 }}>✅</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Solicitud de dimensionado enviada</div>
          <div style={{ color: '#3a342c', fontSize: 14.5, marginBottom: 18 }}>Revisaremos tus medidas y te enviaremos una cotización de ejemplo en breve.</div>
          <button onClick={newDim} style={{ background: '#1B6B3C', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 20px', fontWeight: 700, cursor: 'pointer' }}>Nueva solicitud</button>
        </div>
      )}

      {!dimSubmitted && (
        <div style={{ background: '#fff', border: '1px solid #E7E1D8', borderRadius: 14, padding: 26 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <select style={inputStyle}><option>Elige tablero o madera</option><option>Terciado estructural</option><option>MDF</option><option>Melamina blanca</option></select>
            <select style={inputStyle}><option>Formato disponible</option><option>122x244 cm</option><option>183x275 cm</option></select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
            <input placeholder="Largo de corte (cm)" style={inputStyle} />
            <input placeholder="Ancho de corte (cm)" style={inputStyle} />
            <input placeholder="Cantidad de piezas" style={inputStyle} />
          </div>
          <select style={{ width: '100%', ...inputStyle, marginBottom: 10, boxSizing: 'border-box' }}>
            <option>Tipo de servicio: Corte recto</option><option>Tipo de servicio: Corte + tapacanto</option>
          </select>
          <textarea placeholder="Observaciones" style={{ width: '100%', minHeight: 60, padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8, boxSizing: 'border-box', marginBottom: 10 }} />
          <div style={{ border: '1px dashed #E7E1D8', borderRadius: 10, padding: 16, textAlign: 'center', color: '#6B6459', fontSize: 13.5, marginBottom: 20 }}>📎 Adjuntar plano o croquis (demostrativo)</div>
          <button onClick={submitDim} style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '13px 24px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Solicitar revisión</button>
        </div>
      )}
    </div>
  );
}
