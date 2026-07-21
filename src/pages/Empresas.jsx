import { EMPRESA_SERVICIOS } from '../data.js';

const inputStyle = { padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8 };

export default function Empresas({ empresaSubmitted, submitEmpresa }) {
  return (
    <div>
      <div style={{ background: '#123F24', color: '#fff', padding: '56px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 32, margin: '0 0 12px' }}>Soluciones para empresas</h1>
          <p style={{ color: '#d9e8dc', fontSize: 15.5, maxWidth: 640, lineHeight: 1.6 }}>Atención para constructoras, contratistas, arquitectos, mueblistas y empresas que necesitan abastecimiento recurrente, dimensionado y despacho programado.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 36 }}>
          {EMPRESA_SERVICIOS.map((es) => (
            <div key={es.title} style={{ border: '1px solid #E7E1D8', borderRadius: 10, padding: 16, background: '#fff' }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{es.title}</div>
              <div style={{ color: '#6B6459', fontSize: 12.5 }}>{es.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ color: '#9c9488', fontSize: 12.5, marginBottom: 24 }}>Convenios, créditos y condiciones comerciales sujetos a evaluación. Datos definitivos por confirmar con el cliente.</div>

        {empresaSubmitted && (
          <div style={{ background: '#eaf5ec', border: '1px solid #1B6B3C', borderRadius: 12, padding: 26, textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 17 }}>¡Gracias! Un ejecutivo se pondrá en contacto contigo.</div>
          </div>
        )}
        {!empresaSubmitted && (
          <div style={{ background: '#fff', border: '1px solid #E7E1D8', borderRadius: 14, padding: 26 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Solicitar cuenta empresa</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              <input placeholder="Razón social" style={inputStyle} />
              <input placeholder="RUT empresa" style={inputStyle} />
              <input placeholder="Nombre de contacto" style={inputStyle} />
              <input placeholder="Correo" style={inputStyle} />
            </div>
            <button onClick={submitEmpresa} style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 22px', fontWeight: 700, cursor: 'pointer' }}>Enviar solicitud</button>
          </div>
        )}
      </div>
    </div>
  );
}
