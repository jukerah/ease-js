// Gera uma hash aleatória com o length fornecido
export const randomHASH = (length = 22) => {
  console.log("Início da função randomHASH()");
  const chars = "_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let hash = "";
  for (let i = 0; i < length; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log("Hash criado: ", hash);
  console.log("Fim da função randomHASH()");
  return hash;
}