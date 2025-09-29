import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-strong border-none bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-destructive to-medical-error p-4 rounded-full">
                <AlertTriangle className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <div>
              <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
              <p className="text-muted-foreground mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => navigate("/")}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="w-full"
              >
                Go Back
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              If you believe this is an error, please contact support.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
