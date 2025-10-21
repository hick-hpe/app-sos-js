# React Native - JavaScript

## Descrição
Guia de criação e execução de um app React Native usando Expo, incluindo execução no celular, emulador e navegador.

## Pré-requisitos
- NodeJS - PC
- Expo Go - Celular (opcional)

## Criar um app com Expo
Para criar um app com Expo, digite no terminal:
```bash
npx create-expo-app meuApp --template expo-template-blank
```

Explicação do comando:
- `npx`: executa pacotes Node temporariamente, sem precisar instalar globalmente.
- `create-expo-app`: É o utilitário oficial para criar novos projetos Expo (como o create-react-app faz com React).
Ele configura automaticamente toda a estrutura inicial do app.
- `meuApp`: nome do aplicativo. Caso deseje criar na pasta atual, substitua por um ponto (.).
    > Para funcionar com o ponto, o diretório atual deve estar vazio!
- `--template expo-template-blank`: Define o modelo inicial do projeto. O expo-template-blank é um template vazio, ou seja, cria um app básico com JavaScript (sem telas ou navegação prontas).

### Estrutura do Projeto
Essa é a estrutura inicial, com base nesse template (expo-template-blank):
```bash
├─ assets/             # Pasta para imagens, ícones, fontes e outros arquivos estáticos
├─ node_modules/       # Dependências instaladas do projeto (não deve ser versionada no Git)
├─ .gitignore          # Arquivo que indica quais arquivos/pastas o Git deve ignorar
├─ App.js              # Arquivo principal do app, onde o componente raiz é definido
├─ app.json            # Configurações do projeto Expo (nome, ícone, splash screen, versão, etc.)
├─ index.js            # Ponto de entrada do app (React registra o componente raiz aqui)
├─ package-lock.json   # Arquivo gerado pelo npm para travar as versões das dependências
├─ package.json        # Contém metadados do projeto, scripts e lista de dependências

```

## Instalar dependências
Se você não estiver criando um novo projeto, mas sim executando um app existente, é necessário instalar todas as dependências do projeto antes de rodá-lo:
```bash
npm install
```

Explicação:
- `npm install` lê o arquivo `package.json` do projeto e instala todas as dependências listadas na pasta `node_modules`.
- Isso garante que o Metro Bundler e o app tenham todas as bibliotecas necessárias para funcionar corretamente.
- Rode este comando antes de `npx expo start` ou qualquer outro comando de execução do projeto. É necessário rodá-lo apenas uma vez. Caso precise instalar mais bibliotecas no decorrer do projeto, use `nxp expo install nomeDaBiblioteca`

## Execução
Para executar, digite:
```bash
npx expo start
```

Explicação
- `expo start`: inicia o Metro Bundler, o servidor de desenvolvimento usado pelo React Native/Expo.

O Metro Bundler:
- Faz o build do app em tempo real;
- Permite visualizar o projeto no emulador, no navegador ou no app Expo Go;
- Mostra um QR Code no terminal para abrir o app no celular.

Atalhos disponíveis no terminal:
- `r`: recarrega o app
- `w`: abre na web
- `o`: abre o editor
- `j`: abre o debugger
- `c`: mostra o QR Code

## Acesso local
Por padrão, o Metro Bundler é iniciado na porta 8081, disponível em: [http://localhost:8081](http://localhost:8081)

> Caso necessário, você pode mudar a porta, com a flag `--port 3000`.

## Conexão com o Expo Go
Quando você abre o app com o Expo Go, ele:
- Escaneia o QR Code;
- Conecta-se ao Metro Bundler via rede local;
- Recebe o bundle JS diretamente do seu computador;
- Executa o app no dispositivo em tempo real.

> Para funcionar, o PC e o celular devem estar na mesma rede!

## React Native na Web
Para executar no navegador, é necessário instalar a dependência:
```bash
npx expo install react-dom react-native-web
```

E para executar:
```bash
npx expo start --web
```

