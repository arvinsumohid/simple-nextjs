import React from 'react'
import { Divider, Box } from '@mui/material'
import CustomTextField from '@/components/CustomTextField'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const AddressFields = () => {
  return (
    <>
        <Divider sx={{ my: 2 }}>Address Information</Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <CustomTextField
                label="Region"
                placeholder="Enter your region"
                name="region"
                required
                icon={<LocationOnIcon />}
            />
            <CustomTextField
                label="Province"
                placeholder="Enter your province"
                name="province"
                required    
                icon={<LocationOnIcon />}
            />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <CustomTextField
                label="City"
                placeholder="Enter your city"
                name="city"
                required
                icon={<LocationOnIcon />}
            />
            <CustomTextField
                label="Barangay"
                placeholder="Enter your barangay"
                name="barangay"
                required
                icon={<LocationOnIcon />}
            />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <CustomTextField
                label="Postal Code"
                placeholder="Enter your postal code"
                name="postal_code"
                required
            />
        </Box>
        <CustomTextField
            multiline
            rows={4}
            label="Address Line"
            placeholder="Enter your address"
            name="address_line"
            required
        />
    </>
  )
}

export default AddressFields