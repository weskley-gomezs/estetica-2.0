
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Facial' | 'Corporal' | 'Injetáveis' | 'Bem-estar';
}

export interface ConsultationResponse {
  recommendations: string;
  suggestedTreatments: string[];
  careRoutine: string;
}
