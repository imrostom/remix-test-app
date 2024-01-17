import { Link, useLoaderData } from "@remix-run/react";

const UserList = () => {

    const users = useLoaderData();

    return (
        <div className="row">
            <div className="col-sm-12">
                {users.length ? (
                    <table className="table table-striped table-bordered">
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
                            {users.map((user, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <Link className="btn btn-success mx-1" to={`/users/${user._id}/edit`}>
                                            <i className="fa-solid fa-user-pen"></i>
                                        </Link>
                                        
                                        <Link onClick={(event) => {
                                            const response = confirm("Please confirm you want to delete this record.");
                                            if (!response) {
                                                event.preventDefault();
                                            }
                                        }} className="btn btn-danger" to={`/users/${user._id}/destroy`}>
                                            <i className="fa-solid fa-user-minus"></i>
                                        </Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                ) : (
                    <h2 className="text-center">User not found.</h2>
                )}
            </div>
        </div>
    )
}


export default UserList;