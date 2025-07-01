'use client'

import React from 'react'
import { Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CustomDatepicker = ({ name, fullWidth, label, required }: { name?: string, fullWidth?: boolean, label?: string, required?: boolean }) => {
  return (
    <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                name={name}
                label={label}
                slotProps={{
                    textField: {
                        size: 'small',
                        fullWidth: fullWidth,
                        variant: "outlined",
                        required: required,
                        placeholder: label,
                        margin: "dense",
                        InputProps: {
                        label: <p className="text-[0.65rem] font-bold uppercase">{label}</p>,
                        },
                    },
                }}
            />
        </LocalizationProvider>
    </Box>
  )
}

export default CustomDatepicker