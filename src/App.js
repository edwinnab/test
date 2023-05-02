import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Table from "./components/Table";
import User from "./components/UserDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/students" element={<Table />}>
      </Route>
      <Route path="/response" element={<Form />}>
      </Route>
      <Route path="/setting" element={<User />}>
      </Route>
      <Route path="/" element={<Table />}>
      </Route>
     </Routes>
     </BrowserRouter>
     {/* <Form />
     <Table /> */}
    </div>
  );
}

export default App;
