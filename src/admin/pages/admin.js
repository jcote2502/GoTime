import { Outlet } from "react-router-dom"


const Admin = () => {
    return (
        <>
            <div style={{color:'white',fontSize:'35px', margin:'25px'}}>Admin</div>
            <Outlet/>
        </>
    )
}

export default Admin;