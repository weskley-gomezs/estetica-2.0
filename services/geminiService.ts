
import { GoogleGenAI, Type } from "@google/genai";

/* Initialize GoogleGenAI with direct access to process.env.API_KEY as per guidelines */
// @ts-ignore: process.env is defined by Vite at build time
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSkinConsultation = async (concerns: string, skinType: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analise as seguintes preocupações estéticas: Preocupações: ${concerns}. Tipo de pele: ${skinType}.`,
    config: {
      systemInstruction: "Você é um especialista em estética avançada e dermatologia de luxo. Forneça uma análise personalizada, empática e profissional. Sugira tratamentos estéticos modernos (como Bioestimuladores, Toxina Botulínica, Harmonização, Peelings Químicos) e uma rotina básica de cuidados. Responda em Português do Brasil.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendations: { type: Type.STRING, description: "Uma análise breve e profissional das preocupações." },
          suggestedTreatments: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Lista de tratamentos específicos oferecidos na clínica." 
          },
          careRoutine: { type: Type.STRING, description: "Uma rotina de cuidados domiciliares sugerida." }
        },
        required: ["recommendations", "suggestedTreatments", "careRoutine"]
      }
    }
  });

  try {
    /* Safely access the .text property and trim before parsing JSON */
    const text = response.text;
    if (!text) {
      throw new Error("No text content returned from the model");
    }
    return JSON.parse(text.trim());
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
};
