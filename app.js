// const save = document.querySelector(".save");
// const street=document.getElementById("street");
// const value=document.querySelector(".value");
// const form=document.querySelector(".input-form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const street= FormData.get("street");
//   const data = Object.fromEntries(formData.entries());


//   console.log(data);

// });
// safely get value by id
function get(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}

const qtyInput = document.getElementById("qty");
const priceInput = document.getElementById("price");
const totalInput = document.getElementById("total");

if (qtyInput && priceInput && totalInput) {
  qtyInput.addEventListener("input", calcTotal);
  priceInput.addEventListener("input", calcTotal);

  function calcTotal() {
    const qty = parseFloat(qtyInput.value) || 0;
    const price = parseFloat(priceInput.value) || 0;
    totalInput.value = (qty * price).toFixed(2);
  }
}

const save = document.querySelector(".save");

if (save) {
  save.addEventListener("click", (e) => {
    e.preventDefault();

    const data = {

      fromStreet: get("fromStreet"),
      fromCity: get("fromCity"),
      fromPost: get("fromPost"),
      fromCountry: get("fromCountry"),


      clientName: get("clientName"),
      clientEmail: get("clientEmail"),
      toStreet: get("toStreet"),
      toCity: get("toCity"),
      toPost: get("toPost"),
      toCountry: get("toCountry"),


      invoiceDate: get("invoiceDate"),
      paymentTerms: get("paymentTerms"),
      projectDesc: get("projectDesc"),

      
      item: get("item"),
      qty: get("qty"),
      price: get("price"),
      total: get("total")
    };
    

    localStorage.setItem("invoiceData", JSON.stringify(data));
    window.location.href = "form.html";
  });
}
