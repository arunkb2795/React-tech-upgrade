const heading1 = React.createElement(
  "div",
  { id: "first-div" },
  React.createElement("div", { id: "second-div" }, [
    React.createElement("h3", { id: "first-heading" }, "Hello Arun!"),
    React.createElement("h3", { id: "second-heading" }, "Welcome to React!"),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
