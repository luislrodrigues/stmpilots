import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext/AuthContext";
import AgencyPage from "../Pages/agencyPage/AgencyPage";
import BoatPage from "../Pages/boatPage/BoatPage";
import FlagsPage from "../Pages/flagsPage/FlagsPage";
import LanrepPage from "../Pages/lanrepPage/LanrepPage";
import LinesPage from "../Pages/linesPage/LinesPage";
import ManeuversPage from "../Pages/maneuversPage/ManeuversPage";
import MyDataPage from "../Pages/myDataPage/MyDataPage";
import OperatingRulesPDFPage from "../Pages/operatingRulesPDFPage/OperatingRulesPDFPage";
import OperatingRulesUploadPage from "../Pages/operatingRulesUploadPage/OperatingRulesUploadPage";
import PilrepLanrepPage from "../Pages/pilrepLanrepPage/PilrepLanrepPage";
import PortsOfRegistrationPage from "../Pages/portsOfRegistrationPage/PortsOfRegistrationPage";
import PortsPage from "../Pages/portsPage/PortsPage";
import ShipsPage from "../Pages/shipsPage/ShipsPage";
import TugboatsPage from "../Pages/tugboatsPage/TugboatsPage";
import TugboatsPDFPage from "../Pages/tugboatsPDFPage/TugboatsPDFPage";
import TugboatsUploadPage from "../Pages/tugboatsUploadPage/TugboatsUploadPage";
import TurnsPage from "../Pages/turnsPage/TurnsPage";
import TurnsUploadPage from "../Pages/turnsUploadPage/TurnsUploadPage";
import UsersPage from "../Pages/usersPage/UsersPage";
import SingInPage from "../Pages/SingInPage/SingInPage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<SingInPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/maniobras" element={<ManeuversPage />} />
                    <Route
                        path="/pilrep-lanrep"
                        element={<PilrepLanrepPage />}
                    />
                    <Route path="/lanrep" element={<LanrepPage />} />
                    <Route path="/turnos" element={<TurnsPage />} />
                    <Route
                        path="/normas-de-operacion-pdf"
                        element={<OperatingRulesPDFPage />}
                    />
                    <Route
                        path="/remolcadores-pdf"
                        element={<TugboatsPDFPage />}
                    />
                    <Route path="/agencias" element={<AgencyPage />} />
                    <Route path="/lanchas" element={<BoatPage />} />
                    <Route path="/naves" element={<ShipsPage />} />
                    <Route path="/lineas" element={<LinesPage />} />
                    <Route path="/puertos" element={<PortsPage />} />
                    <Route
                        path="/puertos-de-matriculas"
                        element={<PortsOfRegistrationPage />}
                    />
                    <Route path="/banderas" element={<FlagsPage />} />
                    <Route path="/remolcadores" element={<TugboatsPage />} />
                    <Route path="/turnos-subir" element={<TurnsUploadPage />} />
                    <Route
                        path="/normas-de-operacion-subir"
                        element={<OperatingRulesUploadPage />}
                    />
                    <Route
                        path="/remolcadores-subir"
                        element={<TugboatsUploadPage />}
                    />
                    <Route path="/usuarios" element={<UsersPage />} />
                    <Route path="/mis-datos" element={<MyDataPage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}
