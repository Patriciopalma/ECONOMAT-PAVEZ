import ProductCard from '../components/ProductCard.jsx';
import { FAMILY_KEYS, FAMILY_NAMES, FAMILY_IMG, HOME_FEATURES, VALUE_PROPS, BRANDS, TESTIMONIALS } from '../data.js';

const TABS_BASE = { padding: '12px 4px', fontWeight: 700, fontSize: 14.5, cursor: 'pointer', borderBottom: '3px solid transparent' };
function tabStyle(active) {
  return active ? { ...TABS_BASE, color: '#1B6B3C', borderBottomColor: '#E85A1F' } : { ...TABS_BASE, color: '#6B6459' };
}

export default function Home({ goCatalogo, goCotizacion, goCategoria, goDatoExperto, homeTab, setHomeTab, homeProducts, waLink }) {
  return (
    <div>
      <div style={{ position: 'relative', background: '#161310', minHeight: 480, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src="/assets/bodega-hero.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(10,10,8,.92),rgba(10,10,8,.55) 55%,rgba(10,10,8,.25))' }} />
        <div className="pv-container" style={{ position: 'relative', padding: '56px 24px', display: 'flex', gap: 40, width: '100%' }}>
          <div style={{ flex: 1, maxWidth: 600 }}>
            <h1 className="pv-hero-title" style={{ fontFamily: "'Sora',sans-serif", fontSize: 44, lineHeight: 1.15, color: '#fff', margin: '0 0 18px' }}>
              Materiales, experiencia y asesoría<br /><span style={{ color: '#F0A93A' }}>para construir mejor.</span>
            </h1>
            <p style={{ fontSize: 17, color: '#dcd6cc', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 520 }}>
              Maderas, tableros, ferretería y materiales de construcción con atención especializada, dimensionado y despacho.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={goCatalogo} style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 26px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Ver productos</button>
              <button onClick={goCotizacion} style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: 8, padding: '12px 24px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Cotiza tu proyecto</button>
            </div>
          </div>
          <div className="pv-hide-mobile" style={{ flex: '0 0 320px', background: 'rgba(27,107,60,.92)', borderRadius: 14, padding: 24, display: 'flex', flexDirection: 'column', gap: 18, alignSelf: 'center' }}>
            {HOME_FEATURES.map((hf) => (
              <div key={hf.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', borderTop: '1px solid rgba(255,255,255,.18)', paddingTop: 14 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F0A93A', marginTop: 6, flex: '0 0 auto' }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{hf.title}</div>
                  <div style={{ color: '#d9e8dc', fontSize: 13 }}>{hf.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pv-container" style={{ padding: '56px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 26, margin: 0 }}>Explora nuestras categorías</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); goCatalogo(); }} style={{ fontWeight: 700, fontSize: 14 }}>Ver todas las categorías →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 20 }}>
          {FAMILY_KEYS.map((key) => (
            <div key={key} onClick={() => goCategoria(key)} style={{ cursor: 'pointer', border: '1px solid #E7E1D8', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
              <div style={{ height: 150, overflow: 'hidden' }}><img src={FAMILY_IMG[key]} alt={FAMILY_NAMES[key]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{FAMILY_NAMES[key]}</div>
                <div style={{ color: '#E85A1F', fontWeight: 600, fontSize: 13.5 }}>Ver productos →</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-container" style={{ margin: '40px auto 0', padding: '28px 24px', borderTop: '1px solid #E7E1D8', borderBottom: '1px solid #E7E1D8', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between' }}>
        {VALUE_PROPS.map((vp) => (
          <div key={vp.title} style={{ flex: '1 1 180px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#E85A1F', marginTop: 7, flex: '0 0 auto' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>{vp.title}</div>
              <div style={{ color: '#6B6459', fontSize: 13 }}>{vp.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pv-container" style={{ padding: '44px 24px', display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 340 }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'baseline', marginBottom: 20, borderBottom: '2px solid #E7E1D8' }}>
            <div onClick={() => setHomeTab('destacados')} style={tabStyle(homeTab === 'destacados')}>Destacados</div>
            <div onClick={() => setHomeTab('masvendidos')} style={tabStyle(homeTab === 'masvendidos')}>Más vendidos</div>
            <div onClick={() => setHomeTab('ofertas')} style={tabStyle(homeTab === 'ofertas')}>Ofertas</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 16 }}>
            {homeProducts.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#1c1a17', borderRadius: 14, padding: 24, color: '#fff' }}>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 19, marginBottom: 10 }}>¿Tienes un proyecto?</div>
            <div style={{ color: '#cfc9bf', fontSize: 13.5, lineHeight: 1.5, marginBottom: 18 }}>Envíanos tu lista de materiales y te ayudamos a hacerlo realidad.</div>
            <button onClick={goCotizacion} style={{ background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 18px', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', width: '100%', marginBottom: 10 }}>Cotizar mi proyecto</button>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ color: '#9fd6ac', fontSize: 13 }}>o escríbenos por WhatsApp 💬</a>
          </div>
          <div style={{ background: '#1B6B3C', borderRadius: 14, padding: 24, color: '#fff' }}>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 19, marginBottom: 8 }}>Dato experto</div>
            <div style={{ color: '#dcecdf', fontSize: 13.5, lineHeight: 1.5, marginBottom: 16 }}>Consejos, guías y soluciones para tus proyectos.</div>
            <a href="#" onClick={(e) => { e.preventDefault(); goDatoExperto(); }} style={{ color: '#F0A93A', fontWeight: 700, fontSize: 13.5 }}>Ver artículos →</a>
          </div>
        </div>
      </div>

      <div className="pv-container" style={{ padding: '8px 24px 44px' }}>
        <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, marginBottom: 16 }}>Marcas con las que trabajamos</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {BRANDS.map((b) => (
            <div key={b} style={{ border: '1px solid #E7E1D8', borderRadius: 10, padding: '16px 28px', fontWeight: 700, color: '#6B6459', background: '#fff' }}>{b}</div>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', borderTop: '1px solid #E7E1D8', borderBottom: '1px solid #E7E1D8', padding: '44px 24px' }}>
        <div className="pv-container" style={{ padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, margin: 0 }}>Lo que dicen nuestros clientes</h3>
            <span style={{ fontSize: 12, color: '#9c9488' }}>(contenido de ejemplo)</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ border: '1px solid #E7E1D8', borderRadius: 12, padding: 20, background: '#FBF8F4' }}>
                <div style={{ color: '#F0A93A', marginBottom: 8 }}>★★★★★</div>
                <div style={{ fontSize: 14, color: '#241F1A', lineHeight: 1.5, marginBottom: 12 }}>“{t.quote}”</div>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{t.name}</div>
                <div style={{ color: '#6B6459', fontSize: 12.5 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pv-container" style={{ padding: '44px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
        <div>
          <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 19, marginBottom: 8 }}>Despacho a domicilio</h3>
          <p style={{ color: '#6B6459', fontSize: 14, lineHeight: 1.6 }}>Coordinamos despacho a Rancagua y alrededores según volumen y tipo de material. La cobertura y costos finales se confirman al momento de cotizar.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 19, marginBottom: 8 }}>Retiro en tienda</h3>
          <p style={{ color: '#6B6459', fontSize: 14, lineHeight: 1.6 }}>Compra online o cotiza y retira tus materiales directamente en nuestra sala de venta, con la asesoría de nuestro equipo.</p>
        </div>
      </div>
    </div>
  );
}
