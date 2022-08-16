import React from "react";
import CreateTemplate from "../../templates/createTemplate/CreateTemplate";
import { usePort } from "./usePort";

export default function Port() {
    const {
        port,
        createValue,
        editValue,
        editOpen,
        createPort,
        deletePort,
        editPort,
        edit,
        cancel,
        handleChangeCreate,
        handleChangeEdit,
        item
    } = usePort();
    return (
        <CreateTemplate
            data={port}
            deleted={deletePort}
            create={createPort}
            handleChangeCreate={handleChangeCreate}
            createValue={createValue}
            editValue={editValue}
            edit={edit}
            editData={editPort}
            cancel={cancel}
            editOpen={editOpen}
            handleChangeEdit={handleChangeEdit}
            listTitle="Lista de Puertos"
            createTitle="Crear Puertos"
            searchLabel="Nombre de Puerto"
            item={item}
        />
    );
}