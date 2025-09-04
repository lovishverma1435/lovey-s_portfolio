import { FloatingDock2 } from "./PageController2";
import {
  IconHome,
  IconMessageChatbot, 
  IconDeviceDesktop,
  IconMessage,
  IconAward,
} from "@tabler/icons-react";

export function FloatingDockDemo2() {
  const links = [
    { title: "Home", icon: <IconHome  className="h-full w-full  " />,href:"/" },
    { title: "About", icon: <IconMessageChatbot  className="h-full w-full  " />, href: "/aboutme" },
    { title: "Projects", icon: <IconDeviceDesktop  className="h-full w-full  " />, href: "/projects" },
    { title: "Contact", icon: <IconMessage className="h-full w-full  " />, href: "/contact" },
    
  ];
 
  return (
    <div className="flex items-center justify-center  bg-transparent ">
      <FloatingDock2 mobileClassName="translate-y-20 " items={links} />
    </div>
  );
}