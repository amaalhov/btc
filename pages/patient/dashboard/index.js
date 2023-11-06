import React, { useState, useEffect } from "react";
// import MapWithPharmacies from "../../../app/components/patient/pharmacyMaps";
import MedicationStock from "../../../app/components/patient/medicationStock";
import MedicationReminders from "../../../app/components/patient/medicationReminders";
import PrescriptionHistory from "../../../app/components/patient/prescriptionHistory";
import HealthProfile from "../../../app/components/patient/healthProfile";
import dynamic from "next/dynamic";

const sampleStockList = [
  {
    medication: "Amoxicillin",
    pharmacyName: "HealthPlus Pharmacy",
    stockStatus: "In Stock",
  },
  {
    medication: "Ibuprofen",
    pharmacyName: "City Med Pharmacy",
    stockStatus: "Limited Stock",
  },
  {
    medication: "Metformin",
    pharmacyName: "Wellness Pharmacy",
    stockStatus: "Out of Stock",
  },
  {
    medication: "Lisinopril",
    pharmacyName: "CareOne Pharmacy",
    stockStatus: "In Stock",
  },
  {
    medication: "Amlodipine",
    pharmacyName: "Community RX",
    stockStatus: "In Stock",
  },
  // ... more items
];

const MapWithPharmaciesNoSSR = dynamic(
  () => import("../../../app/components/patient/pharmacyMaps"),
  { ssr: false }
);

const PatientDashboard = () => {
  const [healthProfile, setHealthProfile] = useState({});
  const [prescriptionHistory, setPrescriptionHistory] = useState([]);
  const [medicationReminders, setMedicationReminders] = useState([]);
  const [medicationStock, setMedicationStock] = useState([]);

  useEffect(() => {
    // Fetch and set health profile, prescription history, reminders, and medication stock.
  }, []);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <HealthProfile profile={healthProfile} />
      <PrescriptionHistory history={prescriptionHistory} />
      {/* <MedicationReminders reminders={medicationReminders} />
      <MedicationStock
        stockList={sampleStockList}
        conditions={healthProfile.conditions || []}
      /> */}
      <MapWithPharmaciesNoSSR />
    </div>
  );
};

export default PatientDashboard;
