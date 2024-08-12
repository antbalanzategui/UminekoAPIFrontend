"use client";

import React, { FC, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface Soundtrack {
  id: number;
  videoId: string;
  title: string;
  link: string;
  episode: number;
  composer: string;
  thumbnail: string;
}

interface SoundtrackProps {
  soundtracks: Soundtrack[];
}

const Soundtrack: FC<SoundtrackProps> = ({ soundtracks }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loadingStates, setLoadingStates] = useState<boolean[]>(new Array(soundtracks.length).fill(true));

  useEffect(() => {
    if (!api) {
      return;
    }

    const totalSlides = api.scrollSnapList().length;
    setCount(totalSlides);
    setCurrent(api.selectedScrollSnap() + 1);
    setProgress(((api.selectedScrollSnap() + 1) / totalSlides) * 100);

    api.on("select", () => {
      const currentSlide = api.selectedScrollSnap() + 1;
      setCurrent(currentSlide);
      setProgress((currentSlide / totalSlides) * 100);
    });
  }, [api]);

  const handleIframeLoad = (index: number) => {
    setLoadingStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <section className="max-w-screen-xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Soundtrack Carousel</h2>
      <Carousel setApi={setApi} className="" opts={{ align: "start", loop: true }} orientation="horizontal">
        <CarouselContent className="flex -ml-4">
          {soundtracks.map((soundtrack, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex pl-4">
              <div className="p-1 flex flex-col w-full">
                <Card className="flex flex-col flex-grow">
                  <CardHeader>
                    <h3>{soundtrack.title}</h3>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center p-6 flex-grow">
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <iframe
                        className={`absolute top-0 left-0 w-full h-full ${loadingStates[index] ? 'hidden' : ''}`}
                        src={`https://www.youtube.com/embed/${soundtrack.videoId}?autoplay=0&modestbranding=1&rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={soundtrack.title}
                        onLoad={() => handleIframeLoad(index)}
                      ></iframe>
                      {loadingStates[index] && (
                        <Skeleton className="absolute top-0 left-0 w-full h-full" />
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <h1>Composer: {soundtrack.composer}</h1>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center">
        <div className="text-sm text-muted-foreground mb-2">Slide {current} of {count}</div>
        <Progress value={progress} className="w-full" />
      </div>
    </section>
  );
};

export default Soundtrack;
