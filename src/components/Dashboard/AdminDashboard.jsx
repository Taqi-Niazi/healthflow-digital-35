import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  FileText, 
  Shield,
  Activity,
  TrendingUp,
  AlertTriangle,
  Settings,
  Database,
  Bell,
  Lock
} from "lucide-react";

const AdminDashboard = () => {
  const systemStats = [
    {
      label: "Total Users",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      label: "Active Doctors",
      value: "23",
      change: "+2",
      icon: UserCheck,
      color: "text-secondary"
    },
    {
      label: "Today's Appointments",
      value: "156",
      change: "+8%",
      icon: Calendar,
      color: "text-medical-info"
    },
    {
      label: "System Uptime",
      value: "99.9%",
      change: "Excellent",
      icon: Activity,
      color: "text-medical-success"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New doctor registration",
      user: "Dr. Michael Chen",
      time: "2 minutes ago",
      type: "user",
      status: "pending"
    },
    {
      id: 2,
      action: "System backup completed",
      user: "System",
      time: "1 hour ago",
      type: "system",
      status: "success"
    },
    {
      id: 3,
      action: "Failed login attempt",
      user: "Unknown",
      time: "3 hours ago",
      type: "security",
      status: "warning"
    },
    {
      id: 4,
      action: "New patient registered",
      user: "Jane Smith",
      time: "5 hours ago",
      type: "user",
      status: "success"
    }
  ];

  const systemHealth = [
    {
      component: "Database",
      status: "healthy",
      usage: 65,
      icon: Database
    },
    {
      component: "API Server",
      status: "healthy",
      usage: 42,
      icon: Activity
    },
    {
      component: "Security",
      status: "secure",
      usage: 18,
      icon: Lock
    },
    {
      component: "Storage",
      status: "warning",
      usage: 85,
      icon: FileText
    }
  ];

  const pendingTasks = [
    {
      id: 1,
      task: "Review doctor applications",
      count: 3,
      priority: "high",
      dueDate: "Today"
    },
    {
      id: 2,
      task: "System maintenance",
      count: 1,
      priority: "medium",
      dueDate: "Tomorrow"
    },
    {
      id: 3,
      task: "User support tickets",
      count: 7,
      priority: "low",
      dueDate: "This week"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user":
        return Users;
      case "system":
        return Settings;
      case "security":
        return Shield;
      default:
        return Activity;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-medical-success";
      case "warning":
        return "text-medical-warning";
      case "pending":
        return "text-medical-info";
      default:
        return "text-muted-foreground";
    }
  };

  const getHealthColor = (status: string, usage: number) => {
    if (status === "warning" || usage > 80) return "text-medical-warning";
    if (status === "secure" || status === "healthy") return "text-medical-success";
    return "text-muted-foreground";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-medical-error/20 text-medical-error border-medical-error/30";
      case "medium":
        return "bg-medical-warning/20 text-medical-warning border-medical-warning/30";
      case "low":
        return "bg-medical-success/20 text-medical-success border-medical-success/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">System overview and management</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xs text-medical-success mt-1">{stat.change}</p>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-12">
          <Users className="h-4 w-4 mr-2" />
          Manage Users
        </Button>
        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground h-12">
          <Settings className="h-4 w-4 mr-2" />
          System Settings
        </Button>
        <Button variant="outline" className="border-medical-info text-medical-info hover:bg-medical-info hover:text-white h-12">
          <FileText className="h-4 w-4 mr-2" />
          Reports
        </Button>
        <Button variant="outline" className="border-medical-success text-medical-success hover:bg-medical-success hover:text-white h-12">
          <Shield className="h-4 w-4 mr-2" />
          Security
        </Button>
        <Button variant="outline" className="border-medical-warning text-medical-warning hover:bg-medical-warning hover:text-white h-12">
          <Database className="h-4 w-4 mr-2" />
          Database
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activities */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest system activities and user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const IconComponent = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-5 w-5 ${getActivityColor(activity.status)}`} />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">by {activity.user}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                        <Badge 
                          variant="secondary" 
                          className={activity.status === "success" ? "bg-medical-success/20 text-medical-success" : 
                                   activity.status === "warning" ? "bg-medical-warning/20 text-medical-warning" : 
                                   "bg-medical-info/20 text-medical-info"}
                        >
                          {activity.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              System Health
            </CardTitle>
            <CardDescription>Monitor system components and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {systemHealth.map((component, index) => {
                const IconComponent = component.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className={`h-4 w-4 ${getHealthColor(component.status, component.usage)}`} />
                        <span className="font-medium text-foreground">{component.component}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{component.usage}%</span>
                        <Badge 
                          variant="secondary"
                          className={getHealthColor(component.status, component.usage) === "text-medical-warning" ? 
                                   "bg-medical-warning/20 text-medical-warning" : 
                                   "bg-medical-success/20 text-medical-success"}
                        >
                          {component.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={component.usage} 
                      className="h-2"
                    />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Tasks */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-medical-warning" />
            Pending Tasks
          </CardTitle>
          <CardDescription>Tasks requiring your attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingTasks.map((task) => (
              <div key={task.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-medical-warning" />
                    <div>
                      <p className="font-medium text-foreground">{task.task}</p>
                      <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-muted text-foreground">
                      {task.count} {task.count === 1 ? 'item' : 'items'}
                    </Badge>
                    <Badge variant="secondary" className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Button size="sm" className="bg-primary">
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;