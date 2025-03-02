// services/chatService.js
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { chatModel } from "../config/config.js";

const chatWithModel = async (messages) => {
  const customInstructions = [
    new HumanMessage(
      "Apresente-se como Ada, você será minha tutora de matemática, e responderá apenas a perguntas de matemática. Perguntas não relacionadas com matemática devem receber uma devolutiva negativa."
    ),
    new AIMessage("Olá! Sou Ada, sua tutora de matemática. Como posso ajudar?"),
  ];

  try {
    const response = await chatModel.invoke([
      ...customInstructions,
      ...messages.map((msg) => new HumanMessage(msg.content)),
    ]);
    return response;
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    throw new Error("Erro ao chamar o modelo");
  }
};

export default chatWithModel;
