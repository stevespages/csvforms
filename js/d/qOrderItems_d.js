export function qOrderItems_d(addQToForm, cf, dom, showForm) {

    dom.els.qOrderItems_d.addEventListener("click", event => {
        if (event.target.id === "qOrderItems_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
        if (event.target.id === "qOrderItems_dOrderItemOk_btn") {
            const li = document.createElement("li");
            li.classList.add("qOrderItems_d_li");
            li.innerHTML = dom.els.qOrderItems_d_inp.value;
            dom.els.qOrderItems_d_inp.value = "";
            dom.els.qOrderItems_d_ul.append(li);
        }
        if (event.target.id === "qOrderItems_dOk_btn") {
            const valueLis = document.querySelectorAll(".qOrderItems_d_li");
            const values = [];
            Array.from(valueLis).forEach(li => {
                values.push(li.textContent);
            })
            const q =
                {
                    category: "orderItems",
                    values: values,
                }
            addQToForm(cf, q);
            showForm(cf, dom);
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }
    })

}
