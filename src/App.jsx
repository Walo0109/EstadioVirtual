import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
    <>
      <HomePage />
      <ContactPage />
      <AdminPage/>
    </>
  );
};

export default App;