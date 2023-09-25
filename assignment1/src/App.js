import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import BlogPost from "./Components/BlogPostPage/BlogPost";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
