import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Conteudo(){
    return(
        <View style={styles.container2}>
            <View style={styles.card2}>
                <Text style={styles.texto2}>
                    Rambo embarca em uma missão de um homem para resgatar seu amigo coronel Trautman das garras das tropas invasoras soviéticas no Afeganistão.
                </Text>
            </View>
            <br></br>
            <View style={styles.card3}>
                <Text style={styles.texto2}>
                    Desenvolvido por Gabriel Raimundo.    
                </Text>    
            </View> 
            <br></br>
            <br></br>
        </View>
    );
}