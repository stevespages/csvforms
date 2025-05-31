export function home_d(cf, dom){

    document.addEventListener("changeDiv", () => {
        if (
            dom.els.home_d.dataset.toFrom === "home_d START" || 
            dom.els.home_d.dataset.toFrom === "home_d mainMenu_d" ||
            dom.els.home_d.dataset.toFrom === "home_d deleteReally_d" ||
            dom.els.home_d.dataset.toFrom === "home_d showForm_d"
        ) {
            dom.els.home_d.dataset.toFrom = "";
            populateHome_dForms_ul(cf, dom);
            dom.showDiv("home_d");
        }
    })

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
