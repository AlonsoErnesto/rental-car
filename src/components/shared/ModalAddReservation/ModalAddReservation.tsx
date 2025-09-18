import axios from 'axios';
import { addDays } from 'date-fns';
import { toast } from 'sonner';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Car } from '../../../generated/prisma';
import { Button } from '../../ui/button';
import CalendarSelector from './CalendarSelector/CalendarSelector';
import { ModalAddReservationProps } from './ModalAddReservation.types';

export default function ModalAddReservacion(props: ModalAddReservationProps) {
  const { car } = props;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: new Date(), to: addDays(new Date(), 5) });
  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post('/api/checkout', {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });
    window.location = response.data.url;
    toast('Car reserved');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline' className='mt-3 w-full'>
          Reservar vehiculo
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Selecciona las fechas en las que quieres alquilar el coche:
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Reservar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
