import Sidebar from "../../../components/Backend/Sidebar/Sidebar"

const DashboardLayout = ({children}) => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="w-full p-4">
                {children}
                
            </div>
            
        </div>
    )
}

export default DashboardLayout;
