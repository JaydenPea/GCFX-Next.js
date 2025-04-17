"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Home, Settings, BarChart2, Users, Menu, X } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  expanded: boolean;
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside 
      className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
        expanded ? 'w-64' : 'w-20'
      } flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {expanded ? (
          <h1 className="text-xl font-bold">Dashboard</h1>
        ) : (
          <span className="mx-auto text-xl font-bold">D</span>
        )}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="p-1 rounded-lg hover:bg-gray-800"
        >
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          <NavItem icon={<Home />} label="Home" href="/" expanded={expanded} />
          <NavItem icon={<BarChart2 />} label="Analytics" href="/analytics" expanded={expanded} />
          <NavItem icon={<Users />} label="Users" href="/users" expanded={expanded} />
          <NavItem icon={<Settings />} label="Settings" href="/settings" expanded={expanded} />
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        {expanded ? (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-lg font-bold">J</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-400">Admin</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-lg font-bold">J</span>
          </div>
        )}
      </div>
    </aside>
  );
}

function NavItem({ icon, label, href, expanded }: NavItemProps) {
  return (
    <li>
      <Link 
        href={href}
        className={`flex items-center rounded-lg p-3 hover:bg-gray-800 transition-colors ${
          expanded ? 'justify-start' : 'justify-center'
        }`}
      >
        <span className="flex-shrink-0">{icon}</span>
        {expanded && <span className="ml-3">{label}</span>}
      </Link>
    </li>
  );
}