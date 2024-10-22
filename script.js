// Script pour changer de langue
function changeLanguage() {
    var langSelect = document.getElementById('language-select');
    var selectedLang = langSelect.value;
    window.location.href = selectedLang;
}

// Script pour afficher la langue actuelle dans la liste déroulante
window.onload = function() {
    var currentURL = window.location.href;
    var langSelect = document.getElementById('language-select');
    
    if (currentURL.includes('index_en.html')) {
        langSelect.value = 'index_en.html';  // Sélectionne English
    } else if (currentURL.includes('index_fr.html')) {
        langSelect.value = 'index_fr.html';  // Sélectionne Français
    }
};