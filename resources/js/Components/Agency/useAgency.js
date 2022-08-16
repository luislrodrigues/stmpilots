import { useEffect, useState } from "react";
import { ENDPOINT } from "../../helpers/helpers";
import React from "react";
import axios from "axios";

export const useAgency = () => {
    const [agency, setAgency] = useState([]);
    const [createValue, setCreateValue] = useState("");
    const [editValue, setEditValue] = useState("");
    const [editOpen, setEditOpen] = useState(false);
    const [editId, setEditId] = useState(false);
    const [item, setItem] = useState([]);

    const getAgency = async () => {
        const URL = `/api/agency`;
        const token = localStorage.getItem("access_token");
        const res = await axios.get(`${ENDPOINT}${URL}`, {
            headers: {
                Authorization: token,
            },
        });
        console.log(res.data);
        setAgency(res.data.data);
    };
    useEffect(() => {
        getAgency();
    }, []);

    const createAgency = async (e) => {
        const URL = `/api/agency`;
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
            getAgency();
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

    const deleteAgency = async (e) => {
        const id = e.currentTarget.id;
        const URL = `/api/agency/${id}`;
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
                getAgency();
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

    const editAgency = async (e) => {
        e.preventDefault();
        const URL = `/api/agency/${editId}`;
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
            getAgency();
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
        const itemFind = agency.find((el) => el.id == id);
        setItem(itemFind);
        setEditValue(itemFind.name);
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
        agency,
        createValue,
        editValue,
        editOpen,
        createAgency,
        deleteAgency,
        editAgency,
        edit,
        cancel,
        handleChangeCreate,
        handleChangeEdit,
        item,
    };
};
