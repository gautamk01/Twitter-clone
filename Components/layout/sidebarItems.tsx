import React from "react";
import { IconType } from "react-icons";
interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon,
  onClick,
}) => {
  return <div>SidebarItem</div>;
};
