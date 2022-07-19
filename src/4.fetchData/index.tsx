import React, { FC, PropsWithChildren, useEffect, useState } from "react";

type Props = {
  title: string;
};

// FC = FunctionComponent
const FetchData: FC<Props> = props => {
  const [counter, setCounter] = useState<number>(0);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  function addCounter(param: number): void {
    setCounter(param + 1);
  }

  async function _login() {
    setloading(true);
    try {
      const login = await (
        await fetch(`https://reqres.in/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          }),
        })
      ).json();
      console.log(login);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }

  function _logout() {
    setUser({
      id: "",
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    });
  }

  useEffect(() => {
    // get data dari server
    // console.log("get Data");
    const getUSser = async () => {
      try {
        const dataUser = await await (
          await fetch(`https://reqres.in/api/users/2`)
        ).json();
        // console.log(dataUser.data);

        setUser({ ...dataUser.data });
      } catch (error) {
        console.log(error);
      }
    };
    getUSser();
  }, [JSON.stringify(user)]);

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => addCounter(counter)}>add counter</button>

        {/* Bisa diIsi null atau nama function */}
        <button onClick={addCounter.bind(null, counter)}>add counter</button>
      </div>
      <div>
        <h1>{user.first_name}</h1>
        <h2>{user.last_name}</h2>
        {user.first_name !== "" && <DataUser />}
        <button onClick={_login}>{loading ? "loading..." : "login"}</button>
        <button onClick={_logout}>Logout</button>
      </div>
    </div>
  );
};

const DataUser: FC = () => {
  useEffect(() => {
    return () => {
      console.log("Component Hilang");
    };
  }, []);

  return <div>Berhasil Login</div>;
};

export default FetchData;
