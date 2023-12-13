import NavigationApp from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
      <NavigationContainer>
        <NavigationApp />
      </NavigationContainer>
  );
}
