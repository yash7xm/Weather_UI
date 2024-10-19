import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Weather } from "./components/weather";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    <Weather />
                </main>
            </SidebarProvider>
        </Router>
    );
}
