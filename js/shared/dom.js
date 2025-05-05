export const dom = {

    els: {},

    consoleLogEls: function() {
        console.log("***********");
        console.log("dom.els:");
        /*
        Object.keys(this.els).sort().forEach(key => {
            const spaces = generateSpacesFromUnderscores(key);
            console.log(spaces,key);
        });
        */

        for (const [key, value] of Object.entries(this.els)) {
            const spaces = generateSpacesFromUnderscores(key);
            if (value.dataset.codeComment) {
                console.log(spaces, key, "//" + value.dataset.codeComment);
            } else {
                console.log(spaces,key);
            }
        }
       
        console.log("***********");
        function generateSpacesFromUnderscores(string) {
            const numberOfUnderscores = string.split("_").length - 1;
            let spaces = "";
            for (let i = 0; i < numberOfUnderscores; i++) {
                spaces += "  ";
            };
            return spaces;
        }
    },

    createElVars: function () {
        const ids = document.querySelectorAll('[id]')
        Array.from(ids).forEach(el => {
            this.els[toCamelCase(el.id)] = el;
        });
        // this function converts hyphenated names to camel case names
        function toCamelCase(hypenatedName){
             return hypenatedName.replace(
                /-([a-z])/g,
                // hyphen (first part of the match) is not used used
                function (hyphen, letterAfterHyphen) {
                    return letterAfterHyphen.toUpperCase();
                }
            );
        }
    },
    
    showDiv: function (divsToShow) {
        Object.keys(this.els).forEach(elKey => {
            if (this.els[elKey].tagName === "DIV") {
                this.els[elKey].classList.add("hide");
            }
        })
        divsToShow.forEach(divToShow => {
            this.els[divToShow].classList.remove("hide");
        })
    }
}
