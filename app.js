function get(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}

let items = [];

function renderRows() {
  const container = document.getElementById("itemRows");
  container.innerHTML = "";

  items.forEach(function (item, idx) {
    const div = document.createElement("div");
    div.className = "itemList";
    div.innerHTML = `
      <div class="itemName">
        Item Name
        <input type="text" id="item" placeholder="Item name" value="${item.name}">
      </div>
      <div class="itemName">
        Qty.
        <input type="number" id="qty" placeholder="0" value="${item.qty}">
      </div>
      <div class="itemName">
        Price
        <input type="number" id="price" placeholder="0.00" value="${item.price}">
      </div>
      <div class="itemName">
        Total
        <input type="number" id="total" value="${item.total}" readonly>
      </div>
      <div class="trash">
        <i class="fa-solid fa-trash"></i>
      </div>
    `;

    const nameInput  = div.querySelector("#item");
    const qtyInput   = div.querySelector("#qty");
    const priceInput = div.querySelector("#price");
    const totalInput = div.querySelector("#total");

    nameInput.addEventListener("input", function () {
      items[idx].name = nameInput.value;
    });
    qtyInput.addEventListener("input", function () {
      items[idx].qty   = parseFloat(qtyInput.value) || 0;
      items[idx].total = items[idx].qty * items[idx].price;
      totalInput.value = items[idx].total.toFixed(2);
    });

    priceInput.addEventListener("input", function () {
      items[idx].price = parseFloat(priceInput.value) || 0;
      items[idx].total = items[idx].qty * items[idx].price;
      totalInput.value = items[idx].total.toFixed(2);
    });

    div.querySelector(".trash").addEventListener("click", function () {
      items.splice(idx, 1);
      renderRows();
    });

    container.appendChild(div);
  });
}

const addBtn = document.querySelector(".btn");
if (addBtn) {
  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    items.push({ name: "", qty: 0, price: 0, total: 0 });
    renderRows();
  });
}

const save = document.querySelector(".save");
if (save) {
  save.addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
      fromStreet:  get("fromStreet"),
      fromCity:    get("fromCity"),
      fromPost:    get("fromPost"),
      fromCountry: get("fromCountry"),

      clientName:  get("clientName"),
      clientEmail: get("clientEmail"),
      toStreet:    get("toStreet"),
      toCity:      get("toCity"),
      toPost:      get("toPost"),
      toCountry:   get("toCountry"),

      invoiceDate:  get("invoiceDate"),
      paymentTerms: get("paymentTerms"),
      projectDesc:  get("projectDesc"),
      items: items,
    };

    localStorage.setItem("invoiceData", JSON.stringify(data));
    window.location.href = "form.html";
  });
}