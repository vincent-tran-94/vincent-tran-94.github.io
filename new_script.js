// Script pour changer de langue
function changeLanguage() {
    // Enregistre la position de défilement avant de changer la langue
    var scrollPosition = window.scrollY || window.pageYOffset;
    localStorage.setItem('scrollPosition', scrollPosition);
    
    var langSelect = document.getElementById('language-select');
    var selectedLang = langSelect.value;
    window.location.href = selectedLang;
}

// Script pour afficher la langue actuelle dans la liste déroulante et restaurer la position de défilement
window.onload = function() {
    var currentURL = window.location.href;
    var langSelect = document.getElementById('language-select');
    
    // Sélection de la langue dans la liste déroulante
    if (currentURL.includes('index_en.html')) {
        langSelect.value = 'index_en.html';  // Sélectionne English
    } else if (currentURL.includes('index.html')) {
        langSelect.value = 'index.html';  // Sélectionne Français
    }

    // Restauration de la position de défilement
    var savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        window.scrollTo(0, savedScrollPosition);
        localStorage.removeItem('scrollPosition'); // Nettoie la position de défilement après l'avoir utilisée
    }
};