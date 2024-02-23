/**
 * Retorna el porcentaje de X basado en Y.
 * @param {number} amountCollected - El progreso (X).
 * @param {number} collectionGoal - El total (Y).
 * @retorna {number} - El porcentaje actual.
 **/

export const calculateProgress = (amountCollected, collectionGoal) => {
  const validAmountCollected = Math.max(0, amountCollected);
  const validCollectionGoal = Math.max(0, collectionGoal);
  const progressPercentage = (validAmountCollected / validCollectionGoal) * 100;
  return Math.round(progressPercentage);
};
