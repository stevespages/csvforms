export function home_d(cf, dom){

    dom.els.home_d.addEventListener("click", event => {
        if (event.target.classList.contains("home_dForms_ul_li")) {
            const csvForms = cf.getCsvForms();
            csvForms.activeIdxs.form = event.target.dataset.formIdx;
            cf.setCsvForms(csvForms);
            document.dispatchEvent(dom.customEvents.formMenu_dEvent);
            dom.showDiv(["formMenu_d"]);
        }
        if (event.target.id === "home_dMainMenu_btn") {
            dom.showDiv(["mainMenu_d"]);
        }
    });

}
