import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { AI_MODEL_INSTRUCTIONS, chatModel } from "../config/config.js";

const chatWithModel = async (messages) => {
  const customInstructions = [
    new HumanMessage(AI_MODEL_INSTRUCTIONS),
    new AIMessage("Olá! Sou Ada, sua tutora de matemática. Como posso ajudar?"),
  ];
  //math prompt validations happens here
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
