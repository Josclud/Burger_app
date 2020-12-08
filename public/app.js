document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/burgers', {
    burger_name: document.getElementById('burger').value,
    isEaten: false
  })
    .then(() => location.reload())
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'isEaten') {
    axios.put(`/api/burgers/${event.target.dataset.id}`, { idEaten: true })
      .then(() => location.reload())
      .catch(err => console.error(err))
  } else if (event.target.className === 'delete') {
    axios.delete(`/api/burgers/${event.target.dataset.id}`)
      .then(() => location.reload())
      .catch(err => console.error(err))
  }
})