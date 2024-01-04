function toFarh() {
    const celsiusInput = document.getElementById('celsius');
    const res = document.getElementById("result");

    if (celsiusInput.value !== '') {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * (9 / 5)) + 32;
        res.textContent = fahrenheit.toFixed(2) + " °F";
    }
}