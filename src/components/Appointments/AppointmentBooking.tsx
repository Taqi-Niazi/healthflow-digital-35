import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Stethoscope, MapPin, Phone, Star } from "lucide-react";

const AppointmentBooking = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.9,
      experience: "15 years",
      image: "/placeholder.svg",
      availableSlots: ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM"],
      location: "Heart Center, 2nd Floor"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      rating: 4.8,
      experience: "12 years",
      image: "/placeholder.svg",
      availableSlots: ["9:30 AM", "11:00 AM", "1:30 PM", "4:00 PM"],
      location: "Skin Care Clinic, 3rd Floor"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      rating: 4.9,
      experience: "10 years",
      image: "/placeholder.svg",
      availableSlots: ["8:00 AM", "10:00 AM", "2:30 PM", "4:30 PM"],
      location: "Children's Wing, 1st Floor"
    }
  ];

  const appointmentTypes = [
    { value: "consultation", label: "General Consultation", duration: "30 mins" },
    { value: "checkup", label: "Regular Check-up", duration: "45 mins" },
    { value: "followup", label: "Follow-up Visit", duration: "20 mins" },
    { value: "emergency", label: "Emergency Consultation", duration: "60 mins" }
  ];

  const selectedDoctorData = doctors.find(doc => doc.id.toString() === selectedDoctor);

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment booking logic here
    console.log("Booking appointment...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Book Appointment</h1>
        <p className="text-muted-foreground">Schedule your appointment with our healthcare professionals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Doctor Selection */}
        <div className="lg:col-span-2">
          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary" />
                Select Doctor
              </CardTitle>
              <CardDescription>Choose from our available healthcare professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      selectedDoctor === doctor.id.toString()
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedDoctor(doctor.id.toString())}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {doctor.experience}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {doctor.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appointment Details */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                Appointment Details
              </CardTitle>
              <CardDescription>Fill in your appointment information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookAppointment} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointmentType">Appointment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center justify-between w-full">
                              <span>{type.label}</span>
                              <Badge variant="secondary" className="ml-2">
                                {type.duration}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDoctorData && selectedDate && (
                  <div className="space-y-2">
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {selectedDoctorData.availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                            selectedTime === slot
                              ? "border-primary bg-primary text-white"
                              : "border-border hover:border-primary hover:bg-primary/10"
                          }`}
                        >
                          <Clock className="h-4 w-4 mx-auto mb-1" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea
                    id="reason"
                    placeholder="Please describe your symptoms or reason for the appointment"
                    className="min-h-20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="contactPhone"
                      type="tel"
                      placeholder="Your phone number"
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={!selectedDoctor || !selectedDate || !selectedTime}
                >
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary */}
        <div>
          <Card className="shadow-medium sticky top-4">
            <CardHeader>
              <CardTitle className="text-lg">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDoctorData ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{selectedDoctorData.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedDoctorData.specialty}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {selectedDate || "Not selected"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">
                        {selectedTime || "Not selected"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-medical-info" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium text-xs">
                        {selectedDoctorData.location}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Consultation Fee:</span>
                      <span className="font-semibold">$150</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Booking Fee:</span>
                      <span className="font-semibold">$10</span>
                    </div>
                    <div className="border-t mt-2 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-lg text-primary">$160</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Stethoscope className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Select a doctor to see booking summary</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;