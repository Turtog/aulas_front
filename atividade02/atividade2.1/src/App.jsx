import { ServicoProvider } from "./components/Context/ServicoProvider.jsx";
import { AuthProvider } from "./components/Context/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./main.jsx";

function App() {
  return (
    <AuthProvider>
      <ServicoProvider>
        <RouterProvider router={router} />
      </ServicoProvider>
    </AuthProvider>
  );
}

export default App;