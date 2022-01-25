import cogoToast from "cogo-toast";
import { useMutation, useQueryClient } from "react-query";
import { makeAdmin } from "../../../api/auth";

import useContexts from "../../../context/useContexts";
import DashboardLayout from "../DashboardLayout/DashboardLayout"

const Users = () => {
    const { users } = useContexts();

    // Make Admin
    const cache = useQueryClient();
    const { isLoading, mutateAsync: makeAdminFunc } = useMutation('update-user', makeAdmin, {
        onSuccess: (data) => {
            cache.invalidateQueries('users');
            cogoToast.success(data.message);
        },
        onError: (error) => {
            cogoToast.error(error.message);
        }
    })



    return (
        <DashboardLayout>
            <h2 className="text-2xl font-semibold text-slate-700">All Users</h2>

            <div className="mt-4">
                <table className="w-full">
                    <tr>
                        <th class="bg-blue-100 border text-left px-8 py-4">First Name</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Last Name</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Email</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Joined</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Make Admin</th>
                    </tr>

                    {
                        users ? (
                            <tbody>
                                {
                                    users.map((user, key) => (
                                        <tr key={key}>
                                            <td class="border px-8 py-4">{user.firstname} </td>
                                            <td class="border px-8 py-4">{user.lastname}</td>
                                            <td class="border px-8 py-4">{user.email}</td>
                                            <td class="border px-8 py-4">12-20-2022</td>

                                            {
                                                user.type != 'admin' ? (
                                                    <td class="border px-8 py-4"><button 
                                                    onClick={() => makeAdminFunc(user._id)}
                                                    className="ml-auto bg-blue-600 text-white py-2 px-3 rounded-lg capitalize hover:bg-indigo-500 transition">make admin</button></td>
                                                ): (
                                                    <td class="border px-8 py-4">Already Admin</td>
                                                )
                                            }

                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        ) : "<h2>No such users</h2>"
                    }

                    
                </table>
            </div>

        </DashboardLayout>
    )
}

export default Users;
