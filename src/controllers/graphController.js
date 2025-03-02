import axios from "axios";
import { TOGETHER_AI_API_KEY, TOGETHER_AI_MODEL, TEMP, MAX_TOKENS, TOGETHER_AI_API_URL } from "../config/config.js";
import Graph from "../models/Graph.js";


const startNode = (data) => {
  console.log("Iniciando o fluxo com:", data);
  return data;
};

const processData = (data) => {
  console.log("Processando dados:", data);
  return { ...data, processed: true };
};

const decisionNode = (data) => {
  console.log("Decidindo caminho...", data);
  return { ...data, success: Math.random() > 0.5 };
};

const endNode = async (data) => {
  console.log("Finalizando o fluxo.");
  try {
    const response = await axios.post(
      TOGETHER_AI_API_URL,
      {
        model: TOGETHER_AI_MODEL,
        prompt:
          data.messages.map((msg) => `${msg.role}: ${msg.content}`).join("\n") +
          "\nassistant:",
        max_tokens: MAX_TOKENS,
        temperature: TEMP,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOGETHER_AI_API_KEY}`,
        },
      }
    );

    const aiResponse = response.data.choices[0].text.trim();
    data.messages.push({ role: "assistant", content: aiResponse });
  } catch (error) {
    console.error("Erro ao gerar resposta da IA:", error);
    data.messages.push({
      role: "assistant",
      content: "Desculpe, ocorreu um erro ao gerar a resposta.",
    });
  }

  return data;
};

const createGraph = () => {
  const graph = new Graph();

  graph.addNode("start", startNode);
  graph.addNode("processData", processData);
  graph.addNode("decision", decisionNode);
  graph.addNode("end", endNode);

  graph.addEdge("start", "processData");
  graph.addEdge("processData", "decision");
  graph.addEdge("decision", (data) => (data.success ? "end" : "start"));

  return graph;
};

const runGraph = async (graph, initialData) => {
  let currentNode = "start";
  let data = initialData;

  while (currentNode) {
    const node = graph.nodes[currentNode];
    if (typeof node !== "function") {
      throw new Error(`Node ${currentNode} is not a valid function`);
    }

    data = await node(data);
    currentNode = graph.getNextNode(currentNode, data);

    if (currentNode === "end") {
      data = await graph.nodes[currentNode](data);
      break;
    }
  }

  return data;
};

export { createGraph, runGraph };
