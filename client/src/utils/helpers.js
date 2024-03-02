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

/**
 * Retorna el porcentaje de X basado en Y.
 * @param {number} date - La fecha de expiracion.
 * @retorna {string} - Los dias restantes hasta esa fecha.
 **/

export const getDaysRemaining = (date) => {
  const differenceInMilliseconds = date.getTime() - new Date().getTime();
  const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  return `${differenceInDays} días`;
};
