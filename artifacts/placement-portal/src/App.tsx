import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";

import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import ResumeAnalyzer from "@/pages/ResumeAnalyzer";
import MockInterview from "@/pages/MockInterview";
import DSATracker from "@/pages/DSATracker";
import Aptitude from "@/pages/Aptitude";
import Companies from "@/pages/Companies";
import Roadmap from "@/pages/Roadmap";
import Planner from "@/pages/Planner";
import Profile from "@/pages/Profile";
import { AppLayout } from "@/components/layout/AppLayout";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Public routes */}
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      {/* App routes */}
      <Route path="/dashboard"><AppLayout><Dashboard /></AppLayout></Route>
      <Route path="/resume"><AppLayout><ResumeAnalyzer /></AppLayout></Route>
      <Route path="/interview"><AppLayout><MockInterview /></AppLayout></Route>
      <Route path="/dsa"><AppLayout><DSATracker /></AppLayout></Route>
      <Route path="/aptitude"><AppLayout><Aptitude /></AppLayout></Route>
      <Route path="/companies"><AppLayout><Companies /></AppLayout></Route>
      <Route path="/roadmap"><AppLayout><Roadmap /></AppLayout></Route>
      <Route path="/planner"><AppLayout><Planner /></AppLayout></Route>
      <Route path="/profile"><AppLayout><Profile /></AppLayout></Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
