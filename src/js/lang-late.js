/*
 * Lang-Late v0.0.1.0
 * Copyright 2017 Mike Eling
 * MIT License (https://raw.githubusercontent.com/DrFR0ST/virtualit-website/master/LICENSE)
 */

var currentLanguage = "ENG";

$.get("https://ipinfo.io", function(response) {
    currentLanguage = response.country;
    if (languageMap[currentLanguage] == null) { currentLanguage = "ENG"; }
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

        optionbox_text01: "Professional websites from small introduction page to whole complex systems.", //NEW DE
        optionbox_text02: "All our services are available in Polish, English and German language.", //NEW DE
        optionbox_text03: "Fast and reliable hosting that meets the needs of even the most demanding customers.", //NEW DE

        ourservices: "Our Services",
        ourservicesH1: "Professional websites",
        ourservicesH2: "Website servicing",
        ourservicesH3: "Consulting",
        ourservicesH4: "Configuration of website engines",
        ourservicesH5: "WWW Hosting",
        ourservicesS1: "We will create for you a unique website, tailored to your needs and meeting current standards.",
        ourservicesS2: "We will take care of your website, we will be at your disposal for any changes or corrections at your request.",
        ourservicesS3: "We will answer your questions and advise you on how to achieve your goals in the field of computer science.",
        ourservicesS4: "We will install and configure your blog, online store and other scripts based on CMS engines.",
        ourservicesS5: "We offer hosting your site on our server. We guarantee high availability of the service and stability of its operation.",

        benefits: "Proposed packages", //NEW VALUE DE

        minipack: "Mini Pack", //NEW DE
        optimalpack: "Optimal Pack", //NEW DE
        premiumpack: "Expanded Pack", //NEW DE
        cmsservice: "CMS Services", //NEW DE

        pack_desc1: "The cheapest plan", //NEW DE
        pack_desc2: "The optimal plan", //NEW DE
        pack_desc3: "The most advantageous plan", //NEW DE
        pack_desc4: "Services for already existing CMS", //NEW DE

        indiweb: "Complex website handcrafted by us", //NEW DE
        onepager: "Individualy adjusted one-pager website", //NEW DE
        wwwhosting: "WWW hosting", //NEW DE
        ftphosting: "FTP web space", //NEW DE
        servicing: "Servicing", //NEW DE
        consulting: "Consulting", //NEW DE
        cmsinstall: "CMS installation", //NEW DE
        cmsplugin: "CMS plugin development", //NEW DE
        comstheme: "CMS theme development", //NEW DE

        ourclients: "Our Clients",

        ourprojects: "Our Projects",

        otherservices: "Other Services", //NEW DE

        otherservicesH1: "WWW Hosting", //NEW DE
        otherservicesH2: "Domain Setup", //NEW DE
        otherservicesH3: "Consulting", //NEW DE
        otherservicesH1S1: "Network space for your website.", //NEW DE
        otherservicesH2S1: "Registration and configuration of a domain from scratch.", //NEW DE
        otherservicesH3S1: "A quick technical advice for your service.", //NEW DE

        packcost1: "15€/month", //NEW DE
        packcost2: "from 450€", //NEW DE
        packcost3: "Individualy adjusted", //NEW DE
        packcost4: "Depends on service", //NEW DE

        contactus: "Contact us", //NEW DE
        getpack: "Get Pack", //NEW DE

        /* ourservices.header text */
        getintouch: "Get in Touch",
        getintouchH1: "Send Message",
        getintouchH2: "Contact",
        getintouchH3: "Social Media",
        /* ourservices.slogan text */
        getintouchH1S1: "Your Name",
        getintouchH1S2: "Email Address",
        getintouchH1S3: "Phone",
        getintouchH1S4: "Company",
        getintouchH1S5: "Message",

        agree: "Agree",
        order: "Order", //NEW DE
        send: "Send",
        close: "Close",
        pricing: "Check pricing",
        learnmore: "Learn More",
        language: "Language",
        toast: "Language changed",
        postajax: "Thank you!<br>We will review your request as soon as possible.",

        cookieDeclaration: "By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed. By continuing to use the Website without blocking cookies in the browser settings, the user agrees that the above mentioned cookies will be placed.",
        cookieDeclarationTitle: "Cookies Declaration",
        cookieDeclarationShort: "By continuing to use the Website without blocking cookies, you consent to our use of our site.",
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

        optionbox_text01: "Profesjonalne strony internetowe od małych witryn wizytówkowych po kompleksowe systemy.",
        optionbox_text02: "Wszystkie nasze usługi są dostępne w języku polskim, angielskim oraz niemieckim.",
        optionbox_text03: "Szybki i niezawodny hosting spełniający potrzeby nawet najbardziej wymagających klientów.",

        ourservices: "Nasze usługi",
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


        benefits: "Proponowane pakiety",

        minipack: "Pakiet Mini",
        optimalpack: "Pakiet Optymalny",
        premiumpack: "Pakiet Rozszerzony",
        cmsservice: "Usługi CMS",

        pack_desc1: "Najtańszy plan",
        pack_desc2: "Optymalny plan",
        pack_desc3: "Najkorzystniejszy plan",
        pack_desc4: "Usługi dla istniejących już witryn CMS",

        indiweb: "Indywidualna witryna",
        onepager: "Witryna One-Pager",
        wwwhosting: "WWW Hosting",
        ftphosting: "Serwer plików FTP",
        servicing: "Serwisowanie",
        consulting: "Konsultacje",
        cmsinstall: "Instalacja CMS",
        cmsplugin: "Rozwój wtyczki CMS",
        comstheme: "Rozwój motywu CMS",

        packcost1: "15€/miesiac",
        packcost2: "od 450€",
        packcost3: "Indywidualnie dostosowane",
        packcost4: "Zależy od usługi",

        contactus: "Skontaktuj sie z nami",
        getpack: "Wybierz pakiet",

        ourclients: "Nasi klienci",

        ourprojects: "Nasze realizacje",

        otherservices: "Inne usługi",

        otherservicesH1: "WWW Hosting",
        otherservicesH2: "Konfiguracja domeny",
        otherservicesH3: "Konsultacje",
        otherservicesH1S1: "Przestrzeń sieciowa dla Twojej witryny.",
        otherservicesH2S1: "Rejestracja i konfiguracja domeny od podstaw.",
        otherservicesH3S1: "Szybka porada techniczna dla Twojej usługi.",

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
        order: "Zamów",
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
  		welcome: "Bienvenue",
 
        explore: "Découvre",
 
        description: "Nous allons nous occuper de ton infrastructure IT",
        slogan1: "Ton site internet est importante, n’oublie pas d’en prendre soin.",
        slogan2: "Ne t’inquiète pas pour la programmation, on va s’en occuper.",
        slogan3: "Nos ingénieurs sont prêts à créer la programmation pour toi",
        slogan4: "Nous avons les compétences adéquates dont tu as besoin afin de livrer une marchandise de haute qualité",
        slogan5: "Nous aimons tes projets autant que nous aimons les nôtres",
 
        optionbox_text01: "Des sites internet de professionnel, de la simple vitrine de visite jusqu’à des systèmes complexes",
        optionbox_text02: "Tous nos services sont disponibles en polonais, anglais et allemand.",
        optionbox_text03: "Un hosting rapide et infaillible qui remplit tous les besoins même des clients les plus exigeants.",
 
        ourservices: "Nos services",
        ourservicesH1: "Des sites internet de professionnels",
        ourservicesH2: "Nous prenons soin de ta vitrine",
        ourservicesH3: "Consultations",
        ourservicesH4: "Configuration des moteurs des sites internet",
        ourservicesH5: "Hosting WWW",
        ourservicesS1: "Nous créerons pour toi une page internet unique, conforme à tes besoins et qui remplit les standards actuels.",
        ourservicesS2: "Nous prendrons soins de ta vitrine, nous sommes à ta disposition pour toutes questions concernant des changements ou corrections.",
        ourservicesS3: "Nous répondrons à tes questions et nous te conseillerons comment atteindre tes buts dans le domaine de l’informatique.",
        ourservicesS4: "Nous installerons et configurerons ton blog, ta boutique en ligne et d’autres scriptes fondés sur les moteurs CMS.",
        ourservicesS5: "Nous offrons l’hosting de ta vitrine sur notre serveur. Nous garantissons une haute disponibilité du service et aussi de sa stabilité dans son utilisation.",
 
 
        benefits: "Les paquets proposés",
 
        minipack: "Mini paquet",
        optimalpack: "paquet optimal",
        premiumpack: "Paquet élargi",
        cmsservice: "Les services CMS",
 
        pack_desc1: "le plan le moins cher",
        pack_desc2: "le plan optimal",
        pack_desc3: "le plan le plus utile",
        pack_desc4: "Les services pour les vitrines CMS déjà existantes",
 
        indiweb: "vitrine individuelle",
        onepager: "vitrine One-Pager",
        wwwhosting: "WWW Hosting",
        ftphosting: "serveur des fichiers FTP",
        servicing: "entretien du serveur",
        consulting: "consultation",
        cmsinstall: "Installation du CMS",
        cmsplugin: "développement du plug CMS",
        comstheme: "développement du motif CMS",
 
        packcost1: "15€/mois",
        packcost2: "ou 450€",
        packcost3: "arrangement individuel",
        packcost4: "Cela dépend du service",
 
        contactus: "Contacte nous",
        getpack: "Choisi un paquet",
 
        ourclients: "Nos clients",
 
        ourprojects: "Nos réalisations",
 
        otherservices: "Nos autres services",
 
        otherservicesH1: "WWW Hosting",
        otherservicesH2: "configuration du domaine",
        otherservicesH3: "Consultations",
        otherservicesH1S1: "L’espace réseau pour ta vitrine.",
        otherservicesH2S1: "enregistrement et configuration des domaines en partant de la base.",
        otherservicesH3S1: "Un conseil technique fourni rapidement pour votre service.",
 
        getintouch: "reste en contact",
        getintouchH1: "envoie un message",
        getintouchH2: "Contact",
        getintouchH3: "Réseaux sociaux",
        getintouchH1S1: "Nom",
        getintouchH1S2: "Adresse Email",
        getintouchH1S3: "Telephone",
        getintouchH1S4: "Entreprise",
        getintouchH1S5: "message",
 
        agree: "j’accepte",
        order: "commande",
        send: "envoie",
        close: "ferme",
        pricing: "Check pricing",
        learnmore: "en savoir plus",
        language: "Langue",
 
        toast: "La langue a été modifiée",
        postajax: "Merci!<br>Nous répondrons à ton message le plus vite possible",
 
        cookieDeclaration: "En continuant à utiliser le site internet sans bloquer les cookies sur les réglages du navigateur, l’utilisateur accepte l’utilisation des fichiers cookies cités plus hauts.",
        cookieDeclarationTitle: "Déclaration Cookies",
        cookieDeclarationShort: "Utilisant le site internet sans bloquer les fichiers cookies, l’utilisateur accepte l’utilisation de ces derniers par notre site.",

    }
};

function changeLanguage(language) {
    if (!languageMap.hasOwnProperty(language)) return;
    var langData = languageMap[language];

    $('.lang-late').each(function(index) {
        var langKey = this.dataset.langKey;
        var value = langData[langKey];
        if (value == null) value = languageMap["ENG"][langKey];
        $(this).html(value);
        currentLanguage = language;
    });

    $('.lang-trigger').each(function(i) {
        $(this).removeClass("disabled");
        $(this).find(".material-icons").html("");
        $(this).css("font-weight", "normal");

        if (this.dataset.language == language) {
            $(this).addClass("disabled");
            $(this).find(".material-icons").html("keyboard_arrow_right");
            $(this).css("font-weight", "bold");
        }
    });

    clearInterval(sloganDiceInterval);
    diceSlogan();
    sloganDiceInterval = setInterval(function() {
        diceSlogan();
    }, 8000);
}

function getTranslation(language, key) {
    if (language == "DYNAMIC" || language == "DYN") {
        var value = languageMap[currentLanguage][key];
        if (value == null) value = languageMap["ENG"][key];
        return value;
    } else {
        var value = languageMap[language][key];
        if (value == null) value = languageMap["ENG"][key];
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
