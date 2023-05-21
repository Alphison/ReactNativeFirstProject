import { Image, StyleSheet, Text, View, Modal } from 'react-native';
import { useState } from 'react';
import { gStyle } from '../styles/style';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form'



export default function Home({navigation}) {

    const [news, setNews] = useState([
        {
            id: '1',
            name: 'News',
            description: 'lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am',
            img: require('../assets/foto.png')
        },
        {
            id: '2',
            name: 'News2',
            description: 'lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am',
            img: require('../assets/foto2.png')
        },
        {
            id: '3',
            name: 'News3',
            description: 'lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am',
            img: require('../assets/foto3.jpg')
        }
    ])

    const [modal, setModal] = useState(false)

    const hanldeSetModal = (news_new) => {
        setNews(news => {
            return [
                news_new,
                ...news
            ]
        })
        setModal(false)
    }
  
    return (
        <View style={gStyle.main}>
            <Modal visible={modal} style={gStyle.main}>
                <View>
                    <Ionicons style={styles.ikon} name="md-close" size={24} color="black" onPress={() => setModal(false)}/>
                    <Text style={styles.title}>Добавить статью</Text>
                    <Form hanldeSetModal={hanldeSetModal}/>
                </View>
            </Modal>
            <MaterialIcons name="add-circle" size={27} color="#e3e3e3" style={styles.ikon} onPress={() => setModal(true)}/>
            <Text style={gStyle.title}>Главная страница</Text>
            <FlatList style={styles.block_news} data={news} renderItem={({item}) => {
                return (
                    <TouchableOpacity style={styles.news_block} onPress={() => navigation.navigate('News', item)}>
                        <Image style={styles.img} source={item.img} />
                        <Text style={styles.name_news}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
    borderRadius: 10
  },
  block_news: {
    marginTop: 20
  },
  news_block: {
    marginBottom: 20
  },
  title: {
    color: 'white'
  },
  name_news: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  ikon:{
    textAlign: 'center',
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
