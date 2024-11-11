import { RouterProvider } from "react-router-dom";
import router from "./router"; // Đảm bảo đường dẫn đúng

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
