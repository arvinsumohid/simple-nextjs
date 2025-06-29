'use client'

import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material';

interface CustomTextFieldProps {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  [key: string]: TextFieldProps[keyof TextFieldProps];
}

const CustomTextField = ({
  label,
  placeholder,
  name,
  type = 'text',
  required = true,
  disabled = false,
  icon = null,
  ...props
}: CustomTextFieldProps) => {
  return (
    <TextField
      type={type}
      size="small"
      variant="outlined"
      required={required}
      name={name}
      id={name}
      label={label}
      placeholder={placeholder || ''}
      margin="dense"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        },
      }}
      fullWidth
      disabled={disabled}
      {...props}
    />
  )
}

export default CustomTextField;