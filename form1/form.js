document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form1');
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Create a new FormData object
    var html = "<html><head><title>Report Details</title><link rel='stylesheet' type='text/css' href='opstyle.css'></head><body>";
    html += "<div class='p'><h1>Report Details</h1>";

    for (const [name, value] of formData.entries()) {
        const p = document.createElement('p');
        p.textContent = `${name}: ${value}`;
        html += p.textContent;
        html += '<br>';
    }
    html += "</div></body></html>";
    var newWindow = window.open("");
    newWindow.document.write(html);

}


