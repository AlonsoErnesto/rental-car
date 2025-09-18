'use client';

import { Fuel, Gauge, Gem, Heart, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import ModalAddReservacion from '@/components/shared/ModalAddReservation/ModalAddReservation';
import { Car } from '@/generated/prisma';
import { useLovedCars } from '@/hooks/use-loved-cars';

export default function ListLovedCars() {
  const { lovedItems, removeLovedItem } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2 className='text-2xl'>No dispones de coches que te gusten.</h2>
      ) : (
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
          {lovedItems.map((car: Car) => {
            const {
              priceDay,
              photo,
              name,
              type,
              transmission,
              engine,
              id,
              people,
              cv,
            } = car;
            return (
              <div
                className='rounded-lg p-1 shadow-md hover:shadow-lg'
                key={id}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={400}
                  height={600}
                  className='h-96 w-full rounded-lg object-cover'
                />
                <div className='p-3'>
                  <div className='mb-3 flex flex-col gap-x-4'>
                    <p className='min-h-16 text-xl lg:min-h-fit'>{name}</p>
                    <p>{priceDay} /dia</p>
                  </div>
                  <p className='flex items-center'>
                    <Wrench className='mr-2 h-4 w-4' strokeWidth={1} />
                    {transmission}
                  </p>
                  <p className='flex items-center'>
                    <Users className='mr-2 h-4 w-4' strokeWidth={1} />
                    {people}
                  </p>
                  <p className='flex items-center'>
                    <Fuel className='mr-2 h-4 w-4' strokeWidth={1} />
                    {engine}
                  </p>
                  <p className='flex items-center'>
                    <Gauge className='mr-2 h-4 w-4' strokeWidth={1} />
                    {cv}
                  </p>
                  <div className='flex w-full items-center gap-2'>
                    <div className='flex-1'>
                      <ModalAddReservacion car={car} />
                    </div>

                    <button
                      onClick={() => removeLovedItem(id)}
                      className='flex items-center justify-center rounded-full border border-slate-300/50 p-2'
                    >
                      <Heart className={`h-6 w-6 fill-red-500 text-red-500`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
