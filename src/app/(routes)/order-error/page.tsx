import Link from 'next/link';
import Navbar from '../../../components/shared/Navbar/Navbar';
import { Button } from '../../../components/ui/button';

export default function pageOrderError() {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl p-6'>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <h1 className='text-2xl'>
            !OPS! Ha ocurrido un error, vuelvalo a internar mas tarde.
          </h1>
          <Link href='/'>
            <Button>Volver a ver los productos.</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
