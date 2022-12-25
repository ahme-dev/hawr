import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translation resources
const resources = {
	en: {
		translation: {
			// no need for translation
		},
	},
	ku: {
		translation: {
			Today: "ئەمڕۆ",
			Tomorrow: "بەیانی",
			Overmorrow: "دووبەیانی",

			Sunny: "هەتاو",
			"Heavy rain": "بارانی زۆر",
			"Patchy rain": "نمە باران",
			"Patchy rain possible": "بارانی کەم بەئەگەر",

			Temperature: "پلەی گەرمی",
			"Chance of rain": "ئەگەری باران",
			Date: "بەروار",

			Slemani: "سلێمانی",

			English: "ئینگلیزی",
			Kurdish: "کوردی",
			Language: "زمان",

			Hawr: "هەور",
		},
	},
};

export default i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

	interpolation: {
		escapeValue: false, // react already safes from xss
	},
});
