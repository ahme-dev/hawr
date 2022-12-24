import React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Weather } from "./components/Weather";
import { SearchBar } from "./components/Search";

export default function App() {
	return (
		<ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "3rem",
					padding: "1rem",
					minHeight: "100vh",
					"&>*": { width: "100%" },
				}}
			>
				<CssBaseline />

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<h2>Hawr</h2>
					<SearchBar></SearchBar>
				</Box>
				<Weather></Weather>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<p>Footer</p>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
