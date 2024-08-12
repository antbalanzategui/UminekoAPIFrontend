import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardImage,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface Portrait {
  id: number;
  url: string;
  episode: number;
  characters: string;
  type: string;
}

interface PortraitsProps {
  portraits: Portrait[];
}

const Portraits: FC<PortraitsProps> = ({ portraits }) => {
  return (
    <section className="max-w-screen-xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Character Portraits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-4">
        {portraits.map((portrait) => (
          <Card key={portrait.id} className="hover:shadow-lg transition-shadow duration-300 bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-700 flex flex-col">
            <CardHeader className="relative p-0">
              <AspectRatio ratio={1181 / 1678} className="relative">

                <CardImage
                  src={portrait.url}
                  alt={`Portrait of ${portrait.characters}`}
                  className="object-cover rounded-t-md absolute inset-0 transition-opacity duration-300 hover:opacity-0 rounded-sm"
                />
                <CardImage
                  src={`/portraits/episode${portrait.episode}Portrait.jpg`}
                  alt={`Hover Portrait of ${portrait.characters}`}
                  className="object-cover rounded-t-md absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 rounded-sm"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="py-4 flex-1">
              <CardTitle className="pb-2">Episode {portrait.episode}</CardTitle>
              <Separator className="bg-stone-200 dark:bg-stone-700"/>
              <div className="pt-2">
                {portrait.characters.split(',').map((character, index) => (
                  <Badge variant="outline" key={index} className="mr-2 mt-2 border-stone-200 dark:border-stone-700">
                    {character.trim()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portraits;
