"use client"

import React, { useState } from 'react'
import {useForm, SubmitHandler, FieldValues, UseFormHandleSubmit} from 'react-hook-form'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

import Input from '@/app/components/input/Input'
import Title from '@/app/components/Title'
import PrimaryButton from '@/app/components/PrimaryButton'





const RegisterForm = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    }) 

    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
        try {
            setIsLoading(true);
            const res = await axios.post('/api/register', data);
            console.log('res:',res);
            router.push("/login")            
        } catch (error:any){
            console.error(error)
            console.log(error)
            if(error.response.status === 400){
                
            }
        } finally{
            setIsLoading(false);
        }

    }

  return (
    <>
        <Title title='Key Pro Sign up'/>
        <Input 
            id='name'
            label='Name'
            type='text'
            register={register}
            disabled={isLoading}
            errors={errors}
            required
        />
        <Input 
            id='email'
            label='Email'
            type='email'
            register={register}
            disabled={isLoading}
            errors={errors}
            required
        />
        <Input 
            id='password'
            label='Password'
            type='password'
            register={register}
            disabled={isLoading}
            errors={errors}
            required
        />
        <PrimaryButton type='button' label='Sign up' isLoading={isLoading} onClick={handleSubmit(onSubmit)}/>
    </>    
    )
}

export default RegisterForm