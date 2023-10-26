import { extendTheme } from '@chakra-ui/react'
import React from 'react'

const theme = extendTheme({
    style: {
        global: {
            body: {
                backgroudcolor: "orange.50",
                color: "gray.800",
            },
            p: {
                fontSize: { base: "md", md: "lg"},
                lineHeight: "tall"
            }
        }
    }
});

export default theme