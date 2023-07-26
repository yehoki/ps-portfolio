'use client';
import useLoadingModal from '@/hooks/useLoadingModal';
import { useEffect, useState } from 'react';
import LoadingBar from './LoadingBar';
import { isBlock } from 'typescript';

const LoadingModal = () => {
  const loadingModal = useLoadingModal();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(loadingModal.isOpen);
  }, [loadingModal.isOpen]);

  // setTimeout(() => {
  //   loadingModal.onClose();
  // }, 1000);

  return (
    <div
      className={`w-full h-full fixed z-50
    ${loadingModal.isBlock ? 'block' : 'hidden'}`}
    >
      <div
        className={`transition duration-[2250ms] bg-psPrimary h-full w-full
      ${showModal ? 'opacity-100' : 'opacity-0'}
    `}
      >
        <LoadingBar />
      </div>
    </div>
  );
};

export default LoadingModal;
