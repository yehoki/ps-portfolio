'use client';

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return (
    <li
      className="bg-blue-200 flex-shrink-0 w-full h-full relative
    flex items-center justify-center"
    >
      {children}
    </li>
  );
};

export default CarouselItem;
