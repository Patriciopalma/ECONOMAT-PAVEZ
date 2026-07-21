import ProductCard from '../components/ProductCard.jsx';
import { FAMILY_NAMES, SUBCATS, FILTERS, PRODUCTS } from '../data.js';

export default function Categoria({ goHome, goCatalogo, activeFamily, decorate }) {
  const activeFamilyName = FAMILY_NAMES[activeFamily];
  const activeSubcats = SUBCATS[activeFamily] || [];
  const activeFilters = FILTERS[activeFamily] || [];
  const categoriaProducts = PRODUCTS.filter((p) => p.family === activeFamily).map(decorate);

  return (
    <div className="pv-container" style={{ padding: '28px 24px 60px' }}>
      <div style={{ fontSize: 13, color: '#6B6459', marginBottom: 14 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }}>Inicio</a> / <a href="#" onClick={(e) => { e.preventDefault(); goCatalogo(); }}>Catálogo</a> / {activeFamilyName}
      </div>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 6px' }}>{activeFamilyName}</h1>
      <div style={{ display: 'flex', gap: 8, margin: '14px 0 24px', flexWrap: 'wrap' }}>
        {activeSubcats.map((sc) => (
          <span key={sc} style={{ border: '1px solid #E7E1D8', borderRadius: 20, padding: '6px 14px', fontSize: 12.5, color: '#241F1A', background: '#fff' }}>{sc}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 230px', border: '1px solid #E7E1D8', borderRadius: 12, padding: 18, background: '#fff' }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Filtrar por</div>
          {activeFilters.map((fg) => (
            <div key={fg.label} style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{fg.label}</div>
              {fg.options.map((op) => (
                <label key={op} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: '#6B6459', marginBottom: 6 }}>
                  <input type="checkbox" />{op}
                </label>
              ))}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18, minWidth: 260 }}>
          {categoriaProducts.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
}
