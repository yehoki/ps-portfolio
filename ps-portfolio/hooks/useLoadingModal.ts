import { create } from 'zustand';

interface LoadingModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isBlock: boolean;
  closeBlock: () => void;
  openBlock: () => void;
  loadingTime: number;
  setLoadingTime: (loadingTime: number) => void;
}

const useLoadingModal = create<LoadingModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  isBlock: true,
  closeBlock: () => set({ isBlock: false }),
  openBlock: () => set({ isBlock: true }),
  loadingTime: 0,
  setLoadingTime: (loadingTime: number) => set({ loadingTime: loadingTime }),
}));

export default useLoadingModal;
