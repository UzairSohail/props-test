import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/contacts";
import Avatar from "./components/avatar";

function App() {
  return (
    <div>
      <Avatar img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" />
      <Contact name="Beyonce" />
      <Contact name="Jack Bauer" />
    </div>
  );
}

export default App;
