/*!
 * Lang-Late v0.0.1.0
 * Copyright 2017 Mike Eling
 * MIT License (https://raw.githubusercontent.com/DrFR0ST/virtualit-website/master/LICENSE)
 */

var currentLanguage = "ENG";

$.get("http://ipinfo.io", function (response) {
  currentLanguage = response.country;
  if(currentLanguage == null) { currentLanguage = "ENG"; }
  currentLanguage = currentLanguage.toUpperCase();
  changeLanguage(currentLanguage);
}, "jsonp");


var languageMap = {
  ENG: {
  	welcome: "welcome",

  	explore: "Explore",

	description: "We will take care of your IT infrastructure",
	slogan1: "Your homepage is important, don't forget to take care of it.",
	slogan2: "Don't worry about your software! We will do it for you.",
	slogan3: "Our engineers are ready to create software for you.",
	slogan4: "We got the right skills you require to deliver the goods.",
	slogan5: "We love your projects same as we love our own.",

	ourservices: "Our Services",
	ourservicesH1: "Need a professional website?",
	ourservicesH2: "Need someone to take care of your website?",
	ourservicesH3: "Got any questions?",
    ourservicesH4: "Need help setting up a blog or shop?",
	ourservicesH5: "Need a hosting?",
	ourservicesS1: "We will create a unique website/application for you, adjusted to your needs and to the global standards.",
	ourservicesS2: "We will take care of your infrastructure so you don't have to worry about it ever again.",
	ourservicesS3: "We can answer your questions and help you reach your goals from bottom to top.",
    ourservicesS4: "We will install and configure your CMS system.",
	ourservicesS5: "We will host your website.",

	benefits: "Benefits",
	benefitsH1: "Development",
	benefitsH2: "Servicing",
	benefitsH3: "Consulting",
    benefitsH4: "CMS Setup",
	benefitsH5: "WebHosting",
	benefitsH1S1: "Optimized and responsive software",
	benefitsH1S2: "Modern look based on Material Design principles",
	benefitsH1S3: "Uniquely created for customer specifications",
	benefitsH2S1: "Infrastructure under 24/7 observation",
	benefitsH2S2: "Solving all issues",
	benefitsH3S1: "Professional IT support",
	benefitsH3S2: "Support in English, German and Polish language",
	benefitsH4S1: "Installation of Blog, Shop or other CMS system",
    benefitsH4S2: "Wordpress, PrestaShop and many more included",
    benefitsH5S1: "24/7 uptime of your website",
	benefitsH5S2: "Super hosting",

    benefitsH1Text: "Some text here...",
    benefitsH2Text: "Some text here...",
    benefitsH3Text: "Some text here...",
    benefitsH4Text: "Some text here...",
    benefitsH5Text: "Some text here...",

	ourclients: "Our Clients",

    ourprojects: "Our Projects",

	getintouch: "Get in Touch",
	getintouchH1: "Send Message",
	getintouchH2: "Contact",
	getintouchH3: "Social Media",
	getintouchH1S1: "Your Name",
	getintouchH1S2: "Email Address",
	getintouchH1S3: "Phone",
	getintouchH1S4: "Company",
	getintouchH1S5: "Message",

	agree: "Agree",
	send: "Send",
	close: "Close",
    pricing: "Check pricing",
	learnmore: "Learn More",
	language: "Language",
    toast: "Language changed",
    postajax: "Thank you!<br>We will review your request as soon as possible.",

    cookieDeclaration: "By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed. By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed.",
    cookieDeclarationTitle: "Cookies Declaration",
    cookieDeclarationShort: "By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed.",
  },
  DE: {
  	welcome: "willkommen",

  	explore: "Erkunden",

	description: "Wir kümmern uns um Ihre IT Infrastruktur",
	slogan1: "Ihre Homepage ist wichtig, vergessen Sie nicht, sich darum zu kümmern.",
	slogan2: "Machen Sie sich keine Sorgen um ihr Software! Wir werden es für Sie tun.",
	slogan3: "Unsere Ingenieure sind bereit, Software für Sie zu erstellen.",
	slogan4: "Wir haben die richtigen Fähigkeiten, die Sie benötigen, um ihr Produkt zu liefern.",
	slogan5: "Wir lieben Ihre Projekte genauso wie wir unsere eigenen lieben.",

	ourservices: "Unsere Dienstleistungen",
	ourservicesH1: "Brauchen Sie eine professionelle Website?",
	ourservicesH2: "Brauchen Sie jemanden, der sich um Ihre Website kümmert?",
	ourservicesH3: "Haben Sie Fragen?",
	ourservicesH4: "Brauchen Sie Hilfe bei der Einrichtung eines Blogs oder Shops?",
    ourservicesH5: "Need a hosting?",
    ourservicesS1: "Wir erstellen für Sie eine einzigartige Website / Anwendung, die auf Ihre Bedürfnisse und die globalen Standards abgestimmt ist.",
    ourservicesS2: "Wir kümmern uns um Ihre Infrastruktur, damit Sie sich nicht mehr darum kümmern müssen.",
    ourservicesS3: "Wir können Ihre Fragen beantworten und Ihnen helfen, Ihre Ziele von unten nach oben zu erreichen.",
    ourservicesS4: "Wir installieren und konfigurieren Ihr CMS-System.",
    ourservicesS5: "We will host your website.",

    benefits: "Vorteile",
    benefitsH1: "Entwicklung",
    benefitsH2: "Wartung",
    benefitsH3: "Beratung",
    benefitsH4: "CMS Setup",
    benefitsH5: "WebHosting",
	benefitsH1S1: "Optimierte und responsive Software",
	benefitsH1S2: "Modernes Aussehen basierend auf Material Design Prinzipien",
	benefitsH1S3: "Einzigartig für Kundenspezifikationen erstellt",
	benefitsH2S1: "Infrastruktur unter 24/7 Beobachtung",
	benefitsH2S2: "Alle Probleme los werden",
	benefitsH3S1: "Professionelle IT-Unterstützung",
	benefitsH3S2: "Unterstützung in englischer, deutscher und polnischer Sprache",
	benefitsH4S1: "Installation von Blog, Shop oder anderen CMS Systemen",
	benefitsH4S2: "Wordpress, PrestaShop und viele mehr enthalten",
    benefitsH5S1: "24/7 uptime of your website",
    benefitsH5S2: "Super hosting",

    benefitsH1Text: "Some text here...",
    benefitsH2Text: "Some text here...",
    benefitsH3Text: "Some text here...",
    benefitsH4Text: "Some text here...",
    benefitsH5Text: "Some text here...",

	ourclients: "Unsere Kunden",
	
	ourprojects: "Unsere Projekte",

	getintouch: "Get in Touch",
	getintouchH1: "Nachricht senden",
	getintouchH2: "Kontakt",
	getintouchH3: "Social Media",
	getintouchH1S1: "Ihr Name",
	getintouchH1S2: "Email Addresse",
	getintouchH1S3: "Telefon",
	getintouchH1S4: "Unternehmen",
	getintouchH1S5: "Nachricht",
	
	agree: "Akzeptieren",
	send: "Senden",
	close: "Schließen",
	pricing: "Check pricing",
	learnmore: "Erfahren Sie mehr",
	language: "Sprache",
    toast: "Sprache geändert",
	postajax: "Danke! <br> Wir werden Ihre Anfrage so schnell wie möglich überprüfen.",

    cookieDeclaration: "By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed. By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed.",
    cookieDeclarationTitle: "Cookies Declaration",
    cookieDeclarationShort: "By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed.",
  },
  PL: {
  	welcome: "witaj",

  	explore: "Odkryj",

	description: "Zadbamy o Twoją infrastrukturę IT",
	slogan1: "Twoja strona jest ważna, nie zapomnij o nią zadbać.",
	slogan2: "Nie martw się o swoje oprogramowanie! Pomartwimy sie za Ciebie.",
	slogan3: "Nasi inżynierowie są gotowi do tworzenia oprogramowania dla Ciebie.",
	slogan4: "Mamy odpowiednie umiejętności, których potrzebujesz, aby dostarczyć towar wysokiej jakosci.",
	slogan5: "Kochamy Twoje projekty tak samo, jak kochamy swoje wlasne.",

	ourservices: "Nasze Usługi",
	ourservicesH1: "Profesjonalne strony internetowe",
	ourservicesH2: "Opieka nad Twoją witryną",
	ourservicesH3: "Konsultacje",
    ourservicesH4: "Konfiguracja silników stron",
	ourservicesH5: "Hosting WWW",
	ourservicesS1: "Stworzymy dla Ciebie unikalną stronę internetową, dostosowaną do Twoich potrzeb oraz spełniającą aktualne standardy.",
	ourservicesS2: "Zadbamy o Twoją witrynę, będziemy do Twojej dyspozycji w kwestii wszelkich zmian lub poprawek na Twoje żądanie.",
	ourservicesS3: "Odpowiemy na Twoje pytania i doradzimy Ci jak osiągnąć obrane przez Ciebie cele w dziedzinie informatyki.",
	ourservicesS4: "Zainstalujemy i skonfigurujemy Twój blog, sklep internetowy oraz inne skrypty oparte na silnikach CMS.",
	ourservicesS5: "Oferujemy hosting Twojej witryny na naszym serwerze. Gwarantujemy wysoką dostępność usługi oraz stabilność jej działania.",

	benefits: "Korzyści",
	benefitsH1: "Rozwój",
	benefitsH2: "Serwisowanie",
	benefitsH3: "Wsparcie",
	benefitsH4: "Konfiguracja",
	benefitsH1S1: "Zoptymalizowane i responsywne oprogramowanie",
	benefitsH1S2: "Nowoczesny wygląd oparty na zasadach Material Design",
	benefitsH1S3: "Indywidualnie stworzony dla potrzeb klienta",
	benefitsH2S1: "Monitoring Twojej infrastruktury 24/7",
	benefitsH2S2: "Szybka reakcja i naprawa występujących błędów",
	benefitsH3S1: "Profesjonalne wsparcie informatyczne",
	benefitsH3S2: "Pomoc w języku angielskim, niemieckim i polskim",
	benefitsH4S1: "Instalacja i konfiguracja bloga, sklepu lub innego systemu CMS",
	benefitsH4S2: "Wordpress, PrestaShop i wiele innych w ofercie",
	benefitsH5: "Hosting WWW", 
	benefitsH5S1: "Dostępność Twojej witryny 24/7",
	benefitsH5S2: "Zabezpieczenie przed atakami typu DoS/DDoS",

    benefitsH1Text: "Some text here...",
    benefitsH2Text: "Some text here...",
    benefitsH3Text: "Some text here...",
    benefitsH4Text: "Some text here...",
    benefitsH5Text: "Some text here...",

	ourclients: "Nasi klienci",
	
	ourprojects: "Nasze realizacje",

	getintouch: "Bądź w kontakcie",
	getintouchH1: "Wyślij wiadomość",
	getintouchH2: "Kontakt",
	getintouchH3: "Media społecznościowe",
	getintouchH1S1: "Imię",
	getintouchH1S2: "Adres Email",
	getintouchH1S3: "Telefon",
	getintouchH1S4: "Firma",
	getintouchH1S5: "Wiadomość",

	agree: "Zgadzam się",
	send: "Wyślij",
	close: "Zamknij",
	pricing: "Check pricing",
	learnmore: "Dowiedz się więcej",
	language: "Język",

    toast: "Język został zmieniony",
	postajax: "Dziękujemy!<br>Odpowiemy na Twoją wiadomość jak najszybciej!",

    cookieDeclaration: "Kontynuując korzystanie z witryny bez blokowania plików cookie w ustawieniach przeglądarki, użytkownik wyraża zgodę na umieszczenie wyżej wymienionych plików cookie.",
    cookieDeclarationTitle: "Deklaracja Cookies",
    cookieDeclarationShort: "Korzystając z witryny bez blokowania plików cookie, użytkownik wyraża zgodę na wykorzystywanie ich przez naszą witrynę.",
  },
  FR: {
    welcome: "Bienvenue",

    explore: "Explorer",
  }
}; 

function changeLanguage(language) {
  if(!languageMap.hasOwnProperty(language)) return;
  var langData = languageMap[language];

  $('.lang-late').each(function(index) {
    var langKey = this.dataset.langKey;
    var value = langData[langKey];
    if(value == null) value = languageMap["ENG"][langKey];
    $(this).html(value);
    currentLanguage = language;


  });

    $('.lang-trigger').each(function(i) {
    	$(this).removeClass("disabled");
      	$(this).find(".material-icons").html("");

      	if(this.dataset.language == language) {	    
      		$(this).addClass("disabled");
    		$(this).find(".material-icons").html("keyboard_arrow_right");
    	}
    });

    clearInterval(sloganDiceInterval);
    sloganDiceInterval = setInterval(function() {
            diceSlogan();
    }, 8000);
}

function getTranslation(language, key) {
  if (language == "DYNAMIC" || language == "DYN") {
    var value = languageMap[currentLanguage][key];
    if(value == null) value = languageMap["ENG"][key];
    return value;
  } else {
    var value = languageMap[language][key];
    if(value == null) value = languageMap["ENG"][key];
    return value;
  }
}

$(".lang-trigger").click(function() {
  var language = this.dataset.language;
  if (language != null) {
    changeLanguage(language);

    Materialize.toast(getTranslation(language, "toast"), 1500);
  }
});