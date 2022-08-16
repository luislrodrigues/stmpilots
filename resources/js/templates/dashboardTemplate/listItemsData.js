import React from 'react';
import ArticleIcon from "@mui/icons-material/Article";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import GavelIcon from "@mui/icons-material/Gavel";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import FlagIcon from "@mui/icons-material/Flag";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PersonIcon from "@mui/icons-material/Person";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import GroupIcon from "@mui/icons-material/Group";
import RowingIcon from '@mui/icons-material/Rowing';
export const listItemsData = {
    primaryItems: [
        {
            id: 0,
            to: "/maniobras",
            primary: "Maniobras Realizadas",
            icon: <ArticleIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 1,
            to: "/pilrep-lanrep",
            primary: "Crear Pilrep Lanrep",
            icon: <LooksTwoIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 2,
            to: "/lanrep",
            primary: "Crear Lanrep",
            icon: <PlusOneIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 3,
            to: "/turnos",
            primary: "Turnos",
            icon: <AccessAlarmIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 4,
            to: "/normas-de-operacion-pdf",
            primary: "Normas de Operacion PDF",
            icon: <GavelIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 5,
            to: "/remolcadores-pdf",
            primary: "Remolcadores",
            icon: <KitesurfingIcon />,
            permissions: ["Administrador", "Piloto"],
        },
    ],
    secondaryItems: [
        {
            id: 0,
            to: "/agencias",
            primary: "Agencias",
            icon: <ApartmentIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 1,
            to: "/lanchas",
            primary: "Lanchas",
            icon: <KitesurfingIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 2,
            to: "/naves",
            primary: "Naves",
            icon: <DirectionsBoatIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 3,
            to: "/lineas",
            primary: "Lineas",
            icon: <LinearScaleIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 4,
            to: "/puertos",
            primary: "Puertos",
            icon: <HouseboatIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 5,
            to: "/puertos-de-matriculas",
            primary: "Puertos de Matriculas",
            icon: <AppRegistrationIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 6,
            to: "/banderas",
            primary: "Banderas",
            icon: <FlagIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 7,
            to: "/remolcadores",
            primary: "Remolcadores",
            icon: <PrecisionManufacturingIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 8,
            to: "/turnos-subir",
            primary: "Subir Turnos",
            icon: <AccessAlarmIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 9,
            to: "/normas-de-operacion-subir",
            primary: "Subir Normas de Operacion",
            icon: <GavelIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 10,
            to: "/remolcadores-subir",
            primary: "Subir Remolcadores",
            icon: <RowingIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 11,
            to: "/usuarios",
            primary: "Usuarios",
            icon: <GroupIcon />,
            permissions: ["Administrador", "Piloto"],
        },
        {
            id: 12,
            to: "/mis-datos",
            primary: "Mis Datos",
            icon: <PersonIcon />,
            permissions: ["Administrador", "Piloto"],
        },
    ],
};
