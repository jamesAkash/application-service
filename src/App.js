import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SharedLayout from "./pages/SharedLayout";
import Apply from "./pages/Apply";
import MaterialComponent from "./pages/MaterialComponent";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="apply" element={<Apply />} />
          </Route> */}
          <Route path="/" element={<MaterialComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
