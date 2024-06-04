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

  const { data: auth } = await supabase.auth.getUser();

  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", auth.user.id);

  if (error) toast.error(error.message);

  return user[0];
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

  error
    ? toast.error(error.message)
    : toast.success(
        `Successfully Created a new user profile for ${firstName} ${lastName}.`
      );

  return data;
}

export async function getAllUsers() {
  const { data: users, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("is_active", true);

  if (error) throw new Error(error.message);

  return users;
}

export async function deleteUser(id) {
  const { data, error } = await supabase.from("profiles").delete().eq("id", id);

  if (error) toast.error(error.message);

  return data;
}
