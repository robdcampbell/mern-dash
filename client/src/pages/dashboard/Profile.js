import { useState } from "react";
// import {FormRow}
import { useAppContext } from "../../context/appContext";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {};

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default Profile;
