import {create} from 'zustand';

const useStore = create((set) => ({
  apodData: [],
  setApodData: (data) => set({ apodData: data }),
}));

export default useStore;
