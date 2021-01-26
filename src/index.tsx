import { render } from "react-dom";
import Routes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Provider store={store}>
      <ChakraProvider resetCSS>
        <Routes />
      </ChakraProvider>
    </Provider>
  </Router>,
  rootElement
);
