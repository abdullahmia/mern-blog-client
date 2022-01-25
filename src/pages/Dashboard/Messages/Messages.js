import DashboardLayout from "../DashboardLayout/DashboardLayout"

const Messages = () => {
    return (
        <DashboardLayout>
            <h2 className="text-2xl font-semibold text-slate-700">Messages</h2>

            <div className="mt-4">
                <table className="w-full">
                    <tr>
                        <th class="bg-blue-100 border text-left px-8 py-4">Name</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Email</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Message</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Date</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Delete</th>
                    </tr>

                    <tbody>
                        <tr>
                            <td class="border px-8 py-4">Tuhin Khandokar</td>
                            <td class="border px-8 py-4">thin@gmail.com</td>
                            <td class="border px-8 py-4">Hey How are you</td>
                            <td class="border px-8 py-4">12-20-2022</td>
                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                        </tr>

                        <tr>
                            <td class="border px-8 py-4">Tuhin Khandokar</td>
                            <td class="border px-8 py-4">thin@gmail.com</td>
                            <td class="border px-8 py-4">Hey How are you</td>
                            <td class="border px-8 py-4">12-20-2022</td>
                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                        </tr>

                        <tr>
                            <td class="border px-8 py-4">Tuhin Khandokar</td>
                            <td class="border px-8 py-4">thin@gmail.com</td>
                            <td class="border px-8 py-4">Hey How are you</td>
                            <td class="border px-8 py-4">12-20-2022</td>
                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                        </tr>

                        <tr>
                            <td class="border px-8 py-4">Tuhin Khandokar</td>
                            <td class="border px-8 py-4">thin@gmail.com</td>
                            <td class="border px-8 py-4">Hey How are you</td>
                            <td class="border px-8 py-4">12-20-2022</td>
                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                        </tr>

                        <tr>
                            <td class="border px-8 py-4">Tuhin Khandokar</td>
                            <td class="border px-8 py-4">thin@gmail.com</td>
                            <td class="border px-8 py-4">Hey How are you</td>
                            <td class="border px-8 py-4">12-20-2022</td>
                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                        </tr>

                        <tr>
                            <td class="border px-8 py-4">Tuhin Khandokar</td>
                            <td class="border px-8 py-4">thin@gmail.com</td>
                            <td class="border px-8 py-4">Hey How are you</td>
                            <td class="border px-8 py-4">12-20-2022</td>
                            <td class="border px-8 py-4"><button className="ml-auto bg-red-600 text-white py-2 px-3 rounded-lg"><i className="fas fa-trash-alt"></i></button></td>
                        </tr>

        
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    )
}

export default Messages;
