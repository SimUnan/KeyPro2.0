"use client"

import React, { useState } from 'react'
import {useForm, SubmitHandler, FieldValues, UseFormHandleSubmit} from 'react-hook-form'


import Input from '@/app/components/input/Input'
import Title from '@/app/components/Title'
import PrimaryButton from '@/app/components/PrimaryButton'




const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
            confirm_password: "",
        }
    }) 

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        // setIsLoading(true);
        console.log(data)
    }

  return (
    <>
        <Title title='Key Pro Sign up'/>
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
        <Input 
            id='confirm_password'
            label='Confirm password'
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