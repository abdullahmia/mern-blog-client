import UserDashboard from "../../../components/Backend/UserDashboard/UserDashboard";
import useContexts from "../../../context/useContexts"
import DashboardLayout from "../DashboardLayout/DashboardLayout"


const Dashboard = () => {
    const { user } = useContexts();
    return (
        <DashboardLayout>
            <UserDashboard />
        </DashboardLayout>
    )
}

export default Dashboard
