const axios = require("axios").default;
import Link from "next/link";
import { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
const add = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/hero", form);
      {
        console.log(res);
      }
      router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="container">
      <h1 className="display-3">Add a new Hero Identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          onChange={handleChange}
          label="Superhero"
          type="text"
          name="superHero"
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="RealName"
          type="text"
          name="realName"
        />
        <MDBBtn type="submit">Add new hero</MDBBtn>
      </form>
    </div>
  );
};

export default add;
