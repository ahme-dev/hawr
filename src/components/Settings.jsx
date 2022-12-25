import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
	Button,
	Drawer,
	Box,
	IconButton,
	MenuItem,
	Select,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemButton,
	Divider,
	ListSubheader,
	ListItemText,
	ListItemIcon,
} from "@mui/material";

import {
	CloseRounded,
	DarkModeRounded,
	InvertColorsRounded,
	LanguageRounded,
	LightModeRounded,
	MenuRounded,
} from "@mui/icons-material";

// translation
import { useTranslation } from "react-i18next";

// store
import { useAtom } from "jotai";
import { darkModeAtom, langAtom } from "../store";
import { useState } from "react";

export function Settings() {
	const { t, i18n } = useTranslation();
	const [darkMode, setDarkMode] = useAtom(darkModeAtom);
	const [lang, setLang] = useAtom(langAtom);

	const largeScreen = useMediaQuery(`(min-width:600px)`);

	// drawer
	const [open, setOpen] = useState(false);

	const options = <></>;

	// large screens
	if (largeScreen)
		return (
			<div style={{ display: "flex", gap: "0.5rem" }}>
				<IconButton onClick={() => setDarkMode(!darkMode)}>
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
		);

	// small screens
	return (
		<>
			<IconButton onClick={() => setOpen(true)}>
				<MenuRounded />
			</IconButton>

			<SwipeableDrawer
				anchor="left"
				onOpen={() => setOpen(true)}
				open={open}
				onClose={() => setOpen(false)}
			>
				<List
					sx={{
						width: "85vw",
					}}
				>
					<ListItemButton>
						<ListItemText
							primary={t("Menu")}
							primaryTypographyProps={{
								fontSize: 20,
								fontWeight: "medium",
								letterSpacing: 0,
							}}
						/>
						<IconButton onClick={() => setOpen(false)}>
							<CloseRounded></CloseRounded>
						</IconButton>
					</ListItemButton>

					<Divider></Divider>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InvertColorsRounded></InvertColorsRounded>
							</ListItemIcon>
							<ListItemText>Theme</ListItemText>
							<IconButton onClick={() => setDarkMode(!darkMode)}>
								{darkMode ? <DarkModeRounded /> : <LightModeRounded />}
							</IconButton>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<LanguageRounded></LanguageRounded>
							</ListItemIcon>
							<ListItemText>Language</ListItemText>
							<Select
								variant="standard"
								size="small"
								value={lang}
								onChange={(e) => setLang(e.target.value)}
							>
								<MenuItem value={"en"}>{t("English")}</MenuItem>
								<MenuItem value={"ku"}>{t("Kurdish")}</MenuItem>
							</Select>
						</ListItemButton>
					</ListItem>
				</List>
			</SwipeableDrawer>
		</>
	);
}
