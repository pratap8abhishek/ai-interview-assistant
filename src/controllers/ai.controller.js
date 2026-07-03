import { generateInterviewQuestion as generateQuestionService } from "../services/ai.service.js";
import { evaluateAnswer } from "../services/ai.service.js";


export const generateInterviewQuestion = async (req, res) => {
  try {
    const { technology, experience, difficulty } = req.body;

    if (!technology) {
      return res.status(400).json({
        success: false,
        message: "Technology is required",
      });
    }

    const question = await generateQuestionService(
      technology,
      experience || 1,
      difficulty || "medium"
    );

    return res.status(200).json({
      success: true,
      data: {
        technology,
        experience,
        difficulty,
        question,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const evaluateCandidateAnswer = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({
        success: false,
        message: "Question and Answer are required",
      });
    }

    const result = await evaluateAnswer(question, answer);

    // Remove markdown code fences if Gemini returns them
    const cleanResult = result
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    const parsedResult = JSON.parse(cleanResult);

    return res.status(200).json({
      success: true,
      data: parsedResult,
    });
  } catch (error) {
    console.error("Evaluate Answer Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};