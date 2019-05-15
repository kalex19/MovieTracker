export const fetchNowPlayingCleaner = (nowPlaying) => {
  return nowPlaying.map(movie => {
    return {...movie, type: 'nowPlaying'}
    
  })
}