import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@/components/ui/CircularProgress";
import { Upload, FileText, CheckCircle2, AlertTriangle, XCircle, BarChart3 } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const sectionScores = [
  { name: "Contact Info", score: 95, status: "excellent" },
  { name: "Summary", score: 72, status: "good" },
  { name: "Experience", score: 68, status: "average" },
  { name: "Skills", score: 85, status: "good" },
  { name: "Education", score: 90, status: "excellent" },
];

const keywordData = [
  { name: "React", match: 100 },
  { name: "Node.js", match: 80 },
  { name: "Python", match: 40 },
  { name: "AWS", match: 20 },
  { name: "SQL", match: 90 },
  { name: "Docker", match: 10 },
];

const suggestions = [
  { id: 1, type: "critical", text: "Add quantifiable metrics to your recent SDE Intern experience (e.g., 'improved performance by X%')." },
  { id: 2, type: "warning", text: "Missing cloud keywords (AWS, Docker) which are required for target role." },
  { id: 3, type: "info", text: "Consider moving the Education section below Experience since you are in your final year." },
];

export default function ResumeAnalyzer() {
  const [isDragging, setIsDragging] = useState(false);
  const [hasFile, setHasFile] = useState(true); // default to true to show the dashboard immediately

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Resume Analyzer</h1>
        <p className="text-muted-foreground">Upload your resume to get instant ATS feedback and improvements.</p>
      </div>

      {!hasFile ? (
        <div 
          className={`border-2 border-dashed rounded-xl p-12 text-center flex flex-col items-center justify-center transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); setHasFile(true); }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Upload className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Drag & drop your resume</h3>
          <p className="text-muted-foreground mb-6">Supports PDF, DOCX (Max 5MB)</p>
          <Button onClick={() => setHasFile(true)}>Browse Files</Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-card border border-border p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">arjun_sharma_resume_v4.pdf</div>
                <div className="text-xs text-muted-foreground">Uploaded today at 10:42 AM • 2.4 MB</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => setHasFile(false)}>Upload New</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-1 border-border shadow-sm flex flex-col items-center justify-center p-6 text-center">
              <CardTitle className="mb-6">Overall ATS Score</CardTitle>
              <CircularProgress value={78} size={160} strokeWidth={12} color="hsl(var(--primary))" />
              <p className="mt-6 text-sm text-muted-foreground text-center">
                Your resume is in the top 25% of applicants, but needs more quantifiable impact.
              </p>
            </Card>

            <Card className="md:col-span-2 border-border shadow-sm">
              <CardHeader>
                <CardTitle>Section Analysis</CardTitle>
                <CardDescription>Breakdown of your resume components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sectionScores.map((section) => (
                    <div key={section.name} className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-medium">{section.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{section.score}/100</span>
                        {section.score >= 90 ? <CheckCircle2 className="h-4 w-4 text-green-500" /> :
                         section.score >= 70 ? <AlertTriangle className="h-4 w-4 text-amber-500" /> :
                         <XCircle className="h-4 w-4 text-red-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" /> Target Role Keyword Match
                </CardTitle>
                <CardDescription>SDE / Software Engineer Role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={keywordData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} width={80} />
                      <Tooltip 
                        cursor={{ fill: 'hsl(var(--muted))' }}
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                      />
                      <Bar dataKey="match" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle>Actionable Suggestions</CardTitle>
                <CardDescription>Fix these to improve your ATS score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestions.map((sugg) => (
                    <div key={sugg.id} className="flex gap-3 items-start p-3 rounded-lg bg-muted/50 border border-border">
                      {sugg.type === 'critical' ? <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" /> :
                       sugg.type === 'warning' ? <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" /> :
                       <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />}
                      <p className="text-sm text-foreground/90">{sugg.text}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">Generate Rewritten Resume</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
