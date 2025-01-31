import { AuthProvider } from "./components/Context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} /> 
    </AuthProvider>
  );
}

export default App;