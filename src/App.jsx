import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListingPage from "./Pages/ProductListingPage";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductListingPage />} />
          <Route
            path="/description/:name"
            element={<ProductDescriptionPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
