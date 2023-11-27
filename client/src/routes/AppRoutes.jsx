import { Routes, Route } from 'react-router-dom'
import SignUp from './../pages/SignupPage/SignupPage.jsx'
import NewEventPage from './../pages/NewEventPage/NewEventPage.jsx'
import LoginPage from './../pages/LoginPage/LoginPage.jsx'
import Profile from './../pages/Profile/Profile.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />
            <Route path={'/registro'} element={<SignUp />} />
            <Route path={'/crear-evento'} element={<NewEventPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />
            <Route path={'/perfil/:_id'} element={<Profile />} />
            <Route path={'/eventos'} element={<h1>El evento</h1>} />
            <Route path={'/mapa'} element={<h1>El mapa</h1>} />


            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes