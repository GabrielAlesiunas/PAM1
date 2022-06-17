import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 10,
    },
    texto:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    img:{
        width:250,
        height: 250,
        borderTopRightRadius: 20,
        borderTopLeftRadius:20
    },
    card:{
        backgroundColor:'black',
        borderRadius: 20,
        width:250,
    }
});

export default styles;