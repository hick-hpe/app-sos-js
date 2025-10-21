# React Native

## O que é?
O **React Native** é um framework de desenvolvimento mobile criado pelo Facebook que permite criar aplicativos para iOS e Android usando JavaScript e React.
- Com React Native, você escreve um único código em JavaScript/JSX e ele é convertido para componentes nativos em cada plataforma.
- Diferente de apps híbridos (como Ionic), React Native usa componentes nativos reais, garantindo desempenho próximo do nativo.

## Como funciona
- Código JavaScript/JSX
    - Você escreve seu app usando React (componentes, props, state, hooks).
- Bridge
    - O React Native possui uma “ponte” que conecta o código JS aos componentes nativos da plataforma (Android/iOS).
- Componentes nativos
    - Botões, listas, textos, imagens, etc. são renderizados como widgets reais do sistema operacional.

## Principais características
| Característica                    | Explicação                                                   |
| --------------------------------- | ------------------------------------------------------------ |
| **Multiplataforma**               | Um único código funciona em iOS e Android                    |
| **Componentes reutilizáveis**     | UI modular, baseada em componentes React                     |
| **Hot Reload / Fast Refresh**     | Permite ver alterações instantaneamente sem recompilar o app |
| **Performance próxima do nativo** | Usa elementos nativos em vez de WebView                      |
| **Suporte a bibliotecas nativas** | Pode integrar sensores, câmera, GPS, Bluetooth, etc.         |

## Componentes principais
- `View`: Container genérico (como `<div>` no React Web)
- `Text`: Renderiza texto
- `Image`: Mostra imagens
- `ScrollView`: Container rolável
- `TextInput`: Campo de entrada de texto
- `Button`: Botão simples

### Exemplos de uso
```js
// Importa o componente StatusBar do Expo, que controla a barra de status do dispositivo (horário, bateria, etc.)
import { StatusBar } from 'expo-status-bar';

// Importa componentes e utilitários do React Native:
// StyleSheet para criar estilos
// Text para renderizar textos na tela
// View container para organizar outros elementos
import { StyleSheet, Text, View } from 'react-native';

// Função principal do app, que será exportada como padrão
export default function App() {
  return (
    // View é como uma <div> no React Web, serve como container
    // Aplica os estilos definidos em styles.container
    <View style={styles.container}>
      
      {/* Componente Text, exibe texto na tela */}
      <Text>Open up App.js to start working on your app!</Text>
      
      {/* StatusBar do dispositivo, com estilo automático (claro ou escuro conforme tema) */}
      <StatusBar style="auto" />
    </View>
  );
}

// Cria o objeto de estilos usando StyleSheet do React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // O container ocupa toda a tela
    backgroundColor: '#fff',     // Cor de fundo branca
    alignItems: 'center',        // Centraliza os elementos horizontalmente
    justifyContent: 'center',    // Centraliza os elementos verticalmente
  },
});


```
## Diferença entre React Web e React Native
| Aspecto          | React Web         | React Native                       |
| ---------------- | ----------------- | ---------------------------------- |
| **Renderização** | HTML no navegador | Componentes nativos no dispositivo |
| **Estilização**  | CSS               | `StyleSheet` ou objetos JS         |
| **Elementos**    | `<div>`, `<span>` | `<View>`, `<Text>`                 |
| **Execução**     | Navegador         | iOS / Android                      |


## Ferramentas importantes

- `Expo`: Plataforma que simplifica criação, execução e testes de apps React Native.
- `Metro Bundler`: Servidor que faz o bundle do JS em tempo real para rodar no app.
- `React Native CLI`: Ferramenta oficial para criar projetos sem Expo, com mais controle sobre código nativo.

## Documentação
Documentação do React Native em português: [https://github.com/tavaresgerson/reactnativedocbr](https://github.com/tavaresgerson/reactnativedocbr)