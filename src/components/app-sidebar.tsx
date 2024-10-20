import { Map, Earth } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
// Menu items.
const items = [
    {
        title: "Delhi",
        url: `${frontendUrl}/Delhi`,
        icon: Map,
    },
    {
        title: "Mumbai",
        url: `${frontendUrl}/Mumbai`,
        icon: Earth,
    },
    {
        title: "Chennai",
        url: `${frontendUrl}/Chennai`,
        icon: Map,
    },
    {
        title: "Bangalore",
        url: `${frontendUrl}/Bangalore`,
        icon: Earth,
    },
    {
        title: "Kolkata",
        url: `${frontendUrl}/Kolkata`,
        icon: Map,
    },
    {
        title: "Hyderabad",
        url: `${frontendUrl}/Hyderabad`,
        icon: Earth,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Weather UI</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />{" "}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
