// Check if user is logged in
const userEmail = localStorage.getItem("userEmail");

// Events ka data
const events = [
  {
    name: "Music Concert",
    date: "2025-02-10",
    location: "City Hall",
    price: "₹500",
  },
  {
    name: "Art Exhibition",
    date: "2025-02-15",
    location: "Gallery Center",
    price: "₹300",
  },
  {
    name: "Tech Meetup",
    date: "2025-02-20",
    location: "Tech Park",
    price: "Free",
  },
  {
    name: "Food Festival",
    date: "2025-02-25",
    location: "Central Park",
    price: "₹200",
  },
  {
    name: "Comedy Show",
    date: "2025-03-05",
    location: "Downtown Theater",
    price: "₹600",
  },
];

// Total events ko update karega
document.getElementById("event-count").textContent = events.length;

// Events ko list me add karega
const eventList = document.getElementById("event-list");

events.forEach((event) => {
  const li = document.createElement("li");
  li.classList.add("event-item");

  // Event details
  const eventDetails = document.createElement("div");
  eventDetails.classList.add("event-details");

  // ✅ Properly formatted innerHTML using backticks
  eventDetails.innerHTML = `
        <strong>${event.name}</strong><br>
        📅 Date: ${event.date} <br>
        📍 Location: ${event.location} <br>
        💰 Price: ${event.price}
    `;

  // Buy Ticket Button
  const button = document.createElement("button");
  button.classList.add("buy-ticket-btn");
  button.textContent = "Buy Ticket";
  button.onclick = () => {
    if (!userEmail) {
      alert("Please login first!");
      window.location.href = "login.html"; // Redirect to login page
    } else {
      alert(`You selected: ${event.name}\n💰 Price: ${event.price}`);
    }
  };

  li.appendChild(eventDetails);
  li.appendChild(button);
  eventList.appendChild(li);
});
