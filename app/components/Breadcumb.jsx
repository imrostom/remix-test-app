import { Link } from "@remix-run/react"

const Breadcumb = () => {
    return (
        <div className="row mb-4">
            <div className="col-sm-12 text-center">
                <Link className="btn btn-success mx-2" to="/users">
                    <i className="fa-solid fa-users"></i> User List
                </Link>

                <Link className="btn btn-success mx-2" to="/users/add">
                    <i className="fa-solid fa-user-plus"></i> Add User
                </Link>

                <Link className="btn btn-success mx-2" to="/users/editor">
                    <i className="fa-solid fa-user-plus"></i> Editor
                </Link>

                <Link className="btn btn-success mx-2" to="/users/contact">
                    <i className="fa-solid fa-user-plus"></i> Contact
                </Link>

                <Link className="btn btn-success mx-2" to="/users/profile">
                    <i className="fa-solid fa-user-plus"></i> Profile
                </Link>

                <Link className="btn btn-success mx-2" to="/users/fetch">
                    <i className="fa-solid fa-user-plus"></i> Fetch
                </Link>
            </div>
        </div>
    )
}

export default Breadcumb