import React from "react";
import CreateTemplate from "../../templates/createTemplate/CreateTemplate";
import { useTugboat } from "./useTugboat";

export default function Tugboat() {
    const {
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
        item
    } = useTugboat();
    return (
        <CreateTemplate
            data={tugboat}
            deleted={deleteTugboat}
            create={createTugboat}
            handleChangeCreate={handleChangeCreate}
            createValue={createValue}
            editValue={editValue}
            edit={edit}
            editData={editTugboat}
            cancel={cancel}
            editOpen={editOpen}
            handleChangeEdit={handleChangeEdit}
            listTitle="Lista de Remolcadores"
            createTitle="Crear Remolcadores"
            searchLabel="Nombre del Remolcador"
            item={item}
        />
    );
}