export function changeColOrder_d(cf, dom) {

    dom.els.changeColOrder_d.addEventListener("click", event => {
        if (event.target.classList.contains("changeColOrder_d_ul_li")) {
            if (document.querySelector("#changeColOrder_dDialog_p")) {
                document.querySelector("#changeColOrder_dDialog_p").remove();
            }
            const targetColIdx = event.target.dataset.colIdx;
            const dialogP = document.createElement("p");
            dialogP.setAttribute("id", "changeColOrder_dDialog_p");
            dialogP.textContent = "place before column: ";
            const inpForBeforeCol = document.createElement("input");
            inpForBeforeCol.setAttribute("id", "targetColIdx_dInpForBeforeCol_inp");
            inpForBeforeCol.setAttribute("type", "text");
            dialogP.append(inpForBeforeCol);
            const dialogPOkBtn = document.createElement("button");
            dialogPOkBtn.textContent = "ok";
            dialogPOkBtn.setAttribute("id", "changeColOrder_dDialogPOk_btn");
            dialogPOkBtn.dataset.targetColIdx = targetColIdx;
            dialogP.append(dialogPOkBtn);
            const dialogPCancelBtn = document.createElement("button");
            dialogPCancelBtn.textContent = "cancel";
            dialogPCancelBtn.setAttribute("id", "changeColOrder_dDialogPCancel_btn");
            dialogP.append(dialogPCancelBtn);
            event.target.append(dialogP);
        }

        if (event.target.id === "changeColOrder_dDialogPCancel_btn") {
            const dialogP = document.querySelector("#changeColOrder_dDialog_p");
            dialogP.remove();
        }

        if (event.target.id === "changeColOrder_dDialogPOk_btn") {
            const targetColIdx = event.target.dataset.targetColIdx;
            const inpForBeforeCol =
                document.querySelector("#targetColIdx_dInpForBeforeCol_inp");
            const beforeColIdx = inpForBeforeCol.value;
            const csvForms = cf.getCsvForms();
            const columns = cf.getColumns(csvForms);
            const targetCol = columns[targetColIdx];
            columns.splice(targetColIdx, 1, "x");
            columns.splice((beforeColIdx), 0, targetCol);
            const newColumns = columns.filter(column => column !== "x");
            columns.splice(0, columns.length);
            newColumns.forEach(newColumn => {
                columns.push(newColumn);
            })
            cf.setCsvForms(csvForms);
            dom.els.changeColOrder_d_ul.innerHTML = "";
            columns.forEach((column, colIdx) => {
                const li = document.createElement("li");
                li.textContent = "column " + colIdx + ": " + column.heading;
                li.classList.add("changeColOrder_d_ul_li");
                li.dataset.colIdx = colIdx;
                dom.els.changeColOrder_d_ul.append(li);
            })
        }

        if (event.target.id === "changeColOrder_dEnd_btn") {
            dom.els.showForm_d.dataset.from = "showForm_d changeColOrder_d";
            document.dispatchEvent(dom.changeDiv);
        }

    })

}
