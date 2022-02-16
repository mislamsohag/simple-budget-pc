
//Product Price Update Function
function updatePrice(itemId, price) {
    //Any item update select
    const itemCost = document.getElementById(itemId);
    itemCost.innerText = price;
    //if any item update select then all items cost update
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-cost').innerText;
    //All items sum for update
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryCharge);
    //Total price update
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

//Product items clicked function and send Update Price Function input
function onClick(clickId, itemId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        //Send UpdatePrice input
        updatePrice(itemId, price);
    })
}
//Inputs of onClick function
onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 500);
onClick('ssd3', 'storage-cost', 700);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);

const fackCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;

    const successMassage = document.getElementById('coupon-applied');
    const failMassage = document.getElementById('no-coupon');


    if (promoInput === fackCode) {
        const total = document.getElementById('total-price');
        let newTotal = parseFloat(total.innerText);
        const discount = newTotal * 0.2;
        newTotal = newTotal - discount;
        total.innerText = newTotal;

        successMassage.style.display = "block";
        failMassage.style.display = "none";

        document.getElementById('promo-input').value = '';
    }
    else {
        successMassage.style.display = "none";
        failMassage.style.display = "block";

        document.getElementById('promo-input').value = '';
    }
})