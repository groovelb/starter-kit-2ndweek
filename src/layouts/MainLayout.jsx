import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { AppShell } from "../components/navigation/AppShell";
import { NavMenu } from "../components/navigation/NavMenu";

/**
 * MainLayout 컴포넌트
 *
 * AppShell과 NavMenu를 포함하는 공통 레이아웃.
 * React Router의 Outlet을 사용하여 하위 페이지를 렌더링한다.
 *
 * Props:
 * 없음 (라우터 컨텍스트에서 자동으로 동작)
 *
 * Example usage:
 * <Route element={<MainLayout />}>
 *   <Route index element={<DashboardPage />} />
 * </Route>
 */

/**
 * Navigation Items
 * 각 아이템에 id, label, icon, path를 정의
 */
const navItems = [
	{ id: "archive", label: "Archive", icon: <DashboardIcon />, path: "/" },
	{
		id: "moodboards",
		label: "Moodboards",
		icon: <PhotoLibraryIcon />,
		path: "/moodboards",
	},
];

/**
 * 현재 경로에서 activeId 추출
 */
const getActiveId = (pathname) => {
	const item = navItems.find((item) => item.path === pathname);
	return item?.id || "archive";
};

function MainLayout() {
	const navigate = useNavigate();
	const location = useLocation();
	const activeId = getActiveId(location.pathname);

	/**
	 * NavMenu 아이템 클릭 시 라우터 네비게이션 실행
	 */
	const handleNavItemClick = (item) => {
		navigate(item.path);
	};

	return (
		<AppShell
			logo={
				<Typography
					variant="h6"
					fontWeight={700}
					sx={{
						letterSpacing: "-0.5px",
						cursor: "pointer",
					}}
					onClick={() => navigate("/")}
				>
					MUSE.
				</Typography>
			}
			headerCollapsible={
				<NavMenu
					items={navItems}
					activeId={activeId}
					variant="underline"
					onItemClick={handleNavItemClick}
				/>
			}
		>
			<Container
				maxWidth="xl"
				sx={{
					px: { xs: 2, sm: 3, md: 4 },
					py: { xs: 4, md: 6 },
				}}
			>
				<Outlet />
			</Container>
		</AppShell>
	);
}

export default MainLayout;
