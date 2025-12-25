
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  // Added 'Sustentação' and 'Tecnologia' to the union type to resolve assignment errors in Services.tsx
  category: 'Facial' | 'Corporal' | 'Injetáveis' | 'Bem-estar' | 'Sustentação' | 'Tecnologia';
}

export interface ConsultationResponse {
  recommendations: string;
  suggestedTreatments: string[];
  careRoutine: string;
}