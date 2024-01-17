import { json, redirect } from "@remix-run/react";
import User from "../models/User"
import { toast } from "react-toastify";

export async function loader({ params }) {
  await User.findOneAndDelete({ _id: params.id });

  return json({ 'success': true });
}

export async function clientLoader({ params, serverLoader }) {
  toast.error("User deleted!");

  await serverLoader();

  return redirect("/users");
}