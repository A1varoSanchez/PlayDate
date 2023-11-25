import { Routes, Route } from 'react-router-dom'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<p>EL INICIO</p>} />
           
            
        

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes