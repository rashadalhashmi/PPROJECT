

const savedLang = localStorage.getItem("lang") || "ar";
localStorage.setItem("lang", savedLang);

const selectLangRadios = document.querySelectorAll('input[name="radio-examples"]');
const icon_close = document.querySelectorAll('.faq .faq-list .icon-close');
const icon_show = document.querySelectorAll('.faq .faq-list .icon-show');


document.querySelector(`#example-19-${savedLang === "ar" ? 1 : 2}`).checked = true;

$(document).ready(function() {
    setLanguage(savedLang);
});

selectLangRadios.forEach((radio) => {    
    radio.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        localStorage.setItem("lang", selectedLang);
        setLanguage(selectedLang);
    });
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-lang]");
    
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-lang');
        element.textContent = translations[language][translationKey];
    });
    
    $("body").css("text-align", language === "ar" ? "right" : "left");
    $("html").css("direction", language === "ar" ? "rtl" : "ltr");

    icon_close.forEach((close_i) => {
        close_i.style.right = language === "ar" ? "auto" : "0";
        close_i.style.left = language === "ar" ? "0" : "auto";
    });

    icon_show.forEach((show_i) => {
        show_i.style.right = language === "ar" ? "auto" : "0";
        show_i.style.left = language === "ar" ? "0" : "auto";
    });
    

    if (language === "ar") {
        $(".accordion-button").addClass("ar-language").removeClass("en-language");
    } else {
        $(".accordion-button").addClass("en-language").removeClass("ar-language");
    }
};