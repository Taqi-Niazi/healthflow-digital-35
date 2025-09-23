import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Pill, 
  QrCode, 
  Download, 
  Search, 
  Calendar,
  User,
  Clock,
  AlertCircle,
  CheckCircle,
  Filter
} from "lucide-react";

const PrescriptionViewer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const prescriptions = [
    {
      id: 1,
      prescriptionId: "RX-2024-001",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-01-15",
      status: "active",
      medications: [
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "Once daily",
          duration: "30 days",
          instructions: "Take with water in the morning",
          refillsLeft: 3
        },
        {
          name: "Metoprolol",
          dosage: "25mg",
          frequency: "Twice daily",
          duration: "30 days",
          instructions: "Take with or without food",
          refillsLeft: 2
        }
      ],
      diagnosis: "Hypertension",
      notes: "Monitor blood pressure regularly. Return in 4 weeks for follow-up.",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHRleHQgeD0iMTAwIiB5PSIxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      id: 2,
      prescriptionId: "RX-2024-002",
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology",
      date: "2024-01-12",
      status: "completed",
      medications: [
        {
          name: "Tretinoin Cream",
          dosage: "0.025%",
          frequency: "Once daily at night",
          duration: "60 days",
          instructions: "Apply thin layer to affected area. Use sunscreen during day.",
          refillsLeft: 0
        }
      ],
      diagnosis: "Acne Vulgaris",
      notes: "Improvement expected in 6-8 weeks. Schedule follow-up if no improvement.",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHRleHQgeD0iMTAwIiB5PSIxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      id: 3,
      prescriptionId: "RX-2024-003",
      doctor: "Dr. Emily Rodriguez",
      specialty: "Internal Medicine",
      date: "2024-01-18",
      status: "pending",
      medications: [
        {
          name: "Amoxicillin",
          dosage: "500mg",
          frequency: "Three times daily",
          duration: "10 days",
          instructions: "Take with food. Complete full course even if feeling better.",
          refillsLeft: 0
        },
        {
          name: "Ibuprofen",
          dosage: "400mg",
          frequency: "As needed",
          duration: "7 days",
          instructions: "For pain relief. Do not exceed 3 tablets per day.",
          refillsLeft: 1
        }
      ],
      diagnosis: "Upper Respiratory Infection",
      notes: "Return if symptoms worsen or persist after 7 days.",
      qrCode: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHRleHQgeD0iMTAwIiB5PSIxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4="
    }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.prescriptionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.medications.some(med => med.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-medical-success text-white";
      case "completed":
        return "bg-muted text-muted-foreground";
      case "pending":
        return "bg-medical-warning text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return CheckCircle;
      case "pending":
        return Clock;
      case "completed":
        return CheckCircle;
      default:
        return AlertCircle;
    }
  };

  const selectedPrescriptionData = prescriptions.find(p => p.id === selectedPrescription);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Digital Prescriptions</h1>
        <p className="text-muted-foreground">Access and manage your digital prescriptions with QR codes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prescription List */}
        <div className="lg:col-span-2">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" />
                Your Prescriptions
              </CardTitle>
              <CardDescription>View and manage your digital prescriptions</CardDescription>
              
              {/* Search and Filter */}
              <div className="flex gap-4 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search prescriptions, doctors, or medications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredPrescriptions.map((prescription) => {
                  const StatusIcon = getStatusIcon(prescription.status);
                  return (
                    <div
                      key={prescription.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        selectedPrescription === prescription.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedPrescription(prescription.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{prescription.prescriptionId}</h3>
                          <p className="text-sm text-muted-foreground">
                            {prescription.doctor} • {prescription.specialty}
                          </p>
                        </div>
                        <Badge className={getStatusColor(prescription.status)}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {prescription.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {prescription.date}
                        </span>
                        <span>{prescription.diagnosis}</span>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">Medications:</p>
                        {prescription.medications.map((med, index) => (
                          <div key={index} className="text-sm text-muted-foreground">
                            • {med.name} {med.dosage} - {med.frequency}
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          <QrCode className="h-4 w-4 mr-1" />
                          QR Code
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Prescription Details */}
        <div>
          <Card className="shadow-medium sticky top-4">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <QrCode className="h-5 w-5 text-secondary" />
                Prescription Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedPrescriptionData ? (
                <div className="space-y-6">
                  {/* QR Code */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center mb-3">
                      <QrCode className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scan to access prescription at pharmacy
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      <Download className="h-4 w-4 mr-1" />
                      Download QR
                    </Button>
                  </div>

                  {/* Prescription Info */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Prescription ID</h4>
                      <p className="text-sm font-mono bg-muted p-2 rounded">
                        {selectedPrescriptionData.prescriptionId}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Prescribed by</h4>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">{selectedPrescriptionData.doctor}</p>
                          <p className="text-xs text-muted-foreground">{selectedPrescriptionData.specialty}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Medications</h4>
                      <div className="space-y-3">
                        {selectedPrescriptionData.medications.map((med, index) => (
                          <div key={index} className="border border-border rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-foreground">{med.name}</h5>
                              <Badge variant="secondary" className="text-xs">
                                {med.refillsLeft} refills left
                              </Badge>
                            </div>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p><span className="font-medium">Dosage:</span> {med.dosage}</p>
                              <p><span className="font-medium">Frequency:</span> {med.frequency}</p>
                              <p><span className="font-medium">Duration:</span> {med.duration}</p>
                              <p><span className="font-medium">Instructions:</span> {med.instructions}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Doctor's Notes</h4>
                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                        {selectedPrescriptionData.notes}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Download className="h-4 w-4 mr-2" />
                      Download Prescription
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share with Pharmacy
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Pill className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Select a prescription to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionViewer;