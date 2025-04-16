import { Book, Sunset, Trees, Zap } from "lucide-react";
import { ReactNode } from "react";

export interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: ReactNode;
    items?: MenuItem[];
  }
  
export interface Navbar1Props {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    menu?: MenuItem[];
    auth?: {
      login: {
        title: string;
        url: string;
      };
      signup: {
        title: string;
        url: string;
      };
    };
}

export const configs: Navbar1Props = {
    logo : {
        url: "/dashboard/home",
        src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
        alt: "logo",
        title: "Shadcnblocks.com",
    },
    menu : [
        { title: "Home", url: "/dashboard/home" },
        {
            title: "Catalogs",
            url: "catalogs",
            items: [
                {
                    title: "Menus",
                    description: "Pre defined menus",
                    url: "/dashboard/catalogs/menus",
                    icon: <Book className="size-5 shrink-0" />
                },
                {
                    title: "Suppliers",
                    description: "List of suppliers",
                    url: "/dashboard/catalogs/suppliers",
                    icon: <Trees className="size-5 shrink-0" />,
                },
                {
                    title: "Clients",
                    description: "Previous clients",
                    url: "/dashboard/catalogs/clients",
                    icon: <Sunset className="size-5 shrink-0" />,
                },
            ],
        },
        {
            title: "Budget",
            url: "#",
            items: [
                {
                    title: "New budget",
                    description: "Create a new budget for client",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "/dashboard/budget/new",
                },
                {
                    title: "All budgets",
                    description: "List with all budgets",
                    icon: <Sunset className="size-5 shrink-0" />,
                    url: "/dashboard/budget/new",
                },
            ],
        },
        {
            title: "Employees",
            url: "#",
        },
    ],
    auth: {
        login: { title: "Login", url: "#" },
        signup: { title: "Sign up", url: "#" },
    },
    }