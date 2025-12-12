import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { TimelineProvider } from './hooks/useTimeline';
import { CartProvider } from './context/CartContext';
import { AppShell } from './components/navigation/AppShell';
import LandingPage from './pages/LandingPage';
import ProductDetailPage from './pages/ProductDetailPage';
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
 * 메인 앱 레이아웃
 */
function AppLayout() {
  return (
    <AppShell>
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
          <AppLayout />
        </BrowserRouter>
      </TimelineProvider>
    </CartProvider>
  );
}

export default App;
