function getInputByNumber(elementId) {
  const element = document.getElementById(elementId).innerText;
  return (elementId.innerText = parseInt(element));
}

function setTotalPrice() {
  const totalPrice = getInputByNumber("total-Price");
  document.getElementById("total-Price").innerText = totalPrice + 550;
}

function grandTotal() {
  const totalPrice = getInputByNumber("total-Price");
  document.getElementById("grand-Price").innerText = totalPrice;
}
