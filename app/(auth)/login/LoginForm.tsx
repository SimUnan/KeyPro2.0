"use client" 

import Input from '@/app/components/input/Input'
import PrimaryButton from '@/app/components/PrimaryButton'
import Title from '@/app/components/Title'
import axios from 'axios'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {register, handleSubmit, formState:{errors}, setError} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = async (data: any) => {
        try {
            setIsLoading(false)
            const res = await axios.post('/api/login', data);
            if(res.data){
                localStorage.setItem("access_token", res.data.data.access_token)
                // router.push('/')
            }
        } catch (error:any) {
            console.error(error)
            toast.error(error.response.data.error)
        } finally{
            setIsLoading(false)
        }
    }

  return (
    <>
        <Title title="Key Pro sign in "/>
        <Input id="email" label="Email" type='email' register={register} disabled={false} required={true} />
        <Input id="password" label="Password" register={register} type="password" disabled={false} required={true} />
        <PrimaryButton type='submit' label="Sign In" isLoading={isLoading} onClick={handleSubmit(onSubmit)}/>
        <ToastContainer />
    </>
  )
}

export default LoginForm