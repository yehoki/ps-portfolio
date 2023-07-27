'use client';
import Carousel from '@/components/Carousel';
import ClientOnly from '@/components/ClientOnly';
import Link from 'next/link';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center relative">
      <div className="absolute top-20 left-40 group text-psText lg:text-psText/70 lg:hover:text-psText w-fit">
        <Link href={'/'} className="flex gap-1 items-center">
          <AiOutlineDoubleLeft
            size={18}
            className="group-hover:-translate-x-4 transition-transform duration-300"
          />
          <div className="">Back</div>
        </Link>
      </div>
      <ClientOnly>
        <Carousel>
          <img src="/images/placeholder2.jpeg" alt="test" />
          <img src="/images/placeholder-image.png" alt="test" />
          <img src="/images/placeholder-image.png" alt="test" />
          <img src="/images/placeholder-image.png" alt="test" />
          <img src="/images/placeholder2.jpeg" alt="test" />
        </Carousel>
      </ClientOnly>
    </div>
  );
}
