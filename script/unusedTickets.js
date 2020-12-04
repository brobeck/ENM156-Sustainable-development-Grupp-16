const ticketContainer = document.querySelector('#ticket-container')

/*const unusedTickets = {
  youth: {
    a: 1,
    ab: 13,
    abc: 37,
    b: 0,
    bc: 0,
    c: 0,
  },
  adult: {
    a: 2,
    ab: 0,
    abc: 11,
    b: 1,
    bc: 9,
    c: 0,
  },
}*/

console.log(sessionStorage)

const unusedTickets = JSON.parse(sessionStorage.getItem('unusedTickets'))

const createTicket = ({ quantity, type, zone }) => `
  <div class="unused-ticket">
    <div class="unused-ticket-type">
      <div class="numberOfTicketsBox">
        <div class="numberOfTicketsBoxText">${quantity}</div>
      </div>
      <span class="numberOfTicketsType">${
        type === 'youth' ? 'Ungdom' : 'Vuxen'
      }</span>
    </div>
    <div class="unused-zone rect_center column">
      <span>Zon</span>
      <span>${zone.toUpperCase()}</span>
    </div>
      <a href="biljetter.html" class="activate-btn">Aktivera</a>
  </div>`

const tickets = Object.entries(unusedTickets)
  .map(([type, zones]) =>
    Object.entries(zones)
      .filter(([_, quantity]) => quantity !== 0)
      .map(([zone, quantity]) => ({ quantity, type, zone }))
  )
  .flat()
  .sort((a, b) => a.zone.localeCompare(b.zone))

tickets.forEach((ticket) => (ticketContainer.innerHTML += createTicket(ticket)))
