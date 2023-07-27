'use client';

import {
  useMemo,
  Children,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
} from 'react';
import CarouselItem from './CarouselItem';
interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const childrenAsArray = Children.toArray(children);
  const childrenLength = childrenAsArray.length;

  const handleClick = (mode: 'prev' | 'next') => {
    if (isMoving) {
      return;
    }
    setIsMoving(true);
    if (containerRef.current) {
      containerRef.current.style.transitionDuration = '500ms';
    }
    if (mode === 'prev') {
      if (current <= 1) {
        setTranslateX(0);
        setCurrent(childrenLength);
      } else {
        if (containerRef.current) {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      }
    } else {
      if (containerRef.current) {
        if (current >= childrenLength) {
          setTranslateX(
            containerRef.current.clientWidth * (childrenLength + 1)
          );
          setCurrent(0);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (containerRef.current) {
        if (current <= 1) {
          containerRef.current.style.transitionDuration = '0ms';
          setTranslateX(containerRef.current.clientWidth * current);
        }
        if (current >= childrenLength) {
          containerRef.current.style.transitionDuration = '0ms';
          setTranslateX(containerRef.current.clientWidth * childrenLength);
        }
      }
      setIsMoving(false);
    };
    document.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      document.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [current]);

  const slides = useMemo(() => {
    if (childrenLength > 1) {
      let items = childrenAsArray.map((item, index) => (
        <CarouselItem key={index}>
          {item}
          {index}
        </CarouselItem>
      ));
      return [
        <CarouselItem key={childrenLength + 1}>
          {childrenAsArray[childrenLength - 1]}
        </CarouselItem>,
        ...items,
        <CarouselItem key={childrenLength + 2}>
          {childrenAsArray[0]}
        </CarouselItem>,
      ];
    } else {
      return [<CarouselItem key={1}>{childrenAsArray[0]}</CarouselItem>];
    }
  }, [children]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setTranslateX(containerRef.current.clientWidth * current);
    }
  }, []);

  return (
    // Root
    <section className="w-[500px] h-[300px] relative bg-white overflow-hidden text-purple-500">
      {/* Container */}
      <ul
        ref={containerRef}
        style={{ transform: `translate(${-translateX}px)` }}
        className="
        transition
    flex w-full h-full list-none p-0 m-0  bg-white
    "
      >
        {slides}
      </ul>
      <button
        onClick={() => handleClick('prev')}
        className="absolute top-1/2 -translate-y-1/2 
        bg-red-800 text-yellow-300 text-2xl border-none cursor-pointer z-50
        left-0 w-[50px]"
      >
        {'<'}
      </button>
      <button
        onClick={() => handleClick('next')}
        className="absolute top-1/2 -translate-y-1/2 
        bg-red-800 text-yellow-300 text-2xl border-none cursor-pointer z-50
        right-0 w-[50px]"
      >
        {'>'}
      </button>
    </section>
  );
};

export default Carousel;
