import { Link } from "@remix-run/react"

const Breadcumb = () => {
    return (
        <div className="row mb-4">
            <div className="col-sm-12">
                <Link className="btn btn-success userListButton" to="/users">User List</Link>
                <Link className="btn btn-success" to="/users/add">User Add</Link>
            </div>
        </div>
    )
}

export default Breadcumb