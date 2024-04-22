//using React ****************
// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //attributes of tag
//   "Hello world! , Using React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * <div id="parent">
 *   <div id="child1">
 *    <h1 id="h1">I'm h1 Tag</h1>
 *    <h2 id="h2">I'm h2 Tag</h2>
 *   </div>
 * <div id="child2">
 *    <h1 id="h1">I'm h1 Tag</h1>
 *    <h2 id="h2">I'm h2 Tag</h2>
 *   </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1" }, "child1 : I'm h1 Tag"),
    React.createElement("h2", { key: "h2" }, "child1 : I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1" }, "child2 : I'm h1 Tag"),
    React.createElement("h2", { key: "h2" }, "child2 : I'm h2 Tag"),
  ]),
]);
setTimeout(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
}, 2000);

//using JS ***************
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React , using JS";
// const root = document.getElementById("root");
// root.appendChild(heading);
