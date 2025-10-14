// src/types/index.ts

export type Restaurante = {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  nota: number;
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: { restaurante: Restaurante };
};