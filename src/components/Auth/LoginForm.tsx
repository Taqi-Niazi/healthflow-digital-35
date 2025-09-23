import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, EyeOff, Mail, Lock, User, Stethoscope, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"patient" | "doctor" | "admin">("patient");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to appropriate dashboard
    switch (userType) {
      case "patient":
        navigate("/patient");
        break;
      case "doctor":
        navigate("/doctor");
        break;
      case "admin":
        navigate("/admin");
        break;
    }
  };

  const userTypeOptions = [
    {
      type: "patient" as const,
      label: "Patient",
      icon: User,
      description: "Access your health records",
      gradient: "from-primary to-primary-glow"
    },
    {
      type: "doctor" as const,
      label: "Doctor",
      icon: Stethoscope,
      description: "Manage your patients",
      gradient: "from-secondary to-accent"
    },
    {
      type: "admin" as const,
      label: "Admin",
      icon: Shield,
      description: "System administration",
      gradient: "from-medical-info to-medical-success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">HealthCare+</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access your healthcare dashboard</p>
        </div>

        <Card className="shadow-strong border-none bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Choose your account type and enter your credentials
            </CardDescription>
            
            {/* User Type Selection */}
            <div className="grid grid-cols-3 gap-2">
              {userTypeOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.type}
                    type="button"
                    onClick={() => setUserType(option.type)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      userType === option.type
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <IconComponent className={`h-5 w-5 mx-auto mb-1 ${
                      userType === option.type ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <p className={`text-xs font-medium ${
                      userType === option.type ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {option.label}
                    </p>
                  </button>
                );
              })}
            </div>

            <Badge className="mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
              {userTypeOptions.find(opt => opt.type === userType)?.description}
            </Badge>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-12 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 h-12 border-border focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium"
              >
                Sign In to {userTypeOptions.find(opt => opt.type === userType)?.label} Dashboard
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/register")}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;