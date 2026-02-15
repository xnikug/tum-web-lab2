const translations = {
    en: {
        "nav-home": "Home",
        "nav-collection": "Collection",
        "nav-about": "About",
        "nav-quality": "Quality",
        "hero-title": "Elevate Your Living Space",
        "hero-desc": "Handcrafted furniture designed for comfort and built to last a lifetime.",
        "hero-cta": "Shop Collection",
        "collection-title": "Featured Collection",
        "prod-1-name": "Velvet Sofa",
        "prod-2-name": "Oak Coffee Table",
        "prod-3-name": "Modern Lamp",
        "add-cart": "Add to Cart",
        "quality-title": "Uncompromised Quality",
        "quality-1-head": "Sustainable Materials",
        "quality-1-desc": "We source wood from certified forests.",
        "quality-2-head": "Handmade Finish",
        "quality-2-desc": "Every edge is polished by hand.",
        "quality-3-head": "5-Year Warranty",
        "quality-3-desc": "We stand behind every piece we create.",
        "about-title": "Our Story",
        "about-p1": "Founded in 2024, 3dmobila began with a simple mission: to bring timeless elegance into modern homes. Every piece in our collection is curated for its durability, comfort, and aesthetic appeal.",
        "about-p2": "We work directly with artisans who value sustainability and craftsmanship above all else.",
        "footer-rights": "All rights reserved."
    },
    ro: {
        "nav-home": "Acasă",
        "nav-collection": "Colecție",
        "nav-about": "Despre Noi",
        "nav-quality": "Calitate",
        "hero-title": "Elevați Spațiul de Locuit",
        "hero-desc": "Mobilier realizat manual, conceput pentru confort și construit să dureze o viață.",
        "hero-cta": "Vezi Colecția",
        "collection-title": "Colecția Recomandată",
        "prod-1-name": "Canapea Velvet",
        "prod-2-name": "Masă de Cafea Stejar",
        "prod-3-name": "Lampă Modernă",
        "add-cart": "Adaugă în Coș",
        "quality-title": "Calitate Fără Compromis",
        "quality-1-head": "Materiale Sustenabile",
        "quality-1-desc": "Folosim lemn din păduri certificate.",
        "quality-2-head": "Finisaj Manual",
        "quality-2-desc": "Fiecare margine este finisată manual.",
        "quality-3-head": "5 Ani Garanție",
        "quality-3-desc": "Garantăm calitatea fiecărei piese create.",
        "about-title": "Povestea Noastră",
        "about-p1": "Fondată în 2024, 3dmobila a început cu o misiune simplă: să aducă eleganța atemporală în casele moderne. Fiecare piesă este aleasă pentru durabilitate, confort și estetică.",
        "about-p2": "Lucrăm direct cu artizani care prețuiesc sustenabilitatea și măiestria mai presus de orice.",
        "footer-rights": "Toate drepturile rezervate."
    }
};

let currentLang = 'en';
const langBtn = document.getElementById('lang-toggle');

if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ro' : 'en';
        langBtn.textContent = currentLang === 'en' ? 'RO' : 'EN';
        updateContent();
    });
}

function updateContent() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}