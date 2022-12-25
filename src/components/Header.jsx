import { Box, MenuItem, Select, Switch } from "@mui/material";

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
			<h2>Hawr</h2>

			{/* Dark Mode */}
			<Switch checked={darkMode} onClick={() => setDarkMode(!darkMode)} />

			{/* Language */}
			<Select
				value={lang}
				onChange={(e) => {
					console.log("tarVal:" + e.target.value);
					setLang(e.target.value);
					i18n.changeLanguage(e.target.value);
				}}
			>
				<MenuItem value={"en"}>{t("English")}</MenuItem>
				<MenuItem value={"ku"}>{t("Kurdish")}</MenuItem>
			</Select>
		</Box>
	);
}
