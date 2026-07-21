export default function CartDrawer({ cartOpen, toggleCart, cartItems, cartSubtotalF, goCheckout }) {
  if (!cartOpen) return null;
  const hasItems = cartItems.length > 0;
  const hasQuoteItems = cartItems.some((c) => !c.showPrice);

  return (
    <>
      <div onClick={toggleCart} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.4)', zIndex: 60 }} />
      <div className="pv-slide" style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 380, maxWidth: '100vw', background: '#fff', zIndex: 61, boxShadow: '-8px 0 24px rgba(0,0,0,.15)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 20px', borderBottom: '1px solid #E7E1D8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Tu carrito</div>
          <div onClick={toggleCart} style={{ cursor: 'pointer', fontSize: 20 }}>✕</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
          {hasItems ? (
            cartItems.map((c) => (
              <div key={c.id} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid #F0EBE3' }}>
                <div style={{ width: 56, height: 56, borderRadius: 8, overflow: 'hidden', flex: '0 0 auto' }}>
                  <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{c.name}</div>
                  <div style={{ color: '#6B6459', fontSize: 12, marginBottom: 6 }}>{c.spec}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button onClick={c.dec} style={{ border: '1px solid #E7E1D8', background: 'none', borderRadius: 5, width: 22, height: 22, cursor: 'pointer' }}>−</button>
                    <span style={{ fontSize: 13 }}>{c.qty}</span>
                    <button onClick={c.inc} style={{ border: '1px solid #E7E1D8', background: 'none', borderRadius: 5, width: 22, height: 22, cursor: 'pointer' }}>+</button>
                    <span style={{ flex: 1 }} />
                    <span style={{ fontWeight: 700, fontSize: 13.5 }}>{c.lineTotalF}</span>
                  </div>
                </div>
                <div onClick={c.remove} style={{ cursor: 'pointer', color: '#9c9488' }}>✕</div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#9c9488', padding: '40px 0', fontSize: 14 }}>Tu carrito está vacío.</div>
          )}
        </div>
        <div style={{ padding: '18px 20px', borderTop: '1px solid #E7E1D8' }}>
          {hasQuoteItems && (
            <div style={{ fontSize: 12, color: '#E85A1F', marginBottom: 10 }}>Algunos productos requieren cotización y no se cobran online.</div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 16, marginBottom: 14 }}>
            <span>Subtotal</span><span>{cartSubtotalF}</span>
          </div>
          <button onClick={goCheckout} style={{ width: '100%', background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: 13, fontWeight: 700, cursor: 'pointer' }}>Ir a pagar / cotizar</button>
        </div>
      </div>
    </>
  );
}
