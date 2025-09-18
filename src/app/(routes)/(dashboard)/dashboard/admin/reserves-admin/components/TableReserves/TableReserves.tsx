import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatPrice } from '@/lib/formatPrice';
import { TableReservesProps } from './TableReserves.types';

export default function TableReservers(props: TableReservesProps) {
  const { orders } = props;
  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);
  return (
    <Table>
      <TableCaption>A list of your recent booking.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order Date</TableHead>
          <TableHead>Custom ID</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Date Start</TableHead>
          <TableHead>Date End</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map(order => (
          <TableRow key={order.id}>
            <TableCell className='font-medium'>
              {new Date(order.createdAt).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </TableCell>
            <TableCell className='max-w-[100px] truncate font-medium'>
              {order.userId}
            </TableCell>
            <TableCell className='truncate font-medium'>
              {order.carName}
            </TableCell>
            <TableCell className='truncate font-medium'>
              {new Date(order.orderDate).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </TableCell>
            <TableCell className='truncate font-medium'>
              {new Date(order.orderEndDate).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </TableCell>
            <TableCell className='text-right'>
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total </TableCell>
          <TableCell className='text-right'>
            {formatPrice(totalAmount)}{' '}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
