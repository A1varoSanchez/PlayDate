import { Routes, Route } from 'react-router-dom'
import SignUp from './../pages/SignupPage/SignupPage.jsx'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />
            <Route path={'/registro'} element={<SignUp />} />

            
        

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes