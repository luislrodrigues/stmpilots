import React from 'react'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function Edit({editData,searchLabel,editValue,handleChangeEdit,cancel,item}) {
  return (
    <Grid item xs={12} sm={6} md={5}>
    <Typography
        sx={{ mb: 2, fontWeight: "bold", fontSize: "18px" }}
        variant="h6"
        component="div"
    >
        {`Editar "${item.name}"`}
    </Typography>
    <Box
        component="form"
        onSubmit={editData}
        sx={{
            background: "#fff",
            width: "100%",
            boxSizing: "borderBox",
            px: 2,
            py: 3,
        }}
    >
        <Box component="div">
            <TextField
                autoComplete="off"
                id="create"
                label={searchLabel}
                name="create"
                variant="outlined"
                sx={{ width: "100%" }}
                value={editValue}
                onChange={handleChangeEdit}
            />
        </Box>
        <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <Button
                component="span"
                sx={{ marginTop: 2, mx: 1 }}
                variant="contained"
                onClick={cancel}
                color="error"
            >
                CANCELAR
            </Button>
            <Button
                type="submit"
                sx={{ marginTop: 2, mx: 1 }}
                variant="contained"
                onClick={editData}
                disabled={editValue ? false : true}
            >
                ACTUALIZAR
            </Button>
        </Box>
    </Box>
</Grid>
  )
}
