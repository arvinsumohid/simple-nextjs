import React from 'react'
import { Divider, Box } from '@mui/material'
import CustomTextField from '@/components/CustomTextField'
import CustomDatepicker from '@/components/CustomDatepicker'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const PersonalFields = () => {
  return (
    <>
        <Divider sx={{ mb: 2 }}>Personal Information</Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomTextField
                label="Username"
                placeholder="Enter your username"
                name="username"
                required
                icon={<PersonIcon />}
            />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <CustomTextField
                label="Password"
                placeholder="Enter your password"
                name="password"
                type="password"
                required
                icon={<LockIcon />}
            />
            <CustomTextField
                label="Confirm Password"
                placeholder="Confirm your password"
                name="confirmPassword"
                type="password"
                required
                icon={<LockIcon />}
            />
        </Box>
        <CustomTextField
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="email"
            required
            icon={<EmailIcon />}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <CustomTextField
                label="First Name"
                name="firstName"
                type="text"
                required
            />
            <CustomTextField
                label="Middle Name"
                name="middleName"
                type="text"
                required={false}
            />
            <CustomTextField
                label="Last Name"
                name="lastName"
                type="text"
                required
            />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <CustomDatepicker name="dob" label="Date of Birth*" />
            <CustomTextField
                label="Phone"
                placeholder="Enter your phone number"
                name="phone"
                type="tel"
                required
                icon={<PhoneIcon />}
            />
        </Box>
    </>
  )
}

export default PersonalFields