import { ChefHatIcon, Globe, PartyPopper } from "lucide-react";

interface iAppProps {
  id: number;
  name: string;
  title: string;
  image: React.ReactNode;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "template",
    title: "Template",
    image: <Globe />,
  },
  {
    id: 1,
    name: "uiKit",
    title: "Ui Kit",
    image: <ChefHatIcon />,
  },
  {
    id: 2,
    name: "icons",
    title: "Icons",
    image: <PartyPopper />,
  },
];
