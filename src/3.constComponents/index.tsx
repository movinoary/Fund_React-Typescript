import React, { FC, PropsWithChildren, useState } from "react";

type Props = {
  title: string;
};

// FC = FunctionComponent
const ConstComp: FC<Props> = props => {
  const [counter, setCounter] = useState<number>(0);

  function addCounter(param: number): void {
    setCounter(param + 1);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => addCounter(counter)}>add counter</button>

        {/* Bisa diIsi null atau nama function */}
        <button onClick={addCounter.bind(null, counter)}>add counter</button>
      </div>
    </div>
  );
};

export default ConstComp;
