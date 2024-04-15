import toast from "react-hot-toast";
import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) toast.error(error.message);

  return data.user;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();

  if (error) toast.error(error.message);
}

export async function createUser({
  email,
  password,
  firstName,
  lastName,
  isAdministrator = false,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        isAdministrator,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getAllUsers() {
  let { data: users, error } = await supabase.from("users").select("*");

  if (error) throw new Error(error.message);

  return users;
}
