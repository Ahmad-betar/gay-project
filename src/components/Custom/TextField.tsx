import React, { FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
  control: Control<FieldValues>;
}
const TextField: FC<Props> = ({
  name,
  label,
  placeholder,
  control,
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input placeholder={placeholder} {...props} {...field} />
        )}
      />
    </div>
  );
};

export default TextField;
