import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useProximitySensor } from './hooks/useProximitySensor';

function App(): React.JSX.Element {
  const { is_close } = useProximitySensor();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>{is_close ? 'Near' : 'Far'}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
