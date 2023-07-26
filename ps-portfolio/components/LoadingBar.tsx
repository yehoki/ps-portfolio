'use client';

import useLoadingModal from '@/hooks/useLoadingModal';
import { useEffect, useState } from 'react';

const LoadingBar = () => {
  const loadingModal = useLoadingModal();

  const [progress, setProgress] = useState(0);
  const [randomStutterPercentage, setRandomStutterPercentage] = useState(0);

  const progressToPercentage = `${progress.toString()}%`;
  // const test = setInterval(() => setProgress(progress + 1), 1000);
  const loaderOffset = 20;
  useEffect(() => {
    setRandomStutterPercentage(Math.floor(Math.random() * 30) + loaderOffset);
  }, []);

  useEffect(() => {
    if (progress === 0) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 700);
    } else if (
      progress > randomStutterPercentage &&
      progress < randomStutterPercentage + 20
    ) {
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
    <div
      className={`bg-psSecondary h-[10px] w-full
    ${progress === 0 ? 'scale-0' : 'scale-100'}
    transition duration-100 ease-in-out origin-left`}
    >
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
