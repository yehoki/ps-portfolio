'use client';
import useLoadingModal from '@/hooks/useLoadingModal';
import { useEffect, useState } from 'react';
import LoadingBar from './LoadingBar';

const LoadingModal = () => {
  const loadingModal = useLoadingModal();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(loadingModal.isOpen);
  }, [loadingModal.isOpen]);

  return (
    <div
      className={`w-full h-full fixed z-50
    ${loadingModal.isBlock ? 'block' : 'hidden'}`}
    >
      <div
        className={`transition duration-[2250ms] bg-psBg h-full w-full
      ${showModal ? 'opacity-100' : 'opacity-0'}
      flex flex-col items-center justify-center
    `}
      >
        <LoadingBar />
      </div>
    </div>
  );
};

export default LoadingModal;
