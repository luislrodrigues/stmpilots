import React from "react";
import {Grid} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useStyles } from "./styled";
import Create from "./create/Create";
import Edit from "./edit/Edit";
import ListItems from "./list/ListItems";
export default function CreateTemplate(props) {
    const classes = useStyles();
    const {
        data,
        deleted,
        create,
        handleChangeCreate,
        createValue,
        editValue,
        edit,
        editData,
        cancel,
        editOpen,
        handleChangeEdit,
        listTitle,
        createTitle,
        searchLabel,
        editId,
        item
    } = props;
    return (
        <Grid
            container
            className={classes.root}
            spacing={3}
            sx={{ boxSizing: "borderBox", marginTop: 10 }}
        >
            <Grid item xs={12} sm={6} md={7}>
                {data.length > 0 && (
                    <ListItems
                        data={data}
                        listtitle={listTitle}
                        editOpen={editOpen}
                        edit={edit}
                        deleted={deleted}
                    />
                )}
            </Grid>
            {editOpen ? (
                <Edit
                    editData={editData}
                    searchLabel={searchLabel}
                    editValue={editValue}
                    handleChangeEdit={handleChangeEdit}
                    cancel={cancel}
                    editId={editId}
                    item={item}
                />
            ) : (
                <Create
                    createTitle={createTitle}
                    create={create}
                    searchLabel={searchLabel}
                    createValue={createValue}
                    handleChangeCreate={handleChangeCreate}
                />
            )}
        </Grid>
    );
}
