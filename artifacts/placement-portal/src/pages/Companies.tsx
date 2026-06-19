import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dummyCompanies } from "@/data/dummy";
import { Building2, Search, Briefcase, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import * as ReactIconsSi from "react-icons/si";

export default function Companies() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Company Prep</h1>
          <p className="text-muted-foreground">Targeted preparation for top tech giants.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search companies..." className="pl-9" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyCompanies.map((company) => {
          // Dynamic icon import strategy for dummy data
          const Icon = ReactIconsSi[company.logo as keyof typeof ReactIconsSi] || Building2;
          
          return (
            <Card key={company.name} className="border-border shadow-sm hover-elevate transition-all cursor-pointer group overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-muted/20 flex flex-col items-center justify-center text-center border-b border-border group-hover:bg-primary/5 transition-colors">
                  <div className="w-16 h-16 bg-background rounded-2xl shadow-sm border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${company.name === 'Google' ? 'text-blue-500' : company.name === 'Microsoft' ? 'text-blue-600' : company.name === 'Netflix' ? 'text-red-600' : 'text-foreground'}`} />
                  </div>
                  <h3 className="font-bold text-xl">{company.name}</h3>
                  <div className="mt-2 flex gap-2">
                    <Badge variant={company.difficulty === 'Very Hard' ? 'destructive' : company.difficulty === 'Hard' ? 'default' : 'secondary'} className="text-[10px] uppercase">
                      {company.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Avg Package</span>
                    <span className="font-mono font-bold text-primary">{company.package}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-xs leading-tight">SDE, Frontend, Data Science</span>
                  </div>
                  <div className="pt-2 flex items-center text-xs text-primary font-medium group-hover:underline">
                    View Interview Process <ChevronRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
