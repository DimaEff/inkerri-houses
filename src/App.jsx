import React from 'react';

import useAppRouter from "./AppRouter/useAppRouter";
import routes from "./AppRouter/routes";
import Header from "./components/Header/Header";
import AdminContainer from "./components/Admin/AdminContainer";
import Footer from "./components/Footer/Footer";


const App = () => {
    const {Router, withoutElement} = useAppRouter(routes);

    return (
        <>
            {withoutElement || <Header/>}
            <AdminContainer/>
            <Router />
            <Footer/>
        </>
    );
};

export default App;
