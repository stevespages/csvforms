export function uploadCsv_d(cf, dom) {

    dom.els.uploadCsv_d.addEventListener("click", event => {

        if (event.target.id === "uploadCsv_dCancel_btn") {
            dom.showDiv(["showForm_d", "showForm_dInner_d"]);
        }

        if (event.target.id === "uploadCsv_dOk_btn") {
            if (dom.els.uploadCsv_dFile_inp.files[0]) {
                const csvFile = dom.els.uploadCsv_dFile_inp.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", () => {


                    const csvLines = reader.result.split(/\r?\n/);
                    if (csvLines[csvLines.length - 1] === "") {
                        csvLines.splice(csvLines.length - 1, 1);
                    }
                    console.log("csvLines", csvLines)
                    const colHeadings = csvLines[0].split(",");
                    const colsFromCsv = [];
                    colHeadings.forEach(colHeading => {
                        colsFromCsv.push(
                            // same object as used in createColHeading_d.js
                            {
                                heading: colHeading,
                                questions: [],
                                userResponses: [],
                            }
                        )
                    })
                    if (uploadCsv_dIncludeRowsChkbx_inp) {
                        addRows(cf, colsFromCsv, csvLines, dom)
                    }
                    const csvForms = cf.getCsvForms();
                    const columns = cf.getColumns(csvForms);
                    colsFromCsv.forEach(colFromCsv => {
                        columns.push(colFromCsv);
                    })
                    cf.setCsvForms(csvForms);
                    dom.els.showForm_d.dataset.toFrom = "showForm_d uploadCsv_d";
                    document.dispatchEvent(dom.changeDiv);
                })
                reader.readAsText(csvFile);
            } else {
                dom.showDiv(["showForm_d", "showForm_dInner_d"]);
            }
        }

    })

}

function addRows(cf, colsFromCsv, csvLines, dom) {
    console.log("colsFromCsv", colsFromCsv)
    for (let i = 1; i < csvLines.length; i++) {
        console.log(csvLines[i].split(","))
        colsFromCsv.forEach((colFromCsv, colIdx) => {
            colsFromCsv[colIdx].userResponses.push(csvLines[i].split(",")[colIdx]);
        })
    }
}
