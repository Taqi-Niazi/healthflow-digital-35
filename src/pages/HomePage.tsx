import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Layout/Header";
import { 
  Calendar, 
  Shield, 
  Clock, 
  Heart, 
  Users, 
  FileText,
  Smartphone,
  Mail,
  Bell,
  QrCode
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/healthcare-hero.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Online Appointment Booking",
      description: "Schedule appointments 24/7 with your preferred doctors",
      color: "text-primary"
    },
    {
      icon: QrCode,
      title: "Digital Prescriptions",
      description: "Access prescriptions instantly with secure QR codes",
      color: "text-secondary"
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Never miss an appointment with email and SMS notifications",
      color: "text-medical-info"
    },
    {
      icon: Shield,
      title: "Secure Data Management",
      description: "Your medical records are protected with enterprise-grade security",
      color: "text-medical-success"
    },
    {
      icon: FileText,
      title: "Digital Medical Records",
      description: "Complete digitization of patient medical history",
      color: "text-medical-warning"
    },
    {
      icon: Users,
      title: "Multi-Role Dashboard",
      description: "Separate interfaces for patients, doctors, and administrators",
      color: "text-medical-error"
    }
  ];

  const userTypes = [
    {
      title: "Patients",
      description: "Book appointments, view prescriptions, access medical records",
      features: ["Online booking", "Prescription access", "Health tracking", "Appointment reminders"],
      path: "/patient",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Doctors",
      description: "Manage patients, create prescriptions, schedule appointments",
      features: ["Patient management", "Digital prescriptions", "Schedule management", "Medical records"],
      path: "/doctor",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Administrators",
      description: "System management, user oversight, analytics dashboard",
      features: ["User management", "System analytics", "Security oversight", "Report generation"],
      path: "/admin",
      gradient: "from-medical-info to-medical-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Modern Healthcare Management
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Transforming Healthcare with 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline your clinic operations with our comprehensive MERN stack solution. 
                From appointment booking to digital prescriptions, manage everything in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-3"
                  onClick={() => navigate("/register")}
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3"
                  onClick={() => navigate("/demo")}
                >
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern Healthcare Technology" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-secondary p-4 rounded-xl shadow-strong">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="h-6 w-6" />
                  <span className="font-semibold">Trusted Healthcare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Key Features
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Everything You Need for Modern Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform integrates all essential healthcare management tools 
              in one seamless, user-friendly interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 border-none bg-gradient-card">
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-lg bg-background/50 w-fit ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-medical-success/10 text-medical-success border-medical-success/20">
              User Dashboards
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Tailored Experiences for Every User
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform provides specialized dashboards designed for the unique needs 
              of patients, healthcare providers, and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <Card 
                key={index} 
                className="shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer border-none"
                onClick={() => navigate(userType.path)}
              >
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${userType.gradient} mb-4`}></div>
                  <CardTitle className="text-2xl">{userType.title}</CardTitle>
                  <CardDescription className="text-base">
                    {userType.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {userType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Access Dashboard
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who have modernized their practice 
            with our comprehensive management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
              onClick={() => navigate("/register")}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">HealthCare+</span>
              </div>
              <p className="text-muted-foreground">
                Modernizing healthcare with innovative digital solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 HealthCare+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;