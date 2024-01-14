const UserList = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Md Rostom Ali</td>
                            <td>rostomali4444@gmail.com</td>
                            <td>Mirpur, Dhaka</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Md Rostom Ali</td>
                            <td>rostomali4444@gmail.com</td>
                            <td>Mirpur, Dhaka</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Md Rostom Ali</td>
                            <td>rostomali4444@gmail.com</td>
                            <td>Mirpur, Dhaka</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default UserList;