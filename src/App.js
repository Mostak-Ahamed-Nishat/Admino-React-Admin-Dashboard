import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Newpage from "./pages/newpage/Newpage";
import SinglePage from "./pages/singlepage/SinglePage";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./data/formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<Newpage inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <Newpage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
