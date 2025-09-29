import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl shadow-strong border-none bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl">
                <Heart className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                HealthCare+ Platform
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
                Welcome to 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> HealthCare+</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                Your comprehensive healthcare management system. Get started by exploring our features and creating your account.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button 
                onClick={() => navigate("/")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-12"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Explore Platform
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate("/register")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg h-12"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Online Booking</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Secure & Private</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-medical-success mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
