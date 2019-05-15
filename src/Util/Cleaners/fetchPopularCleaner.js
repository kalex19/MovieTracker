export const fetchPopularCleaner = (popular) => {
  return popular.map(movie => {
    return {...movie, type: 'popular'}
  })
}