'use client';

import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Image from 'next/image';
import Reveal from '@/components/shared/Reveal/Reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { dataBrands } from './SliderBrands.data';

export default function SliderBrands() {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
    }),
  );
  return (
    <Reveal
      position='bottom'
      classname='flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10'
    >
      <Carousel
        className='mx-auto w-full max-w-6xl'
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className='basis-4/4 md:basis-2/4 lg:basis-1/4'
            >
              <Image
                src={`/image/${url}`}
                alt='brand'
                width={150}
                height={150}
                className='aspect-square object-contain   [mask-image:radial-gradient(circle,white_50%,transparent_70%)]
                [mask-position:center]
                [mask-repeat:no-repeat]
                [mask-size:contain]'
                style={{ maxWidth: '150px', maxHeight: '150px' }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
