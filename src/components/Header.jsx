import { useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { Settings } from "./Settings";

import { useTranslation } from "react-i18next";
import { fetchLocations } from "../fetch";

// store
import { locationAtom } from "../store";
import { useAtom } from "jotai";
import { useQuery } from "react-query";

export function Header() {
	const { t } = useTranslation();

	// global location setting
	const [location, setLocation] = useAtom(locationAtom);
	// local location/place setting
	const [places] = useState(["Slemani", "Erbil"]);

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

			{/* Search */}
			<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
				<Autocomplete
					disableClearable
					options={places}
					value={location}
					onChange={(event, newValue) => setLocation(newValue)}
					renderInput={(props) => (
						<TextField sx={{ width: "7rem" }} variant="standard" {...props} />
					)}
				/>
			</div>

			{/* Settings */}
			<Settings></Settings>
		</Box>
	);
}
