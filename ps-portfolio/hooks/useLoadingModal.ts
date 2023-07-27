import { create } from 'zustand';

interface LoadingModalStore {
  isOpen: boolean;
  onClose: () => void;
  isBlock: boolean;
  closeBlock: () => void;
  loadingTime: number;
  setLoadingTime: (loadingTime: number) => void;
}

const useLoadingModal = create<LoadingModalStore>((set) => ({
  isOpen: true,
  onClose: () => set({ isOpen: false }),
  isBlock: true,
  closeBlock: () => set({ isBlock: false }),
  loadingTime: 0,
  setLoadingTime: (loadingTime: number) => set({ loadingTime: loadingTime }),
}));

export default useLoadingModal;
