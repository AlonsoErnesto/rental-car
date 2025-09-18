import Image from 'next/image';
import Link from 'next/link';

export function LogoDashboard() {
  return (
    <Link href='/' className='flex h-20 min-h-20 cursor-pointer items-center gap-2 border-b px-6'>
      <Image src='/logo.svg' alt='logo' width={30} height={30} priority />
      <h1 className='text-xl font-bold'>TarreCards</h1>
    </Link>
  );
}
