import React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Weather } from "./components/Weather";

import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
				<Container
					sx={{
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
