
  // controllers/chainService.js
import  chatWithModel  from "../controllers/chainController.js";

const chainService = async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await chatWithModel(messages);
    res.json({ response });
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    res.status(500).json({ error: error.message });
  }
};

export default chainService;
