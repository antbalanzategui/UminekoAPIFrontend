import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Book, Music, Info, Film, Image as ImageIcon, Users } from 'react-feather'; // Import necessary icons

interface Feature {
  title: string;
  description: string;
  content: string;
  footer: string;
  icon: React.ReactNode; // Add an icon property
}

const features: Feature[] = [
  { title: "Characters", description: "Get detailed information about all characters in Umineko.", content: "Explore profiles, backstories, and roles of each character.", footer: "Read More", icon: <Users /> },
  { title: "Soundtrack", description: "Explore the complete soundtrack of the series.", content: "Listen to your favorite tracks and discover new ones.", footer: "Listen Now", icon: <Music /> },
  { title: "Trivia", description: "Discover interesting trivia and facts about Umineko.", content: "Uncover hidden details and behind-the-scenes info.", footer: "Learn More", icon: <Info /> },
  { title: "Episodes", description: "Access summaries and details about each episode.", content: "Dive into episode guides and detailed analyses.", footer: "Explore Episodes", icon: <Film /> },
  { title: "Images", description: "Browse through a gallery of images from the series.", content: "View and download high-quality images.", footer: "View Gallery", icon: <ImageIcon /> },
  { title: "Relations", description: "Understand the relationships between characters.", content: "See how characters are connected and their dynamics.", footer: "View Relations", icon: <Book /> },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 mt-24 px-12 max-w-screen-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <Card className="hover:shadow-lg transition-shadow duration-300 h-72 md:h-72 lg:h-72 flex flex-col justify-between items-center text-center">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-3 text-amber-400 dark:text-amber-500">{feature.icon}</div>
                    <div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p>{feature.content}</p>
                  </CardContent>
                  <CardFooter className="text-center">
                    <p className="text-blue-500 cursor-pointer">{feature.footer}</p>
                  </CardFooter>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>{feature.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Features;
