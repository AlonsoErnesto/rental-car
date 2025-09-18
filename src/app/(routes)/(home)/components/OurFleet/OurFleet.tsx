import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  categoryOutFleet,
  dataFirstBlockOurFleet,
  dataSecondBlockOurFleet,
} from './OurFleet.data';

export default function OurFleet() {
  return (
    <div className='max-2-6xl lh:py-40 mx-auto p-6 py-12 text-center'>
      <h3 className='text-2xl font-bold lg:text-6xl'>Our Vehicle Feet</h3>
      <p className='mx-auto mb-5 mt-2 w-full max-w-2xl text-center text-lg lg:mb-10 lg:mt-5 lg:text-xl'>
        Dont deny yourself pleasure of driving the best premium cars form around
        the world here and now the world.
      </p>
      <div className='mx-auto mb-5 grid max-w-2xl grid-cols-2 items-center justify-center gap-4 lg:grid-cols-6'>
        {categoryOutFleet.map(({ name, active }) => (
          <div
            key={name}
            className={cn(
              'rounded-xl px-3 py-2',
              active ? 'bg-black text-white' : 'bg-slate-100',
            )}
          >
            {name}
          </div>
        ))}
      </div>
      <div className='mb-10 mt-10'>
        {/* Primer bloque */}
        <div className='mb-6 grid w-auto  grid-cols-5 items-center justify-between'>
          {dataFirstBlockOurFleet.map(({ url }) => (
            <div key={url} className='flex items-center justify-center'>
              <Image
                src={`/image/${url}`}
                alt='car'
                width={250}
                height={350}
                className='h-[350px] w-[250px] rounded-xl object-cover'
              />
            </div>
          ))}
        </div>

        {/* Segundo bloque */}
        <div className='mx-auto grid max-w-5xl grid-cols-6 justify-items-center gap-[3px]'>
          {dataSecondBlockOurFleet.map(({ url }) => (
            <div key={url} className='flex items-center justify-center'>
              <Image
                src={`/image/${url}`}
                alt='car'
                width={150}
                height={200}
                className='aspect-[3/2] h-[200px] w-[150px] rounded-xl object-cover'
              />
            </div>
          ))}
        </div>
      </div>
      <Link href='/cars'>
        <Button className='mt-5 rounded-xl p-6 text-lg' variant='outline'>
          Show all models
          <MoveRight className='ml-2' />
        </Button>
      </Link>
    </div>
  );
}
