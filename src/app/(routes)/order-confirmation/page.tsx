import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';
import { Button } from '@/components/ui/button';

export default function OrderConfirmation() {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl p-6'>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <h1 className='text-2xl'>!Muchas gracias por confiar en nosotros!</h1>
          <p>
            En breves momentos reciviremos toda la informacion a traves de tu
            correo electronico.
          </p>
          <p>
            Puedes visualizar todas tus reservas dentro de tu Area de clientes
          </p>
          <Link href='/'>
            <Button>Volver a ver los productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
