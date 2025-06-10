export function showForm_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [        
                "changeColOrder_d",
                "colHeadingEdit_d",
                "createColHeading_d",
                "createFormTitle_d",
                "formFpx_d", 
                "deleteReally_d",
                "formDescription_d",
                "formMenu_dEdit_btn",
                "formTitleEdit_d",
                "qCheckbox_d",
                "qDate_d",
                "qOrderItems_d",
                "qRadio_d",
                "qText_dOk_btn"
            ]
            .includes(dom.els.showForm_d.dataset.from)
        ) {
            dom.els.showForm_d.dataset.from = "";
            showForm(cf, dom);
            dom.showDiv("showForm_d");
        }
    })

    dom.els.showForm_d.addEventListener("click", event => {
        if (event.target.classList.contains("showForm_dColumn_p")) {
            dom.els.colMenu_d.dataset.colIdx = event.target.dataset.colIdx;
            dom.changeDivTo("colMenu_d", "showForm_dColumn_p-class");         
        }
        if (event.target.classList.contains("showForm_dDescription_p")) {
            dom.changeDivTo("formDescription_d", thisD);
        }
        if (event.target.classList.contains("showForm_dFpx_p")) {
            dom.changeDivTo("formFpx_d", thisD);
        }
        if (event.target.classList.contains("showForm_dTitle_p")) {
            dom.changeDivTo("formTitleEdit_d", thisD);
        }
        if (event.target.id === "showForm_dChangeColOrder_btn") {
            const csvForms = cf.getCsvForms();
            const columns = cf.getColumns(csvForms);
            dom.els.changeColOrder_d_ul.innerHTML = "";
            columns.forEach((column, colIdx) => {
                const li = document.createElement("li");
                li.textContent = "column " + colIdx + ": " + column.heading;
                li.classList.add("changeColOrder_d_ul_li");
                li.dataset.colIdx = colIdx;
                dom.els.changeColOrder_d_ul.append(li);
                dom.changeDivTo("changeColOrder_d", event.target.id);
            })
        }
        if (event.target.id === "showForm_dEnd_btn") {
            dom.changeDivTo("home_d", event.target.id);
        }
        if (event.target.id === "showForm_dNewCol_btn") {
            dom.changeDivTo("createColHeading_d", event.target.id);
        }
        if (event.target.id === "showForm_dUploadCsv_btn") {
            dom.els.uploadCsv_dFile_inp.value = "";
            dom.els.uploadCsv_dIncludeRowsChkbx_inp.checked = false;
            dom.changeDivTo("uploadCsv_d", event.target.id);
        }
    })

    }

    function showForm(cf, dom) {

        const csvForms = cf.getCsvForms();
        const form = cf.getForm(csvForms);
        console.log("form:", form)
        dom.els.showForm_dInner_section.innerHTML = "";
        const titleP = document.createElement("p");
        titleP.classList.add("showForm_dTitle_p");
        titleP.innerHTML = "title: " + form.title;
        const descriptionP = document.createElement("p");
        descriptionP.classList.add("showForm_dDescription_p");
        descriptionP.innerHTML = "description: " + form.description;
        const fpxP = document.createElement("p");
        fpxP.classList.add("showForm_dFpx_p");
        fpxP.innerHTML = "file name prefix: " + form.fpx;
        dom.els.showForm_dInner_section.append(titleP, fpxP, descriptionP);
        form.columns.forEach((column, i) => {
            const columnP = document.createElement("p");
            columnP.classList.add("showForm_dColumn_p");
            columnP.dataset.colIdx = i;
            columnP.innerHTML = "column " + parseInt(i + 1) + " " + column.heading;
            dom.els.showForm_dInner_section.append(columnP);
            column.questions.forEach(question => {
                const questionP = document.createElement("p");
                questionP.innerHTML = JSON.stringify(question);
                dom.els.showForm_dInner_section.append(questionP);
            })
        })
    }
