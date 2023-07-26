import useLoadingModal from '@/hooks/useLoadingModal';
import { useState } from 'react';

const LoadingModal = () => {
  const loadingModal = useLoadingModal();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full">
      <div
        className={`
    
    `}
      ></div>
    </div>
  );
};

export default LoadingModal;
