import { bee_hive_records } from "../ready-made-forms/bee_hive_records.js";

const rmf = [
    bee_hive_records,
];

export function readyMadeForms_d(cf, dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [
                "mainMenu_dReadyMadeForms_btn"
            ]
            .includes(dom.els.readyMadeForms_d.dataset.from)
        ) {
            dom.els.readyMadeForms_d.dataset.from = "";
            rmf.forEach((f, fIdx) => {
                const li = document.createElement("li");
                li.textContent = f.title;
                li.classList.add("readyMadeForms_d_li")
                li.dataset.fIdx = fIdx;
                dom.els.readyMadeForms_d_ul.append(li);
            })
            dom.showDiv("readyMadeForms_d");
        }
    })

    dom.els.readyMadeForms_d.addEventListener("click", event => {
        if (event.target.classList.contains("readyMadeForms_d_li")) {
            const csvForms = cf.getCsvForms();
            csvForms.forms.push(rmf[event.target.dataset.fIdx]);
            cf.setCsvForms(csvForms);
            dom.changeDivTo("home_d", "readyMadeForms_d_li-class");
        }
    })
}

/*
function readyMadeFormsFunc() {
    const readyMadeFormsArr = [
        {
            columns: [
                {
                    heading: "Hive Name",
                    questions: [
                        {
                            category: "text",
                        }
                    ],
                    userResponses: [],
                }
            ],
            description: "A form for recording observations made during a bee hive inspection",
            fpx: "hive",
            title: "Bee Hive Records",
        }
    ]
    return readyMadeFormsArr;
}
*/
