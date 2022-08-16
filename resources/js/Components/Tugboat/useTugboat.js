import { useEffect, useState } from "react";
import { ENDPOINT } from "../../helpers/helpers";
import React from "react";
import axios from "axios";

export const useTugboat = () => {
    const [tugboat, setTugboat] = useState([]);
    const [createValue, setCreateValue] = useState("");
    const [editValue, setEditValue] = useState("");
    const [editOpen, setEditOpen] = useState(false);
    const [editId, setEditId] = useState(false);
    const [item, setItem] = useState([]);

    const getTugboat = async () => {
        const URL = `/api/tugboat`;
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`${ENDPOINT}${URL}`, {
            headers: {
                Authorization: token,
            },
        });
        console.log(res.data);
        setTugboat(res.data.data);
    };
    useEffect(() => {
        getTugboat();
    }, []);

    const createTugboat = async (e) => {
        const URL = `/api/tugboat`;
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
            getTugboat();
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

    const deleteTugboat = async (e) => {
        const id = e.currentTarget.id;
        const URL = `/api/tugboat/${id}`;
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
                getTugboat();
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

    const editTugboat = async (e) => {
        e.preventDefault();
        const URL = `/api/tugboat/${editId}`;
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
            getTugboat();
            setEditOpen(false);
            console.log(res.data);
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
        const itemFind = tugboat.find((el) => el.id == id);
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
        tugboat,
        createValue,
        editValue,
        editOpen,
        createTugboat,
        deleteTugboat,
        editTugboat,
        edit,
        cancel,
        handleChangeCreate,
        handleChangeEdit,
        item,
    };
};
