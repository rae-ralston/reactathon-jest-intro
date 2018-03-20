export default function fetchGif(url) {
  return fetch(url)
    .then(response => response.json())
    .then(payload => {
      return payload.data.images.original.url
    })
    .catch(err => console.error(err))
}
