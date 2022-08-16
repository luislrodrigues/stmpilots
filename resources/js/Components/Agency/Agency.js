import React from "react";
import CreateTemplate from "../../templates/createTemplate/CreateTemplate";
import { useAgency } from "./useAgency";

export default function Agency() {
    const {
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
        item
    } = useAgency();
    return (
        <CreateTemplate
            data={agency}
            deleted={deleteAgency}
            create={createAgency}
            handleChangeCreate={handleChangeCreate}
            createValue={createValue}
            editValue={editValue}
            edit={edit}
            editData={editAgency}
            cancel={cancel}
            editOpen={editOpen}
            handleChangeEdit={handleChangeEdit}
            listTitle="Lista de Agencias"
            createTitle="Crear Agencias"
            searchLabel="Nombre de la Agencia"
            item={item}
        />
    );
}