import ProductCard from '../components/ProductCard.jsx';
import { FAMILY_KEYS, FAMILY_NAMES, PRODUCTS } from '../data.js';

export default function Catalogo({ goHome, catalogFilter, setCatalogFilter, decorate }) {
  const catalogFamilies = [{ key: 'all', name: 'Todas' }, ...FAMILY_KEYS.map((k) => ({ key: k, name: FAMILY_NAMES[k] }))];
  const catalogProducts = PRODUCTS.filter((p) => catalogFilter === 'all' || p.family === catalogFilter).map(decorate);

  return (
    <div className="pv-container" style={{ padding: '28px 24px 60px' }}>
      <div style={{ fontSize: 13, color: '#6B6459', marginBottom: 14 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }}>Inicio</a> / Catálogo
      </div>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 16px' }}>Catálogo general</h1>
      <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
        {catalogFamilies.map((cf) => (
          <button
            key={cf.key}
            onClick={() => setCatalogFilter(cf.key)}
            style={{
              borderRadius: 20, padding: '8px 18px', fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
              border: '1px solid ' + (catalogFilter === cf.key ? '#1B6B3C' : '#E7E1D8'),
              background: catalogFilter === cf.key ? '#1B6B3C' : '#fff',
              color: catalogFilter === cf.key ? '#fff' : '#241F1A',
            }}
          >
            {cf.name}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18 }}>
        {catalogProducts.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
