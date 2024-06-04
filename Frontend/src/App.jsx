import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Section from "./components/Section/Section";
import Tasks from "./components/Tasks/Task";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/section" element={<Section />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
};
export default App;
