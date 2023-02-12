import "assets/scss/style.scss";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import DetailPages from "pages/DetailPages";
import Checkout from "pages/Checkout";

// import Button from "elemets/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailPages} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/example" component={Example} />
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
