import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import React from 'react'
import GlobalLoading from 'components/common/GlobalLoading'
import Footer from 'components/common/Footer'
import Topbar from 'components/common/Topbar'

const MainLayout = () => {
  return (
    <>
      {/*global loading*/}
      {/*global loading*/}
      <GlobalLoading />

      {/*login modal*/}
      {/*login modal*/}
      <Box display='flex' minHeight='100vh'>
        {/* header */}
        {/* header */}
        <Topbar />
        {/* main */}
        <Box component='main' flexGrow={1} overflow='hidden' minHeight='100vh'>
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      <Footer />
      {/* footer */}
      {/* footer */}
    </>
  )
}

export default MainLayout
