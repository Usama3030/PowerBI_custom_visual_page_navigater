// import { useState } from "react";
// import useApp from "./Hooks/useApp";
// import { Context } from "./Context/Context";
// import Layout from "./Layout/Layout";
// import Page1 from "./Views/Page1";
// import "../../style/style.css";

// const App = () => {
//   console.log("App.tsx");
// const [page, setPage] = useState(<Page1 />);
//   const { state } = useApp();
//   console.log(state);

//   return (
//     <Context.Provider value={{ page, setPage, state }}>
//       <div className="app-container">
//         <Layout />
//         <div className="page-content">{page}</div>
//       </div>
//     </Context.Provider>
//   );
// };

// export default App;

import { useState } from "react";
import useApp from "./Hooks/useApp";
import { Context } from "./Context/Context";
import Layout from "./Layout/Layout";
import Page1 from "./Views/Finance";
import "../../style/style.css";
import Page2 from "./Views/Compliance";
import Page3 from "./Views/Management";

const App = () => {
  console.log("App.tsx");
  const [page, setPage] = useState("Page1");
  const { state } = useApp();
  console.log("app state", state);

  if (!state) return null;

  const renderPage = () => {
    switch (page) {
      case "Finance":
        return <Page1 />;
      case "Compliance":
        return <Page2 />;
      case "Management":
        return <Page3 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <Context.Provider value={{ page, setPage, state }}>
      <div className="app-container">
        <Layout />
        <div className="page-content"> {renderPage()}</div>
      </div>
    </Context.Provider>
  );
};

export default App;
