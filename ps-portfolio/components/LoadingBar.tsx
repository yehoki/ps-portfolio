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
      }, 2250);
    }
  }, [progress]);

  // for (let i = 0; i < 99; i++) {
  //   setTimeout(() => {
  //     setProgress(progress + 1);
  //   }, 33);
  // }

  return (
    <div className="bg-psSecondary w-full h-[10px]">
      <div
        style={{ width: progressToPercentage }}
        className={`
         bg-psAccent h-[10px] transition ease-in-out
         `}
      ></div>
    </div>
  );
};

export default LoadingBar;
