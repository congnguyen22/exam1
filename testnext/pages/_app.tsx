import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import { configureAppStore } from "../store/configureStore";
import { Box, LoadingOverlay, MantineProvider } from "@mantine/core";
import { RegisterLoading } from "../store/slice/getNewsItemList/selector";
const store = configureAppStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MantineProvider theme={{ loader: "bars" }}>
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}

export default MyApp;
