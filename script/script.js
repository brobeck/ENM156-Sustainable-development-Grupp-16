window.onload = initScripts

function initScripts() {
  if (sessionStorage.getItem('unusedTickets') == null) {
    initStorage()
  }
}

function initStorage() {
  sessionStorage.clear()
  var unusedTickets = {
    youth: {
      a: 0,
      ab: 0,
      abc: 0,
      b: 0,
      bc: 0,
      c: 0,
    },
    adult: {
      a: 0,
      ab: 0,
      abc: 0,
      b: 0,
      bc: 0,
      c: 0,
    },
    error: 0,
  }

  var activeTickets = Object.assign({}, unusedTickets)

  var utlString = JSON.stringify(unusedTickets)
  var atlString = JSON.stringify(activeTickets)
  sessionStorage.setItem('unusedTickets', utlString)
  sessionStorage.setItem('activeTickets', atlString)
}

function logStorage() {
  //debugging
  console.log(JSON.parse(sessionStorage.getItem('unusedTickets')))
  console.log(JSON.parse(sessionStorage.getItem('activeTickets')))
}

function pushUnusedTicket(type, zone, number) {
  let unusedTickets = JSON.parse(sessionStorage.getItem('unusedTickets'))
  unusedTickets[type][zone] += number
  sessionStorage.setItem('unusedTickets', JSON.stringify(unusedTickets))
}

function activateTicket(type, zone, number = 1) {
  const unusedTickets = JSON.parse(sessionStorage.getItem('unusedTickets'))
  unusedTickets[type][zone] -= number
  const activeTickets = JSON.parse(sessionStorage.getItem('activeTickets'))
  activeTickets[type][zone] += number

  sessionStorage.setItem('unusedTickets', JSON.stringify(unusedTickets))
  sessionStorage.setItem('activeTickets', JSON.stringify(activeTickets))
}
