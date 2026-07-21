const inputStyle = { padding: 10, border: '1px solid #E7E1D8', borderRadius: 8 };

export default function Checkout({ orderConfirmed, confirmOrder, newOrder, cartItems, cartSubtotalF }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 70px' }}>
      <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, margin: '0 0 20px' }}>Checkout</h1>

      {orderConfirmed && (
        <div style={{ background: '#eaf5ec', border: '1px solid #1B6B3C', borderRadius: 12, padding: 28, textAlign: 'center' }}>
          <div style={{ fontSize: 34, marginBottom: 10 }}>✅</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¡Pedido de ejemplo confirmado!</div>
          <div style={{ color: '#3a342c', fontSize: 14.5, marginBottom: 18 }}>N° de pedido demostrativo <strong>#PV-8891</strong>.</div>
          <button onClick={newOrder} style={{ background: '#1B6B3C', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 20px', fontWeight: 700, cursor: 'pointer' }}>Volver al inicio</button>
        </div>
      )}

      {!orderConfirmed && (
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Resumen del pedido</div>
            {cartItems.map((c) => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '8px 0', borderBottom: '1px solid #E7E1D8' }}>
                <span>{c.name} × {c.qty}</span>
                <span>{c.lineTotalF}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, padding: '14px 0' }}>
              <span>Subtotal</span><span>{cartSubtotalF}</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Datos de entrega y pago</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <input placeholder="Nombre" style={inputStyle} />
              <input placeholder="RUT" style={inputStyle} />
              <input placeholder="Correo" style={inputStyle} />
              <input placeholder="Teléfono" style={inputStyle} />
              <input placeholder="Dirección" style={{ ...inputStyle, gridColumn: '1/3' }} />
              <input placeholder="Comuna" style={inputStyle} />
              <select style={inputStyle}><option>Boleta</option><option>Factura</option></select>
              <select style={inputStyle}><option>Retiro en tienda</option><option>Despacho a domicilio</option></select>
              <select style={inputStyle}><option>Webpay</option><option>Transferencia</option></select>
            </div>
            <button onClick={confirmOrder} style={{ marginTop: 16, width: '100%', background: '#E85A1F', color: '#fff', border: 'none', borderRadius: 8, padding: 13, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Confirmar pedido</button>
          </div>
        </div>
      )}
    </div>
  );
}
