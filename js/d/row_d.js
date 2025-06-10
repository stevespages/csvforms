export function row_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [
                "addCell_dOk_btn"
            ]
            .includes(dom.els.row_d.dataset.from)
        ) {
            dom.els.row_d.dataset.from = "";
            const csvForms = cf.getCsvForms();
            const rowIdx = csvForms.activeIdxs.row;
            const cols = cf.getColumns(csvForms);
            const spans = document.querySelectorAll(".user-response-span");
            Array.from(spans).forEach(span => {
                const col = cols[span.dataset.colIdx];
                const userResponse = col.userResponses[rowIdx];
                if (userResponse) {
                    span.textContent = " " + userResponse;
                }
            })
            dom.showDiv("row_d");
        }
        if (
            [
                "formMenu_dRow_btn"
            ]
            .includes(dom.els.row_d.dataset.from)
        ) {
            dom.els.row_d.dataset.from = "";
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);
            dom.els.row_d_h2.textContent = form.title;
            dom.els.row_d_ul.innerHTML = "";
            // show last row
            form.columns.forEach((col, idx) => {
                const colHeadingLi = document.createElement("li");
                colHeadingLi.classList.add("row_d_ul_li");
                colHeadingLi.textContent = col.heading;
                colHeadingLi.dataset.colIdx = idx;
                const userResponseSpan = document.createElement("span");
                userResponseSpan.classList.add("user-response-span");
                userResponseSpan.dataset.colIdx = idx;
                colHeadingLi.append(userResponseSpan);
                dom.els.row_d_ul.append(colHeadingLi);
            })

            dom.els.row_dRowIdx_inp.value =
                form.columns[0].userResponses.length;
            csvForms.activeIdxs.row = form.columns[0].userResponses.length - 1;
            cf.setCsvForms(csvForms);
            dom.showDiv("row_d");
        }
            if (
            [
                "addCell_dCancel_btn"
            ]
            .includes(dom.els.row_d.dataset.from)
        ) {
            dom.els.row_d.dataset.from = "";
            dom.showDiv("row_d");
        }
    });

    dom.els.row_d.addEventListener("click", event => {
        if (event.target.classList.contains("row_d_ul_li")) {
            dom.els.addCell_d.dataset.colIdx = event.target.dataset.colIdx;
            dom.changeDivTo("addCell_d", "row_d_ul_li-class");
        }

        // we should have a cancel btn. This would need to remove all the
        // last element in every form.column.userResponses array and then
        // direcct the user to home_d

        if (event.target.id === "row_dRowIdxDown_btn") {
            if (dom.els.row_dRowIdx_inp.value > 1) {
                dom.els.row_dRowIdx_inp.value = 
                    parseInt(dom.els.row_dRowIdx_inp.value) - 1;
            }
        }

        if (event.target.id === "row_dRowIdxUp_btn") {
            const csvForms = cf.getCsvForms();
            const cols = cf.getColumns(csvForms);
            if (dom.els.row_dRowIdx_inp.value < cols[0].userResponses.length) {
                dom.els.row_dRowIdx_inp.value = 
                    parseInt(dom.els.row_dRowIdx_inp.value) + 1;
            }
        }

        if (event.target.id === "row_dNewRow_btn") {
            // this should remove indexes so rows are ordered by entry order
            const csvForms = cf.getCsvForms();
            const form = cf.getForm(csvForms);

            // delete any empty rows
            deleteEmptyRows(form.columns);

            // this adds an empty row
            form.columns.forEach(col => {
                col.userResponses.push(null);
            })
            cf.setCsvForms(csvForms);

            // this removes text from user-response-spans
            const userResponseSpans =
                document.querySelectorAll(".user-response-span");
            Array.from(userResponseSpans).forEach(span => {
                span.textContent = "";
            })

            // this puts the new row number in the input box
            dom.els.row_dRowIdx_inp.value = form.columns[0].userResponses.length;
        }

        if (event.target.id === "row_dOk_btn") {
               dom.changeDivTo("home_d", event.target.id);
        }
    })
}
