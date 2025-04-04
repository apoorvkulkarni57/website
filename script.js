 // Add event listener to search button -->
 document.querySelector('button[type="submit"]').addEventListener('click', (e) =>
{
e.preventDefault();
const from = document.getElementById('from').value;
const to = document.getElementById('to').value;
const date = document.getElementById('date').value;
console.log('Searching for bus tickets from ${from} to ${to} on ${date}');
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('password').value;

    if (username === 'admin' && password === 'password')  {
        window.location.href ='dashboard.html';
    } else {
        alert('Invalid username or password');
    } 






    const busData = [
        { name: "Express Bus", from: "City A", to: "City B", departure: "10:00 AM", arrival: "2:00 PM", price: "$20" },
        { name: "Fast Travels", from: "City A", to: "City C", departure: "11:00 AM", arrival: "3:30 PM", price: "$25" },
        { name: "Speedy Bus", from: "City B", to: "City C", departure: "1:00 PM", arrival: "5:00 PM", price: "$18" }
    ];
    
    document.getElementById("searchBtn").addEventListener("click", function() {
        displayBuses(busData);
    });
    
    function displayBuses(buses) {
        let resultsTable = document.querySelector("#results tbody");
        resultsTable.innerHTML = "";
    
        if (buses.length > 0) {
            buses.forEach(bus => {
                let row = `<tr>
                    <td>${bus.name}</td>
                    <td>${bus.from}</td>
                    <td>${bus.to}</td>
                    <td>${bus.departure}</td>
                    <td>${bus.arrival}</td>
                    <td>${bus.price}</td>
                </tr>`;
                resultsTable.innerHTML += row;
            });
        } else {
            resultsTable.innerHTML = `<tr><td colspan="6">No buses found</td></tr>`;
        }
    }
});









