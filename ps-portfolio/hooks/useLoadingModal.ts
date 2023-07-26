import { create } from 'zustand';

interface LoadingModalStore {
  isOpen: boolean;
  onClose: () => void;
  isBlock: boolean;
  closeBlock: () => void;
}

const useLoadingModal = create<LoadingModalStore>((set) => ({
  isOpen: true,
  onClose: () => set({ isOpen: false }),
  isBlock: true,
  closeBlock: () => set({ isBlock: false }),
}));

export default useLoadingModal;
