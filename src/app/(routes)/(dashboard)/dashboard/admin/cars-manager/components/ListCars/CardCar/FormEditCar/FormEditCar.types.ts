import { Dispatch, SetStateAction } from 'react';
import { Car } from '@/generated/prisma';

export type FormEdirCarProps = {
  carData: Car;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
