import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://m.media-amazon.com/images/M/MV5BOTIwNWJhZDItZmNmOC00M2NkLWIwNDktMTYwZWFlZDVkMmVkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                    Após lançamento nos cinemas, 'Rambo III' tem vendas estouradas nas bilheterias.
                </Text>
            </View>
        </View>
    );
}