//using JS ***************
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React , using JS";
// const root = document.getElementById("root");
// root.appendChild(heading);

// import React from "react";
// import ReactDOM from "react-dom/client";

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

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { key: "h1" }, "child1 : I'm h1 Tag 🚀"),
//     React.createElement("h2", { key: "h2" }, "child1 : I'm h2 Tag ⚽️"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h1" }, "child2 : I'm h1 Tag 🏏"),
//     React.createElement("h2", { key: "h2" }, "child2 : I'm h2 Tag 🥎"),
//   ]),
// ]);

/* using JSX */

// const parent = (
//   <div id="parent">
//     <div id="child1">
//       <h1> child1 : I'm h1 tag ⚽️</h1>
//       <h2> child1 : I'm h2 tag 🏀</h2>
//     </div>
//     <div id="child12">
//       <h1> child2 : I'm h1 tag 🏈</h1>
//       <h2> child2 : I'm h1 tag ⚾️</h2>
//     </div>
//   </div>
// );

// setTimeout(() => {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(parent);
// }, 2000);

//React component
// eaching code block that perform a single task is called component
//                  OR
// a function that return JSX code is call functional component
// 1. Class based component - old
/// 2. functional component - new

//const HeadingComponent = () => <h1>functional component</h1>
// OR

// const Title = () => <h1>React Title Component 🦁</h1>;

// const HeadingComponent = function () {
//   return (
//     <div className="container">
//       <Title />
//       <h2>functional Heading Component</h2>
//     </div>
//   );
// };

// setTimeout(() => {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<HeadingComponent />);
// }, 4000);

//component composition => when we combine different small components to make one large component is called component composition

//how to use react element in react component

// const elem = <h1>React element</h1>;
// const Compo = () => {
//   return (
//     <div>
//       {elem}
//       <h2>This React component</h2>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Compo />);

/**
 *
 */

import { useContext, useEffect, useState } from "react";
import Header from "./src/components/common/Header";
// import Restaurants from "./src/components/restaurants/Restaurants";
// import restaurants from "./src/untils/mockData";
// import { NO_RESTRAUNTS_FOUND } from "./src/untils/constants";
// import ErrorMessage from "./src/components/common/ErrorMessage";
import { Outlet } from "react-router-dom";
import userContext from "./src/hooks/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/store/AppStore";

function App() {
  const [user, setUser] = useState();

  const {defaultUser} = useContext(userContext);

  useEffect(() => {
    const data = {
      name: "Pramod",
    };
    setUser(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="container">
        <userContext.Provider value={{ defaultUser: user, setUser }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </div>
    </Provider>
  );
}

export default App;
