import uiConfigs from 'configs/ui.config'
import { useDispatch, useSelector } from 'react-redux'
import { themeModes } from 'configs/theme.config'
import { setThemeMode } from 'redux/features/themeModeSlice'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Logo from './Logo'
import menuConfigs from 'configs/menu.config'
import { Link } from 'react-router-dom'
import { DarkModeOutlined, WbSunnyOutlined } from '@mui/icons-material'

const Sidebar = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.user)
  const { appState } = useSelector(state => state.appState)
  const { themeMode } = useSelector(state => state.themeMode)

  const sidebarWidth = uiConfigs.size.sidebarWidth

  const onSwitchTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark
    dispatch(setThemeMode(theme))
  }

  const drawer = (
    <>
      <Toolbar sx={{ paddingY: '20px', color: 'text.primary' }}>
        <Stack width='100%' direction='row' justifyContent='center'>
          <Logo />
        </Stack>
      </Toolbar>
      <List sx={{ paddingX: '30px' }}>
        <Typography variant='h6' marginBottom='20px'>
          MENU
        </Typography>
        {menuConfigs.main.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              borderRadius: '10px',
              marginY: 1,
              backgroundColor: appState.includes(item.state)
                ? 'primary.main'
                : 'unset',
            }}
            component={Link}
            to={item.path}
            onClick={() => toggleSidebar(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography textTransform='uppercase'>
                  {item.display}
                </Typography>
              }
            ></ListItemText>
          </ListItemButton>
        ))}
        {user && (
          <>
            <Typography variant='h6' marginBottom='20px'>
              PERSONAL
            </Typography>
            {menuConfigs.user.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{
                  borderRadius: '10px',
                  marginY: 1,
                  backgroundColor: appState.includes(item.state)
                    ? 'primary.main'
                    : 'unset',
                }}
                component={Link}
                to={item.path}
                onClick={() => toggleSidebar(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography textTransform='uppercase'>
                      {item.display}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
          </>
        )}

        <Typography variant='h6' marginBottom='20px'>
          THEME
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            {themeMode === themeModes.dark && <DarkModeOutlined />}
            {themeMode === themeModes.light && <WbSunnyOutlined />}
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography textTransform='uppercase'>
                {themeMode === themeModes.dark ? 'dark mode' : 'light mode'}
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </>
  )

  return (
    <Drawer
      open={open}
      onClode={() => toggleSidebar(false)}
      sx={{
        '& .MuiDrawer-Paper': {
          boxSizing: 'border-box',
          width: sidebarWidth,
          borderRight: '0px',
        },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default Sidebar
