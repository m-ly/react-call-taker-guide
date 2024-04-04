import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getCallTypes, deleteCallType } from "../services/apiCallTypes";
import toast from "react-hot-toast";
import NewGuide from "../components/NewGuide";

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();
  const { handleSetForm } = useAppContext();

  const {
    isLoading,
    data: callTypes,
    error,
  } = useQuery({
    queryKey: ["calltype"],
    queryFn: getCallTypes,
  });

  const callTypeName = callTypes ? Object.keys(callTypes) : null;

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCallType,
    onSuccess: () => {
      toast.success("Delete successful!");
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <header></header>
      <h1>This is the Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Call Type</th>
            <th>Available Actions</th>
          </tr>
        </thead>
        <tbody>
          {callTypeName.map((name) => {
            return (
              <tr key={callTypes[name].id}>
                <td>{name}</td>
                <td>
                  <button
                    onClick={() => mutate(callTypes[name].id)}
                    disabled={isDeleting}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className=""
        onClick={() => {
          setShowForm(!showForm);
          handleSetForm("questionGuide");
        }}
      >
        New Guide
      </button>
      {showForm && <NewGuide />}
    </div>
  );
}

export default Admin;
