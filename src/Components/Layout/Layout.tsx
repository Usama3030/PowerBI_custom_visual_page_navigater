// import { useContext } from "react";
// import { Context } from "../Context/Context";
// import "./style.css";
// import Page1 from "../Views/Page1";
// import Page2 from "../Views/Page2";
// import Page3 from "../Views/Page3";

// const Layout = () => {
//   const getData = useContext(Context);
//   const { page, setPage } = getData;
//   console.log("page", page);
//   const buttonsData = [
//     {
//       id: 1,
//       title: "Page 1",
//       component: <Page1 />,
//     },
//     {
//       id: 2,
//       title: "Page 2",
//       component: <Page2 />,
//     },
//     {
//       id: 3,
//       title: "Page 3",
//       component: <Page3 />,
//     },
//   ];
//   return (
//     <div className="layout-container">
//       <div className="button-container">
//         {buttonsData.map((btn) => (
//           <button
//             key={btn.id}
//             className={`nav-button ${page === btn.component ? "active" : ""}`}
//             onClick={() => setPage(btn.component)}
//           >
//             {btn.title}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Layout;

import { useContext } from "react";
import { Context } from "../Context/Context";
import "./style.css";

const Layout = () => {
  const context = useContext(Context);
  if (!context) {
    return null;
  }

  const { page, setPage } = context;
  console.log("page", page);
  const buttonsData = [
    { id: 1, title: "Finance" },
    { id: 2, title: "Compliance" },
    { id: 3, title: "Management" },
  ];
  return (
    <div className="layout-container">
      <div className="button-container">
        {buttonsData.map((btn) => (
          <button
            key={btn.id}
            className={`nav-button ${page === btn.title ? "active" : ""}`}
            onClick={() => setPage(btn.title)}
          >
            {btn.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Layout;
