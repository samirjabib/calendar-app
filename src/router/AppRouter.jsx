import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes, useAuthStore } from "../auth";
import { CalendarPage } from "../calendar";


export const AppRouter = () => {


    const { status, checkAuthToken } = useAuthStore();


    useEffect(() => {
        checkAuthToken();
    }, [])
    


    if( status === 'checking'){
        return <h3>Loading...</h3>
    }

    return(
            <Routes>
                {/* with this component we can nested routes   */}  
            {
                (status === 'not-authenticated')
                    ?
                        (
                            <>
                                <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                                <Route path="/auth/*" element={<AuthRoutes/>}/>
                            </>
                        ) 
                    : 
                        (
                            <>
                                <Route path="/" element={<CalendarPage/>}/>
                                <Route path="/*" element={<Navigate to='/'/>}/>    
                            </>              
                        )
                    
            }
                                                                        {/* 
                                                                            The componet route have two propierties path and element
                                                                            
                                                                            path: with this propieties we can make the URL path.

                                                                                note: with the '/*' we indicate to the route, that any route will
                                                                                pass through here includes those that do not exist, if this route have 
                                                                                the has a prefix, all routes pass 
                                                                                
                                                                                for example:

                                                                                "/auth/*" all routes with auth render the login page" this
                                                                                is util for render anidates routes. 

                                                                            element: ths propierties receive the element which must.
                                                                            rendering.
                                                                           

                                                                            with the component navigate we can redirect  to other route.
                                                                            
                                                                        */}
            </Routes>
    )
}