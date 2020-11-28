const nrTickets = 13
const ticketType = 'Ungdom'
const zone = 'A'

const unusedTickets = {
  youth: {
    a: 1,
    ab: 13,
    abc: 37,
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
}

const ticket = (quantity, type, zone) => `
  <div class="unused-ticket">
    <div class="unused-ticket-type">
      <div class="numberOfTicketsBox">
        <div class="numberOfTicketsBoxText">${quantity}</div>
      </div>
      <span class="numberOfTicketsType">${type}</span>
    </div>
    <div class="unused-zone rect_center column">
      <span>Zon</span>
      <span>${zone}</span>
    </div>
      <div class="activate-btn">Aktivera</div>
  </div>`

const tickets = Object.entries(unusedTickets.youth).map(([zone, quantity]) => {
  return ticket(quantity, 'Ungdom', zone)
})
console.log(tickets)

const ticketContainer = document.querySelector('#ticket-container')

tickets.forEach((ticket) => (ticketContainer.innerHTML += ticket))
