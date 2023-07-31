const path = require("path");

module.exports = {
  mode: "development", // Modo de desenvolvimento para ativar o webpack-dev-server
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    publicPath: "/", // Caminho base para servir os arquivos (a partir da raiz do servidor)
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"), // Diretório de onde o servidor irá servir os arquivos de build
    },
    port: 3000, // Porta em que o servidor será executado
    hot: true, // Ativa o Hot Module Replacement (HMR) para atualização automática do navegador
    historyApiFallback: true, // Redireciona todas as rotas desconhecidas para o arquivo index.html
  },
};
