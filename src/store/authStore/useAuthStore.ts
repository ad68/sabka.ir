/* import { AuthStoreType } from '@/store/authStore/authStore.types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

const useAuthStore = create<AuthStoreType>()(
  persist(
    devtools((set) => ({
      accessToken: '',
      refreshToken: '',
      role: '',
      necessaryInfo: false,
      setNecessaryInfo: (value) => set({ necessaryInfo: value }),
      setAccessToken: (token) => set({ accessToken: token }),
      setRefreshToken: (token) => set({ refreshToken: token }),
      setRole: (value) => set({ role: value }),
      removeAccessToken: () => set({ accessToken: '' }),
      removeRole: () => set({ role: '' }),
      removeRefreshToken: () => set({ refreshToken: '' }),
    })),
    {
      name: 'auth-store',
    },
  ),
)
export default useAuthStore */
