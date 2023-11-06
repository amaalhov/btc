import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const PrescriptionHistory = ({ history }) => {
  return (
    <Card raised sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Prescription History
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="prescription history table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Medication</TableCell>
                <TableCell>Dosage</TableCell>
                {/* More table headers if necessary */}
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.medication}</TableCell>
                  <TableCell>{row.dosage}</TableCell>
                  {/* More table cells if necessary */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default PrescriptionHistory;
