import ai from "../config/gemini.js";


export const generateInterviewQuestion = async (
  technology,
  experience,
  difficulty
) => {
      const prompt = `
Generate ONE technical interview question.

Technology: ${technology}
Experience: ${experience} years
Difficulty: ${difficulty}

Rules:
- Return only the question.
- Do not add explanation.
- Do not add numbering.
- Keep it relevant to real interviews.
`;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction:
        "You are a Senior Technical Interviewer.",
      temperature: 0.2,
    },
  });

  return response.text;
};

export const evaluateAnswer = async (question, answer) => {
  const prompt = `
You are a Senior Technical Interviewer.

Question:
${question}

Candidate Answer:
${answer}

IMPORTANT:
Return ONLY raw JSON.
Do not use markdown.
Do not wrap the response in \`\`\`json.

{
  "score": 0,
  "feedback": "",
  "strengths": [],
  "improvements": []
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      temperature: 0.2,
    },
  });

  return response.text;
};