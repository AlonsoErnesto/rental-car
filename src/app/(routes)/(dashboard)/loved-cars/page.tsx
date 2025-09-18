import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import ListLovedCars from './components/ListLovedCars/ListLovedCars';

export default async function pageLovedCards() {
  const { userId } = await auth();
  if (!userId) return redirect('/');

  return (
    <div>
      <h1 className='pb-10 pt-3 text-3xl'>Cars favorites list.</h1>
      <ListLovedCars />
    </div>
  );
}
