import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';
import useFirebase from './../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const allContext = useFirebase();
    const { services, handleBuy } = useProducts();
    const data = { services, handleBuy, allContext }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;