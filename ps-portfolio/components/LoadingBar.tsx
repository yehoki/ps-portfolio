'use client';

import useLoadingModal from '@/hooks/useLoadingModal';
import { useEffect, useState } from 'react';

const LoadingBar = () => {
  const loadingModal = useLoadingModal();

  const [progress, setProgress] = useState(0);

  const progressToPercentage = `${progress.toString()}%`;
  // const test = setInterval(() => setProgress(progress + 1), 1000);

  useEffect(() => {
    if (progress > 50 && progress < 70) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 40);
    } else if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 5);
    } else if (progress === 100) {
      loadingModal.onClose();
      setTimeout(() => {
        loadingModal.closeBlock();
      }, 3000);
    }
  }, [progress]);

  // for (let i = 0; i < 99; i++) {
  //   setTimeout(() => {
  //     setProgress(progress + 1);
  //   }, 33);
  // }

  return (
    <div className="bg-psSecondary w-1/2 h-[40px] mx-auto">
      <div
        style={{ width: progressToPercentage }}
        className={`
         bg-psAccent h-[40px] transition ease-in-out
         `}
      ></div>
    </div>
  );
};

export default LoadingBar;
