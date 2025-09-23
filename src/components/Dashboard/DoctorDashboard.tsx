import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Users, 
  FileText, 
  Pill, 
  Clock,
  Search,
  Plus,
  Activity,
  Phone,
  Mail,
  User
} from "lucide-react";

const DoctorDashboard = () => {
  const todayAppointments = [
    {
      id: 1,
      patient: "John Doe",
      time: "9:00 AM",
      type: "Check-up",
      status: "confirmed",
      age: 45,
      condition: "Hypertension"
    },
    {
      id: 2,
      patient: "Sarah Wilson",
      time: "10:30 AM",
      type: "Follow-up",
      status: "in-progress",
      age: 32,
      condition: "Diabetes"
    },
    {
      id: 3,
      patient: "Mike Johnson",
      time: "2:00 PM",
      type: "Consultation",
      status: "upcoming",
      age: 28,
      condition: "Allergies"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Emily Davis",
      lastVisit: "2024-01-12",
      condition: "Migraine",
      status: "stable"
    },
    {
      id: 2,
      name: "Robert Brown",
      lastVisit: "2024-01-11",
      condition: "Arthritis",
      status: "improving"
    },
    {
      id: 3,
      name: "Lisa Garcia",
      lastVisit: "2024-01-10",
      condition: "Asthma",
      status: "monitoring"
    }
  ];

  const dashboardStats = [
    {
      label: "Today's Appointments",
      value: "12",
      change: "+2 from yesterday",
      icon: Calendar,
      color: "text-primary"
    },
    {
      label: "Total Patients",
      value: "248",
      change: "+15 this month",
      icon: Users,
      color: "text-secondary"
    },
    {
      label: "Prescriptions",
      value: "34",
      change: "+8 this week",
      icon: Pill,
      color: "text-medical-info"
    },
    {
      label: "Pending Reviews",
      value: "6",
      change: "-2 from yesterday",
      icon: FileText,
      color: "text-medical-warning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-medical-success text-white";
      case "in-progress":
        return "bg-medical-warning text-white";
      case "upcoming":
        return "bg-medical-info text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPatientStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-medical-success/20 text-medical-success border-medical-success/30";
      case "improving":
        return "bg-primary/20 text-primary border-primary/30";
      case "monitoring":
        return "bg-medical-warning/20 text-medical-warning border-medical-warning/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Dr. Sarah Johnson</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-12">
          <Plus className="h-4 w-4 mr-2" />
          New Prescription
        </Button>
        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground h-12">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Appointment
        </Button>
        <Button variant="outline" className="border-medical-info text-medical-info hover:bg-medical-info hover:text-white h-12">
          <FileText className="h-4 w-4 mr-2" />
          Medical Records
        </Button>
        <Button variant="outline" className="border-medical-success text-medical-success hover:bg-medical-success hover:text-white h-12">
          <Activity className="h-4 w-4 mr-2" />
          Patient Analytics
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Today's Appointments */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Appointments
            </CardTitle>
            <CardDescription>Your scheduled appointments for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{appointment.patient}</h4>
                      <p className="text-sm text-muted-foreground">{appointment.condition} • Age {appointment.age}</p>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {appointment.time}
                      </span>
                      <span>{appointment.type}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" className="bg-primary">
                        Start
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Patients */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              Recent Patients
            </CardTitle>
            <CardDescription>Recently treated patients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search patients..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{patient.name}</h4>
                      <p className="text-sm text-muted-foreground">{patient.condition}</p>
                    </div>
                    <Badge variant="secondary" className={getPatientStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Last visit: {patient.lastVisit}
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Records
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Patient Search */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-medical-info" />
            Patient Quick Search
          </CardTitle>
          <CardDescription>Quickly find and access patient information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, ID, or condition..."
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-to-r from-medical-info to-secondary hover:opacity-90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;