import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Paper, Typography, Box, useTheme, Zoom } from "@mui/material";

const MapWithPharmacies = () => {
  const theme = useTheme();
  const pharmacies = [
    { name: "Pharmacy A", coordinates: [-24.628208, 25.923147] },
    // ... more pharmacies
  ];
  const cityCoordinates = [-24.628208, 25.923147]; // Coordinates for Gaborone

  return (
    <Zoom in style={{ transitionDelay: "500ms" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Pharmacies in Gaborone
        </Typography>
        <Paper
          elevation={3}
          sx={{
            height: 400,
            width: "100%",
            maxWidth: theme.breakpoints.values.lg,
          }}
        >
          <MapContainer
            center={cityCoordinates}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {pharmacies.map((pharmacy, index) => (
              <Marker key={index} position={pharmacy.coordinates}>
                <Popup>{pharmacy.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Paper>
      </Box>
    </Zoom>
  );
};

export default MapWithPharmacies;
