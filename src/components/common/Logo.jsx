import { Typography, useTheme } from '@mui/material'

const Logo = () => {
  const theme = useTheme()
  return (
    <div>
      <Typography fontWeight={700} fontSize='1.7rem'>
        Cinema<span style={{ color: theme.palette.primary.main }}>xion</span>
      </Typography>
    </div>
  )
}

export default Logo
