import i18n from 'i18next';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import CarDetails from './pages/CarDetails/CarDetails';
import NotFound from './pages/NotFound/NotFound';

const App = () => {

    document.documentElement.lang = i18n.language;

    let routes = createBrowserRouter([
        {
            path: '/',
            element: <BaseLayout />,
            children: [
                { index: true, element: <Home /> },
                { path: 'home', element: <Home /> },
                { path: 'all-cars', element: <Cars /> },
                { path: 'details/:carId', element: <CarDetails /> },
                { path: '*', element: <NotFound /> }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
