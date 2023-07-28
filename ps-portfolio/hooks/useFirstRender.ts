import { create } from 'zustand';

interface FirstRenderStore {
  isOn: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFirstRender = create<FirstRenderStore>((set) => ({
  isOn: true,
  onOpen: () => set({ isOn: true }),
  onClose: () => set({ isOn: false }),
}));

export default useFirstRender;