import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AddNewPage from "./pages/AddNewPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    };
  }
  render() {
    if (this.state.authedUser === null) {
      return (
        <div className="app-container">
          <Header />
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }
    return (
      <div>Hello, World</div>
    )
  }
}
// function App() {
//   return (
//     <div className="app-container">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/archives" element={<ArchivePage />} />
//           <Route path="/notes/new" element={<AddNewPage />} />
//           <Route path="/notes/:id" element={<DetailPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

export default App;
