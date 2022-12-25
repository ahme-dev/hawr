import { Box } from "@mui/material";

import { useTranslation } from "react-i18next";
import { Settings } from "./Settings";

export function Header() {
	const { t, i18n } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			{/* Title */}
			<h2>{t("Hawr")}</h2>

			{/* Settings */}
			<Settings></Settings>
		</Box>
	);
}
