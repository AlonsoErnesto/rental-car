import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { isAdministrator } from '@/lib/isAdministrator';
import TableReservers from './components/TableReserves/TableReserves';

export default async function pageReservesAdmin() {
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId || isAdministrator(userId)) return redirect('/');

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  console.log(user);
  return (
    <div>
      <h1 className='mb-4 text-3xl'>Hola mundo cruel</h1>
      <TableReservers orders={orders} />
    </div>
  );
}
