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

function applyButton() {
  const couponInput = document.getElementById("couponInput").value;

  if (couponInput === "NEW15") {
    const discountPrice = document.getElementById("discount-price");
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");

    const p1 = document.createElement("p");
    p1.innerText = "Discount Price";
    div.appendChild(p1);
    discountPrice.appendChild(div);

    discountPrice.appendChild(div).style.fontSize = "1.1rem";
    discountPrice.appendChild(div).style.fontWeight = "bold";

    const totalPrice = getInputByNumber("total-Price");

    const onlyDiscount = totalPrice * 0.15;

    const discountTotal = totalPrice - onlyDiscount;

    const grandPrice = document.getElementById("grand-Price");

    const p2 = document.createElement("p");
    p2.innerText = "BDT " + onlyDiscount;
    div.appendChild(p2);

    grandPrice.innerText = discountTotal;
    const hawa = document.getElementById("hawa");
    hawa.style.display = "none";
  } else if (couponInput === "Couple20") {
    const discountPrice = document.getElementById("discount-price");
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");

    const p1 = document.createElement("p");
    p1.innerText = "Discount Price";
    div.appendChild(p1);
    discountPrice.appendChild(div);

    discountPrice.appendChild(div).style.fontSize = "1.1rem";
    discountPrice.appendChild(div).style.fontWeight = "bold";

    const totalPrice = getInputByNumber("total-Price");

    const onlyDiscount = totalPrice * 0.2;

    const discountTotal = totalPrice - onlyDiscount;

    const grandPrice = document.getElementById("grand-Price");

    const p2 = document.createElement("p");
    p2.innerText = "BDT " + onlyDiscount;
    div.appendChild(p2);

    grandPrice.innerText = discountTotal;
    document.getElementById("couponInput").value = "";
    const hawa = document.getElementById("hawa");
    hawa.style.display = "none";
  } else {
    alert("Invalid Coupon Code");
    return;
  }
}
