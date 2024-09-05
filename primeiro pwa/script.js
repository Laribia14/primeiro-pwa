document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  
  document.getElementById('confirmation-message').textContent = 
    `Reserva confirmada para ${name} no dia ${date} às ${time}.`;
});
