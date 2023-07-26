import { create } from 'zustand';

interface LoadingModalStore {
  isOpen: boolean;
  onClose: () => void;
}

const useLoadingModal = create<LoadingModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
}));

export default useLoadingModal;