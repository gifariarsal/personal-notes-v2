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
import { getUserLogged, putAccessToken } from "./utils/api";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "light",
      locale: localStorage.getItem("locale") || "id",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
      toggleLocale: () => {
        this.setState((prevState) => {
          const newLocale = prevState.locale === "id" ? "en" : "id";
          localStorage.setItem("locale", newLocale);
          return {
            locale: newLocale,
          };
        });
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
    document.documentElement.setAttribute("lang", this.state.locale);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }

    if (prevState.locale !== this.state.locale) {
      document.documentElement.setAttribute("lang", this.state.locale);
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <LocaleProvider value={this.state}>
            <div className="app-container">
              <Header />
              <main>
                <Routes>
                  <Route
                    path="/*"
                    element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                  />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </LocaleProvider>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider value={this.state}>
        <LocaleProvider value={this.state}>
          <div className="app-container">
            <Header logout={this.onLogout} name={this.state.authedUser.name} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archives" element={<ArchivePage />} />
                <Route path="/notes/new" element={<AddNewPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }
}

export default App;
