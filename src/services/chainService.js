import chatWithModel from "../controllers/chainController.js";

const chainService = async (req, res) => {
  const { messages } = req.body;
  console.log("messages ==> ", messages);

  try {
    const response = await chatWithModel(messages);
    console.log("response ==> ", response);
    res.json({ response }); //this returns a simple object; graphService returns a whole array
  } catch (error) {
    console.error("Erro ao comunicar com o modelo:", error);
    res.status(500).json({ error: error.message });
  }
};

export default chainService;
