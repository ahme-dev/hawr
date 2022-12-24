import React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Weather } from "./components/Weather";
import { Search } from "./components/Search";

import { QueryClient, QueryClientProvider } from "react-query";

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
					<CssBaseline />

					{/* Header */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<h2>Hawr</h2>
						<Search></Search>
					</Box>

					{/* Main */}
					<Weather></Weather>

					{/* Footer */}
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<p>Footer</p>
					</Box>
				</Container>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
