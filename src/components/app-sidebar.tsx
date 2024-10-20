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
        url: "https://weather-ui-r7xp.vercel.app/Delhi",
        icon: Map,
    },
    {
        title: "Mumbai",
        url: "https://weather-ui-r7xp.vercel.app/Mumbai",
        icon: Earth,
    },
    {
        title: "Chennai",
        url: "https://weather-ui-r7xp.vercel.app/Chennai",
        icon: Map,
    },
    {
        title: "Bangalore",
        url: "https://weather-ui-r7xp.vercel.app/Bangalore",
        icon: Earth,
    },
    {
        title: "Kolkata",
        url: "https://weather-ui-r7xp.vercel.app/Kolkata",
        icon: Map,
    },
    {
        title: "Hyderabad",
        url: "https://weather-ui-r7xp.vercel.app/Hyderabad",
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
