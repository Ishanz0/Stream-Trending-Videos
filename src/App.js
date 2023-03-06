import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import ButtonList from "./components/ButtonList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import VideoList from "./components/VideosList";
import Streaming from "./components/Streaming";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <ButtonList /> && <VideoList />,
      },
      {
        path: "stream",
        element: <Streaming />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
