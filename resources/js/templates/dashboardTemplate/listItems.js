import React  from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSingIn } from "../../Components/singIn/useSingIn";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { listItemsData } from "./listItemsData";



export const MainListItems = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const dataFilter = listItemsData.primaryItems.filter((item) =>
        item.permissions.includes(user.role.name)
    );
    return (
        <React.Fragment>
            {dataFilter.map((el) => {
                return (
                    <Link key={el.id} style={{textDecoration:'none',color:'black'}} to={el.to}>
                        <ListItemButton>
                            <ListItemIcon>{el.icon}</ListItemIcon>
                            <ListItemText primary={el.primary} />
                        </ListItemButton>
                    </Link>
                );
            })}
        </React.Fragment>
    );
};

export const SecondaryListItems = () => {
    const { logout } = useSingIn();
    const user = JSON.parse(localStorage.getItem("user"));
    const dataFilter = listItemsData.secondaryItems.filter((item) =>
        item.permissions.includes(user.role.name)
    );
    return (
        <React.Fragment>
            {dataFilter.map((el) => {
                return (
                    <Link key={el.id} style={{textDecoration:'none',color:'black'}} to={el.to}>
                        <ListItemButton>
                            <ListItemIcon>{el.icon}</ListItemIcon>
                            <ListItemText primary={el.primary} />
                        </ListItemButton>
                    </Link>
                );
            })}
            <ListItemButton onClick={logout}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar Session" />
            </ListItemButton>
        </React.Fragment>
    );
};
