import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ConfirmCard from "./components/ConfirmCard";

function App() {
  const [tempUser, setTempUser] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleUserSubmit(user) {
    setTempUser(user);
    setShowConfirm(true);
  }

  return (
    <>
      {showConfirm ? (
        <ConfirmCard user={tempUser} />
      ) : (
        <Form onSubmitUser={handleUserSubmit} />
      )}
    </>
  );
}

export default App;
