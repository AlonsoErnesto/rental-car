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
import { Order } from '@/generated/prisma';
import { formatPrice } from '@/lib/formatPrice';
import { TableReservesOrders } from './TableReserves.types';

export default function TableReserves(props: TableReservesOrders) {
  const { orders } = props;
  const totalAmount = orders.reduce((acc, currentValue) => {
    return acc + parseFloat(currentValue.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead>Date Start</TableHead>
          <TableHead>Date End</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order: Order) => (
          <TableRow key={order.id}>
            <TableCell className='font-medium'>{order.carName}</TableCell>
            <TableCell>
              {new Date(order.orderDate).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {new Date(order.orderEndDate).toLocaleDateString()}
            </TableCell>
            <TableCell align='center'>
              <div className='w-32 rounded-lg bg-green-600 p-2 text-center text-white'>
                {order.status}
              </div>
            </TableCell>
            <TableCell className='text-right font-medium'>
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className='text-right'>
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
