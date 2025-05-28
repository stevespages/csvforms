export function home_d(cf, dom){

    dom.els.home_d.addEventListener("click", ev => {
        if (ev.target.classList.contains("home_dForms_ul_li")) {
            const csvForms = cf.getCsvForms();
            csvForms.activeIdxs.form = ev.target.dataset.formIdx;
            cf.setCsvForms(csvForms);
            dom.els.formMenu_d.dataset.toFrom = "formMenu_d home_d";
            document.dispatchEvent(dom.changeDiv);
            //dom.showDiv(["formMenu_d"]);
        }
        if (ev.target.id === "home_dMainMenu_btn") {
            dom.showDiv(["mainMenu_d"]);
        }
    });

}
