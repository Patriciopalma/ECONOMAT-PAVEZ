import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS } from '../data.js';

const TABS_BASE = { padding: '12px 4px', fontWeight: 700, fontSize: 14.5, cursor: 'pointer', borderBottom: '3px solid transparent' };
function tabStyle(active) {
  return active ? { ...TABS_BASE, color: '#1B6B3C', borderBottomColor: '#E85A1F' } : { ...TABS_BASE, color: '#6B6459' };
}

export default function Producto({ goHome, goCatalogo, goDimensionado, goCotizacion, sel, productQty, selInc, selDec, selAdd, waLink, productTab, setProductTab, decorate }) {
  const relatedProducts = PRODUCTS.filter((p) => p.family === sel.family && p.id !== sel.id).slice(0, 3).map(decorate);

  return (
    <div className="pv-container" style={{ padding: '28px 24px 60px' }}>
      <div style={{ fontSize: 13, color: '#6B6459', marginBottom: 14 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }}>Inicio</a> / <a href="#" onClick={(e) => { e.preventDefault(); goCatalogo(); }}>Catálogo</a> / {sel.category}
      </div>
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320, maxWidth: 460 }}>
          <div style={{ border: '1px solid #E7E1D8', borderRadius: 14, overflow: 'hidden', height: 360, marginBottom: 10 }}>
            <img src={sel.image} alt={sel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {sel.gallery.map((g, i) => (
              <div key={i} style={{ width: 76, height: 76, border: '1px solid #E7E1D8', borderRadius: 8, overflow: 'hidden' }}>
                <img src={g} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ color: '#6B6459', fontSize: 12.5, marginBottom: 6 }}>SKU {sel.sku} · {sel.category}</div>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 8px' }}>{sel.name}</h1>
          <div style={{ color: '#6B6459', fontSize: 14.5, marginBottom: 16 }}>{sel.spec}</div>
          {sel.showPrice && (
            <>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 30, fontWeight: 700, color: '#E85A1F', marginBottom: 4 }}>
                {sel.priceF} <span style={{ fontSize: 14, color: '#6B6459', fontWeight: 400 }}>{sel.unit}</span>
              </div>
              <div style={{ color: '#1B6B3C', fontWeight: 600, fontSize: 13.5, marginBottom: 20 }}>Stock disponible</div>
            </>
          )}
          {sel.isCotizar && (
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700, color: '#E85A1F', marginBottom: 20 }}>Precio sujeto a cotización</div>
          )}
          {sel.isConsultar && (
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700, color: '#6B6459', marginBottom: 20 }}>Consultar disponibilidad</div>
          )}

          {sel.isCompra && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E7E1D8', borderRadius: 8 }}>
                <button onClick={selDec} style={{ border: 'none', background: 'none', padding: '10px 14px', fontSize: 16, cursor: 'pointer' }}>−</button>
                <span style={{ padding: '0 12px', fontWeight: 700 }}>{productQty}</span>
                <button onClick={selInc} style={{ border: 'none', background: 'none', padding: '10px 14px', fontSize: 16, cursor: 'pointer' }}>+</button>
              </div>
              <button onClick={selAdd} style={{ flex: 1, background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '13px 18px', fontWeight: 700, fontSize: 14.5, cursor: 'pointer', minWidth: 160 }}>Agregar al carrito</button>
            </div>
          )}
          {sel.isCotizar && (
            <button onClick={goCotizacion} style={{ width: '100%', background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: '13px 18px', fontWeight: 700, fontSize: 14.5, cursor: 'pointer', marginBottom: 12 }}>Solicitar cotización</button>
          )}
          {sel.isConsultar && (
            <button onClick={goCotizacion} style={{ width: '100%', background: '#241F1A', color: '#fff', border: 'none', borderRadius: 8, padding: '13px 18px', fontWeight: 700, fontSize: 14.5, cursor: 'pointer', marginBottom: 12 }}>Consultar disponibilidad</button>
          )}

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', border: '1px solid #1B6B3C', color: '#1B6B3C', borderRadius: 8, padding: '11px 16px', fontWeight: 700, fontSize: 13.5, minWidth: 160 }}>Consultar por WhatsApp 💬</a>
            <button onClick={goDimensionado} style={{ flex: 1, border: '1px solid #E7E1D8', background: '#fff', borderRadius: 8, padding: '11px 16px', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', minWidth: 160 }}>Necesito dimensionado</button>
            <button onClick={goCotizacion} style={{ flex: 1, border: '1px solid #E7E1D8', background: '#fff', borderRadius: 8, padding: '11px 16px', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', minWidth: 160 }}>Agregar a lista de materiales</button>
          </div>

          <div style={{ borderTop: '1px solid #E7E1D8', paddingTop: 16 }}>
            <div style={{ display: 'flex', gap: 20, borderBottom: '1px solid #E7E1D8', marginBottom: 14, flexWrap: 'wrap' }}>
              <div onClick={() => setProductTab('descripcion')} style={tabStyle(productTab === 'descripcion')}>Descripción</div>
              <div onClick={() => setProductTab('caracteristicas')} style={tabStyle(productTab === 'caracteristicas')}>Características</div>
              <div onClick={() => setProductTab('preguntas')} style={tabStyle(productTab === 'preguntas')}>Preguntas frecuentes</div>
            </div>
            {productTab === 'descripcion' && (
              <p style={{ color: '#3a342c', fontSize: 14.5, lineHeight: 1.65 }}>{sel.desc}</p>
            )}
            {productTab === 'caracteristicas' && (
              <div style={{ fontSize: 14, color: '#3a342c', lineHeight: 1.9 }}>
                <div><strong>Medida:</strong> {sel.spec}</div>
                <div><strong>Categoría:</strong> {sel.category}</div>
                <div><strong>Unidad de venta:</strong> {sel.unitLabel}</div>
                <div><strong>Disponible para dimensionado:</strong> {sel.dimLabel}</div>
                <div style={{ color: '#9c9488', fontStyle: 'italic', marginTop: 8 }}>Información técnica adicional por confirmar con el cliente.</div>
              </div>
            )}
            {productTab === 'preguntas' && (
              <div style={{ fontSize: 14, color: '#3a342c', lineHeight: 1.7 }}>
                <div style={{ marginBottom: 10 }}><strong>¿Hacen despacho?</strong><br />Sí, a Rancagua y alrededores según cobertura y volumen.</div>
                <div><strong>¿Puedo retirar en tienda?</strong><br />Sí, puedes comprar online y retirar en nuestra sala de venta.</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 48 }}>
        <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, marginBottom: 16 }}>Productos relacionados</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18 }}>
          {relatedProducts.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
      <div style={{ marginTop: 20, fontSize: 12, color: '#9c9488' }}>Valores e información utilizados solo para demostración.</div>
    </div>
  );
}
