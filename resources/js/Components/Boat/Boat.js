import React from "react";
import CreateTemplate from "../../templates/createTemplate/CreateTemplate";
import { useBoat } from "./UseBoat";

export default function Boat() {
    const {
        boat,
        createValue,
        editValue,
        editOpen,
        createBoat,
        deleteBoat,
        editBoat,
        edit,
        cancel,
        handleChangeCreate,
        handleChangeEdit,
        item
    } = useBoat();
    return (
        <CreateTemplate
            data={boat}
            deleted={deleteBoat}
            create={createBoat}
            handleChangeCreate={handleChangeCreate}
            createValue={createValue}
            editValue={editValue}
            edit={edit}
            editData={editBoat}
            cancel={cancel}
            editOpen={editOpen}
            handleChangeEdit={handleChangeEdit}
            listTitle="Lists de Lanchas"
            createTitle="Crear Lanchas"
            searchLabel="Nombre de la Lancha"
            item={item}
        />
    );
}
