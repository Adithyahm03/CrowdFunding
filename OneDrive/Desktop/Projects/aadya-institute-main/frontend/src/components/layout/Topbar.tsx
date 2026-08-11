import React from 'react';
import { Menu, Search, Moon, Bell, MessageSquare, Globe, Maximize, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

interface TopbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  collapsed,
  setCollapsed,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const { user, logout } = useAuth();
  
  return (
    <header className={cn(
      "h-20 fixed top-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-gray-100 transition-all duration-300",
      collapsed ? "left-[80px]" : "left-[280px]",
      "max-lg:left-0"
    )}>
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="secondary" 
          size="icon" 
          onClick={() => {
            if (window.innerWidth < 1024) {
              setIsMobileOpen(!isMobileOpen);
            } else {
              setCollapsed(!collapsed);
            }
          }}
          className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg shadow-none"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="hidden sm:flex items-center relative max-w-md w-full ml-4">
          <Input 
            placeholder="Search" 
            className="pl-4 pr-10 bg-gray-50 border-none rounded-lg h-10 focus-visible:ring-1 focus-visible:ring-blue-500 shadow-none text-gray-700"
          />
          <Search className="absolute right-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg h-10 w-10">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg h-10 w-10 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg h-10 w-10">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-red-50 text-red-500 hover:bg-red-100 rounded-lg h-10 w-10 overflow-hidden">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg h-10 w-10">
            <Maximize className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg h-10 w-10">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full ml-2">
              <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                <AvatarImage src="/placeholder-user.jpg" alt={user?.name || "User"} />
                <AvatarFallback className="bg-indigo-100 text-indigo-600">{user?.name ? user.name.charAt(0) : "U"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-slate-800">{user?.name || "Admin User"}</p>
                <p className="text-xs leading-none text-slate-500">
                  {user?.email || "admin@example.com"}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout && logout()} className="text-red-600 focus:text-red-700">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
