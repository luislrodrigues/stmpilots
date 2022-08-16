import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { ENDPOINT } from "../../helpers/helpers";

export const useSingIn = () => {
    const navigate = useNavigate();
    const { setTokens } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        const URL = `/api/auth/login`;
        try {
            const formValue = new FormData(e.target);
            setLoading(true);
            const res = await axios.post(`${ENDPOINT}${URL}`, {
                username: formValue.get("username"),
                password: formValue.get("password"),
            });
            const token = res.data.access_token;
            localStorage.setItem("access_token", `Bearer ${token}`);
            setTokens(localStorage.getItem("access_token"));
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/maniobras");
            setLoading(false);
            console.log(res.data);
        } catch (error) {
            setOpen(true);
            setLoading(false);
            throw error;
        }
    };

    const logout = async () => {
        const URL = `/api/auth/logout`;
        try {
            const token = localStorage.getItem("access_token");
            setLoading(true);
            const res = await axios.post(
                `${ENDPOINT}${URL}`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            console.log(res.data);
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            setTokens(null);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            throw error;
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return {
        login,
        logout,
        handleClose,
        open,
        loading
    };
};
