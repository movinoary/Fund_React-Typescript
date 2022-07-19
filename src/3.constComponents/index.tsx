import React, { FC, PropsWithChildren, useEffect, useState } from "react";

type Props = {
  title: string;
};

// FC = FunctionComponent
const ConstComp: FC<Props> = props => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState<{ fristName: string; lastName: string }>({
    fristName: "",
    lastName: "",
  });

  function addCounter(param: number): void {
    setCounter(param + 1);
  }

  function _login() {
    setUser({
      fristName: "vino",
      lastName: "arystio",
    });
  }

  function _logout() {
    setUser({
      fristName: "",
      lastName: "",
    });
  }

  useEffect(() => {
    // get data dari server
    console.log("get Data");
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
        <h1>{user.fristName}</h1>
        <h2>{user.lastName}</h2>
        {user.fristName !== "" && <DataUser />}
        <button onClick={_login}>Login</button>
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

export default ConstComp;
