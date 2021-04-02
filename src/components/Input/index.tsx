import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Inputs } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
}

const Input: React.FC<InputProps> = ({
    name,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (

        <Inputs ref={inputRef} defaultValue={defaultValue} {...rest} />

    )
}


export default Input;