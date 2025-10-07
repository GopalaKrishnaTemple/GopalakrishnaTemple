//translate logic here

// If you're using <a onclick="changeLanguage('KAN')">, map to lang code
function changeLanguage(displayCode) {
  const langMap = {
    ENG: "en",
    KAN: "kn",
  };
  const langCode = langMap[displayCode];
  if (langCode) {
    loadLanguage(langCode);
  }
}

const buttons = document.querySelectorAll("button");
const elements = document.querySelectorAll("[data-key]");

// Helper to get nested value from object using dot notation
function getNestedTranslation(obj, keyPath) {
  return keyPath.split(".").reduce((acc, key) => acc?.[key], obj);
}

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

    // Optional: update globe language label
    const langMap = {
      en: "ENG",
      kn: "KAN",
    };
    document.getElementById("selectedLang").textContent =
      langMap[langCode] || langCode.toUpperCase();
  } catch (err) {
    console.error("Error loading translation:", err);
  }
}

// Language buttons
document
  .getElementById("enBtn")
  ?.addEventListener("click", () => loadLanguage("en"));
document
  .getElementById("knBtn")
  ?.addEventListener("click", () => loadLanguage("kn"));

// Load default language
loadLanguage("en");
