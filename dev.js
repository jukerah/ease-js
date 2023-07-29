const { spawn } = require("child_process");

// Função para executar comandos em um processo separado
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { stdio: "inherit" });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command '${command}' exited with code ${code}`));
      }
    });
  });
}

// Função principal para executar a sequência de build e servidor
async function runDev() {
  try {
    // Executa o comando de build com 'webpack'
    await runCommand("yarn", ["webpack"]);

    // Executa o comando de servidor com 'yarn start'
    await runCommand("yarn", ["start"]);
  } catch (error) {
    console.error("Error during development:", error);
    process.exit(1);
  }
}

// Executa a função principal
runDev();
