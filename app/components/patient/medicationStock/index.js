import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const MedicationStock = ({ stockList }) => {
  return (
    <Card raised sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Pharmacy Stock
        </Typography>
        <Grid container spacing={2}>
          {stockList.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="body1">{item.medication}</Typography>
              <Typography variant="body2">{item.pharmacyName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.stockStatus}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MedicationStock;
