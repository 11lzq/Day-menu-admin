/*
 * @Author: liaozheqin
 * @Date: 2023-04-06 13:43:32
 * @LastEditTime: 2024-01-15 18:14:56
 * @LastEditors: liaozheqin
 * @Description: 
 * @FilePath: /react-tsvite-cli-main/src/routes/context/index.tsx
 */
// /*
//  * @Author: kime
//  * @Date: 2023-04-04 15:18:52
//  * @LastEditors: kime
//  * @LastEditTime: 2023-04-04 15:46:46
//  * @Description: 
//  */
// import React, { Component, createContext, useContext, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const AuthContext: any = createContext(null);

// export const AuthProvider = ({ children }: any) => {
//     const [user, setUser] = useState<string | any>("");
//     const navigate = useNavigate();

//     const login = async (data: any) => {
//         setUser(data);
//         navigate("/home");
//     };

//     // call this function to sign out logged in user
//     const logout = () => {
//         setUser(null);
//         navigate("/login", { replace: true });
//     };

//     const value = useMemo(
//         () => ({
//             user,
//             login,
//             logout
//         }),
//         [user]
//     );

//     return (
//         <AuthContext.Provider
//             value={value}
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => {
//     return useContext(AuthContext);
// };