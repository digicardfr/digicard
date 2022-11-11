window.addEventListener("load", renderCategories);

function renderCategories() {
  const row = document.querySelector(".row");
  for (const category of categories) {
    const col = document.createElement("div");
    col.setAttribute("class", "col");

    const card = document.createElement("div");
    card.setAttribute("class", "card h-100");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", category.image);
    cardImg.setAttribute("class", "card-img-top");
    card.append(cardImg);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = category.title;
    cardBody.append(cardTitle);
    card.append(cardBody);

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer");

    const buttonProducts = document.createElement("button");
    buttonProducts.setAttribute("type", "button");
    buttonProducts.setAttribute("class", "btn btn-primary");
    buttonProducts.setAttribute("data-bs-toggle", "modal");
    buttonProducts.setAttribute(
      "data-bs-target",
      `#${category.data_bs_target}`
    );
    buttonProducts.innerText = "Ver productos";
    buttonProducts.addEventListener("click", renderProducts(category));
    cardFooter.append(buttonProducts);
    card.append(cardFooter);
    col.append(card);
    row.append(col);
  }
}
