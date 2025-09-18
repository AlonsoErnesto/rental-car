'use client';

import { useAuth } from '@clerk/nextjs';
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ModalAddReservacion from '@/components/shared/ModalAddReservation/ModalAddReservation';
import SkeletonCars from '@/components/shared/SkeletonCars';
import { Button } from '@/components/ui/button';
import { Car } from '@/generated/prisma';
import { useLovedCars } from '@/hooks/use-loved-cars';
import { ListCarsProps } from './ListCars.types';

export default function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) return <SkeletonCars />;

  return (
    <>
      {cars.length === 0 && (
        <p>No se han encontrado vehiculos con estos filtros.</p>
      )}
      <div className='grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {cars.map((car: Car) => {
          const {
            priceDay,
            photo,
            name,
            type,
            transmission,
            people,
            engine,
            id,
            cv,
          } = car;
          const likedCar = lovedItems.some(item => item.id === car.id);
          return (
            <div
              key={id}
              className='flex flex-col rounded-lg p-1 shadow-md hover:shadow-lg'
            >
              <div className='relative h-[340px] w-full'>
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className='rounded-lg object-cover'
                />
              </div>

              <div className='flex flex-1 flex-col justify-between p-3'>
                <div>
                  <div className='mb-3 flex flex-col gap-x-4'>
                    <p className='min-h-16 text-xl lg:min-h-fit'>{name}</p>
                    <p>{priceDay}</p>
                  </div>
                  <p className='flex items-center'>
                    <Gem className='mr-2 h-4 w-4' />
                    {type}
                  </p>
                  <p className='flex items-center'>
                    <Wrench className='mr-2 h-4 w-4' />
                    {transmission}
                  </p>
                  <p className='flex items-center'>
                    <Users className='mr-2 h-4 w-4' />
                    {people}
                  </p>
                  <p className='flex items-center'>
                    <Fuel className='mr-2 h-4 w-4' />
                    {engine}
                  </p>
                  <p className='flex items-center'>
                    <Gauge className='mr-2 h-4 w-4' />
                    {cv} CV
                  </p>
                </div>

                {userId ? (
                  <div className='relative mt-3 grid w-auto items-center '>
                    <div className='w-[80%]'>
                      <ModalAddReservacion car={car} />
                    </div>
                    <div className='grid w-auto justify-items-center'>
                      <Heart
                        className={`absolute right-3 top-1/2 mt-1 h-6 w-6 -translate-y-1/2 cursor-pointer ${likedCar && 'fill-black'}`}
                        onClick={
                          likedCar
                            ? () => removeLovedItem(car.id)
                            : () => addLoveItem(car)
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className='mt-3 w-full text-center'>
                    <Link href='/sign-in'>
                      <Button variant='outline' className='w-full'>
                        Inicia sesión para reservar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
