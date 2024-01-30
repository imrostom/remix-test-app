import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export const FetchForm = () => {
    const fetcher = useFetcher();

    return <>
          <fetcher.Form method="post">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Your Name *" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Your Email *" />
                </div>

                <div className="mb-3">
                    <button className="btnContact">Send Message</button>
                </div>
            </div>
        </fetcher.Form>
    </>
}