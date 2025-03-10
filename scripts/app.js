const busSeat = document.getElementsByClassName("bus-seat");
let selectedSeatOnly = [];
let count = 0;
for (const seat of busSeat) {
  seat.addEventListener("click", function (event) {
    if (selectedSeatOnly.includes(event.target.innerText)) {
      return alert("Can Not Select a seat twice");
    }

    selectedSeatOnly.push(event.target.innerText);
    if (selectedSeatOnly.length > 3) {
      document.getElementById("couponBtn").removeAttribute("disabled");
    }
    if (selectedSeatOnly.length > 4) {
      return alert("Can not add more than 4 seats");
    }

    event.target.style.backgroundColor = "lime";
    event.target.classList.add("text-white");

    const totalSeats = getInputByNumber("total-seats");
    document.getElementById("total-seats").innerText = totalSeats - 1;

    const seatCount = getInputByNumber("seat-count");
    document.getElementById("seat-count").innerText = seatCount + 1;

    const selectedBookedSeat = document.getElementById("selected-booked-seat");
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("items-center");
    div.classList.add("p-3");

    const p1 = document.createElement("p");
    p1.innerText = event.target.innerText;

    const p2 = document.createElement("p");
    p2.innerText = "Economy";

    div.appendChild(p1);

    div.appendChild(p1).style.fontSize = "1.3rem";
    div.appendChild(p1).style.backgroundColor = "gray";
    div.appendChild(p1).style.padding = "0.5rem";
    div.appendChild(p1).style.color = "white";
    div.appendChild(p1).style.borderRadius = "1rem";

    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = "550";
    div.appendChild(p3);

    selectedBookedSeat.appendChild(div);

    count++;

    setTotalPrice("total-Price");
    grandTotal("");
  });
}
const passerName = document.getElementById("userName");
const emailId = document.getElementById("emailId");
const phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("keyup", function (e) {
  const target = e.target.value;

  if (!passerName.value) {
    alert("Please provide your Name first");
  }

  if (count && target.length == 11) {
    const NextBtn = document.getElementById("nextBtn");
    NextBtn.removeAttribute("disabled");
  } else {
    const NextBtn = document.getElementById("nextBtn");
    NextBtn.setAttribute("disabled", true);
  }
});

const NextBtn = document.getElementById("nextBtn");
NextBtn.addEventListener("click", function () {
  phoneNumber.value = "";

  NextBtn.setAttribute("disabled", true);
  my_modal_1.showModal();
});

const continueBtn = document.getElementById("continueBtn");
continueBtn.addEventListener("click", function () {
  location.reload();
});
