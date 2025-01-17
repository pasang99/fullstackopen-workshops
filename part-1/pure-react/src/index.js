let Sayhello = (props) => {
    return React.createElement("h1", { id: "myID" }, `Hello ${props.firstName}`);
  };
  let App = () => {
    return React.createElement("div", {}, [
      React.createElement(Sayhello, { firstName: "pasang" }),
      React.createElement(Sayhello, { firstName: "bhuti" }),
      React.createElement(Sayhello, { firstName: "yangzom"}),
    ]);
  };
  let container = document.getElementById("root");
  let root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));