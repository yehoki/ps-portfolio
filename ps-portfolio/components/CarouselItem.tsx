'use client';

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  const random = Math.random();
  return (
    <li className="bg-blue-200 flex-shrink-0 w-full h-full relative">
      {children}
      <div className="top-0 left-0 absolute">{random}</div>
    </li>
  );
};

export default CarouselItem;
