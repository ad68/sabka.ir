'use client'
import { useState } from 'react'
import { loginMode } from '../types'
import { useAxios } from '@/hooks'
import { MOBILE } from '@/constants/regex';
import { toastError } from '@/components/kit/toast';
const useLogin = () => {
    const [loginMode, setLoginMode] = useState<loginMode>("requestActiveCode")
    const [mobileNumber, setMobileNumber] = useState<string>("")
    const [actionLoading, setActionLoading] = useState(false)
    const requestActiveCode = () => {
        const params = { mobileNumber: mobileNumber }
        if (MOBILE.test(mobileNumber)) {
            setActionLoading(true)
            useAxios.post("https://api.bakapp.ir/bakapp/api/notification/v1/send-otp", params).then(res => {
                console.log('res', res)
                setLoginMode("login")
                setActionLoading(false)
            }).catch(() => {
                setActionLoading(false)
            })
        } else {
            toastError("موبایل را به درستی وارد کنید")
        }

    }
    const goToRequestACtiveCode = () => {
        setLoginMode("requestActiveCode")
    }
    return {
        loginMode,
        setLoginMode,
        requestActiveCode,
        setMobileNumber,
        mobileNumber,
        goToRequestACtiveCode,
        actionLoading
    }
}
export default useLogin