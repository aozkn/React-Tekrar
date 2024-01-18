import React, { useEffect, useState } from "react";

const User1 = () => {
  // let UserData= ""
  const [userData, setUserData] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // fetch("https://randomuser.me/api/")
    //   .then((res) => res.json())
    //   .then((data) => setUserData(data.results[0]))
    //   .catch((err) => console.log(err));

    //?ComponenetDidMount stage
    const timer = setInterval(getUser, 5000);
    getUser();

    return () => {
      //?ComponentWillUnmount
      clearInterval(timer);
    };
  }, []);

  console.log(userData);
  return (
    <div>
      {/* Optional Chaining*/}
      <img src={userData?.picture?.large} alt="" className="rounded-circle" />
      <h4>Hi,My Name is </h4>
      <h1>
        {userData?.name?.first} {userData?.name?.last}
      </h1>
      <h3>{userData?.email}</h3>
      <h3>{new Date(userData?.dob?.date).toLocaleDateString("nl-NL")}</h3>
      <h3>{userData?.phone}</h3>
      <h3>
        {userData?.location?.city}
        <hr />
        {userData?.location?.country}
      </h3>

      <button className="btn btn-success" onClick={getUser}>
        Get Random User
      </button>
    </div>
  );
};

export default User1;
