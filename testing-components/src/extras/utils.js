export default function fetchGif(url) {
  return fetch(url)
    .then(response => response.json())
    .then(payload => payload.data.images.fixed_height.url)
    .catch(err => console.error(err))
}
