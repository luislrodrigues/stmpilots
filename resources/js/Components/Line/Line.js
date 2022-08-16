import React from "react";
import CreateTemplate from "../../templates/createTemplate/CreateTemplate";
import { useLine } from "./useLine";

export default function Line() {
    const {
        line,
        createValue,
        editValue,
        editOpen,
        createLine,
        deleteLine,
        editLine,
        edit,
        cancel,
        handleChangeCreate,
        handleChangeEdit,
        item
    } = useLine();
    return (
        <CreateTemplate
            data={line}
            deleted={deleteLine}
            create={createLine}
            handleChangeCreate={handleChangeCreate}
            createValue={createValue}
            editValue={editValue}
            edit={edit}
            editData={editLine}
            cancel={cancel}
            editOpen={editOpen}
            handleChangeEdit={handleChangeEdit}
            listTitle="Lista de Lineas"
            createTitle="Crear Lineas"
            searchLabel="Nombre de la Linea"
            editTitle="Editar Linea"
            item={item}
        />
    );
}