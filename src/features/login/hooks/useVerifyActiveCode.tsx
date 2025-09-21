'use client'
import { toastError } from "@/components/kit/toast";
import { useAxios } from "@/hooks";
import { useState } from "react";
const useVerifyActiveCode = (requestActiveCode: any, mobileNumber: string) => {
    const [resendBtnState, setResendBtnState] = useState(false);
    const [reloadTimerState, setReloadTimerState] = useState(false);
    const [actionLoading, setActionLoading] = useState(false);
    const [activeCode, setActiveCode] = useState("")
    const login = () => {
        setActionLoading(true)
        const params = { mobileNumber: mobileNumber, code: activeCode }
        useAxios.post("https://api.bakapp.ir/bakapp/api/sso/v1/login-or-signup", params).then(res => {
            console.log('res', res)
            setActionLoading(false)
            toastError("خطایی رخ داده است")
        }).catch(() => {
            setActionLoading(false)

            toastError("خطایی رخ داده است")
        })
    }
    const reloadTimer = () => {
        setResendBtnState(false);
        setReloadTimerState(!reloadTimer);
        requestActiveCode()
    };
    return {
        resendBtnState,
        setResendBtnState,
        setReloadTimerState,
        actionLoading,
        setActionLoading,
        activeCode,
        setActiveCode,
        login,
        reloadTimerState,
        reloadTimer
    }
}
export default useVerifyActiveCode