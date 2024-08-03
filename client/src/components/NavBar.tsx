// client/components/NavBar.js
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GitHub, Menu, X } from 'react-feather'; // Import Menu and X for the hamburger icon
import { ModeToggle } from './ModeToggle'; // Import the ModeToggle component
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import Image from 'next/image'; // Import next/image for optimized image loading

export default function NavBar() {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isMounted) {
    return (
      <nav className="flex items-center justify-between p-4 text-black dark:text-white bg-stone-50 dark:bg-stone-950">
        <Skeleton className="w-full h-12 bg-stone-100 dark:bg-stone-900" />
      </nav>
    );
  }

  return (
    <>
      <nav className="flex items-center justify-between p-4 text-black dark:text-white bg-stone-50 dark:bg-stone-950">
        <div className="flex items-center space-x-5">
          <div className="md:hidden flex items-center">
            <Button variant="outline" size="icon" onClick={toggleSidebar} className="hover:bg-stone-100 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-700">
              <Menu />
            </Button>
          </div>
          <Link href="/" legacyBehavior passHref>
            <a className="hidden md:flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/BattlerLogoLight.png"
                  alt="Logo"
                  className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${resolvedTheme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
                  layout="fill"
                />
                <Image
                  src="/BattlerLogoDark.png"
                  alt="Logo"
                  className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                  layout="fill"
                />
              </div>
              <span>UMINEKO-API</span>
            </a>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <NavigationMenu>
            <NavigationMenuList className="space-x-5">
              <Breadcrumb className="flex items-center space-x-5">
                <BreadcrumbList className="space-x-4 text-stone-600 dark:text-stone-300">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/examples">Examples</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/login">Login</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/signup">Sign Up</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <NavigationMenuItem>
                <a href="https://github.com/antbalanzategui/UminekoAPI" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover:bg-stone-100 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-700">
                    <GitHub className='h-[1.2rem] w-[1.2rem]' />
                  </Button>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {isMounted && <ModeToggle />}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-5 md:hidden">
          <a href="https://github.com/antbalanzategui/UminekoAPI" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="hover:bg-stone-100 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-700">
              <GitHub className='h-[1.2rem] w-[1.2rem]' />
            </Button>
          </a>
          {isMounted && <ModeToggle />}
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
      )}
      <div className={cn("border-r border-stone-200 dark:border-stone-700 fixed inset-y-0 left-0 w-72 bg-stone-50 dark:bg-stone-950 z-50 transform md:hidden transition-transform duration-300", {
        "-translate-x-full": !isSidebarOpen,
        "translate-x-0": isSidebarOpen
      })}>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-1">
            <div className="relative h-8 w-8">
              <Image
                src="/BattlerLogoLight.png"
                alt="Logo"
                className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${resolvedTheme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
                layout="fill"
              />
              <Image
                src="/BattlerLogoDark.png"
                alt="Logo"
                className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                layout="fill"
              />
            </div>
            <span>UMINEKO-API</span>
          </div>
          <Button variant="outline" size="icon" onClick={toggleSidebar} className="hover:bg-stone-100 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-700">
            <X />
          </Button>
        </div>
        <div className="py-0 px-8 overflow-y-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <Breadcrumb className="py-0 px-8 text-black dark:text-white">
                <BreadcrumbList className="flex flex-col space-y-4 text-stone-600 dark:text-stone-300">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className='block'>Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs" className='block'>Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/examples" className='block'>Examples</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/login" className='block'>Login</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/signup" className='block'>Sign Up</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
