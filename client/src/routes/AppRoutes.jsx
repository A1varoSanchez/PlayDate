import { Routes, Route } from 'react-router-dom'
import SignUp from './../pages/SignupPage/SignupPage.jsx'
import NewEventPage from './../pages/NewEventPage/NewEventPage.jsx'
import LoginPage from './../pages/LoginPage/LoginPage.jsx'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />
            <Route path={'/registro'} element={<SignUp />} />
            <Route path={'/crear'} element={<NewEventPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />



            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes