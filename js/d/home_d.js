export function home_d(cf, dom, makeCsv){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            const csvForms = cf.getCsvForms();
            csvForms.activeIdxs.form = event.target.dataset.formIdx;
            cf.setCsvForms(csvForms);
            addHrefToEmailRows(cf, dom, makeCsv);
            const formName = event.target.textContent;
            dom.els.formMenu_d_h2.textContent = formName;
            dom.showDiv(["formMenu_d"]);
        }
        if (event.target.id === "home_dMainMenu_btn") {
            dom.showDiv(["mainMenu_d"]);
        }
    });

}

function addHrefToEmailRows(cf, dom, makeCsv) {
    const form = cf.getForm();
    const subject = form.title + " | (" + form.formFileNamePrefix + ")";
    const body = makeCsv(cf, "for email");
    const href = "mailto:?subject=" + subject + "&body=" + body;
    dom.els.formMenu_dEmailRows_btn_a.setAttribute("href", href);
}
