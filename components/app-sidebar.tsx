"use client";

import * as React from "react";
import { Calendar, ChartColumn, Command, MessagesSquare } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  pages: unknown;
}

export function AppSidebar({ pages, ...props }: AppSidebarProps) {
  const datas = pages?.map((e: any) => ({
    title: e.name,
    url: "#",
    image: e.picture,
    isActive: false,
    items: [
      {
        title: "Publish",
        icon: Calendar,
      },
      {
        title: "Schedule",
        icon: MessagesSquare,
      },
      {
        title: "Analytics",
        icon: ChartColumn,
      },
    ],
  }));

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={datas} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
