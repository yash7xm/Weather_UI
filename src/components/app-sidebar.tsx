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

// Menu items.
const items = [
    {
        title: "Delhi",
        url: "http://localhost:5173/Delhi",
        icon: Map,
    },
    {
        title: "Mumbai",
        url: "http://localhost:5173/Mumbai",
        icon: Earth,
    },
    {
        title: "Chennai",
        url: "http://localhost:5173/Chennai",
        icon: Map,
    },
    {
        title: "Bangalore",
        url: "http://localhost:5173/Bangalore",
        icon: Earth,
    },
    {
        title: "Kolkata",
        url: "http://localhost:5173/Kolkata",
        icon: Map,
    },
    {
        title: "Hyderabad",
        url: "http://localhost:5173/Hyderabad",
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
