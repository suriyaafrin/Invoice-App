const save = document.querySelector(".save");
const street=document.getElementById("street");
const value=document.querySelector(".value");
save.addEventListener("click", (e) => {

   e.preventDefault(); // Prevent form from refreshing the page

    // Capture the data
    const invoiceData = {
        billFromStreet: document.getElementById("street").value,
        // Using querySelectorAll or specific IDs is better since you have duplicate IDs in your HTML
        billToName: document.querySelectorAll("#street")[1].value, 
        billToEmail: document.querySelectorAll("#street")[2].value,
        invoiceDate: document.getElementById("ct2").value,
        // Add more fields here as needed
    };

    // Save to LocalStorage
    localStorage.setItem("invoiceData", JSON.stringify(invoiceData));

    // Redirect
    window.location.href = "form.html";
});