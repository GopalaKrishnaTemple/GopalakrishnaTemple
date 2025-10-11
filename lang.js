// Map display label to language code
const langMap = {
  ENG: "en",
  KAN: "kn",
};

// Reverse map for setting label near globe
const reverseLangMap = {
  en: "ENG",
  kn: "KAN",
};

// Elements to translate
const elements = document.querySelectorAll("[data-key]");

// Helper: Get nested translation via dot notation
function getNestedTranslation(obj, keyPath) {
  return keyPath.split(".").reduce((acc, key) => acc?.[key], obj);
}

// Load and apply translations
async function loadLanguage(langCode) {
  try {
    const response = await fetch(`${langCode}.json`);
    const translations = await response.json();

    elements.forEach((el) => {
      const key = el.getAttribute("data-key");
      const translation = getNestedTranslation(translations, key);
      if (translation) {
        el.textContent = translation;

        // Add Kannada font class if needed
        if (langCode === "kn") {
          el.classList.add("kannada");
        } else {
          el.classList.remove("kannada");
        }
      }
    });

    // Update language label near globe icon
    const label = reverseLangMap[langCode] || langCode.toUpperCase();
    document.getElementById("selectedLang").textContent = label;
  } catch (err) {
    console.error("Error loading translation:", err);
  }
}

// Triggered from dropdown onclick handlers (like in <a onclick="changeLanguage('KAN')">)
function changeLanguage(displayCode) {
  const langCode = langMap[displayCode];
  if (langCode) {
    loadLanguage(langCode);
  }
}

// Load default language on page load
loadLanguage("en");
