let unusedTickets = 0
Object.values(JSON.parse(sessionStorage.getItem('unusedTickets'))).forEach(
  (typeObject) => {
    Object.values(typeObject).forEach((num) => {
      unusedTickets += num
    })
  }
)

document.querySelector('#nrTickets').innerHTML = `x ${unusedTickets}`
