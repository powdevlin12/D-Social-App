import "react-native-gesture-handler";
import ContainerNavigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux";
import { SWRConfig } from "swr";
import { AppState, AppStateStatus } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          provider: () => new Map(),
          isVisible: () => {
            return true;
          },
          initFocus(callback) {
            let appState = AppState.currentState;

            const onAppStateChange = (nextAppState: AppStateStatus) => {
              /* If it's resuming from background or inactive mode to active one */
              if (
                appState.match(/inactive|background/) &&
                nextAppState === "active"
              ) {
                callback();
              }
              appState = nextAppState;
            };

            // Subscribe to the app state change events
            const subscription = AppState.addEventListener(
              "change",
              onAppStateChange
            );

            return () => {
              subscription.remove();
            };
          },
          onSuccess: (data) => {
            console.log(
              "🚀 ~ file: usePost.hook.ts:14 ~ usePost ~ data:",
              data
            );
          },
          onError: (error) => {
            console.log(
              "🚀 ~ file: usePost.hook.ts:17 ~ usePost ~ error:",
              error
            );
          },
        }}
      >
        <ContainerNavigation />
      </SWRConfig>
    </Provider>
  );
}
