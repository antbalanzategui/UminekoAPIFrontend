'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GitHub, Menu, X } from 'react-feather';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import Image from 'next/image';

export default function NavBar() {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
      <nav className={`flex items-center justify-between p-4 text-black dark:text-white bg-stone-50 bg-opacity-90 dark:bg-stone-950 dark:bg-opacity-90 backdrop-blur-md z-50 sticky top-0 ${isSidebarOpen ? 'bg-opacity-0 z-0' : ''}`}>
        <div className="flex items-center space-x-5">
          <div className="md:hidden flex items-center">
            <Button variant="outline" size="icon" onClick={toggleSidebar} className="hover:bg-stone-100 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-700">
              <Menu />
            </Button>
          </div>
          <Link href="/" legacyBehavior passHref onClick={closeSidebar}>
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
                    <Link href="/docs" onClick={closeSidebar} className="transition-colors duration-300 hover:text-black dark:hover:text-white">Documentation</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/examples" onClick={closeSidebar} className="transition-colors duration-300 hover:text-black dark:hover:text-white">Examples</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/login" onClick={closeSidebar} className="transition-colors duration-300 hover:text-black dark:hover:text-white">Login</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/signup" onClick={closeSidebar} className="transition-colors duration-300 hover:text-black dark:hover:text-white">Sign Up</Link>
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
                    <Link href="/" className='block' onClick={closeSidebar}>Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/docs" className='block' onClick={closeSidebar}>Documentation</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/examples" className='block' onClick={closeSidebar}>Examples</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/login" className='block' onClick={closeSidebar}>Login</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href="/signup" className='block' onClick={closeSidebar}>Sign Up</Link>
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
