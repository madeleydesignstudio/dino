"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselItem {
  id: string;
  label: string;
  number: number;
  icon: "globe" | "close";
}

const items: CarouselItem[] = [
  {
    id: "1",
    label: "Superpower",
    number: 1,
    icon: "close",
  },
  {
    id: "2",
    label: "Girlfriends",
    number: 2,
    icon: "close",
  },
  {
    id: "3",
    label: "Character AI",
    number: 3,
    icon: "close",
  },
  {
    id: "4",
    label: "Bastion Bees",
    number: 4,
    icon: "globe",
  },
  {
    id: "5",
    label: "Eliza Doolittle",
    number: 5,
    icon: "close",
  },
  {
    id: "6",
    label: "Waverly",
    number: 6,
    icon: "globe",
  },
  {
    id: "7",
    label: "Eliza Doolittle",
    number: 7,
    icon: "close",
  },
  {
    id: "8",
    label: "Waverly",
    number: 8,
    icon: "globe",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="w-full h-fit mx-auto pb-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 1,
          startIndex: 2,
        }}
        className="w-full h-full "
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="px-4 basis-1/5 transition-all"
            >
              <Card className="transition-transform duration-200 hover:scale-110">
                <div className="flex items-center justify-center aspect-[3/4] w-full">
                  <span className="text-6xl font-bold">{item.number}</span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
