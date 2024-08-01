import FormWrap from "@/app/components/FormWrap";
import Input from "@/app/components/input/Input";
import React from "react";

const page = () => {
  return (
    // <div className="w-full h-full flex items-center justify-center">
    //   <div className="w-1/2 bg-neutral-200 bg-opacity-60 rounded-sm shadow-md p-4 mt-10 flex flex-col items-center justify-center gap-y-4">
    //     <Input id={"1"} label="Username" disabled={false} required={true} />
    //     <Input id={"2"} label="Password" type="password" disabled={false} required={true} />
    //     <Input id={"3"} label="Confirm password" type="password" disabled={false} required={true} />
    //   </div>
    // </div>
    <FormWrap>
      <Input id={"1"} label="Username" disabled={false} required={true} />
      <Input id={"2"} label="Password" type="password" disabled={false} required={true} />
      <Input id={"3"} label="Confirm password" type="password" disabled={false} required={true} />

    </FormWrap>
  );
};

export default page;
