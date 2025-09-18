import Image from 'next/image';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function FirstBlock() {
  return (
    <div className='grid items-center lg:grid-cols-2 lg:px-0 lg:py-10'>
      <Reveal classname='p-6 lg:pl-40' position='bottom'>
        <h1 className='text-6xl font-bold  md:text-7xl lg:text-8xl'>
          Premium <span className='block'>Rental cards</span> in Perú
        </h1>
        <p className='max-2-sm mt-2 text-xl lg:mt-5 lg:text-xl'>
          Dont deny yourself pleasure of driving the best premium cars from
          around the world hace and now
        </p>
      </Reveal>

      <Reveal classname='flex justify-end' position='right'>
        <Image
          src='/image/girl.png'
          alt='Rent Cars'
          width={600}
          height={600}
          priority
          className='object-cover
          [mask-image:linear-gradient(white_85%,transparent)]
          [mask-repeat:no-repeat]
          [mask-size:100%_100%]'
        />
      </Reveal>
    </div>
  );
}
