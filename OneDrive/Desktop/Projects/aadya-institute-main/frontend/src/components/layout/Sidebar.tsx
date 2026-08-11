import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavChild {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  icon?: React.ElementType;
  href?: string;
  children?: NavChild[];
}

interface SidebarProps {
  collapsed: boolean;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, isMobileOpen, setIsMobileOpen, navItems }) => {
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    'Students': false,
    'Faculty': false,
  });

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside 
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 transition-all duration-300 ease-in-out flex flex-col shadow-sm",
          collapsed ? "w-[80px]" : "w-[280px]",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-20 flex items-center px-6 border-b border-gray-100/50 justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3 w-full">
              <img src="/aadya_logo__1_-removebg-preview.png" alt="Aadya Institute" className="h-10 w-auto object-contain max-w-[100px]" />
              <div className="w-[1px] h-8 bg-gray-200 flex-shrink-0"></div>
              <img src="/Edify Logo (2).png" alt="Edify Institute" className="h-10 w-auto object-contain max-w-[100px]" />
            </div>
          )}
          {collapsed && (
            <div className="flex flex-col justify-center items-center gap-2 mx-auto py-2">
              <img src="/aadya_logo__1_-removebg-preview.png" alt="Aadya" className="h-5 w-auto object-contain" />
              <div className="w-4 h-[1px] bg-gray-200"></div>
              <img src="/Edify Logo (2).png" alt="Edify" className="h-5 w-auto object-contain" />
            </div>
          )}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-gray-500"
            onClick={() => setIsMobileOpen(false)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 custom-scrollbar">
          {navItems.map((item, idx) => {

            if (item.children) {
              const isOpen = openGroups[item.title];
              const hasActiveChild = item.children.some(child => location.pathname === child.href);
              const Icon = item.icon!;
              
              return (
                <div key={item.title} className="flex flex-col mb-1">
                  <button
                    onClick={() => toggleGroup(item.title)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      hasActiveChild && !isOpen ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-gray-50",
                      isOpen ? "bg-blue-100/50 text-blue-700" : "",
                      collapsed && "justify-center px-0 py-3"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("h-5 w-5", hasActiveChild ? "text-blue-600" : "text-gray-400")} />
                      {!collapsed && <span>{item.title}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown className={cn("h-4 w-4 transition-transform text-gray-400", isOpen ? "rotate-180" : "")} />
                    )}
                  </button>
                  
                  {!collapsed && isOpen && (
                    <div className="mt-1 flex flex-col gap-1 ml-4 pl-4 border-l border-gray-100">
                      {item.children.map(child => {
                        const isChildActive = location.pathname === child.href;
                        return (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                              isChildActive 
                                ? "text-blue-600 bg-transparent" 
                                : "text-slate-500 hover:text-slate-900 hover:bg-gray-50"
                            )}
                          >
                            {isChildActive && (
                              <div className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-white" />
                            )}
                            <div className={cn("w-1.5 h-1.5 rounded-full border border-current", isChildActive ? "bg-blue-600" : "bg-transparent")} />
                            {child.title}
                          </NavLink>
                        )
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = item.href && (location.pathname === item.href || (item.href !== '/admin/dashboard' && location.pathname.startsWith(item.href)));
            const Icon = item.icon!;
            return (
              <NavLink
                key={item.href || idx}
                to={item.href || '#'}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors mb-1",
                  isActive 
                    ? "bg-blue-50 text-blue-600" 
                    : "text-slate-600 hover:bg-gray-50",
                  collapsed && "justify-center px-0 py-3"
                )}
                title={collapsed ? item.title : undefined}
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon className={cn("h-5 w-5", isActive ? "text-blue-600" : "text-gray-400")} />
                {!collapsed && <span>{item.title}</span>}
                {!collapsed && <ChevronRight className="h-4 w-4 ml-auto text-gray-300" />}
              </NavLink>
            )
          })}
        </div>
      </aside>
    </>
  );
};
