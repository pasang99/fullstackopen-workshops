import React from 'react';

import SayHello from "./SayHello";

let App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement(SayHello, { firstName: "Rushil" }),
  //     React.createElement(SayHello, { firstName: "Sushil" }),
  //     React.createElement(SayHello, { firstName: "Liza" }),
  //   ]);
  return (
    <div>
      <SayHello firstName="pass" />
      <SayHello firstName="bhu" />
      <SayHello firstName="La" />
    </div>
  );
};

export default App;