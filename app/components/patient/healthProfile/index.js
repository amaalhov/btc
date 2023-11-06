import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// Sample data for the health profile
const sampleHealthProfile = {
  allergies: ["Penicillin", "Aspirin", "Peanuts", "Shellfish", "Latex"],
  currentMeds: [
    "Atorvastatin 10mg daily",
    "Lisinopril 20mg daily",
    "Albuterol inhaler as needed",
  ],
  conditions: ["Hypertension", "Type 2 Diabetes Mellitus", "Chronic Asthma"],
  medicalHistory: ["Gallbladder removal - 2015", "Appendectomy - 2007"],
  familyHistory: [
    "Father - Heart Disease",
    "Mother - Breast Cancer",
    "Sibling - Celiac Disease",
  ],
  lifestyle: {
    smokingStatus: "Former smoker",
    alcoholIntake: "Occasional, socially",
    exerciseFrequency: "3 times a week",
    dietPreferences: "Vegetarian, low-sodium diet",
  },
};

const HealthProfile = ({ profile = sampleHealthProfile }) => {
  const joinArraySafely = (array, separator = ", ") => {
    if (Array.isArray(array) && array.length) {
      return array.join(separator);
    }
    return "Not available"; // or any other default message you prefer
  };

  const getLifestyleInfo = (lifestyle) => {
    if (lifestyle && typeof lifestyle === "object") {
      const {
        smokingStatus = "Not specified",
        alcoholIntake = "Not specified",
        exerciseFrequency = "Not specified",
        dietPreferences = "Not specified",
      } = lifestyle;
      return `Smoking: ${smokingStatus}, Alcohol: ${alcoholIntake}, Exercise: ${exerciseFrequency}, Diet: ${dietPreferences}`;
    }
    return "Lifestyle information not available";
  };
  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Health Profile
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Allergies"
              secondary={joinArraySafely(profile.allergies)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Current Medications"
              secondary={joinArraySafely(profile.currentMeds)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Conditions"
              secondary={joinArraySafely(profile.conditions)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Medical History"
              secondary={joinArraySafely(profile.medicalHistory)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Family History"
              secondary={joinArraySafely(profile.familyHistory)}
            />
          </ListItem>
          {/* <ListItem>
            <ListItemText
              primary="Lifestyle"
              secondary={`Smoking: ${profile.lifestyle.smokingStatus}, Alcohol: ${profile.lifestyle.alcoholIntake}, Exercise: ${profile.lifestyle.exerciseFrequency}, Diet: ${profile.lifestyle.dietPreferences}`}
            />
          </ListItem> */}
          <ListItem>
            <ListItemText
              primary="Lifestyle"
              secondary={`Smoking: ${
                profile?.lifestyle?.smokingStatus || "Not specified"
              }, 
               Alcohol: ${
                 profile?.lifestyle?.alcoholIntake || "Not specified"
               }, 
               Exercise: ${
                 profile?.lifestyle?.exerciseFrequency || "Not specified"
               }, 
               Diet: ${profile?.lifestyle?.dietPreferences || "Not specified"}`}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default HealthProfile;
