import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../../helpers/helpers";
import axios from "axios";

export const useAuthContext = () => {
    const [tokens, setTokens] = useState(
        localStorage.getItem("access_token")
            ? localStorage.getItem("access_token")
            : null
    );
    const refresh = async () => {
        const URL = `/api/auth/refresh`;
        try {
            const token = localStorage.getItem("access_token");
            const res = await axios.post(
                `${ENDPOINT}${URL}`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            localStorage.setItem(
                "access_token",
                `Bearer ${res.data.access_token}`
            );
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setTokens(localStorage.getItem("access_token"));
            console.log(res.data);
        } catch (error) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            setTokens(null);
            throw error;
        }
    };

    useEffect(() => {
        const time = 1000 * 60 * 30;
        const interval = setInterval(() => {
            if (tokens) {
                refresh();
            }
        }, time);
        return () => clearInterval(interval);
    }, [tokens]);

    return {
        tokens,
        setTokens,
    };
};












































// const me = async () => {
//     const URL = `/api/auth/me`;
//     try {
//         const token = localStorage.getItem("access_token");
//         const res = await axios.post(
//             `${ENDPOINT}${URL}`,
//             {},
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             }
//         );
//         localStorage.setItem('user',JSON.stringify(res.data.data));
//     } catch (error) {
//         localStorage.removeItem("user");
//         localStorage.removeItem("access_token");
//         setTokens(null);
//         throw error;
//     }
// };
