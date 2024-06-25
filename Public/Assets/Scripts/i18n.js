document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', changeLanguage);

    function changeLanguage() {
        const selectedLanguage = languageSelect.value;
        fetch(`../locales/${selectedLanguage}.json`)
            .then(response => response.json())
            .then(translations => {
                document.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (translations[key]) {
                        element.textContent = translations[key];
                    }
                });
            });
    }

    // Set default language
    changeLanguage();
});
