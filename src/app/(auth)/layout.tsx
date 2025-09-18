import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid h-full items-center justify-center lg:grid-cols-2'>
      <div className='flex items-center justify-center'>{children}</div>
      <div className='lg:bg-slate-300 hidden h-full items-center justify-center lg:flex lg:flex-col'>
        <Image src='/logo.svg' width={80} height={80} alt='logo'/>
        <h1 className='font-bold py-5 text-2xl'>TarreManager Cars</h1>
      </div>
    </div>
  );
}
