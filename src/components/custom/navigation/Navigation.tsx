import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import { Navbar1Props, MenuItem } from "./config"

const Navigation = ({ configs }:{ configs: Navbar1Props}) => {

    const { logo, menu, auth } = configs

    return (
        <section className="py-2 px-4">
            <div className="w-full">
                {/* Desktop Menu */}
                <nav className="hidden justify-between lg:flex">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-default">
                        <img src={logo?.src} className="max-h-8" alt={logo?.alt} />
                        <span className="text-lg font-semibold tracking-tighter">
                            App
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                {menu?.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Button asChild variant="outline" size="sm">
                            <Link href={`${auth?.login.url}`}>{auth?.login.title}</Link>
                        </Button>
                        <Button asChild size="sm">
                            <Link href={`${auth?.signup.url}`}>{auth?.signup.title}</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src={logo?.src} className="max-h-8" alt={logo?.alt} />
                        </div>
                        <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                            <Menu className="size-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-auto">
                            <SheetHeader>
                            <SheetTitle>
                                <Link href={`${logo?.url}`} className="flex items-center gap-2">
                                    <img src={logo?.src} className="max-h-8" alt={logo?.alt} />
                                </Link>
                            </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-6 p-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="flex w-full flex-col gap-4"
                            >
                                {menu?.map((item) => renderMobileMenuItem(item))}
                            </Accordion>

                            <div className="flex flex-col gap-3 ">
                                <Button asChild variant="outline">
                                    <Link href={`${auth?.login.url}`}>{auth?.login.title}</Link>
                                </Button>
                                <Button asChild>
                                    <Link href={`${auth?.signup.url}`}>{auth?.signup.title}</Link>
                                </Button>
                            </div>
                            </div>
                        </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navigation };
