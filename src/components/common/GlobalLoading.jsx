import { LinearProgress, Paper, Toolbar, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Logo from './Logo'

const GlobalLoading = () => {
  const { globalLoading } = useSelector(state => state.globalLoading)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true)
    } else {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [globalLoading])

  return (
    <div>
      <Paper
        sx={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: 'none',
          transition: 'all .3s ease',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 999,
        }}
      >
        <Toolbar />
        <LinearProgress />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Logo />
        </Box>
      </Paper>
    </div>
  )
}

export default GlobalLoading
