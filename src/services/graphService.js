import { createGraph, runGraph } from "../controllers/graphController.js";

const graphService = async (req, res) => {
  try {
    const inputData = req.body;
    console.log("inputData ==> ", inputData);

    const graph = createGraph();
    const result = await runGraph(graph, inputData);
    const assistantResponse = result.messages.filter((obj)=>obj.role==="assistant")
    res.json({ response: assistantResponse[0].content}); 
    //retorna apenas a mensagem da assistente, para padronizar o formato de saída
  } catch (error) {
    console.error("Erro ao executar o grafo:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default graphService;