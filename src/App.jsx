import React from "react";
import { Container, Box, CssBaseline, Snackbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Weather } from "./components/Weather";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// translation
import { useTranslation } from "react-i18next";

// store
import { useAtom } from "jotai";
import { darkModeAtom, langAtom } from "./store";

// query
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
const queryClient = new QueryClient();

export default function App() {
	const [darkMode] = useAtom(darkModeAtom);
	const [lang] = useAtom(langAtom);
	const { i18n } = useTranslation();

	// call lang change on startup and atom change
	useEffect(() => {
		i18n.changeLanguage(lang);
	}, [lang]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				theme={createTheme({ palette: { mode: darkMode ? "dark" : "light" } })}
			>
				<Container
					sx={{
						direction: lang === "en" ? "ltr" : "rtl",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						gap: "3rem",
						padding: "1rem",
						minHeight: "100vh",
						"&>*": { width: "100%" },
					}}
				>
					{/* CSS Reset */}
					<CssBaseline />

					{/* Content */}
					<Header></Header>
					<Weather></Weather>
					<Footer></Footer>
				</Container>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
