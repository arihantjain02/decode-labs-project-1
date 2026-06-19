import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BrainCircuit, Clock, Calculator, TextSelect, Network } from "lucide-react";

export default function Aptitude() {
  const [activeTest, setActiveTest] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    let timer: any;
    if (activeTest && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [activeTest, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Aptitude Practice</h1>
        <p className="text-muted-foreground">Sharpen your quantitative, logical, and verbal skills for initial screening rounds.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">82%</div>
              <p className="text-xs text-green-500 mt-1">Ready for screening</p>
            </CardContent>
          </Card>
          
          <div className="bg-card border border-border rounded-lg p-4 shadow-sm space-y-3">
            <h3 className="font-semibold text-sm mb-2 uppercase tracking-wider text-muted-foreground">Categories</h3>
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-md"><Calculator className="h-4 w-4" /></div>
              <div className="flex-1">Quantitative</div>
              <div className="font-mono font-medium">85%</div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 bg-purple-500/10 text-purple-500 rounded-md"><Network className="h-4 w-4" /></div>
              <div className="flex-1">Logical</div>
              <div className="font-mono font-medium">78%</div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 bg-orange-500/10 text-orange-500 rounded-md"><TextSelect className="h-4 w-4" /></div>
              <div className="flex-1">Verbal</div>
              <div className="font-mono font-medium">82%</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="quantitative" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="quantitative">Quantitative</TabsTrigger>
              <TabsTrigger value="logical">Logical Reasoning</TabsTrigger>
              <TabsTrigger value="verbal">Verbal Ability</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quantitative" className="space-y-4">
              {!activeTest ? (
                <Card className="border-border shadow-sm">
                  <CardHeader>
                    <CardTitle>Quantitative Aptitude Test</CardTitle>
                    <CardDescription>20 questions • 30 minutes • Medium Difficulty</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 mb-4">
                      Topics covered: Time & Work, Speed & Distance, Probability, Permutations & Combinations, Percentages.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setActiveTest(true)}>Start Practice Test</Button>
                  </CardFooter>
                </Card>
              ) : (
                <Card className="border-primary shadow-sm border-2">
                  <CardHeader className="flex flex-row justify-between items-start pb-4 border-b border-border/50">
                    <div>
                      <CardDescription className="font-semibold text-primary mb-1">Question 1 of 20</CardDescription>
                      <CardTitle className="text-xl leading-relaxed">
                        A can do a piece of work in 15 days and B alone can do it in 10 days. B works at it for 5 days and then leaves. A alone can finish the remaining work in how many days?
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-lg bg-primary/10 text-primary px-3 py-1 rounded-md shrink-0">
                      <Clock className="h-4 w-4" />
                      {formatTime(timeLeft)}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
                      <div className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${selectedOption === "A" ? "border-primary bg-primary/5" : "border-border hover:bg-muted"}`} onClick={() => setSelectedOption("A")}>
                        <RadioGroupItem value="A" id="A" />
                        <Label htmlFor="A" className="flex-1 cursor-pointer text-base">5 days</Label>
                      </div>
                      <div className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${selectedOption === "B" ? "border-primary bg-primary/5" : "border-border hover:bg-muted"}`} onClick={() => setSelectedOption("B")}>
                        <RadioGroupItem value="B" id="B" />
                        <Label htmlFor="B" className="flex-1 cursor-pointer text-base">7.5 days</Label>
                      </div>
                      <div className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${selectedOption === "C" ? "border-primary bg-primary/5" : "border-border hover:bg-muted"}`} onClick={() => setSelectedOption("C")}>
                        <RadioGroupItem value="C" id="C" />
                        <Label htmlFor="C" className="flex-1 cursor-pointer text-base">10 days</Label>
                      </div>
                      <div className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${selectedOption === "D" ? "border-primary bg-primary/5" : "border-border hover:bg-muted"}`} onClick={() => setSelectedOption("D")}>
                        <RadioGroupItem value="D" id="D" />
                        <Label htmlFor="D" className="flex-1 cursor-pointer text-base">12 days</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-border pt-4 bg-muted/20">
                    <Button variant="ghost" onClick={() => setActiveTest(false)}>Quit</Button>
                    <Button disabled={!selectedOption}>Next Question</Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="logical">
              <Card className="border-border shadow-sm">
                <CardHeader>
                  <CardTitle>Logical Reasoning Test</CardTitle>
                  <CardDescription>20 questions • 30 minutes • Medium Difficulty</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline">Start Practice Test</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="verbal">
              <Card className="border-border shadow-sm">
                <CardHeader>
                  <CardTitle>Verbal Ability Test</CardTitle>
                  <CardDescription>20 questions • 20 minutes • Easy Difficulty</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline">Start Practice Test</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
