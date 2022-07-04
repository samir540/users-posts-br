import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Users from "./pages/Users";
import NotFoundPage from "./pages/NotFoundPage";
import Post from "./pages/Post";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />

      {/* <Route path="/users" element={<Users />} /> */}
      <Route path="/users/:userId" element={<User />} />
      <Route path="/users/:userId/:postId" element={<Post />}/>
     


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
