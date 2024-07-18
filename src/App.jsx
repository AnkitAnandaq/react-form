// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSubmitFormData = (data) => {
    setUsers([...users, data]);
    console.log("Form submitted", data);
  };

  const handleRemoveFormData = (id) => {
    setUsers(() =>{
      return users.filter((item , index) => index!== id);
    })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-500 gap-4">
      <div className="container mr-[1.5vw] ml-[1.5vw] p-2">
        <Cards users={users} handleRemoveFormData ={handleRemoveFormData} />
        <Form handleSubmitFormData={handleSubmitFormData} />
      </div>
    </div>
  );
};

export default App;
