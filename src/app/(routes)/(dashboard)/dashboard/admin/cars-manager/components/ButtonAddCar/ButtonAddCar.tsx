'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FormAddCar } from '../FormAddCar';

export default function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant='outline' onClick={() => setOpenDialog(true)}>
          Add new Car
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h1> Crate your Car</h1>
          <DialogClose onClick={() => setOpenDialog(false)} />
        </DialogHeader>
        <DialogDescription>
          <FormAddCar setOpenDialog={setOpenDialog} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
