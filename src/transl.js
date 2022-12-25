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
			"Partly cloudy": "هەندێک هەور",
			Cloudy: "هەور",
			Overcast: "بەتەواوی هەور",
			"Patchy light rain": "بارانی کەم",
			"Patchy rain": "بارانی کەم",
			"light rain": "بارانی کەم",
			"Moderate rain at times": "باران",
			"Moderate rain": "باران",
			"Heavy rain at times": "بارانی زۆر",
			"Heavy rain": "بارانی زۆر",
			"Patchy light snow": "بەفری کەم",
			"Light snow": "بەفری کەم",
			"Patchy moderate snow": "بەفر",
			"Moderate snow": "بەفر",
			"Patchy heavy snow": "بەفری زۆر",
			"Heavy snow": "بەفری زۆر",
			Mist: "تەم",

			Temperature: "پلەی گەرمی",
			"Chance of rain": "ئەگەری باران",
			Date: "بەروار",

			Slemani: "سلێمانی",

			English: "ئینگلیزی",
			Kurdish: "کوردی",
			Language: "زمان",
			Theme: "ڕەنگ",
			Options: "گۆڕانکاری",

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
