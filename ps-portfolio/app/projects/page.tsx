'use client';
import Carousel from '@/components/Carousel';
import ClientOnly from '@/components/ClientOnly';

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
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
