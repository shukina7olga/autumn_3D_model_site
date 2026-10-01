import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm.js";

timer('25 september 2026')
menu()
modal()
forms()
tabs()
slider()
calc()
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})