import { create } from "zustand";

type UploadState = {
  progress: number;
  setProgress: (progress: number) => void;
};

export const useUploadStore = create<UploadState>((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress })
}));
