import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TuBanda</Text>
      <Text style={styles.subtitle}>Las mejores bandas en un solo lugar</Text>
      <Button title="Ingresar"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    padding: 0,
  },
  subtitle: {
    color: 'white',
    paddingBottom: 30,
  },
});
