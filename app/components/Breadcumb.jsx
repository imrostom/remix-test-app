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
            </div>
        </div>
    )
}

export default Breadcumb