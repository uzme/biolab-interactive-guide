/* BioLab style: keep the application shell light, editorial, and science-first across every route. */
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function TransitionShell() {
  const [location] = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timeout = window.setTimeout(() => setIsNavigating(false), 260);
    return () => window.clearTimeout(timeout);
  }, [location]);

  return (
    <div className="page-transition min-h-screen">
      {isNavigating && <div className="loading-progress" role="progressbar" aria-label="Sahifa yuklanmoqda" />}
      <Router />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <TransitionShell />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
