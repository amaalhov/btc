import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AccessTimeIcon,
} from "@mui/material";

const MedicationReminders = ({ reminders }) => {
  return (
    <Card raised sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Medication Reminders
        </Typography>
        <List>
          {reminders.map((reminder, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText
                primary={reminder.medication}
                secondary={`Time: ${reminder.time}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default MedicationReminders;
