import CardCar from './CardCar/CardCar';
import { ListCarsProps } from './ListCars.types';

export default function ListCars(props: ListCarsProps) {
  const { cars } = props;
  return (
    <div className='my-4 grid grid-cols-2 gap-6 lg:grid-cols-4'>
      {cars.map((car: any) => (
        <CardCar car={car} key={car.id} />
      ))}
    </div>
  );
}
