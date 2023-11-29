import { Routes, Route } from 'react-router-dom'
import SignUp from './../pages/SignupPage/SignupPage.jsx'
import NewEventPage from './../pages/NewEventPage/NewEventPage.jsx'
import LoginPage from './../pages/LoginPage/LoginPage.jsx'
import Profile from './../pages/Profile/Profile.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import EventsPage from './../pages/EventsPage/EventsPage.jsx'
<<<<<<< HEAD
import UsersPage from '../pages/UsersPage/UserPage.jsx'
=======
import EventDetailsPage from './../pages/EventDetailsPage/EventDetailsPage.jsx'
>>>>>>> e9a129bd4116f9dc1e29df4a1dae17dd6d75c2fa

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />

            <Route path={'/registro'} element={<SignUp />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />

            <Route path={'/eventos'} element={<EventsPage />} />
            <Route path={'/eventos/:event_id'} element={<EventDetailsPage />} />
            <Route path={'/mapa'} element={<h1>El mapa</h1>} />

            <Route element={<PrivateRoute />}>
                <Route path={'/usuarios'} element={<UsersPage />} />

                <Route path={'/perfil/:_id'} element={<Profile />} />
                <Route path={'/crear-evento'} element={<NewEventPage />} />
            </Route>

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes