import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  FileText, 
  Heart, 
  User, 
  Phone,
  Mail,
  MapPin,
  Pill,
  Activity
} from "lucide-react";

const PatientDashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-01-15",
      time: "10:00 AM",
      type: "Check-up",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology",
      date: "2024-01-18",
      time: "2:30 PM",
      type: "Consultation",
      status: "pending"
    }
  ];

  const recentPrescriptions = [
    {
      id: 1,
      medication: "Lisinopril 10mg",
      prescribedBy: "Dr. Sarah Johnson",
      date: "2024-01-10",
      instructions: "Take once daily with water"
    },
    {
      id: 2,
      medication: "Metformin 500mg",
      prescribedBy: "Dr. Sarah Johnson",
      date: "2024-01-10",
      instructions: "Take twice daily with meals"
    }
  ];

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "normal", icon: Heart },
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: Activity },
    { label: "Weight", value: "68 kg", status: "normal", icon: User },
    { label: "Temperature", value: "98.6°F", status: "normal", icon: Activity },
  ];

  return (
    <div className="responsive-container py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Patient Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John Doe</p>
      </div>

      <div className="responsive-grid mb-6 sm:mb-8">
        {/* Quick Actions */}
        <Card className="shadow-medium card-hover">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Book Appointment
            </CardTitle>
            <CardDescription>Schedule your next visit</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Book Now
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-medium card-hover">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-secondary" />
              Medical Records
            </CardTitle>
            <CardDescription>View your health history</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              View Records
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-medium card-hover">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Pill className="h-5 w-5 text-medical-info" />
              Prescriptions
            </CardTitle>
            <CardDescription>Digital prescription access</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-medical-info text-medical-info hover:bg-medical-info hover:text-white">
              View Prescriptions
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 sm:mb-8">
        {/* Upcoming Appointments */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <Badge 
                      variant={appointment.status === "confirmed" ? "default" : "secondary"}
                      className={appointment.status === "confirmed" ? "bg-medical-success" : ""}
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Health Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {healthMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="border border-border rounded-lg p-3 sm:p-4 text-center hover:bg-muted/30 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="font-semibold text-foreground text-lg">{metric.value}</p>
                    <Badge 
                      variant="secondary" 
                      className="mt-2 bg-medical-success/20 text-medical-success border-medical-success/30"
                    >
                      {metric.status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Prescriptions */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-medical-info" />
            Recent Prescriptions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPrescriptions.map((prescription) => (
              <div key={prescription.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{prescription.medication}</h4>
                    <p className="text-sm text-muted-foreground">Prescribed by {prescription.prescribedBy}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{prescription.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{prescription.instructions}</p>
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  View QR Code
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;