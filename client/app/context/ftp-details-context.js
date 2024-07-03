"use client";

import React, { createContext, useContext, useState } from 'react';

export const FtpDetails = createContext();

export const useFtpDetailsContext = () => {
    return useContext(FtpDetails);
}

const FtpDetailsContextProvider = ({ children }) => {
    const [state, setState] = useState({
        host: "localhost",
        user: "colson",
        pass: "5003",
        endpoint: "/api/ftp",
        currentPath: "/",
        port: 21,
        currentDirs: {}
    });

    return (
        <FtpDetails.Provider value={{state, setState}}>
            {children}
        </FtpDetails.Provider>
    );
};

export default FtpDetailsContextProvider;
