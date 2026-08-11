import { Slider, SliderProps } from '@mui/material';
import React from 'react';

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: '100%',
        color: '#00c853',

        '& .MuiSlider-thumb': {
          width: 12,
          height: 12,
        },

        '& .MuiSlider-track': {
          height: 3,
        },

        '& .MuiSlider-rail': {
          height: 3,
          opacity: 1,
          backgroundColor: '#999',
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
