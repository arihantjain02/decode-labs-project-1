import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/components/ThemeProvider";
import { dummyUser } from "@/data/dummy";
import { UserCircle, Moon, Sun, Bell, Shield, LogOut } from "lucide-react";

export default function Profile() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile & Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-border shadow-sm text-center">
            <CardContent className="pt-6">
              <div className="mx-auto w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl font-bold mb-4 shadow-inner">
                {dummyUser.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold">{dummyUser.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{dummyUser.email}</p>
              <Badge variant="outline" className="bg-muted/50">{dummyUser.college} • {dummyUser.graduationYear}</Badge>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Overall Skill Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Data Structures</span>
                  <span className="font-mono text-muted-foreground">78%</span>
                </div>
                <Progress value={78} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Algorithms</span>
                  <span className="font-mono text-muted-foreground">62%</span>
                </div>
                <Progress value={62} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>System Design</span>
                  <span className="font-mono text-muted-foreground">45%</span>
                </div>
                <Progress value={45} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Behavioral</span>
                  <span className="font-mono text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><UserCircle className="h-5 w-5" /> Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue={dummyUser.name} />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue={dummyUser.email} disabled />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>College / University</Label>
                  <Input defaultValue={dummyUser.college} />
                </div>
                <div className="space-y-2">
                  <Label>Branch / Major</Label>
                  <Input defaultValue={dummyUser.branch} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Target Graduation Year</Label>
                <Input type="number" defaultValue={dummyUser.graduationYear} className="w-1/2" />
              </div>
              <Button className="mt-4">Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sun className="h-5 w-5" /> Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark themes.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <Switch 
                    checked={theme === "dark"} 
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  />
                  <Moon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border pt-6">
                <div className="space-y-0.5">
                  <Label className="text-base flex items-center gap-2"><Bell className="h-4 w-4" /> Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive daily planner reminders and weekly reports.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button variant="outline" className="text-destructive hover:bg-destructive/10 border-destructive/30">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Badge component since we didn't export it clearly above
function Badge({ children, variant = "default", className = "" }: any) {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </div>
  )
}