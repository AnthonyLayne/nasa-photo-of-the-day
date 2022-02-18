import React, { useCallback } from "react";

import * as s from "./styles";

// DatePicker day={day} daySetter={setDay}
const DatePicker = (props) => {
  const { day, daySetter } = props;

  const decrement = useCallback(
    () => daySetter((prev) => prev - 1),
    [daySetter]
  );
  const increment = useCallback(
    () => daySetter((prev) => prev + 1),
    [daySetter]
  );

  return (
    <s.Container>
      <s.Button type="primary" onClick={decrement}>
        back
      </s.Button>
      <span>{day}</span>
      <s.Button type="secondary" onClick={increment}>
        forward
      </s.Button>
    </s.Container>
  );
};

export default DatePicker;
