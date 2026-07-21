import { FAMILY_KEYS, FAMILY_NAMES } from '../data.js';

export default function Footer({ whatsappDisplay, goCategoria, goDimensionado, goCotizacion, goEmpresas, goDatoExperto }) {
  return (
    <div style={{ background: '#161310', color: '#cfc9bf', padding: '48px 24px 0' }}>
      <div className="pv-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32, paddingBottom: 36, borderBottom: '1px solid #33302a' }}>
        <div>
          <img src="/assets/logo-pavez.svg" alt="Pavez Economat" style={{ height: 32, marginBottom: 14 }} />
          <div style={{ fontSize: 13, lineHeight: 1.7 }}>
            Rancagua, Región de O'Higgins<br />Lunes a viernes, 9:00–18:30<br />{whatsappDisplay}<br />contacto@pavezeconomat.cl
          </div>
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Categorías</div>
          {FAMILY_KEYS.map((key) => (
            <div key={key} onClick={() => goCategoria(key)} style={{ fontSize: 13.5, marginBottom: 9, cursor: 'pointer' }}>{FAMILY_NAMES[key]}</div>
          ))}
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Servicios</div>
          <div onClick={goDimensionado} style={{ fontSize: 13.5, marginBottom: 9, cursor: 'pointer' }}>Dimensionado a medida</div>
          <div onClick={goCotizacion} style={{ fontSize: 13.5, marginBottom: 9, cursor: 'pointer' }}>Cotiza tu proyecto</div>
          <div onClick={goEmpresas} style={{ fontSize: 13.5, marginBottom: 9, cursor: 'pointer' }}>Soluciones para empresas</div>
          <div onClick={goDatoExperto} style={{ fontSize: 13.5, marginBottom: 9, cursor: 'pointer' }}>Dato experto</div>
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Métodos de pago</div>
          <div style={{ fontSize: 13.5, marginBottom: 9 }}>Webpay</div>
          <div style={{ fontSize: 13.5, marginBottom: 9 }}>Transferencia bancaria</div>
          <div style={{ fontSize: 13.5, marginBottom: 9 }}>Efectivo en tienda</div>
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Newsletter</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <input placeholder="Tu correo" style={{ flex: 1, minWidth: 0, padding: '9px 10px', borderRadius: 6, border: '1px solid #454138', background: '#241F1A', color: '#fff' }} />
            <button style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 6, padding: '0 14px', cursor: 'pointer' }}>→</button>
          </div>
        </div>
      </div>
      <div className="pv-container" style={{ padding: '18px 0', fontSize: 12, color: '#8c877e', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span>© {new Date().getFullYear()} Pavez Economat. Productos, precios y valores e información de demostración.</span>
        <span>Políticas de privacidad · Términos y condiciones</span>
      </div>
    </div>
  );
}
