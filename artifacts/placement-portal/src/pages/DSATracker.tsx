import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { dummyDSATopics, dummyStats } from "@/data/dummy";
import { Code2, Filter, Target, Flame } from "lucide-react";

export default function DSATracker() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">DSA Progress Tracker</h1>
          <p className="text-muted-foreground">Master data structures and algorithms topic by topic.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>All</Button>
          <Button variant={filter === "core" ? "default" : "outline"} size="sm" onClick={() => setFilter("core")}>Core Concepts</Button>
          <Button variant={filter === "advanced" ? "default" : "outline"} size="sm" onClick={() => setFilter("advanced")}>Advanced</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-border shadow-sm bg-gradient-to-br from-primary/10 via-background to-background">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Solved</p>
              <div className="text-3xl font-bold">{dummyStats.problemsSolved} <span className="text-lg text-muted-foreground font-normal">/ {dummyStats.totalProblems}</span></div>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <Code2 className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Completion</p>
              <div className="text-3xl font-bold">{Math.round((dummyStats.problemsSolved / dummyStats.totalProblems) * 100)}%</div>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Current Streak</p>
              <div className="text-3xl font-bold">14 days</div>
            </div>
            <div className="h-12 w-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Flame className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle>Activity Heatmap</CardTitle>
          <CardDescription>Your problem solving consistency over the last 3 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-[700px] flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, dayIdx) => (
                <div key={`day-${dayIdx}`} className="flex gap-1">
                  {Array.from({ length: 24 }).map((_, weekIdx) => {
                    // Random intensity for dummy data
                    const intensity = Math.random();
                    const colorClass = intensity > 0.8 ? "bg-primary" : 
                                      intensity > 0.5 ? "bg-primary/70" : 
                                      intensity > 0.2 ? "bg-primary/40" : 
                                      intensity > 0.05 ? "bg-primary/20" : "bg-muted";
                    return (
                      <div 
                        key={`cell-${weekIdx}-${dayIdx}`} 
                        className={`w-4 h-4 rounded-sm ${colorClass} transition-colors hover:ring-1 hover:ring-foreground cursor-pointer`}
                        title={`${Math.floor(intensity * 10)} problems`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground min-w-[700px]">
              <span>3 Months Ago</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-sm bg-muted" />
                  <div className="w-3 h-3 rounded-sm bg-primary/20" />
                  <div className="w-3 h-3 rounded-sm bg-primary/40" />
                  <div className="w-3 h-3 rounded-sm bg-primary/70" />
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          Topic Breakdown
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyDSATopics.map((topic) => {
            const percent = Math.round((topic.solved / topic.total) * 100);
            return (
              <Card key={topic.name} className="border-border shadow-sm hover-elevate transition-all group">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{topic.name}</h3>
                    <Badge variant={percent > 80 ? "default" : percent > 40 ? "secondary" : "outline"} className="text-xs">
                      {topic.solved}/{topic.total}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>{percent}%</span>
                      <span className="group-hover:text-primary transition-colors">Solve More →</span>
                    </div>
                    <Progress value={percent} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
