import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Map as MapIcon, Compass, Sparkles, Milestone, Badge } from "lucide-react";

export default function Roadmap() {
  const [generated, setGenerated] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
          <MapIcon className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Personalized Roadmap</h1>
        <p className="text-muted-foreground mt-2">Generate a custom week-by-week plan based on your current level and target.</p>
      </div>

      {!generated ? (
        <Card className="border-border shadow-md max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Configure your journey</CardTitle>
            <CardDescription>Tell us where you are and where you want to go.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label className="text-base">Target Company Tier</Label>
              <Select defaultValue="faang">
                <SelectTrigger className="h-12"><SelectValue placeholder="Select target" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="faang">FAANG / MAANG (Google, Meta, etc.)</SelectItem>
                  <SelectItem value="unicorns">Top Unicorns (Stripe, Uber, Airbnb)</SelectItem>
                  <SelectItem value="product">Product Based (Atlassian, Adobe)</SelectItem>
                  <SelectItem value="service">Service Based (TCS, Infosys)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label className="text-base">Current DSA Level</Label>
              <Select defaultValue="beginner">
                <SelectTrigger className="h-12"><SelectValue placeholder="Select level" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (Know basic syntax)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (Can solve easy arrays/strings)</SelectItem>
                  <SelectItem value="advanced">Advanced (Comfortable with trees/graphs)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between">
                <Label className="text-base">Time Available (Weeks)</Label>
                <span className="font-mono font-bold text-primary">12 Weeks</span>
              </div>
              <Slider defaultValue={[12]} max={24} min={4} step={1} className="py-4" />
            </div>

            <Button className="w-full h-12 text-lg mt-6" onClick={() => setGenerated(true)}>
              <Sparkles className="mr-2 h-5 w-5" /> Generate My Roadmap
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8 animate-in zoom-in-95 duration-500">
          <div className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-lg">
            <div>
              <h3 className="font-bold">Your 12-Week FAANG Strategy</h3>
              <p className="text-sm text-muted-foreground">From Beginner to Interview Ready</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setGenerated(false)}>Regenerate</Button>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-10 py-4">
            
            {/* Week 1-2 */}
            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                <Milestone className="h-3 w-3 text-primary-foreground" />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">Week 1 - 2</Badge>
                <h3 className="text-xl font-bold">Foundation: Arrays & Strings</h3>
              </div>
              <Card className="border-border shadow-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 p-4 border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <Checkbox id="t1" />
                    <Label htmlFor="t1" className="flex-1 cursor-pointer font-medium leading-tight">Master Two Pointers technique</Label>
                  </div>
                  <div className="flex items-center gap-3 p-4 border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <Checkbox id="t2" />
                    <Label htmlFor="t2" className="flex-1 cursor-pointer font-medium leading-tight">Master Sliding Window (fixed size)</Label>
                  </div>
                  <div className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
                    <Checkbox id="t3" />
                    <Label htmlFor="t3" className="flex-1 cursor-pointer font-medium leading-tight">Solve 15 Easy & 5 Medium LeetCode problems</Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Week 3-4 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-background border-2 border-primary ring-4 ring-background"></div>
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="outline" className="border-muted-foreground/50 text-muted-foreground">Week 3 - 4</Badge>
                <h3 className="text-xl font-bold">Linked Lists & Hash Maps</h3>
              </div>
              <Card className="border-border shadow-sm opacity-70">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 p-4 border-b border-border/50">
                    <Checkbox id="t4" disabled />
                    <Label htmlFor="t4" className="flex-1 font-medium leading-tight">Fast & Slow pointer problems (Cycle detection)</Label>
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <Checkbox id="t5" disabled />
                    <Label htmlFor="t5" className="flex-1 font-medium leading-tight">Hash Map design and collision handling</Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Further weeks omitted for brevity but represent a full timeline */}
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-background border-2 border-muted ring-4 ring-background"></div>
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground/70">Week 5 - 8</Badge>
                <h3 className="text-xl font-bold text-muted-foreground">Trees, Graphs & System Design Basics</h3>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
