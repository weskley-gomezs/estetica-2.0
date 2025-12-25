
import { GoogleGenAI, Type } from "@google/genai";

// Acessa a chave definida pelo Vite no build time
const API_KEY = process.env.API_KEY;

export const getSkinConsultation = async (concerns: string, skinType: string) => {
  if (!API_KEY) {
    console.error("Chave de API não configurada.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise o perfil: Tipo de Pele: ${skinType}. Preocupações: ${concerns}.`,
      config: {
        systemInstruction: "Você é um Private Beauty Advisor da L'Éclat, uma clínica de ultra-luxo. Responda com elegância, usando um tom sofisticado e acolhedor. Sugira tratamentos avançados (Bioestimuladores, Fotona, Ultraformer III, Harmonização Sutil). Foque em resultados naturais e excelência científica. Responda em Português do Brasil.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: { type: Type.STRING, description: "Uma análise poética e técnica sobre a pele." },
            suggestedTreatments: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Tratamentos exclusivos recomendados." 
            },
            careRoutine: { type: Type.STRING, description: "Ritual de skincare matinal e noturno sugerido." }
          },
          required: ["recommendations", "suggestedTreatments", "careRoutine"]
        }
      }
    });

    const text = response.text;
    return text ? JSON.parse(text.trim()) : null;
  } catch (e) {
    console.error("Erro na consulta IA:", e);
    return null;
  }
};
