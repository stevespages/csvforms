export function viewAllRows_d(dom) {
    dom.els.viewAllRows_d.addEventListener("click", event => {
        if (event.target.id === "viewAllRows_dCancel_btn") {
            dom.showDiv(["home_d"]);
        }
    })
}
