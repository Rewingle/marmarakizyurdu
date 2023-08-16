import React,{useEffect} from 'react'
import { useRouter } from 'next/router'


function basvur() {
    const router = useRouter()
    useEffect(()=>{
        router.push('https://s1.livinsoft.com/student/pre-registration/dorms/marmara-kiz-yurdu/23')
    },[])

    return (
    <div>Yönlendiriliyorsunuz, Lütfen bekleyin....</div>
  )
}

export default basvur