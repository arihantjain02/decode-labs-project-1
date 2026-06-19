import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Plus, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function Planner() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = 'Thu';

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Planner</h1>
          <p className="text-muted-foreground">Organize your days. Consistency over intensity.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Task</Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div 
            key={day} 
            className={`p-3 rounded-lg border text-center transition-colors ${
              day === today 
                ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105 transform origin-bottom' 
                : 'bg-card border-border text-muted-foreground'
            }`}
          >
            <div className="text-xs font-semibold uppercase">{day}</div>
            <div className={`text-xl font-bold mt-1 ${day === today ? '' : 'text-foreground'}`}>
              {day === 'Mon' ? '12' : day === 'Tue' ? '13' : day === 'Wed' ? '14' : day === 'Thu' ? '15' : day === 'Fri' ? '16' : day === 'Sat' ? '17' : '18'}
            </div>
            {day !== today && day !== 'Fri' && day !== 'Sat' && day !== 'Sun' && (
              <div className="mt-2 flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /></div>
            )}
            {day === today && (
              <div className="mt-2 flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 animate-pulse" /></div>
            )}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 border-b border-border pb-2">
            <CalendarIcon className="h-5 w-5 text-primary" /> Today's Schedule
          </h2>
          
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            
            {/* Task 1 - Completed */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-green-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-border bg-muted/30 shadow-none opacity-60">
                <CardContent className="p-4 flex gap-3">
                  <div className="mt-0.5"><Checkbox checked disabled /></div>
                  <div>
                    <div className="text-sm font-bold line-through">Morning LeetCode (2 Mediums)</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Clock className="h-3 w-3" /> 09:00 AM - 10:30 AM</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Task 2 - Active */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ring-2 ring-primary/20">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-primary/50 shadow-md">
                <CardContent className="p-4 flex gap-3">
                  <div className="mt-0.5"><Checkbox id="t2" /></div>
                  <div>
                    <Label htmlFor="t2" className="text-sm font-bold cursor-pointer">System Design Reading</Label>
                    <p className="text-sm text-muted-foreground mt-1">Read about consistent hashing and load balancers.</p>
                    <div className="text-xs text-primary font-medium flex items-center gap-1 mt-2 bg-primary/10 w-fit px-2 py-1 rounded"><Clock className="h-3 w-3" /> 11:30 AM - 01:00 PM (Current)</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Task 3 - Upcoming */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-border shadow-sm">
                <CardContent className="p-4 flex gap-3">
                  <div className="mt-0.5"><Checkbox id="t3" /></div>
                  <div>
                    <Label htmlFor="t3" className="text-sm font-bold cursor-pointer">Mock Interview</Label>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Clock className="h-3 w-3" /> 04:00 PM - 05:00 PM</div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>

        <div>
          <Card className="border-border bg-card/50 shadow-sm sticky top-4">
            <CardHeader>
              <CardTitle>Habit Tracker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Solve 1 problem</span>
                <Checkbox checked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Read 1 article</span>
                <Checkbox />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Update resume</span>
                <Checkbox checked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
