import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'sonner';
import z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UploadButton } from '@/utils/uploading';
import { formShema } from './FormAddCar.form';
import { FormAddCarProps } from './FormAddCar.types';

export function FormAddCar(props: FormAddCarProps) {
  const { setOpenDialog } = props;
  const [photoUploaded, setPhotoUploade] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      name: '',
      cv: '',
      engine: '',
      isPublish: false,
      people: '',
      photo: '',
      priceDay: '',
      transmission: '',
      type: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formShema>) => {
    setIsLoading(true);
    try {
      await axios.post('/api/car', values);
      toast.success('Car created successfully');
    } catch (error: any) {
      console.error('Error creating car:', error);
      toast.error('Something went wrong. Please try again.');

      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      }
    } finally {
      router.refresh();
      setIsLoading(false);
      setOpenDialog(false);
    }
  };

  const { isValid, isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid gap-6 lg:grid-cols-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Name</FormLabel>
                <FormControl>
                  <Input placeholder='Tesla Model 5 Plaid' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='cv'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Power</FormLabel>
                <FormControl>
                  <Input placeholder='150 CV' type='number' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* select */}
          <FormField
            control={form.control}
            name='transmission'
            render={({ field }) => (
              <FormItem className='w-auto'>
                <FormLabel>Transmission</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className='w-auto'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a transmission' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='automatic'>Automatic</SelectItem>
                    <SelectItem value='manual'>Manual</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='people'
            render={({ field }) => (
              <FormItem className='w-auto'>
                <FormLabel>People</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className='w-auto'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a quantity of people' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                    <SelectItem value='7'>7</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {/* engine */}
          <FormField
            control={form.control}
            name='engine'
            render={({ field }) => (
              <FormItem className='w-auto'>
                <FormLabel>Engine</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className='w-auto'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select type engine' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='gasoil'>Gasoline</SelectItem>
                    <SelectItem value='diesel'>Diesel</SelectItem>
                    <SelectItem value='electric'>Electric</SelectItem>
                    <SelectItem value='hybrid'>Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {/* type car */}
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='w-auto'>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className='w-auto'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select the type of car' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='sedan'>Sedan</SelectItem>
                    <SelectItem value='suv'>SUV</SelectItem>
                    <SelectItem value='coupe'>Coupe</SelectItem>
                    <SelectItem value='familiar'>Famliar</SelectItem>
                    <SelectItem value='luxe'>De Luxe</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {/* upload image */}
          <FormField
            control={form.control}
            name='photo'
            render={({ field }) => (
              <FormItem className='w-auto'>
                <FormLabel>Car Image</FormLabel>
                <FormControl>
                  {photoUploaded ? (
                    <p>image iploaded</p>
                  ) : (
                    <UploadButton
                      className='outline-3 rounded-lg bg-slate-600/20 text-slate-800 outline-dotted'
                      {...field}
                      endpoint='photo'
                      onClientUploadComplete={(res: any) => {
                        form.setValue('photo', res?.[0].url);
                        setPhotoUploade(true);
                      }}
                      onUploadError={(error: Error) => {
                        console.log('error al subir la imagen ', error.message);
                      }}
                    />
                  )}
                </FormControl>
              </FormItem>
            )}
          />
          {/* price por day */}
          <FormField
            control={form.control}
            name='priceDay'
            render={({ field }) => (
              <FormItem className='w-auto'>
                <FormLabel>Price por Day</FormLabel>
                <FormControl>
                  <Input placeholder='20$' type='number' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          type='submit'
          className='mt-5 w-full'
          disabled={!isValid || isLoading || isSubmitting}
        >
          {isLoading ? 'Creating...' : 'Create Car'}
        </Button>
      </form>
    </Form>
  );
}
