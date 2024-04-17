import { AppProvider } from "./context/AppContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./features/app/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import PasswordReset from "./pages/PasswordReset.jsx";

import ProtectedRoutes from "./features/components/ProtectedRoutes.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 240 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<h1>GuardRails</h1>} />
              <Route path="/login" element={<Login />} />
              <Route path="/update-password" element={<PasswordReset />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/app/*" element={<AppLayout />} />
                <Route path="/admin/*" element={<Admin />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "gray",
            },
          }}
        />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
