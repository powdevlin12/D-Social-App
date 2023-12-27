import "react-native-gesture-handler";
import ContainerNavigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ContainerNavigation />
      </QueryClientProvider>
    </Provider>
  );
}
