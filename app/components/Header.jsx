import { Link } from "@remix-run/react";

const Header = () => {
    return <>
        <div className="row">
            <div className="col-sm-12">
                <div className="HeaderArea">
                    <h1>
                        <Link to="/">Welcome to REMIX</Link>
                    </h1>
                </div>
            </div>
        </div>
    </>;
}

export default Header;