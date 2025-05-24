export function addCell_d(cf, dom, updateSingleUserResponseSpan) {

    dom.els.addCell_d.addEventListener("click", event => {
        if (event.target.classList.contains("orderItemsQuestionLi")) {
            const orderedItemsInp = document.querySelector("#orderedItemsInp");
            const orderedItemsP = document.querySelector("#orderedItemsP");
            const orderedItemsPSpan = document.createElement("span");
            orderedItemsPSpan.classList.add("orderedItemsPSpan");
            orderedItemsPSpan.textContent += " " + event.target.textContent;
            orderedItemsP.append(orderedItemsPSpan);
            orderedItemsInp.value = orderedItemsP.textContent;
        }
        if (event.target.classList.contains("orderedItemsPSpan")) {
            event.target.remove();
            const orderedItemsInp = document.querySelector("#orderedItemsInp");
            const orderedItemsP = document.querySelector("#orderedItemsP");
            orderedItemsInp.value = orderedItemsP.textContent;
        }
        if (event.target.id === "addCell_dCancel_btn") {
            dom.showDiv(["row_d"]);
        }
        if (event.target.id === "addCell_dOk_btn") {
            
            const formData = new FormData(dom.els.addCell_d_form);
            console.log("formData", formData)
            console.log("dom.els.addCell_d_form", dom.els.addCell_d_form)
            let userResponse = "";
            for (const value of formData.values()) {
                userResponse += value + " | ";
            }
            userResponse = userResponse.slice(0, userResponse.length - 3);
            const csvForms = cf.getCsvForms();
            const column = cf.getColumn(csvForms);
            const colIdx = csvForms.activeIdxs.column;
            const form = cf.getForm(csvForms);
            const lastUserResponseIdx = (form.columns[0].userResponses.length) - 1;
            form.columns[colIdx].userResponses.splice(
                lastUserResponseIdx,
                1,
                userResponse
            )
            cf.setCsvForms(csvForms);
            updateSingleUserResponseSpan(userResponse, colIdx);
            dom.showDiv(["row_d"]);


        }
    })

}
