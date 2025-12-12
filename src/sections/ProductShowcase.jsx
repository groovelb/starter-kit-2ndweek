import { forwardRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SectionContainer } from "../components/container/SectionContainer";
import { ProductGallery } from "../templates/ProductGallery";
import { TimelineSlider } from "../components/shared/TimelineSlider";
import { useTimeline } from "../hooks/useTimeline";
import { products } from "../data/products";
import { content } from "../data/content";

/**
 * ProductShowcase 섹션 컴포넌트
 *
 * TimelineSlider와 ProductGallery(필터 + 그리드)를 연동한 제품 쇼케이스 섹션.
 * 전역 TimelineContext를 사용하여 시간대별 제품 이미지 전환.
 *
 * 동작 방식:
 * 1. TimelineSlider로 시간대 조절 (12pm, 4pm, 8pm, 12am)
 * 2. ProductGallery에서 제품 타입별 필터링
 * 3. 선택된 시간대에 따라 모든 ProductCard 이미지 동기화
 * 4. timeline >= 0.5 시 다크 모드 자동 전환
 *
 * Props:
 * @param {number} columns - 그리드 열 수 [Optional, 기본값: 4]
 * @param {function} onProductClick - 제품 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimelineProvider>
 *   <ProductShowcase columns={4} />
 * </TimelineProvider>
 */
const ProductShowcase = forwardRef(function ProductShowcase(
	{ columns = 4, onProductClick, sx, ...props },
	ref
) {
	const navigate = useNavigate();
	const { timeline } = useTimeline();
	const { sectionTitle, sectionSubtitle } = content.products;

	/**
	 * 제품 클릭 핸들러
	 * 제품 상세 페이지로 라우팅
	 */
	const handleProductClick = useCallback(
		(product) => {
			if (onProductClick) {
				onProductClick(product);
			}
			navigate(`/product/${product.id}`);
		},
		[navigate, onProductClick]
	);

	return (
		<SectionContainer ref={ref} sx={sx} {...props}>
			{/* 헤더 영역 */}
			<Box sx={{ textAlign: "center" }}>
				<Typography
					variant="h4"
					sx={{
						fontWeight: 700,
						mb: 1,
						color: "text.primary",
						transition: "color 600ms ease",
					}}
				>
					{sectionTitle}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "text.secondary",
						transition: "color 600ms ease",
					}}
				>
					{sectionSubtitle}
				</Typography>
			</Box>

			{/* TimelineSlider */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box sx={{ width: 600, maxWidth: "100%" }}>
					<TimelineSlider />
				</Box>
			</Box>

			{/* ProductGallery (필터 + 그리드) */}
			<ProductGallery
				products={products}
				timeline={timeline}
				columns={columns}
				onProductClick={handleProductClick}
			/>
		</SectionContainer>
	);
});

export { ProductShowcase };
export default ProductShowcase;
