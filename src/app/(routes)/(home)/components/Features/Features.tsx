import { Icon } from 'lucide-react';
import Reveal from '@/components/shared/Reveal/Reveal';
import { dataFeatures } from './Features.data';

export default function Features() {
  return (
    <div className='mx-auto max-w-6xl p-6 lg:py-48'>
      <h3 className='text-2xl font-bold lg:text-6xl'>Key feature</h3>
      <p className='mt-5 max-w-lg text-xl lg:mb-16 lg:mt-10'>
        We are all about our client conform and safety. That's why we provide
        the best service you can image
      </p>
      <div className='grid grid-cols-2 gap-x-5 lg:grid-cols-4'>
        {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
          <Reveal
            key={text}
            classname='p-6 rounded-xl hover:shadow-md flex flex-col items-center'
            position='right'
            delay={delay}
          >
            <div
              className={`rounded-full ${bg} mb-4 flex w-fit justify-center p-4
            `}
            >
              <Icon className='h-8 w-8' />
            </div>
            <p className='text-center text-xl font-bold'>{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
