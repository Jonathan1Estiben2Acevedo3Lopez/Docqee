export function clampRating(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(Math.max(value, 0), 5);
}

export function calculateAverageRating(ratings: number[]) {
  if (ratings.length === 0) {
    return 0;
  }

  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  return clampRating(total / ratings.length);
}

export function getStarFillRatio(value: number | null | undefined, index: number) {
  if (value === null || value === undefined) {
    return 0;
  }

  return Math.min(Math.max(clampRating(value) - index, 0), 1);
}
