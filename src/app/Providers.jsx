import { Provider } from "react-redux";
import { ThemeProvider } from "../features/theme/ThemeContext";

export default function Providers({
  children,
  store,
}) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}