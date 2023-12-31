'use client';

import useLoadingModal from '@/hooks/useLoadingModal';
import { useEffect, useState } from 'react';

const LoadingBar = () => {
  const loadingModal = useLoadingModal();

  const [progress, setProgress] = useState(0);
  const [randomStutterPercentage, setRandomStutterPercentage] = useState(0);

  const initialWait = 400;
  const stutterTiming = 35;
  const normalTiming = 5;
  const blockRemoveTiming = 1500;
  const totalBarLoad = initialWait + 20 * stutterTiming + 80 * normalTiming;

  const progressToPercentage = `${progress.toString()}%`;
  // const test = setInterval(() => setProgress(progress + 1), 1000);
  const loaderOffset = 20;
  useEffect(() => {
    setRandomStutterPercentage(Math.floor(Math.random() * 30) + loaderOffset);
    loadingModal.setLoadingTime(totalBarLoad + blockRemoveTiming);
  }, []);

  useEffect(() => {
    if (progress === 0) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, initialWait);
    } else if (
      progress > randomStutterPercentage &&
      progress < randomStutterPercentage + 20
    ) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, stutterTiming);
    } else if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, normalTiming);
    } else if (progress === 100) {
      loadingModal.onClose();
      setTimeout(() => {
        loadingModal.closeBlock();
      }, blockRemoveTiming);
    }
  }, [progress]);

  return (
    <div
      className={` h-[10px] w-full
    ${progress === 0 ? 'scale-0' : 'scale-100'}
    transition duration-100 ease-in-out origin-left 
    text-[8px] text-psText
    bg-psBg
    relative
    `}
    >
      <div
        style={{ width: progressToPercentage }}
        className={`
         bg-psAccent h-[10px] w-full transition ease-in-out 
         `}
      ></div>
    </div>
  );
};

export default LoadingBar;
