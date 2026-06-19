import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  Video, 
  Code2, 
  BrainCircuit, 
  Building2, 
  Map as MapIcon, 
  CalendarDays, 
  UserCircle,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { dummyUser } from "@/data/dummy";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/resume", label: "Resume Analyzer", icon: FileText },
  { href: "/interview", label: "Mock Interview", icon: Video },
  { href: "/dsa", label: "DSA Tracker", icon: Code2 },
  { href: "/aptitude", label: "Aptitude", icon: BrainCircuit },
  { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/roadmap", label: "Roadmap", icon: MapIcon },
  { href: "/planner", label: "Planner", icon: CalendarDays },
  { href: "/profile", label: "Profile", icon: UserCircle },
];

export function MobileNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background">
      <div className="flex items-center gap-2 font-bold text-xl text-primary">
        <BrainCircuit className="h-6 w-6" />
        <span>PrepPortal</span>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 flex flex-col w-64">
          <div className="flex items-center gap-2 p-6 font-bold text-2xl text-primary border-b border-border">
            <BrainCircuit className="h-6 w-6" />
            <span>PrepPortal</span>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      <span
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                {dummyUser.name.charAt(0)}
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-medium truncate">{dummyUser.name}</span>
                <span className="text-xs text-muted-foreground truncate">{dummyUser.email}</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
