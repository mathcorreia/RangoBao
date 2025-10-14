// src/screens/HomeScreen.tsx

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Restaurante} from '../types';

const DADOS_RESTAURANTES: Restaurante[] = [
  {
    id: '1',
    nome: 'Cantina da Nona',
    descricao: 'A melhor massa da cidade, com receitas de família.',
    imagem: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nota: 4.8,
  },
  {
    id: '2',
    nome: 'Sushi do Bairro',
    descricao: 'Rodízio completo com peixes frescos e opções veganas.',
    imagem: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nota: 4.5,
  },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({navigation}: Props) {
  const renderItem = ({item}: {item: Restaurante}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detalhes', {restaurante: item})}>
      <Image source={{uri: item.imagem}} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.itemDescription}>{item.descricao}</Text>
        <Text style={styles.itemNota}>Nota: {item.nota}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao RangoBão!</Text>
      <FlatList
        data={DADOS_RESTAURANTES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemTextContainer: {
    padding: 15,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  itemNota: {
    fontSize: 14,
    color: '#E67E22',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;