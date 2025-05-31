export function qRadio_d(addQToForm, cf, dom) {
    dom.els.qRadio_d.addEventListener("click", event => {
        if (event.target.id === "qRadio_dCancel_btn") {
            dom.showDiv(["showForm_d","showForm_dInner_d"]);
        }
        if (event.target.id === "qRadio_dChoiceOk_btn") {
            if (!dom.els.qRadio_dChoices_inp.value) {
                return;
            }
            const li = document.createElement("li");
            li.classList.add("qRadio_d_li");
            li.innerHTML = dom.els.qRadio_dChoices_inp.value;
            dom.els.qRadio_dChoices_inp.value = "";
            dom.els.qRadio_dChoices_ul.append(li);
        }
        if (event.target.id === "qRadio_dOk_btn") {
            const valueLis = document.querySelectorAll(".qRadio_d_li");
            const values = [];
            Array.from(valueLis).forEach(li => {
                values.push(li.textContent);
            })
            const q =
                {
                    category: "radio",
                    values: values,
                }
            addQToForm(cf, q);
            dom.els.showForm_d.dataset.toFrom = "showForm_d formTitleEdit_d";
            document.dispatchEvent(dom.changeDiv);
        }
    })
}
