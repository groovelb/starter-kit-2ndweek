import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { TimelineProvider } from './hooks/useTimeline';
import { CartProvider } from './context/CartContext';
import { AppShell } from './components/navigation/AppShell';
import LandingPage from './pages/LandingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import { products } from './data/products';

/**
 * 제품 상세 페이지 래퍼
 * URL 파라미터에서 productId를 추출하여 해당 제품 데이터 전달
 */
function ProductDetailRoute() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId)) || products[0];

  // 샘플 메타 정보 (실제로는 API에서 가져올 수 있음)
  const meta = {
    itemNumber: `LM-${String(product.id).padStart(3, '0')}`,
    leadTime: '4 Weeks',
    shipDate: 'Jan 15, 2025',
  };

  return (
    <ProductDetailPage
      product={{ ...product, price: 1290 }}
      meta={meta}
    />
  );
}

/**
 * 메인 앱 레이아웃 (GNB 포함)
 *
 * 동작 방식:
 * 1. GNB의 Cart 아이콘 클릭 시 /checkout으로 이동
 */
function AppLayout() {
  const navigate = useNavigate();

  /**
   * Cart 클릭 → /checkout으로 이동
   */
  const handleCartClick = useCallback(() => {
    navigate('/checkout');
  }, [navigate]);

  return (
    <AppShell onCartClick={handleCartClick}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:productId" element={<ProductDetailRoute />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </AppShell>
  );
}

function App() {
  return (
    <CartProvider>
      <TimelineProvider initialTimeline={0}>
        <BrowserRouter>
          <Routes>
            {/* Checkout - 독립 레이아웃 (GNB 없음) */}
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* Main - AppShell 레이아웃 (GNB 포함) */}
            <Route path="/*" element={<AppLayout />} />
          </Routes>
        </BrowserRouter>
      </TimelineProvider>
    </CartProvider>
  );
}

export default App;
