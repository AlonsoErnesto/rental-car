import { Car } from '@/generated/prisma';

export type ListCarsProps = {
  cars: Car[] | undefined;
};
