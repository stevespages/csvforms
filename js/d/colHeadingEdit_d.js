export function colHeadingEdit_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [        
                "colMenu_d"
            ]
            .includes(dom.els.colHeadingEdit_d.dataset.from)
        ) {
            dom.els.colMenu_d.dataset.from = "";
            const csvForms = cf.getCsvForms();
            const column = cf.getColumn(csvForms);
            console.log("column:", column);
            dom.els.colHeadingEdit_d_inp.value = column.heading;
        }
    })

    dom.els.colHeadingEdit_d.addEventListener("click", event => {
        if (event.target.id === "colHeadingEdit_dCancel_btn") {
            dom.changeDivTo("showForm_d", event.target.id);
        }
        if (event.target.id === "colHeadingEdit_dOk_btn") {
            const csvForms = cf.getCsvForms();
            const form = csvForms.forms[csvForms.activeIdxs.form];
            const col = form.columns[csvForms.activeIdxs.column];
            col.heading = dom.els.colHeadingEdit_d_inp.value;
            cf.setCsvForms(csvForms);
            dom.changeDivTo("showForm_d", event.target.id);
        }
    })
}
