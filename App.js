import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo';
import Card from './components/Card';
import Conteudo from './components/Conteudo';


export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Card/>
      <Conteudo/>     
      <StatusBar style="auto" />
    </View>
  );
}
