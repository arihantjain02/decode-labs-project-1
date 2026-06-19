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
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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

export function Sidebar() {
  const [location] = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden md:flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 relative ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <Link href="/dashboard" className="flex items-center gap-3 text-primary overflow-hidden">
          <BrainCircuit className="h-8 w-8 shrink-0" />
          {!collapsed && <span className="font-bold text-xl whitespace-nowrap">PrepPortal</span>}
        </Link>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute -right-4 top-5 h-8 w-8 rounded-full border border-border shadow-sm z-10"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>

      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <span
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`}
                    title={collapsed ? item.label : undefined}
                  >
                    <item.icon className={`h-5 w-5 shrink-0 ${isActive ? "text-sidebar-accent-foreground" : ""}`} />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
            {dummyUser.name.charAt(0)}
          </div>
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate text-sidebar-foreground">{dummyUser.name}</span>
              <span className="text-xs text-sidebar-foreground/70 truncate">{dummyUser.email}</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
