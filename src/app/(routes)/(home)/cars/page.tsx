import Navbar from '@/components/shared/Navbar';
import { db } from '@/lib/db';
import FiltersAndListCars from './components/FiltersAndListCars';
import HeaderCars from './components/HeaderCars';

export default async function pageCars() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createAt: 'desc',
    },
  });

  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl p-6'>
        <HeaderCars />
        <div>
          <FiltersAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
}
