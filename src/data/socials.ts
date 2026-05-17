import { Github, Linkedin, Instagram, Dribbble, Mail } from "lucide-react";
import { profile } from "./profile";

export const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "www.linkedin.com/in/sohan-pal-b79b33309", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Sohan-pal", icon: Github },
];
