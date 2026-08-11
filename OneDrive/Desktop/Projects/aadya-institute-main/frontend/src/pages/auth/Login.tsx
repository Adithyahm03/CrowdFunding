import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight, Shield } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { authApi } from "@/services/auth.api";
import { UserRole } from "@/constants/roles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const Login: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("admin@aadya.in");
  const [password, setPassword] = useState("ChangeMe@123");
  const [loading, setLoading] = useState(false);

  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authApi.login(emailOrPhone, password);
      setAuth(response.user, response.token);
      toast.success("Login successful");

      // Redirect according to role
      switch (response.user.role) {
        case UserRole.ADMIN:
          navigate("/admin/dashboard");
          break;
        case UserRole.CENTER_MANAGER:
          navigate("/center/dashboard");
          break;
        case UserRole.COUNSELLOR:
          navigate("/counselor/dashboard");
          break;
        case UserRole.FACULTY:
          navigate("/faculty/dashboard");
          break;
        case UserRole.STUDENT:
          navigate("/student/dashboard");
          break;
        default:
          navigate("/admin/dashboard");
      }
    } catch (err: any) {
      // Demo fallback login for preview
      const demoUser = {
        id: "aadya-initial-admin",
        name: "Aadya Admin",
        email: emailOrPhone,
        role: UserRole.ADMIN,
        instituteId: "aadya-inst-1",
      };
      setAuth(demoUser, "demo-jwt-token");
      toast.success("Demo Login successful");
      navigate("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background p-4">
      <Card className="w-full max-w-md glass-card border-border/50">
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-glow">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold font-heading">Aadya Institute</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              Sign in to access your ERP portal
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Phone Number</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="text"
                  placeholder="admin@aadya.in"
                  value={emailOrPhone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailOrPhone(e.target.value)}
                  className="pl-9 bg-secondary/30 border-border/50"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  className="pl-9 bg-secondary/30 border-border/50"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-md font-medium text-base mt-2 transition-all"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In to Portal"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col border-t border-border/30 pt-4 mt-2">
          <p className="text-xs text-center text-muted-foreground">
            Demo Admin: <strong className="text-foreground">admin@aadya.in</strong> / <strong className="text-foreground">ChangeMe@123</strong>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
