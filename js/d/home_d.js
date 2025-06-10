export function home_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [
            "deleteReally_d",
            "formMenu_d",
            "mainMenu_d",
            "showForm_d",
            "START"
            ]
            .includes(dom.els.home_d.dataset.from)
        ) {
            dom.els.home_d.dataset.from = "";
            populateHome_dForms_ul(cf, dom);
            dom.showDiv("home_d");
        }
        if (
            [
            "formMenu_dCancel_btn",
            "mainMenu_dCancel_btn",
            "row_dOk_btn"
            ]
            .includes(dom.els.home_d.dataset.from)
        ) {
            dom.els.home_d.dataset.from = "";
            dom.showDiv("home_d");
        }
    })

    dom.els.home_d.addEventListener("click", ev => {
        if (ev.target.classList.contains("home_dForms_ul_li")) {
            const csvForms = cf.getCsvForms();
            csvForms.activeIdxs.form = ev.target.dataset.formIdx;
            cf.setCsvForms(csvForms);
            dom.changeDivTo("formMenu_d", "home_dForms_ul_li-class");
        }
        if (ev.target.id === "home_dMainMenu_btn") {
            dom.changeDivTo("mainMenu_d", ev.target.id);
        }
    });

}

function populateHome_dForms_ul(cf, dom) {
    dom.els.home_dForms_ul.innerHTML = "";
    const csvForms = cf.getCsvForms();
    const forms = cf.getForms(csvForms);
    forms.forEach((form, idx) => {
        const li = document.createElement("li");
        li.textContent = form.title;
        li.classList.add("home_dForms_ul_li");
        li.dataset.formIdx = idx;
        dom.els.home_dForms_ul.append(li);
    })
}
