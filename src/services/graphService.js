import { createGraph, runGraph } from "../controllers/graphController.js";

const graphService = async (req, res) => {
  try {
    const inputData = req.body;

    inputData.messages.unshift({
      role: "user",
      content:
        "Apresente-se como Ada, você será minha tutora de matemática, e responderá apenas a perguntas de matemática. Perguntas não relacionadas com matemática devem receber uma devolutiva negativa.",
    }); //math prompt validations happens here, i give instructions to the model and append it to index zero of the array

    console.log("inputData ==> ", inputData);
    const graph = createGraph();
    const result = await runGraph(graph, inputData);
    console.log("result from graph ==> ", result);
    inputData.messages.shift(); //and then, i remove the command i gave, so the user won't see it

    console.log("inputData ==> ", inputData);
    res.json({ response: result.messages }); //returns an array that represents a continuous chat flow between human and machine
  } catch (error) {
    console.error("Erro ao executar o grafo:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default graphService;