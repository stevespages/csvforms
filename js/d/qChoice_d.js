export function qChoice_d(addQToForm, cf, dom, showForm) {
    dom.els.qChoice_d.addEventListener("click", event => {
        if (event.target.id === "qChoice_dCancel_btn") {
            dom.showDiv(["showForm_d","showForm_dInner_d"]);
        }
        if (event.target.id === "qChoice_dChoiceOk_btn") {
            const li = document.createElement("li");
            li.classList.add("qChoice_d_li");
            li.innerHTML = dom.els.qChoice_d_inp.value;
            dom.els.qChoice_d_inp.value = "";
            dom.els.qChoice_dChoices_ul.append(li);
        }
        if (event.target.id === "qChoice_dOk_btn") {
            const valueLis = document.querySelectorAll(".qChoice_d_li");
            const values = [];
            Array.from(valueLis).forEach(li => {
                values.push(li.textContent);
            })
            const q =
                {
                    category: "choice",
                    type: dom.els.qChoice_dOk_btn.dataset.type,
                    values: values,
                }
            addQToForm(cf, q);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })
}
