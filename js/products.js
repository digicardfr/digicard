function renderProducts(category) {
  const modals = document.querySelector("#modals");

  const modalFade = document.createElement("div");
  modalFade.setAttribute("class", "modal fade");
  modalFade.setAttribute("id", category.data_bs_target);
  modalFade.setAttribute("tabindex", "-1");
  modalFade.setAttribute("aria-labelledby", `${category.data_bs_target}Label`);
  modalFade.setAttribute("aria-hidden", "true");

  const modalDialog = document.createElement("div");
  modalDialog.setAttribute(
    "class",
    "modal-dialog modal-xl modal-dialog-scrollable"
  );

  const modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.setAttribute("class", "modal-header");

  const modalTitle = document.createElement("h1");
  modalTitle.setAttribute("class", "modal-title fs-5");
  modalTitle.setAttribute("id", `${category.data_bs_target}Label`);
  modalTitle.innerText = category.title;
  modalHeader.append(modalTitle);

  const btnClose = document.createElement("button");
  btnClose.setAttribute("type", "button");
  btnClose.setAttribute("class", "btn-close");
  btnClose.setAttribute("data-bs-dismiss", "modal");
  btnClose.setAttribute("aria-label", "Close");
  modalHeader.append(btnClose);
  modalContent.append(modalHeader);

  const listGroup = document.createElement("div");
  listGroup.setAttribute("class", "list-group");

  for (const product of category.products) {
    const listItem = document.createElement("a");
    listItem.setAttribute("class", "list-group-item list-group-item-action");
    listItem.setAttribute("aria-current", "true");

    const header = document.createElement("div");
    header.setAttribute("class", "d-flex w-100 justify-content-between");

    const title = document.createElement("h5");
    title.setAttribute("class", "mb-1");
    title.innerText = product.title;
    header.append(title);

    const price = document.createElement("small");
    const badge = document.createElement("span");
    badge.setAttribute("class", "badge bg-primary rounded-pill");
    badge.innerText = product.price;
    price.append(badge);
    header.append(price);
    listItem.append(header);

    const divDescriptionAllergens = document.createElement("div");
    const description = document.createElement("p");
    description.setAttribute("class", "mb-1");
    description.innerText = product.description;
    divDescriptionAllergens.append(description);

    for (const allergen of product.allergens) {
      const img = document.createElement("img");
      img.setAttribute("src", allergen);
      img.setAttribute("width", "30");
      divDescriptionAllergens.append(img);
    }
    listItem.append(divDescriptionAllergens);

    for (const variation of product.variations) {
      const variationTitle = document.createElement("strong");
      variationTitle.innerText = `${variation.variation}: `;
      listItem.append(variationTitle);
      const variationPrice = document.createElement("span");
      variationPrice.setAttribute("class", "badge bg-primary rounded-pill");
      variationPrice.innerText = variation.price;
      listItem.append(variationPrice);
      listItem.append(document.createElement("br"));
    }

    listGroup.append(listItem);
  }
  const modalBody = document.createElement("div");
  modalBody.setAttribute("class", "modal-body");

  modalBody.append(listGroup);
  modalContent.append(modalBody);

  const modalFooter = document.createElement("div");
  modalFooter.setAttribute("class", "modal-footer");
  const btnCloseFooter = document.createElement("button");
  btnCloseFooter.setAttribute("type", "button");
  btnCloseFooter.setAttribute("class", "btn btn-secondary");
  btnCloseFooter.setAttribute("data-bs-dismiss", "modal");
  btnCloseFooter.innerText = "Cerrar";
  modalFooter.append(btnCloseFooter);
  modalContent.append(modalFooter);

  modalDialog.append(modalContent);
  modalFade.append(modalDialog);
  modals.append(modalFade);
}
