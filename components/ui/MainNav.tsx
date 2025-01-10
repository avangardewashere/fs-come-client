"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: any;
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `'/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="mx-6 flex items-center space-x-4 lf:space-x-6">
      {routes.map((route) => {
        <Link key={route.href} href={route.href}>
          {route.label}
        </Link>;
      })}
    </div>
  );
};

export default MainNav;
