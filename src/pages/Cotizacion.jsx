const inputStyle = { padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8 };

export default function Cotizacion({ quoteSubmitted, submitQuote, newQuote }) {
  return (
    <div style={{ maxWidth: 840, margin: '0 auto', padding: '40px 24px 70px' }}>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 8px' }}>Solicitar cotización y lista de materiales</h1>
      <p style={{ color: '#6B6459', fontSize: 14.5, margin: '0 0 28px' }}>Envíanos tu lista y cotizamos tu proyecto. También puedes adjuntar un plano, croquis o Excel.</p>

      {quoteSubmitted && (
        <div style={{ background: '#eaf5ec', border: '1px solid #1B6B3C', borderRadius: 12, padding: 28, textAlign: 'center' }}>
          <div style={{ fontSize: 34, marginBottom: 10 }}>✅</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¡Solicitud recibida!</div>
          <div style={{ color: '#3a342c', fontSize: 14.5, marginBottom: 18 }}>Tu número de cotización de ejemplo es <strong>#PV-10245</strong>. Te contactaremos a la brevedad.</div>
          <button onClick={newQuote} style={{ background: '#1B6B3C', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 20px', fontWeight: 700, cursor: 'pointer' }}>Enviar otra solicitud</button>
        </div>
      )}

      {!quoteSubmitted && (
        <div style={{ background: '#fff', border: '1px solid #E7E1D8', borderRadius: 14, padding: 26 }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Materiales</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
            <input placeholder="Producto (ej. Terciado estructural 18mm)" style={{ ...inputStyle, gridColumn: 1 }} />
            <input placeholder="Medida" style={inputStyle} />
            <input placeholder="Cantidad" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 10, marginBottom: 16 }}>
            <input placeholder="Producto" style={inputStyle} />
            <input placeholder="Medida" style={inputStyle} />
            <input placeholder="Cantidad" style={inputStyle} />
          </div>
          <button style={{ border: '1px dashed #1B6B3C', color: '#1B6B3C', background: 'none', borderRadius: 8, padding: '9px 14px', fontWeight: 600, cursor: 'pointer', marginBottom: 20 }}>+ Agregar otro material</button>

          <div style={{ border: '1px dashed #E7E1D8', borderRadius: 10, padding: 18, textAlign: 'center', color: '#6B6459', fontSize: 13.5, marginBottom: 20 }}>📎 Adjuntar Excel, PDF, foto o plano (demostrativo)</div>

          <div style={{ fontWeight: 700, marginBottom: 12 }}>Datos de contacto</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            <input placeholder="Nombre" style={inputStyle} />
            <input placeholder="Empresa (opcional)" style={inputStyle} />
            <input placeholder="Correo" style={inputStyle} />
            <input placeholder="Teléfono" style={inputStyle} />
            <input placeholder="Comuna de despacho" style={inputStyle} />
            <select style={inputStyle}><option>Retiro en tienda</option><option>Despacho a domicilio</option></select>
          </div>
          <textarea placeholder="Observaciones" style={{ width: '100%', minHeight: 70, padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8, boxSizing: 'border-box', marginBottom: 18 }} />
          <button onClick={submitQuote} style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '13px 24px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Enviar solicitud</button>
        </div>
      )}
    </div>
  );
}
