import React from 'react';
import {ImageBackground} from 'react-native';
import Box from './box';

function Bg({children, ...props}: {children: React.ReactNode}) {
  return (
    <Box style={{width: '100%', height: '100%'}} {...props}>
      {children}
    </Box>
  );
}

export default Bg;
