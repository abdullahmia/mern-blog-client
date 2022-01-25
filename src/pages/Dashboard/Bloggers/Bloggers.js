import useContexts from "../../../context/useContexts";
import DashboardLayout from "../DashboardLayout/DashboardLayout"

const Bloggers = () => {
    const {users} = useContexts();
    const bloggers = users.filter((usr) => usr.type === 'blogger');
    console.log(bloggers);
    return (
        <DashboardLayout>
            <h2 className="text-2xl font-semibold text-slate-700">Bloggers</h2>

            <div className="mt-4">
                <table className="w-full">
                    <tr>
                        <th class="bg-blue-100 border text-left px-8 py-4">Name</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Email</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Delete</th>
                    </tr>

                    <tbody>

                        {
                            bloggers ? (
                                bloggers.map((blogger, key) => (
                                        <tr key={key}>
                                            <td class="border px-8 py-4">{blogger.firstname} {blogger.lastname}</td>
                                            <td class="border px-8 py-4">{blogger.email}</td>
                                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                                        </tr>
                                    ))
                            ) : "No Bloggers available"
                        }



                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    )
}

export default Bloggers;
