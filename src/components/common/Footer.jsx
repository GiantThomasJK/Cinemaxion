import { Box, Button, Container, Paper, Stack } from '@mui/material'
import menuConfigs from 'configs/menu.config'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: 'unset', padding: '2rem' }}>
        <Stack
          alignItems='center'
          justifyContent='space-between'
          direction={{ xs: 'column', md: 'row' }}
          sx={{ height: 'max-content' }}
        >
          <Logo />
          <Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: 'inherit' }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  )
}

export default Footer
