function calculateFertilizer() {
    let crop = document.getElementById("crop").value;
    let land = document.getElementById("land").value;
    let result = document.getElementById("result");

    if (crop === "" || land === "") {
        result.innerHTML = "<div class='alert alert-danger'>Please fill all fields</div>";
        return;
    }

    let fertilizerPerAcre = 0;

    // Rule-based logic
    if (crop === "rice") fertilizerPerAcre = 120;
    else if (crop === "wheat") fertilizerPerAcre = 100;
    else if (crop === "cotton") fertilizerPerAcre = 150;
    else if (crop === "sugarcane") fertilizerPerAcre = 200;

    let totalFertilizer = fertilizerPerAcre * land;
    let estimatedCost = totalFertilizer * 6; // ₹6 per kg (dummy)

    result.innerHTML = `
        <div class="alert alert-success">
            <h5>Result</h5>
            <p><b>Total Fertilizer Required:</b> ${totalFertilizer} kg</p>
            <p><b>Estimated Cost:</b> ₹${estimatedCost}</p>
        </div>
    `;
}
