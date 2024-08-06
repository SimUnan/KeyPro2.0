import FormWrap from '@/app/components/FormWrap'
import React from 'react'
import RegisterForm from './RegisterForm'

const RegisterPage = () => {
    return (
        <div className='w-full h-full'>
            <FormWrap>
                <RegisterForm />
            </FormWrap>
        </div>
    )
}

export default RegisterPage