export const getYouTubeEmbedUrls = (urls: string[]): string[] => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/

  return urls.map((url) => {
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`
    }
    return url
  })
}

export function cleanFileName(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '') // Remove file extension
    .replace(/_/g, ' ') // Replace underscores with spaces
}
