import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/CircularProgress";
import { dummyUser, dummyStats, dummyWeeklyChart } from "@/data/dummy";
import { Code2, Video, FileText, BrainCircuit, Flame, Trophy, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function StatCard({ title, value, icon: Icon, trend }: { title: string, value: string | number, icon: any, trend?: string }) {
  return (
    <Card className="hover-elevate transition-all border-border bg-card/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className="text-xs text-green-500 font-medium mt-1">
            ↑ {trend} from last week
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {dummyUser.name.split(' ')[0]}</h1>
          <p className="text-muted-foreground">Here is your placement preparation status.</p>
        </div>
        <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border shadow-sm">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Readiness Score</span>
            <span className="text-xs text-muted-foreground">Based on your overall progress</span>
          </div>
          <CircularProgress value={dummyStats.readinessScore} size={60} strokeWidth={6} color="hsl(var(--primary))" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard title="Problems Solved" value={`${dummyStats.problemsSolved}/${dummyStats.totalProblems}`} icon={Code2} trend="12%" />
        <StatCard title="Interviews Done" value={dummyStats.interviewsDone} icon={Video} trend="2" />
        <StatCard title="Resume Score" value={`${dummyStats.resumeScore}/100`} icon={FileText} />
        <StatCard title="Aptitude Score" value={`${dummyStats.aptitudeScore}%`} icon={BrainCircuit} />
        <StatCard title="Current Streak" value={`${dummyUser.streak} days`} icon={Flame} />
        <StatCard title="Global Rank" value={`#${dummyUser.rank}`} icon={Trophy} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border-border shadow-sm">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Hours spent coding and preparing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dummyWeeklyChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="hours" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorHours)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm flex flex-col">
          <CardHeader>
            <CardTitle>Today's Focus</CardTitle>
            <CardDescription>Your prioritized tasks</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm">Dynamic Programming</div>
                  <div className="text-xs text-muted-foreground">Solve 3 medium problems</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8"><ArrowRight className="h-4 w-4" /></Button>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm">Amazon Mock</div>
                  <div className="text-xs text-muted-foreground">Behavioral round at 4 PM</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8"><ArrowRight className="h-4 w-4" /></Button>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm">Quant Practice</div>
                  <div className="text-xs text-muted-foreground">Probability & Permutations</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8"><ArrowRight className="h-4 w-4" /></Button>
            </div>

            <Button className="w-full mt-auto" variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> View Full Planner
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
