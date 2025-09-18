'use client';

import axios from 'axios';
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ButtonEditCar from './ButtonEditCar/ButtonEditCar';
import { CardCarProps } from './CardCar.types';

export default function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const deleteCar = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast('🎉 Delete car successfully');
    } catch (error) {
      toast('Something went wrong.');
    } finally {
      router.refresh();
      setIsLoading(false);
      setOpenDialogDelete(false);
    }
  };

  const hanlderPublishCar = async (publish: boolean) => {
    setIsLoading(true);
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      toast(publish ? 'Car published.' : 'Car unpublished.');
    } catch (error) {
      toast('Something went wrong');
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  return (
    <div className='relative rounded-lg bg-white shadow-md hover:shadow-lg'>
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className='h-96 w-full rounded-lg object-cover'
      />
      {car.isPublish ? (
        <p className='absolute right-0 top-0 w-full rounded-t-lg bg-green-700 p-1 text-center text-white'>
          Published
        </p>
      ) : (
        <p className='absolute left-0 right-0 top-0 w-full rounded-t-lg bg-red-300 p-1 text-center text-white'>
          Not Published
        </p>
      )}
      <div className='relative p-3'>
        <div className='mb-3 flex flex-col gap-x-4'>
          <p className='min-h-16 text-xl lg:min-h-fit'>{car.name}</p>
          <p>{car.priceDay}</p>
        </div>
        <div className='grid gap-x-4 md:grid-cols-2'>
          <p className='flex items-center '>
            <Gem className='mr-2 h-4 w-4' strokeWidth={1} />
            {car.type}
          </p>
          <p className='flex items-center '>
            <Wrench className='mr-2 h-4 w-4' strokeWidth={1} />
            {car.transmission}
          </p>
          <p className='flex items-center '>
            <Users className='mr-2 h-4 w-4' strokeWidth={1} />
            {car.people}
          </p>
          <p className='flex items-center '>
            <Fuel className='mr-2 h-4 w-4' strokeWidth={1} />
            {car.engine}
          </p>
          <p className='flex items-center '>
            <Gauge className='mr-2 h-4 w-4' strokeWidth={1} />
            {car.cv}
          </p>
        </div>

        <div className='mt-3 flex justify-between gap-x-4'>
          {/* 🔹 Botón Delete con confirmación */}
          <Dialog open={openDialogDelete} onOpenChange={setOpenDialogDelete}>
            <DialogTrigger asChild>
              <Button variant='outline'>
                Delete <Trash className='m-4 ml-2 h-4' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete car</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete <b>{car.name}</b>? This action
                  cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button
                  variant='destructive'
                  onClick={deleteCar}
                  disabled={isLoading}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className='mt-3 w-full'
            variant='outline'
            onClick={() => hanlderPublishCar(false)}
            disabled={isLoading}
          >
            Unpublish
          </Button>
        ) : (
          <Button
            className='mt-3 w-full'
            onClick={() => hanlderPublishCar(true)}
            disabled={isLoading}
          >
            <Upload className='ml-2 h-4 w-4' />
            Publish
          </Button>
        )}
      </div>
    </div>
  );
}
