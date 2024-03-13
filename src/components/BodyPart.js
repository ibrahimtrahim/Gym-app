import React from 'react';
import {Stack, Typography } from '@mui/material';
import Icon from '../assets/gym.png';

const BodyPart = () => {
  return (
    <Stack>
        <img src={Icon} alt="icon" className='body-part-icon' />
    </Stack>
  )
}

export default BodyPart