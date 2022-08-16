import React from "react";
import Agency from "../../Components/Agency/Agency";
import DashboardTemplate from "../../templates/dashboardTemplate/DashboardTemplate";
import {useAgency} from '../../Components/Agency/useAgency'
export default function AgencyPage() {
    useAgency()
    return (
        <DashboardTemplate>
            <Agency />
        </DashboardTemplate>
    );
}
