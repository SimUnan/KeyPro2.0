import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
}

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        type={type}
        disabled={disabled}
        {...(register && register(id, { required }))}
        placeholder=""
        className={`w-full peer p-4 pt-6 font-light bg-transparent rounded-md border outline-none focus-within:border-neutral-500 transition-all ease-in-out duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${
          errors && errors[id] ? "border-rose-400" : "border-neutral-300"
        }`}
      />
      <label
        htmlFor={id}
        className="absolute origin[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-100 opacity-75 peer-placeholder-shown:translate-y-0 cursor-text top-5 -translate-y-4 left-2 peer-focus:-translate-y-4 peer-focus:px-2 transition-all ease-in-out duration-300 peer-focus:scale-[80%] scale-[85%]"
      >
        {label ? label : "Testing"}
      </label>
    </div>
  );
};

export default Input;
