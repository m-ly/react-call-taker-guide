import { getCallTypes } from "../services/apiCallTypes";
import { useQuery } from "@tanstack/react-query";

import SideBar from "./SideBar";
import Container from "./Container";
import CallGuideForm from "./CallGuideForm";
import Header from "./Header";

export default function AppLayout({ children }) {
  const {
    isLoading,
    data: callTypes,
    error,
  } = useQuery({
    queryKey: ["calltype"],
    queryFn: getCallTypes,
  });

  if (isLoading) return <h1>Loading</h1>;
  if (error) return console.error(error);

  return (
    <main>
      <Header />
      <SideBar callTypes={callTypes} />

      <Container>
        <CallGuideForm callTypes={callTypes} />
        {children}
      </Container>
    </main>
  );
}
