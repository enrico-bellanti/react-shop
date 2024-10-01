import { create } from "zustand";

export interface CartStateOverlay {
    open: boolean,
    toggle: () => void,
    openOverlay: () => void,
    closeOverlay: () => void
}

export const useCartPanel = create<CartStateOverlay>((set, get) => ({
    open: false,
    toggle: () => set(({ open }) => ({ open: !open })),
    openOverlay: () => set({ open: true }),
    closeOverlay: () => set({ open: false })
}))