$(document).ready(function () {
    // Load JSON
    $.getJSON("data.json", function (data) {
        console.log("Loaded JSON:", data);

        data.forEach(function (spot, index) {
            const mapLink = `https://www.google.com/maps?q=${spot.location[0]},${spot.location[1]}`;

            // Create neon table row
            const row = `
                <tr style="animation-delay: ${index * 0.05}s">
                    <td>${spot.name}</td>
                    <td>${spot.description}</td>
                    <td><a class="btn" href="${mapLink}" target="_blank">📍 View Map</a></td>
                </tr>
            `;

            $("#top-spots-table tbody").append(row);
        });
    });
});