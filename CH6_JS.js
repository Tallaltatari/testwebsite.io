document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  calculateBtn.addEventListener('click', calculateTotalCost);
});

function calculateTotalCost() {
  const petrolCost = parseFloat(document.getElementById('petrol-cost').value);
  const litersPurchased = parseFloat(document.getElementById('liters-purchased').value);

  if (!isNaN(petrolCost) && !isNaN(litersPurchased)) {
    const totalCost = petrolCost * litersPurchased;
    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
  } else {
    document.getElementById('total-cost').textContent = 'Please enter valid numbers.';
  }
}