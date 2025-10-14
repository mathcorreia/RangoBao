// src/screens/DetalhesScreen.tsx

import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';

type DetalhesScreenRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;

type Props = {
  route: DetalhesScreenRouteProp;
};

function DetalhesScreen({route}: Props) {
  const {restaurante} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: restaurante.imagem}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{restaurante.nome}</Text>
        <Text style={styles.nota}>Nota: {restaurante.nota}</Text>
        <Text style={styles.description}>{restaurante.descricao}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  nota: {
    fontSize: 18,
    color: '#E67E22',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});

export default DetalhesScreen;