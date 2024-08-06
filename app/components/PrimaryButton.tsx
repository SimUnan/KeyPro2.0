import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading: boolean;
    label: string;
    type: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton = ({ isLoading, label, type, ...props }: PrimaryButtonProps) => {
    return (
        <button
            type={type}
            {...props}
            className='w-1/2 bg-slate-700 text-white py-4 px-2 rounded-sm hover:border hover:border-slate-800 hover:bg-transparent hover:text-slate-800 transition-all ease-linear duration-150'>
            <label>{isLoading ? <p>Loading</p> : <p>{label}</p>}</label>
        </button>
    )
}

export default PrimaryButton