export function qCheckbox_d(addQToForm, cf, dom, showForm) {
    dom.els.qCheckbox_d.addEventListener("click", event => {
        if (event.target.id === "qCheckbox_dCancel_btn") {
            dom.showDiv(["showForm_d","showForm_dInner_d"]);
        }
        if (event.target.id === "qCheckbox_dChoiceOk_btn") {
            if (!dom.els.qCheckbox_dChoices_inp.value) {
                return;
            }
            const li = document.createElement("li");
            li.classList.add("qCheckbox_d_li");
            li.innerHTML = dom.els.qCheckbox_dChoices_inp.value;
            dom.els.qCheckbox_dChoices_inp.value = "";
            dom.els.qCheckbox_dChoices_ul.append(li);
        }
        if (event.target.id === "qCheckbox_dOk_btn") {
            const valueLis = document.querySelectorAll(".qCheckbox_d_li");
            const values = [];
            Array.from(valueLis).forEach(li => {
                values.push(li.textContent);
            })
            const q =
                {
                    category: "checkbox",
                    values: values,
                }
            addQToForm(cf, q);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })
}
