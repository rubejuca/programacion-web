import "bootstrap/dist/css/bootstrap.min.css";

import { Headers } from "./assets/components/Headers";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { List_Contact } from "./assets/components/List_Contact";
import { Contact } from "./assets/components/Contact";

function App() {
  const [contact, setContact] = useState([]);
  const [flag, setFlag] = useState(false);

  const getContact = async () => {
    const response = await axios.get(
      "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project"
    );
    console.log(response);
    setContact(response.data);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <Headers flag={flag} setFlag={setFlag} />
      {flag ? <Contact /> : <List_Contact list_contact={contact} />}
      {/* <Headers />
      <List_Contact list_contact={contact} />
      <Contact /> */}
    </>
  );
}

export default App;
