import router from '../../router';
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';

import { MODE }  from '../../config/env';

import ReactRoute from "../react-route/ReactRoute";


export default function RouterView() {
    useEffect(() => {
        if(MODE === 'development') {
            console.group('Router');
            console.log(router);
            console.groupEnd();
        }
    }, []);


    return (
        <BrowserRouter>
            {
                router.routes.map((route, index) => {
                    return (
                        <ReactRoute
                            route={ route }
                            key={ index }
                            index={index}
                        />
                   )
                })
            }
        </BrowserRouter>
    )
}