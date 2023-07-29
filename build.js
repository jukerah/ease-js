const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const fs = require("fs-extra");

const buildFolderPath = "./build";

// Função para criar uma pasta, se ainda não existir
async function createFolderIfNotExists(folderPath) {
  if (!(await fs.exists(folderPath))) {
    await fs.mkdir(folderPath);
  }
}

// Função para copiar o arquivo index.html para a pasta build
async function copyIndexHtml() {
  const sourceHTMLPath = path.join(__dirname, "index.html");
  const targetHTMLPath = path.join(__dirname, "build", "index.html");

  try {
    // Copiar arquivo index.html para a pasta build!"
    await fs.copyFile(sourceHTMLPath, targetHTMLPath);
  } catch (error) {
    console.error("Erro ao copiar o arquivo index.html:", error);
  }
}

// Função para limpar a pasta build antes de construir novamente
async function cleanBuildFolder() {
  const files = await fs.readdir(buildFolderPath);

  for (const file of files) {
    const filePath = path.join(buildFolderPath, file);
    await fs.remove(filePath);
  }
}

// Função para construir o projeto usando o webpack
function buildProject() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error("Erro durante a compilação:", err);
        reject(err);
      } else {
        console.log(stats.toString({ colors: true }));
        resolve();
      }
    });
  });
}

// Função principal do script de build
async function runBuild() {
  try {
    // Crie a pasta build, se ainda não existir
    await createFolderIfNotExists(buildFolderPath);

    // Limpe a pasta build antes de construir novamente
    await cleanBuildFolder();

    // Construa o projeto usando o webpack
    await buildProject();

    // Copie o arquivo index.html para a pasta build
    await copyIndexHtml();

    console.log("Construção concluída!");
  } catch (error) {
    console.error("Erro durante a construção:", error);
  }
}

// Execute a função principal do script de build
runBuild();
