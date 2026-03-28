const d = JSON.parse(localStorage.getItem("invoiceData"));

if (d) {
  // Billed To
  document.getElementById("showClientName").textContent  = d.clientName;
  document.getElementById("showClientEmail").textContent = d.clientEmail;
  document.getElementById("showToStreet").textContent    = d.toStreet;
  document.getElementById("showToCity").textContent      = d.toCity + " " + d.toPost + ", " + d.toCountry;

  // Billed From
  document.getElementById("showFromStreet").textContent = d.fromStreet;
  document.getElementById("showFromCity").textContent   = d.fromCity + " " + d.fromPost + ", " + d.fromCountry;

  // Date and Payment Terms
  document.getElementById("showDate").textContent         = d.invoiceDate;
  document.getElementById("showPaymentTerms").textContent = d.paymentTerms;

  // loop all items and add a row for each
  const table = document.getElementById("itemTable");
  let subtotal = 0;

  d.items.forEach(function (item) {
    const qty   = parseFloat(item.qty)   || 0;
    const price = parseFloat(item.price) || 0;
    const total = qty * price;
    subtotal   += total;

    const tr = document.createElement("tr");
    tr.setAttribute("align", "center");
    tr.innerHTML =
      "<td>" + item.name          + "</td>" +
      "<td>" + qty                + "</td>" +
      "<td>$" + price.toFixed(2)  + "</td>" +
      "<td>$" + total.toFixed(2)  + "</td>";

    table.appendChild(tr);
  });

  // Totals
  const tax   = subtotal * 0.05;
  const grand = subtotal + tax;

  document.getElementById("showSubtotal").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("showTax").textContent      = "$" + tax.toFixed(2);
  document.getElementById("showTotal").textContent    = "$" + grand.toFixed(2);
}