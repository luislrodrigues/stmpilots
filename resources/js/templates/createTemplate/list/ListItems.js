import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Divider from "@mui/material/Divider";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import React from "react";

export default function ListItems({listTitle,data,editOpen,edit,deleted}) {
    return (
        <React.Fragment>
            <Typography
                sx={{ mb: 2, fontWeight: "bold", fontSize: "18px" }}
                variant="h6"
                component="div"
            >
                {listTitle}
            </Typography>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                {data.map((el) => {
                    return (
                        <Box key={el.id}>
                            <ListItem
                                secondaryAction={
                                    <Box>
                                        <IconButton
                                            sx={{ mx: "1px" }}
                                            edge="end"
                                            aria-label="edit"
                                            id={el.id}
                                            disabled={editOpen ? true : false}
                                            onClick={edit}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ mx: "1px" }}
                                            edge="end"
                                            aria-label="delete"
                                            onClick={deleted}
                                            id={el.id}
                                            disabled={editOpen ? true : false}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={el.name} />
                            </ListItem>
                            <Divider />
                        </Box>
                    );
                })}
            </List>
        </React.Fragment>
    );
}
