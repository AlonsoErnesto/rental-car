import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/shared/Reveal/Reveal';
import { Button } from '@/components/ui/button';

export default function DriveToday() {
  return (
    <div className='mx-auto max-w-7xl p-6 lg:my-32'>
      <div className="relative overflow-hidden rounded-xl bg-[url('/image/girl1.jpg')] bg-cover bg-center bg-no-repeat p-6 lg:p-32">
        {/* Overlay oscuro */}
        <div className='absolute inset-0 rounded-xl bg-black/50'></div>

        {/* Contenido encima del overlay */}
        <div className='relative gap-x-6 lg:flex'>
          <div>
            <h3 className='text-4xl text-white'>Drive your dream car today</h3>
            <p className='my-5 text-xl text-white'>
              Register and explore the world of premium cars
            </p>
            <Link href='sign-in'>
              <Button variant='outline' size='lg'>
                Register here
              </Button>
            </Link>
          </div>
          <Reveal
            position='bottom'
            classname='-top-40 lg:absolute lg:-right-56'
          >
            <Image
              src='/image/girl.png'
              alt='girl 1'
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
