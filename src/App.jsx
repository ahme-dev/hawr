import React from "react";
import { Container, Box, CssBaseline, Snackbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Weather } from "./components/Weather";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// store
import { useAtom } from "jotai";
import { darkModeAtom, langAtom } from "./store";

// query
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
	const [darkMode] = useAtom(darkModeAtom);
	const [lang] = useAtom(langAtom);

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
