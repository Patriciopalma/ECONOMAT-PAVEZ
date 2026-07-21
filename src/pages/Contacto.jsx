export default function Contacto({ whatsappDisplay, waLink }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 70px' }}>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 20px' }}>Contacto</h1>
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{ marginBottom: 14 }}><strong>Dirección:</strong><br /><span style={{ color: '#6B6459' }}>Rancagua, Región de O'Higgins (dirección exacta por confirmar)</span></div>
          <div style={{ marginBottom: 14 }}><strong>Horarios:</strong><br /><span style={{ color: '#6B6459' }}>Lunes a viernes, 9:00–18:30 (referencial)</span></div>
          <div style={{ marginBottom: 14 }}><strong>Teléfono:</strong><br /><span style={{ color: '#6B6459' }}>{whatsappDisplay}</span></div>
          <div style={{ marginBottom: 14 }}><strong>Correo:</strong><br /><span style={{ color: '#6B6459' }}>contacto@pavezeconomat.cl (demostrativo)</span></div>
          <a href={waLink} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 8, background: '#1B6B3C', color: '#fff', borderRadius: 8, padding: '11px 20px', fontWeight: 700 }}>Escríbenos por WhatsApp</a>
        </div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <input placeholder="Nombre" style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8, marginBottom: 10 }} />
          <input placeholder="Correo" style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8, marginBottom: 10 }} />
          <textarea placeholder="Mensaje" style={{ width: '100%', boxSizing: 'border-box', minHeight: 100, padding: '10px 12px', border: '1px solid #E7E1D8', borderRadius: 8, marginBottom: 14 }} />
          <button style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 22px', fontWeight: 700, cursor: 'pointer' }}>Enviar mensaje</button>
        </div>
      </div>
    </div>
  );
}
