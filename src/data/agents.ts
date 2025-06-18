
export interface Agent {
  id: string;
  name: string;
  role: string;
  specialization: string;
  color: string;
  initials: string;
  mbti: string;
  personality: string;
  voiceId: string;
  description: string;
  capabilities: string[];
  programAdaptation: {
    prime: string;
    longevity: string;
  };
}

export const agents: Agent[] = [
  {
    id: 'nexus',
    name: 'NEXUS',
    role: 'Orchestration Specialist',
    specialization: 'Coordinador Maestro y Concierge Inteligente',
    color: '#00D4FF',
    initials: 'NX',
    mbti: 'INTJ',
    personality: 'The Architect + ESFP traits - Coordinación estratégica con calidez empática',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    description: 'Analiza intenciones, dirige consultas al agente apropiado, mantiene memoria conversacional y sintetiza respuestas de múltiples agentes con fusión de insights.',
    capabilities: [
      'Análisis de Intención 95% precisión',
      'Routing Inteligente Cross-Agent',
      'Gestión de Contexto Conversacional',
      'Síntesis de Respuestas Multi-Perspectiva',
      'Concierge Mode Proactivo'
    ],
    programAdaptation: {
      prime: 'Coordinación estratégica ejecutiva con enfoque en ROI',
      longevity: 'Guía integral de bienestar con calidez empática'
    }
  },
  {
    id: 'blaze',
    name: 'BLAZE',
    role: 'Training Specialist',
    specialization: 'Elite Training Strategist',
    color: '#FF6B35',
    initials: 'BZ',
    mbti: 'ESTP',
    personality: 'The Entrepreneur - Energético y motivacional',
    voiceId: 'EXAVITQu4vr4xnSDxMaL',
    description: 'Diseña programas de entrenamiento personalizados con IA avanzada, análisis biomecánico y periodización inteligente.',
    capabilities: [
      'Planes Personalizados con IA',
      'Computer Vision Biomecánica',
      'Periodización Inteligente',
      'Tracking Predictivo 85% precisión',
      'Adaptación Dinámica Tiempo Real'
    ],
    programAdaptation: {
      prime: 'Protocolos de alto rendimiento para optimización ejecutiva',
      longevity: 'Fitness sostenible con progresión gradual'
    }
  },
  {
    id: 'sage',
    name: 'SAGE',
    role: 'Nutrition Scientist',
    specialization: 'Precision Nutrition Architect',
    color: '#00FF7F',
    initials: 'SG',
    mbti: 'ISFJ',
    personality: 'The Protector - Chef científico con calidez mediterránea',
    voiceId: 'VR6AewLTigWG4xSOukaG',
    description: 'Planes nutricionales personalizados con análisis visual avanzado, computer vision para alimentos y nutrigenómica.',
    capabilities: [
      'Análisis Nutricional Visual',
      'Planes de Comidas AI',
      'Sincronización MyFitnessPal',
      'Nutrigenómica Personalizada',
      'Recetas Adaptativas'
    ],
    programAdaptation: {
      prime: 'Nutrición de rendimiento con optimización metabólica',
      longevity: 'Nutrición preventiva con enfoque en longevidad'
    }
  },
  {
    id: 'wave',
    name: 'WAVE',
    role: 'Analytics Expert',
    specialization: 'Recovery & Performance Analytics Specialist',
    color: '#00D4FF',
    initials: 'WV',
    mbti: 'ISFP + INTP',
    personality: 'Fusión única - Sanador equilibrado con precisión analítica',
    voiceId: 'XrExE9yKIg1WjnnlVkGX',
    description: 'Análisis integral de recuperación y rendimiento, integra múltiples wearables con IA predictiva.',
    capabilities: [
      'Análisis Multifuente Wearables',
      'Interpretación HRV Avanzada',
      'Detección de Patrones ML',
      'Protocolos de Recuperación',
      'Alertas Inteligentes Proactivas'
    ],
    programAdaptation: {
      prime: 'Optimización de rendimiento con analytics ejecutivos',
      longevity: 'Bienestar holístico con educación científica accesible'
    }
  },
  {
    id: 'spark',
    name: 'SPARK',
    role: 'Motivation Engine',
    specialization: 'Motivation Behavior Coach',
    color: '#6D00FF',
    initials: 'SP',
    mbti: 'ENFJ',
    personality: 'The Protagonist - Empático motivador con energía adaptativa',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    description: 'Psicología del cambio y adherencia a hábitos con IA comportamental, CBT y gamificación inteligente.',
    capabilities: [
      'Coaching Cognitivo CBT',
      'Sistema de Micro-Hábitos',
      'Tracking de Adherencia ML',
      'Gamificación Adaptativa',
      'Intervención Proactiva'
    ],
    programAdaptation: {
      prime: 'Coaching estratégico para alto rendimiento ejecutivo',
      longevity: 'Motivación empática para cambios sostenibles'
    }
  },
  {
    id: 'stella',
    name: 'STELLA',
    role: 'Progress Tracker',
    specialization: 'Progress Tracking & Analytics',
    color: '#00FF7F',
    initials: 'ST',
    mbti: 'ESFJ',
    personality: 'The Consul - Celebratory analyst con optimismo contagioso',
    voiceId: 'pqHfZKP75CvOlQylNhV4',
    description: 'Monitoreo integral y visualización de progreso con IA predictiva, computer vision y storytelling automático.',
    capabilities: [
      'Tracking Multidimensional',
      'Análisis Visual Computer Vision',
      'Predicciones Inteligentes',
      'Sistema de Logros',
      'Storytelling Automático'
    ],
    programAdaptation: {
      prime: 'Métricas de ROI y KPIs de rendimiento ejecutivo',
      longevity: 'Celebración de progreso y hitos de bienestar'
    }
  },
  {
    id: 'nova',
    name: 'NOVA',
    role: 'Biohacking Pioneer',
    specialization: 'Biohacking Innovator',
    color: '#FF6B35',
    initials: 'NV',
    mbti: 'ENTP',
    personality: 'The Innovator - Explorador científico del futuro',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    description: 'Optimización avanzada y técnicas cutting-edge con validación científica, protocolos de longevidad.',
    capabilities: [
      'Protocolos Avanzados',
      'Suplementación Inteligente',
      'Experimentación N=1',
      'Educación Científica',
      'Optimización Holística'
    ],
    programAdaptation: {
      prime: 'Optimización cutting-edge para ventaja competitiva',
      longevity: 'Biohacking natural para longevidad saludable'
    }
  },
  {
    id: 'code',
    name: 'CODE',
    role: 'Genetic Performance Specialist',
    specialization: 'Genetic Analysis & Precision Medicine',
    color: '#6D00FF',
    initials: 'CD',
    mbti: 'INTJ',
    personality: 'The Architect - Decodificador genético con precisión científica',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    description: 'Análisis genético avanzado y medicina de precisión, farmacogenómica y personalización epigenética.',
    capabilities: [
      'Análisis Genético Completo',
      'Farmacogenómica Avanzada',
      'Personalización Epigenética',
      'Medicina de Precisión',
      'Risk Assessment Genético'
    ],
    programAdaptation: {
      prime: 'Genética competitiva para optimización estratégica',
      longevity: 'Genética preventiva para salud a largo plazo'
    }
  },
  {
    id: 'luna',
    name: 'LUNA',
    role: 'Female Wellness Specialist',
    specialization: 'Women\'s Health & Hormonal Optimization',
    color: '#FF69B4',
    initials: 'LN',
    mbti: 'ENFJ',
    personality: 'The Protagonist - Maternal empowerment con expertise científico',
    voiceId: 'oWAxZDx7w5VEj9dCyTzz',
    description: 'Salud femenina especializada con análisis hormonal, ciclo menstrual y bienestar integral.',
    capabilities: [
      'Análisis del Ciclo Menstrual',
      'Entrenamiento Basado en Ciclo',
      'Nutrición Hormonal',
      'Manejo de Menopausia',
      'Salud Ósea Femenina'
    ],
    programAdaptation: {
      prime: 'Optimización hormonal ejecutiva para rendimiento femenino',
      longevity: 'Bienestar femenino integral a través de etapas vitales'
    }
  },
  {
    id: 'node',
    name: 'NODE',
    role: 'Systems Integration Ops',
    specialization: 'Infrastructure & Integration Management',
    color: '#808080',
    initials: 'ND',
    mbti: 'ISTJ',
    personality: 'The Logistician - Sistemático y confiable',
    voiceId: 'VR6AewLTigWG4xSOukaG',
    description: 'Gestión de integraciones externas y automatización, sincronización de wearables y APIs.',
    capabilities: [
      'Sincronización Automática',
      'Resolución de Conflictos',
      'Normalización de Datos',
      'Monitoreo Proactivo',
      'API Management'
    ],
    programAdaptation: {
      prime: 'Infraestructura robusta para ecosistemas ejecutivos',
      longevity: 'Integración simple y confiable para usuarios senior'
    }
  },
  {
    id: 'guardian',
    name: 'GUARDIAN',
    role: 'Security Compliance Guardian',
    specialization: 'Privacy & Security Management',
    color: '#2F4F4F',
    initials: 'GD',
    mbti: 'ISTJ',
    personality: 'The Logistician - Protector sistemático y meticuloso',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    description: 'Privacidad, seguridad de datos y cumplimiento normativo GDPR/HIPAA.',
    capabilities: [
      'Gestión de Privacidad',
      'Cumplimiento GDPR/HIPAA',
      'Encriptación Avanzada',
      'Auditoría Completa',
      'Gestión de Consentimientos'
    ],
    programAdaptation: {
      prime: 'Seguridad enterprise para datos ejecutivos sensibles',
      longevity: 'Protección simple y transparente de datos personales'
    }
  }
];

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const getVisibleAgents = (): Agent[] => {
  // Excluir agentes backend NODE y GUARDIAN de la vista principal
  return agents.filter(agent => !['node', 'guardian'].includes(agent.id));
};

export const getBackendAgents = (): Agent[] => {
  return agents.filter(agent => ['node', 'guardian'].includes(agent.id));
};
