import React from "react";

interface IInputTextProps {
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: Function;
  disabled?: boolean;
}

const InputText = (props: IInputTextProps) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {props?.label}
      <input
        type="text"
        className={`grow text-right ${props.disabled ? "text-gray-400" : "text-blue-400"} `}
        placeholder={props?.placeholder}
        value={props?.value}
        // @ts-ignore
        onChange={props?.onChange}
        disabled={props?.disabled}
      />
    </label>
  );
};

export default InputText;
