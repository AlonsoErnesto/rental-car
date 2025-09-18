import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCars() {
  const numberItems = 8;
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {[...Array(numberItems)].map((_, index) => (
        <div key={index}>
          <Skeleton className='h-[200px] w-full rounded-xl' />
          <Skeleton className='mt-5 h-4 w-[200px]' />
          <Skeleton className='mt-5 h-4 w-[200px]' />
          <Skeleton className='mt-5 h-4 w-[200px]' />
        </div>
      ))}
      <h1>skelon carks</h1>
    </div>
  );
}
