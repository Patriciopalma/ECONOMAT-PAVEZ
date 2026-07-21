import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Home from './pages/Home.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Categoria from './pages/Categoria.jsx';
import Producto from './pages/Producto.jsx';
import Cotizacion from './pages/Cotizacion.jsx';
import Dimensionado from './pages/Dimensionado.jsx';
import Empresas from './pages/Empresas.jsx';
import DatoExperto from './pages/DatoExperto.jsx';
import Contacto from './pages/Contacto.jsx';
import Checkout from './pages/Checkout.jsx';
import { PRODUCTS, HOME_TABS, formatCLP } from './data.js';
import { maderaTextura, bodegaHero } from './assets.js';

const WHATSAPP_NUMBER = '+56 9 1234 5678';
const FEATURED_COUNT = 5;

export default function App() {
  const [view, setView] = useState('home');
  const [activeFamily, setActiveFamily] = useState('maderas');
  const [catalogFilter, setCatalogFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('terciado');
  const [productQty, setProductQty] = useState(1);
  const [productTab, setProductTab] = useState('descripcion');
  const [homeTab, setHomeTab] = useState('destacados');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [qtyMap, setQtyMap] = useState({});
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [dimSubmitted, setDimSubmitted] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [empresaSubmitted, setEmpresaSubmitted] = useState(false);

  const waDigits = WHATSAPP_NUMBER.replace(/\D/g, '') || '56912345678';
  const waLink = 'https://wa.me/' + waDigits;

  const goTo = (nextView, extra) => {
    if (nextView === 'categoria' && extra) setActiveFamily(extra);
    if (nextView === 'producto' && extra) {
      setSelectedProduct(extra);
      setProductQty(1);
      setProductTab('descripcion');
    }
    setView(nextView);
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  };

  const goHome = () => goTo('home');
  const goCatalogo = () => goTo('catalogo');
  const goCategoria = (family) => goTo('categoria', family);
  const goProducto = (id) => goTo('producto', id);
  const goOfertas = () => { setCatalogFilter('all'); setView('catalogo'); };
  const goDimensionado = () => goTo('dimensionado');
  const goEmpresas = () => goTo('empresas');
  const goDatoExperto = () => goTo('datoexperto');
  const goContacto = () => goTo('contacto');
  const goCotizacion = () => goTo('cotizacion');
  const goCuenta = () => goTo('contacto');
  const goCheckout = () => { setView('checkout'); setCartOpen(false); };

  const getQty = (id) => qtyMap[id] || 1;
  const incQty = (id) => setQtyMap((m) => ({ ...m, [id]: getQty(id) + 1 }));
  const decQty = (id) => setQtyMap((m) => ({ ...m, [id]: Math.max(1, getQty(id) - 1) }));

  const addToCart = (id, qty) => {
    const q = qty || getQty(id);
    setCart((prev) => {
      const next = [...prev];
      const idx = next.findIndex((c) => c.id === id);
      if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + q };
      else next.push({ id, qty: q });
      return next;
    });
    setCartOpen(true);
  };
  const toggleCart = () => setCartOpen((o) => !o);
  const removeFromCart = (id) => setCart((prev) => prev.filter((c) => c.id !== id));
  const cartInc = (id) => setCart((prev) => prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
  const cartDec = (id) => setCart((prev) => prev.map((c) => (c.id === id ? { ...c, qty: Math.max(1, c.qty - 1) } : c)));

  const decorate = (p) => {
    if (!p) return null;
    const price = p.price;
    return {
      ...p,
      priceF: price != null ? formatCLP(price) : '',
      unitLabel: p.unit ? p.unit.replace('/', 'Por ') : 'A confirmar',
      dimLabel: p.dimensionado ? 'Sí' : 'No',
      showPrice: price != null,
      isCompra: p.mode === 'compra',
      isCotizar: p.mode === 'cotizar',
      isConsultar: p.mode === 'consultar',
      hasBadge: !!p.badge,
      badgeLabel: p.badge === 'destacado' ? 'Destacado' : p.badge === 'mas-vendido' ? 'Más vendido' : p.badge === 'oferta' ? 'Oferta' : '',
      qty: getQty(p.id),
      gallery: [p.image, maderaTextura, bodegaHero],
      inc: () => incQty(p.id),
      dec: () => decQty(p.id),
      add: () => addToCart(p.id),
      open: () => goProducto(p.id),
    };
  };

  const submitQuote = () => setQuoteSubmitted(true);
  const newQuote = () => setQuoteSubmitted(false);
  const submitDim = () => setDimSubmitted(true);
  const newDim = () => setDimSubmitted(false);
  const confirmOrder = () => setOrderConfirmed(true);
  const newOrder = () => { setOrderConfirmed(false); setCart([]); goHome(); };
  const submitEmpresa = () => setEmpresaSubmitted(true);

  const homeProducts = useMemo(
    () => (HOME_TABS[homeTab] || HOME_TABS.destacados).map((id) => decorate(PRODUCTS.find((p) => p.id === id))).slice(0, FEATURED_COUNT),
    [homeTab, qtyMap]
  );

  const sel = useMemo(() => decorate(PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0]), [selectedProduct, qtyMap]);

  const cartItems = useMemo(
    () =>
      cart.map((c) => {
        const p = decorate(PRODUCTS.find((x) => x.id === c.id));
        const lineTotal = p.price != null ? p.price * c.qty : null;
        return {
          ...p,
          qty: c.qty,
          lineTotalF: lineTotal != null ? formatCLP(lineTotal) : 'Cotizar',
          lineTotal: lineTotal || 0,
          remove: () => removeFromCart(c.id),
          inc: () => cartInc(c.id),
          dec: () => cartDec(c.id),
        };
      }),
    [cart, qtyMap]
  );
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);
  const cartSubtotal = cartItems.reduce((sum, c) => sum + c.lineTotal, 0);
  const cartSubtotalF = formatCLP(cartSubtotal);

  return (
    <div style={{ fontFamily: "'Work Sans',sans-serif", color: '#241F1A', background: '#FBF8F4', minHeight: '100vh' }}>
      <Header
        whatsappDisplay={WHATSAPP_NUMBER}
        goHome={goHome}
        goCuenta={goCuenta}
        goCategoria={goCategoria}
        goOfertas={goOfertas}
        goDimensionado={goDimensionado}
        goEmpresas={goEmpresas}
        goDatoExperto={goDatoExperto}
        goContacto={goContacto}
        goCotizacion={goCotizacion}
        toggleCart={toggleCart}
        cartCount={cartCount}
        cartSubtotalF={cartSubtotalF}
      />

      {view === 'home' && (
        <Home
          goCatalogo={goCatalogo}
          goCotizacion={goCotizacion}
          goCategoria={goCategoria}
          goDatoExperto={goDatoExperto}
          homeTab={homeTab}
          setHomeTab={setHomeTab}
          homeProducts={homeProducts}
          waLink={waLink}
        />
      )}
      {view === 'catalogo' && (
        <Catalogo goHome={goHome} catalogFilter={catalogFilter} setCatalogFilter={setCatalogFilter} decorate={decorate} />
      )}
      {view === 'categoria' && (
        <Categoria goHome={goHome} goCatalogo={goCatalogo} activeFamily={activeFamily} decorate={decorate} />
      )}
      {view === 'producto' && sel && (
        <Producto
          goHome={goHome}
          goCatalogo={goCatalogo}
          goDimensionado={goDimensionado}
          goCotizacion={goCotizacion}
          sel={sel}
          productQty={productQty}
          selInc={() => setProductQty((q) => q + 1)}
          selDec={() => setProductQty((q) => Math.max(1, q - 1))}
          selAdd={() => addToCart(sel.id, productQty)}
          waLink={waLink}
          productTab={productTab}
          setProductTab={setProductTab}
          decorate={decorate}
        />
      )}
      {view === 'cotizacion' && (
        <Cotizacion quoteSubmitted={quoteSubmitted} submitQuote={submitQuote} newQuote={newQuote} />
      )}
      {view === 'dimensionado' && (
        <Dimensionado dimSubmitted={dimSubmitted} submitDim={submitDim} newDim={newDim} />
      )}
      {view === 'empresas' && (
        <Empresas empresaSubmitted={empresaSubmitted} submitEmpresa={submitEmpresa} />
      )}
      {view === 'datoexperto' && <DatoExperto />}
      {view === 'contacto' && <Contacto whatsappDisplay={WHATSAPP_NUMBER} waLink={waLink} />}
      {view === 'checkout' && (
        <Checkout
          orderConfirmed={orderConfirmed}
          confirmOrder={confirmOrder}
          newOrder={newOrder}
          cartItems={cartItems}
          cartSubtotalF={cartSubtotalF}
        />
      )}

      <Footer
        whatsappDisplay={WHATSAPP_NUMBER}
        goCategoria={goCategoria}
        goDimensionado={goDimensionado}
        goCotizacion={goCotizacion}
        goEmpresas={goEmpresas}
        goDatoExperto={goDatoExperto}
      />

      <CartDrawer cartOpen={cartOpen} toggleCart={toggleCart} cartItems={cartItems} cartSubtotalF={cartSubtotalF} goCheckout={goCheckout} />

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        style={{ position: 'fixed', bottom: 24, right: 24, background: '#1B6B3C', color: '#fff', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, boxShadow: '0 8px 20px rgba(0,0,0,.25)', zIndex: 55 }}
      >
        💬
      </a>
    </div>
  );
}
