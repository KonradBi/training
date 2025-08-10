import { needsTranslations } from '@/translations/needsTranslations'
import { needsExercisesTranslations } from '@/translations/needsExercisesTranslations'

export const getCoreNeeds = (language: 'de' | 'en') => {
  return needsTranslations[language].coreNeeds
}

export const getExercisesData = (language: 'de' | 'en') => {
  // For now, return the existing exercises from needs page since we have many more
  // We'll gradually expand this with the translation file
  return needsExercisesTranslations[language].exercises
}

// Helper to get extended exercises (since we have 20 in the component)
export const getExtendedExercises = (language: 'de' | 'en') => {
  const baseExercises = needsExercisesTranslations[language].exercises
  
  // Since we don't have all 20 exercises translated yet, let's create a subset
  // This would be expanded in a real implementation
  if (language === 'en') {
    return [
      ...baseExercises,
      // Add more exercises here as they get translated
    ]
  }
  
  return baseExercises // Return German original for now
}