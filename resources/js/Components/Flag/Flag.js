import React from "react";
import CreateTemplate from "../../templates/createTemplate/CreateTemplate";
import { useFlag } from "./useFlag";

export default function Flag() {
    const {
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
        item
    } = useFlag();
    return (
        <CreateTemplate
            data={flag}
            deleted={deleteFlag}
            create={createFlag}
            handleChangeCreate={handleChangeCreate}
            createValue={createValue}
            editValue={editValue}
            edit={edit}
            editData={editFlag}
            cancel={cancel}
            editOpen={editOpen}
            handleChangeEdit={handleChangeEdit}
            listTitle="Lists de Banderas"
            createTitle="Crear Bandera"
            searchLabel="Nombre de la Bandera"
            item={item}
        />
    );
}