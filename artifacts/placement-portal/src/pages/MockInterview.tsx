import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Mic, StopCircle, Clock, Play, History, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";

const pastSessions = [
  { id: 1, company: "Google", role: "SDE", date: "Oct 12, 2023", score: 85 },
  { id: 2, company: "Amazon", role: "SDE", date: "Oct 05, 2023", score: 72 },
  { id: 3, company: "Microsoft", role: "SDE", date: "Sep 28, 2023", score: 90 },
];

export default function MockInterview() {
  const [sessionActive, setSessionActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes per question
  const [answer, setAnswer] = useState("");
  const [feedbackReady, setFeedbackReady] = useState(false);

  useEffect(() => {
    let timer: any;
    if (sessionActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && sessionActive) {
      endSession();
    }
    return () => clearInterval(timer);
  }, [sessionActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const startSession = () => {
    setSessionActive(true);
    setFeedbackReady(false);
    setTimeLeft(180);
    setAnswer("");
  };

  const endSession = () => {
    setSessionActive(false);
    setFeedbackReady(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Mock Interview</h1>
        <p className="text-muted-foreground">Practice behavioral and technical questions in a simulated environment.</p>
      </div>

      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="practice">Practice Mode</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice" className="mt-6 space-y-6">
          {!sessionActive && !feedbackReady && (
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle>Configure Interview</CardTitle>
                <CardDescription>Set up your mock interview parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Select defaultValue="google">
                      <SelectTrigger><SelectValue placeholder="Select company" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="microsoft">Microsoft</SelectItem>
                        <SelectItem value="amazon">Amazon</SelectItem>
                        <SelectItem value="meta">Meta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select defaultValue="sde">
                      <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sde">Software Engineer</SelectItem>
                        <SelectItem value="frontend">Frontend Engineer</SelectItem>
                        <SelectItem value="backend">Backend Engineer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Difficulty</Label>
                    <Select defaultValue="hard">
                      <SelectTrigger><SelectValue placeholder="Select difficulty" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={startSession} className="w-full md:w-auto">
                  <Play className="mr-2 h-4 w-4" /> Start Interview
                </Button>
              </CardFooter>
            </Card>
          )}

          {sessionActive && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <Card className="border-border shadow-sm border-primary/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse" />
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Behavioral</Badge>
                      <div className="flex items-center gap-2 text-xl font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-md">
                        <Clock className="h-5 w-5" />
                        {formatTime(timeLeft)}
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-4 leading-relaxed">
                      "Tell me about a time you had to make a complex architectural decision with incomplete information. How did you approach it?"
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Type your answer here, or use voice typing..." 
                      className="min-h-[250px] resize-none text-base font-medium p-4 focus-visible:ring-primary/50"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between bg-muted/30 pt-4">
                    <Button variant="outline" size="sm">
                      <Mic className="mr-2 h-4 w-4" /> Voice Type
                    </Button>
                    <Button onClick={endSession} variant="destructive">
                      <StopCircle className="mr-2 h-4 w-4" /> End & Submit
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="space-y-4 hidden md:block">
                <Card className="border-border bg-muted/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg"><Video className="mr-2 h-5 w-5 text-primary" /> Interviewer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center relative overflow-hidden border border-border">
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <Video className="w-24 h-24" />
                      </div>
                      <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xs font-mono bg-black/60 px-2 py-1 rounded text-white">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> REC
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <ul className="space-y-2 list-disc list-inside px-2">
                        <li>Maintain eye contact</li>
                        <li>Use the STAR method</li>
                        <li>Keep it concise (aim for 2-3 mins)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {feedbackReady && (
            <Card className="border-primary shadow-lg overflow-hidden animate-in zoom-in-95 duration-500">
              <div className="bg-primary/10 border-b border-primary/20 px-6 py-4 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">AI Evaluation Complete</h3>
              </div>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-end gap-3 mb-6">
                      <span className="text-5xl font-bold">82</span>
                      <span className="text-xl text-muted-foreground pb-1">/ 100</span>
                    </div>
                    
                    <h4 className="font-semibold mb-3 flex items-center gap-2"><CheckCircle2 className="text-green-500 h-5 w-5" /> Strengths</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span> Structured answer using STAR method clearly.</li>
                      <li className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span> Highlighted cross-functional collaboration well.</li>
                    </ul>

                    <h4 className="font-semibold mb-3 flex items-center gap-2"><AlertTriangle className="text-amber-500 h-5 w-5" /> Areas for Improvement</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Spend less time on the situation and more on the action.</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">•</span> Quantify the end result (e.g., 'saved 2 weeks of dev time').</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Ideal Answer Outline</h4>
                    <p className="text-sm text-muted-foreground mb-4">How an expert would structure this answer:</p>
                    <ol className="text-sm space-y-3 list-decimal list-inside text-foreground/90">
                      <li>Brief context of the ambiguous situation.</li>
                      <li>How you gathered whatever data WAS available.</li>
                      <li>The specific tradeoffs you weighed and why you chose your path.</li>
                      <li>How you designed for reversibility/fallback.</li>
                      <li>The final outcome and what you learned.</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 border-t border-border p-6 flex justify-end">
                <Button onClick={() => setFeedbackReady(false)}>Try Another Question</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <History className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{session.company} - {session.role}</div>
                        <div className="text-sm text-muted-foreground">{session.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold text-lg">{session.score}/100</div>
                        <div className="text-xs text-muted-foreground">Score</div>
                      </div>
                      <Button variant="outline" size="sm">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
