import {
	Box,
	Button,
	FormControlLabel,
	IconButton,
	MenuItem,
	Select,
	Switch,
} from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

// store
import { useAtom } from "jotai";
import { darkModeAtom, langAtom } from "../store";

import { useTranslation } from "react-i18next";

export function Header() {
	const [darkMode, setDarkMode] = useAtom(darkModeAtom);
	const [lang, setLang] = useAtom(langAtom);
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

			{/* Dark Mode */}
			<div style={{ display: "flex", gap: "1rem" }}>
				<IconButton
					aria-label="Change Theme"
					onClick={() => setDarkMode(!darkMode)}
				>
					{darkMode ? <DarkModeRounded /> : <LightModeRounded />}
				</IconButton>

				<Select
					variant="standard"
					size="small"
					value={lang}
					onChange={(e) => setLang(e.target.value)}
				>
					<MenuItem value={"en"}>{t("English")}</MenuItem>
					<MenuItem value={"ku"}>{t("Kurdish")}</MenuItem>
				</Select>
			</div>
		</Box>
	);
}
