import { LogoDev, LogoDevRounded } from "@mui/icons-material";
import { Box, Icon, Link, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Footer() {
	const largeScreen = useMediaQuery(`(min-width:600px)`);
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: largeScreen ? "row" : "column",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Link href="https://github.com/ahmeddots/hawr" sx={{ cursor: "pointer" }}>
				{t("Open Source")}
			</Link>

			<Link href="https://ahmed.systems" sx={{ cursor: "pointer" }}>
				{t("By ahmed.systems")}
			</Link>
		</Box>
	);
}
