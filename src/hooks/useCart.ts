import { Cart } from '@/types'
import { create } from 'zustand'

// Hook para almacenar el estado global de un carrito de compras usando zustand
export const useCart = create<Cart>()((set) => ({
  count: 0,
  // items:[], // Aqui podemos almacenar los productos agregados en este arreglo
  add: () => set((state) => ({ count: state.count + 1 })),
}))