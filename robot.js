import PromptSync from "prompt-sync";
const prompt = PromptSync();

const execution = () => {
  console.log("Haz una pregunta. Escribe 'salir' o 'exit' para terminar.");

  while (true) {
    const input = prompt("Tú: ").trim().toLowerCase();

    if (input === "salir" || input === "exit") {
      console.log("Bot: ¡Adiós!");
      break;
    }

    console.log("Bot: Sí");
  }
};

execution();


