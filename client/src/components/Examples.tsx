import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import Image from 'next/image';

export default function Examples() {
  const cardData = [
    {
      title: "Portraits",
      description: "Explore character portraits.",
      image: "/path/to/portrait-image.jpg",
      footer: "Click Here"
    },
    {
      title: "Soundtrack",
      description: "Listen to the series' soundtrack.",
      image: "/path/to/soundtrack-image.jpg",
      footer: "Click Here"
    },
    {
      title: "Image Gallery",
      description: "View a gallery of images.",
      image: "/path/to/gallery-image.jpg",
      footer: "Click Here"
    },
    {
      title: "More Examples",
      description: "Discover more about the API.",
      image: "/path/to/more-image.jpg",
      footer: "Click Here"
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="md:col-span-2 lg:col-span-2 order-1 md:order-2 flex flex-col text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What Umineko API is capable of</h2>
          <h3 className="text-2xl font-bold mb-4">Explore What Umineko API Can Do</h3>
          <p className="text-lg mb-4">Check out the examples on the left to see what the Umineko API can offer. Whether you're looking for character portraits, soundtracks, image galleries, or more, you'll find plenty to explore.</p>
          <p className="text-lg">With the Umineko API, you have access to a wealth of information and media to enhance your projects and applications.</p>
        </div>
        <div className="md:col-span-2 lg:col-span-3 order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="relative h-40">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-md"
                  layout="fill"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-blue-500 cursor-pointer">{card.footer}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
