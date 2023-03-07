import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import Container from "./Layout/Container";
import { Provider } from "react-redux";

import MainPage from "./pages/MainPage";
import CountryPage from "./pages/CountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <MainPage />
      </Container>
    ),
  },
  {
    path: "/country/:countryId",
    element: (
      <Container>
        <CountryPage />
      </Container>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
