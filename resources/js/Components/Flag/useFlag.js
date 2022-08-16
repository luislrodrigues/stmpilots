import { useEffect, useState } from "react";
import { ENDPOINT } from "../../helpers/helpers";
import React from "react";
import axios from "axios";

export const useFlag = () => {
    const [flag, setFlag] = useState([]);
    const [createValue, setCreateValue] = useState("");
    const [editValue, setEditValue] = useState("");
    const [editOpen, setEditOpen] = useState(false);
    const [editId, setEditId] = useState(false);
    const [item, setItem] = useState([]);

    const getFlag = async () => {
        const URL = `/api/flag`;
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`${ENDPOINT}${URL}`, {
            headers: {
                Authorization: token,
            },
        });
        console.log(res.data);
        setFlag(res.data.data);
    };
    useEffect(() => {
        getFlag();
    }, []);

    const createFlag = async (e) => {
        const URL = `/api/flag`;
        e.preventDefault();
        try {
            const token = localStorage.getItem("access_token");
            const res = await axios.post(
                `${ENDPOINT}${URL}`,
                {
                    name: createValue,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            console.log(res.data);
            getFlag();
            setCreateValue("");
            if (res.data.code === 200) {
                Swal.fire({
                    width: "250px",
                    heightAuto: "false",
                    icon: "success",
                    title: `${res.data.message}`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            throw error;
        }
    };

    const deleteFlag = async (e) => {
        const id = e.currentTarget.id;
        const URL = `/api/flag/${id}`;
        const result = await Swal.fire({
            width: "250px",
            heightAuto: "false",
            text: "Estas seguro?",
            icon: "question",
            cancelButtonText: "Cancelar",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
        });
        if (result.isConfirmed) {
            try {
                const token = localStorage.getItem("access_token");
                const res = await axios.delete(`${ENDPOINT}${URL}`, {
                    headers: {
                        Authorization: token,
                    },
                });
                console.log(res.data);
                getFlag();
                if (res.data.code === 200) {
                    Swal.fire({
                        width: "250px",
                        heightAuto: "false",
                        icon: "success",
                        title: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (error) {
                throw error;
            }
        }
    };

    const editFlag = async (e) => {
        e.preventDefault();
        const URL = `/api/flag/${editId}`;
        try {
            const token = localStorage.getItem("access_token");
            const res = await axios.put(
                `${ENDPOINT}${URL}`,
                {
                    name: editValue,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            setEditValue("");
            setEditOpen(false);
            console.log(res.data);
            getFlag();
            if (res.data.code === 200) {
                Swal.fire({
                    width: "250px",
                    heightAuto: "false",
                    icon: "success",
                    title: `${res.data.message}`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            throw error;
        }
    };

    const edit = (e) => {
        const id = e.currentTarget.id;
        const itemFind = flag.find((el) => el.id == id);
        setEditValue(itemFind.name);
        setItem(itemFind);
        setEditOpen(true);
        setEditId(id);
    };
    const cancel = () => {
        setEditOpen(false);
        setEditId(false);
        setEditValue("");
    };

    const handleChangeCreate = (e) => {
        setCreateValue(e.target.value);
    };
    const handleChangeEdit = (e) => {
        setEditValue(e.target.value);
    };

    return {
        flag,
        createValue,
        editValue,
        editOpen,
        createFlag,
        deleteFlag,
        editFlag,
        edit,
        cancel,
        handleChangeCreate,
        handleChangeEdit,
        item,
    };
};
