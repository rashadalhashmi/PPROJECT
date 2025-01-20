const savedLang = localStorage.getItem("lang") || "ar";
localStorage.setItem("lang", savedLang);

const selectLangRadios = document.querySelectorAll('input[name="radio-examples"]');
const selectLangRadiosMobile = document.querySelectorAll('input[name="radio-examples-mobile"]');

// Select FAQ icons
const icon_close = document.querySelectorAll('.faq .faq-list .icon-close');
const icon_show = document.querySelectorAll('.faq .faq-list .icon-show');

// Set the saved language on page load for both desktop and mobile
document.querySelector(`#example-19-${savedLang === "ar" ? 1 : 2}`).checked = true;
document.querySelector(`#example-mobile-19-${savedLang === "ar" ? 1 : 2}`).checked = true;

$(document).ready(function () {
    setLanguage(savedLang);
});

// Combine desktop and mobile radio buttons
const allLangRadios = [...selectLangRadios, ...selectLangRadiosMobile];
allLangRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
        const selectedLang = event.target.value;

        // Synchronize desktop and mobile radio buttons
        syncRadios(selectedLang);

        // Save the language in localStorage and apply changes
        localStorage.setItem("lang", selectedLang);
        setLanguage(selectedLang);
    });
});

// Synchronize both desktop and mobile radio buttons
const syncRadios = (selectedLang) => {
    document.querySelector(`#example-19-${selectedLang === "ar" ? 1 : 2}`).checked = true;
    document.querySelector(`#example-mobile-19-${selectedLang === "ar" ? 1 : 2}`).checked = true;
};

// Function to update the language dynamically
const setLanguage = (language) => {
    debugger;
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-lang');
        element.textContent = translations[language][translationKey];
    });

    // Adjust text alignment and direction
    $("body").css("text-align", language === "ar" ? "right" : "left");
    $("html").css("direction", language === "ar" ? "rtl" : "ltr");

    // Adjust FAQ icon positions
    icon_close.forEach((close_i) => {
        close_i.style.right = language === "ar" ? "auto" : "0";
        close_i.style.left = language === "ar" ? "0" : "auto";
    });

    icon_show.forEach((show_i) => {
        show_i.style.right = language === "ar" ? "auto" : "0";
        show_i.style.left = language === "ar" ? "0" : "auto";
    });

    // Toggle language-specific classes for accordion buttons
    if (language === "ar") {
        $(".accordion-button").addClass("ar-language").removeClass("en-language");
    } else {
        $(".accordion-button").addClass("en-language").removeClass("ar-language");
    }
};
