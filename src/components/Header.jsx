import { useState } from 'react';
import { FAMILY_KEYS, FAMILY_NAMES, SUBCATS } from '../data.js';
import { logoPavez } from '../assets.js';

export default function Header({ whatsappDisplay, goHome, goCuenta, goCategoria, goOfertas, goDimensionado, goEmpresas, goDatoExperto, goContacto, goCotizacion, toggleCart, cartCount, cartSubtotalF }) {
  const [megaFamily, setMegaFamily] = useState(null);

  return (
    <div style={{ background: '#fff', borderBottom: '1px solid #E7E1D8', position: 'sticky', top: 0, zIndex: 40 }}>
      <div style={{ background: '#123F24', color: '#e8f0e8', fontSize: 13 }}>
        <div className="pv-container" style={{ padding: '6px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ fontWeight: 600 }}>Maderas Pavez desde 1976 · 50 años ayudando a construir Rancagua</div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <span>🚚 Despacho a Rancagua y alrededores</span>
            <a href="#" style={{ color: '#e8f0e8' }} onClick={(e) => { e.preventDefault(); goContacto(); }}>Ayuda</a>
            <a href="#" style={{ color: '#e8f0e8' }} onClick={(e) => { e.preventDefault(); goContacto(); }}>Contacto</a>
            <span>{whatsappDisplay}</span>
          </div>
        </div>
      </div>

      <div className="pv-container" style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div onClick={goHome} style={{ cursor: 'pointer', flex: '0 0 auto' }}>
          <img src={logoPavez} alt="Pavez Economat" style={{ height: 40, display: 'block' }} />
        </div>
        <div className="pv-search-bar" style={{ flex: 1, display: 'flex', maxWidth: 640, border: '2px solid #1B6B3C', borderRadius: 8, overflow: 'hidden' }}>
          <input placeholder="¿Qué necesitas para tu proyecto?" style={{ flex: 1, border: 'none', outline: 'none', padding: '11px 14px', fontSize: 14 }} />
          <button style={{ background: '#E85A1F', border: 'none', color: '#fff', padding: '0 18px', cursor: 'pointer', fontSize: 16 }}>🔍</button>
        </div>
        <div style={{ flex: 1 }} />
        <div onClick={goCuenta} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', lineHeight: 1.2, fontSize: 13, color: '#241F1A' }}>
          <span style={{ fontWeight: 700 }}>Mi cuenta</span>
          <span style={{ color: '#6B6459' }}>Iniciar sesión</span>
        </div>
        <div onClick={toggleCart} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, background: '#FBF8F4', border: '1px solid #E7E1D8', borderRadius: 8, padding: '8px 14px' }}>
          <span style={{ fontSize: 18 }}>🛒</span>
          <div style={{ lineHeight: 1.2, fontSize: 13 }}>
            <div style={{ fontWeight: 700 }}>{cartCount}</div>
            <div style={{ color: '#6B6459' }}>{cartSubtotalF}</div>
          </div>
        </div>
      </div>

      <div style={{ background: '#1B6B3C' }}>
        <div className="pv-container pv-nav-scroll" style={{ padding: '0 24px', display: 'flex', alignItems: 'center', gap: 6 }}>
          {FAMILY_KEYS.map((key) => (
            <div
              key={key}
              onMouseEnter={() => setMegaFamily(key)}
              onMouseLeave={() => setMegaFamily(null)}
              style={{ position: 'relative' }}
            >
              <div onClick={() => goCategoria(key)} style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {FAMILY_NAMES[key]} ▾
              </div>
              {megaFamily === key && (
                <div className="pv-fade" style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid #E7E1D8', borderRadius: '0 0 10px 10px', boxShadow: '0 12px 24px rgba(0,0,0,.12)', minWidth: 230, padding: '10px 0', zIndex: 50 }}>
                  {SUBCATS[key].map((sc) => (
                    <div key={sc} onClick={() => goCategoria(key)} style={{ padding: '9px 20px', fontSize: 13.5, color: '#241F1A', cursor: 'pointer' }}>{sc}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div onClick={goOfertas} style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Ofertas</div>
          <div onClick={goDimensionado} style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Servicios</div>
          <div onClick={goEmpresas} style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Empresas</div>
          <div onClick={goDatoExperto} style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Dato experto</div>
          <div onClick={goContacto} style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Contacto</div>
          <div style={{ flex: 1 }} />
          <button onClick={goCotizacion} style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 700, fontSize: 14, cursor: 'pointer', margin: '8px 0' }}>Cotiza tu proyecto</button>
        </div>
      </div>
    </div>
  );
}
