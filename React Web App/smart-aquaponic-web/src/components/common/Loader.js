import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
    return (
        <div className='aqua-loader-container'>
            <CircularProgress color='primary' />
            <div className='aqua-loader-text'>
                Loading...
            </div>
        </div>
    )
}
