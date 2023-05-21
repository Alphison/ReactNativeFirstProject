import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../styles/style';
import { Image } from 'react-native';



export default function News({route}) {
  
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Статья {route.params.name}</Text>
            <Image style={styles.img} source={route.params.img} />
            <Text style={styles.name_news}>{route.params.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginTop: 20
    },
    name_news: {
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});
