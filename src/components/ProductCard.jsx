export default function ProductCard({ p }) {
  return (
    <div style={{ border: '1px solid #E7E1D8', borderRadius: 12, background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
      <div onClick={p.open} style={{ cursor: 'pointer', position: 'relative', height: 150, overflow: 'hidden' }}>
        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {p.hasBadge && (
          <span style={{ position: 'absolute', top: 8, left: 8, background: '#E85A1F', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 5 }}>
            {p.badgeLabel}
          </span>
        )}
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div onClick={p.open} style={{ cursor: 'pointer', fontWeight: 700, fontSize: 14, lineHeight: 1.3, marginBottom: 4 }}>{p.name}</div>
        <div style={{ color: '#6B6459', fontSize: 12, marginBottom: 8 }}>{p.spec}</div>
        <div style={{ flex: 1 }} />
        {p.showPrice && (
          <>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#E85A1F', marginBottom: 2 }}>
              {p.priceF} <span style={{ fontSize: 11.5, color: '#6B6459', fontWeight: 400 }}>{p.unit}</span>
            </div>
            <div style={{ color: '#1B6B3C', fontSize: 11.5, fontWeight: 600, marginBottom: 10 }}>Stock disponible</div>
          </>
        )}
        {p.isCotizar && (
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#E85A1F', marginBottom: 10 }}>Precio sujeto a cotización</div>
        )}
        {p.isConsultar && (
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#6B6459', marginBottom: 10 }}>Consultar disponibilidad</div>
        )}

        {p.isCompra && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E7E1D8', borderRadius: 6 }}>
              <button onClick={p.dec} style={{ border: 'none', background: 'none', padding: '4px 8px', cursor: 'pointer', fontSize: 14 }}>−</button>
              <span style={{ padding: '0 6px', fontSize: 13, fontWeight: 600 }}>{p.qty}</span>
              <button onClick={p.inc} style={{ border: 'none', background: 'none', padding: '4px 8px', cursor: 'pointer', fontSize: 14 }}>+</button>
            </div>
            <button onClick={p.add} style={{ flex: 1, background: '#1B6B3C', color: '#fff', border: 'none', borderRadius: 6, padding: 8, cursor: 'pointer', fontSize: 15 }}>🛒</button>
          </div>
        )}
        {p.isCotizar && (
          <button onClick={p.open} style={{ width: '100%', background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 6, padding: 9, fontWeight: 700, fontSize: 12.5, cursor: 'pointer' }}>Solicitar cotización</button>
        )}
        {p.isConsultar && (
          <button onClick={p.open} style={{ width: '100%', background: '#241F1A', color: '#fff', border: 'none', borderRadius: 6, padding: 9, fontWeight: 700, fontSize: 12.5, cursor: 'pointer' }}>Consultar</button>
        )}
      </div>
    </div>
  );
}
