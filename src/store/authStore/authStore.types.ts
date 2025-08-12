export type AuthStoreType = {
  accessToken: string
  role: string
  setRole: (role: string) => void
  necessaryInfo: boolean
  setNecessaryInfo: (value: boolean) => void
  setAccessToken: (token: string) => void
  removeAccessToken: () => void
  removeRole: () => void
  refreshToken: string
  setRefreshToken: (token: string) => void
  removeRefreshToken: () => void
}
