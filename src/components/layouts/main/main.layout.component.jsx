import Sidebar from '../../shared/sidebar'
import Navbar from '../../shared/navbar'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <>
    MainLayout
    <div className='flex'>

    <Sidebar/>
    <div>
      
    <Navbar/>
<Outlet/>
    </div>
    </div>
    </>


  )
}

export default MainLayout