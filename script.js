function calculateProfit() {
    const categoryElement = document.getElementById('category');
    const category = parseFloat(categoryElement.value);
    const price = parseFloat(document.getElementById('price').value);
    const buyingPrice = parseFloat(document.getElementById('buying-price').value);
    const shippingMethod = document.getElementById('shipping-method').value;

    if (isNaN(category) || isNaN(price) || isNaN(buyingPrice)) {
        alert('Please enter valid values');
        return;
    }

    const commission = (category / 100) * price;
    const shippingContribution = shippingMethod === 'drop-shipping' 
        ? parseFloat(categoryElement.selectedOptions[0].getAttribute('data-drop-shipping')) 
        : parseFloat(categoryElement.selectedOptions[0].getAttribute('data-jumia-express'));

    const totalDeduction = commission + shippingContribution;
    const profit = price - totalDeduction;
    const realProfit = profit - buyingPrice;

    document.getElementById('profit').textContent = `Profit (before buying price): KSH ${profit.toLocaleString()}`;
    document.getElementById('real-profit').textContent = `Real Profit: KSH ${realProfit.toLocaleString()}`;

    document.getElementById('results').classList.remove('hidden');
}
