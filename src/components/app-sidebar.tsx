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

// Menu items.
const items = [
    {
        title: "Delhi",
        url: "#",
        icon: Map,
    },
    {
        title: "Mumbai",
        url: "#",
        icon: Earth,
    },
    {
        title: "Chennai",
        url: "#",
        icon: Map,
    },
    {
        title: "Bangalore",
        url: "#",
        icon: Earth,
    },
    {
        title: "Kolkata",
        url: "#",
        icon: Map,
    },
    {
        title: "Hyderabad",
        url: "#",
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
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
