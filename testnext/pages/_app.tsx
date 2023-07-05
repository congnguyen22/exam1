import "../styles/globals.css";
import { Provider } from "react-redux";
import { configureAppStore } from "../store/configureStore";
const store = configureAppStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
