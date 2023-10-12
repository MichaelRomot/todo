import React from "react";

type NumberInputProps = React.ComponentPropsWithRef<"input">;

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ onInput, className, ...rest }, ref) => {
    const handleInput: React.FormEventHandler<HTMLInputElement> = (e) => {
      const newValue = e.currentTarget.value.replace(/[^0-9]+/g, "");
      e.currentTarget.value = newValue;
      onInput?.(e);
    };

    return (
      <input
        {...rest}
        ref={ref}
        type="text"
        className={`m-number-input ${className}`}
        onInput={handleInput}
      />
    );
  }
);

export default NumberInput;
