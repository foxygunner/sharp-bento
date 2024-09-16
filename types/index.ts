import { Icons } from "@/components/common/icons";

export interface data_types {
  title: string;
  image: string;
  episode_number: number;
  type: string;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface MainNavProps {
  items?: NavItem[];
}
