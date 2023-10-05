const verbal = ["Smilende", "Grønn", "Høylytt", "Sulten", "Trist", "Glad", "Trett", "Ivrig", "Forsiktig", "Varm", "Nysgjerrig", "Engstelig", "Gledesstrålende", "Entusiastisk", "Travelt", "Overrasket", "Høyt", "Selvsikker", "Hjelpsom", "Fascinert", "Utslitt", "Irritert", "Romantisk", "Skremt", "Takknemlig", "Entusiastisk", "Forvirret", "Eventyrlysten", "Engasjert", "Høyt", "Sinte", "Eksentrisk", "Skremmende", "Entusiastisk", "Lykkelig", "Overrasket", "Kreativ", "Utmattet", "Forbauset", "Fornøyd", "Overrasket", "Hengiven", "Entusiastisk", "Trist", "Uimponert", "Vennlig", "Forundret", "Bekymret", "Euforisk", "Overveldet"];
const verb = ["danset", "vokste", "lo", "spiste", "gråt", "sang", "sovnet", "studerte", "malede", "omfavnet", "utforsket", "ventet", "hilste", "delte", "jobbet", "åpnet", "skrek", "presenterte", "reddet", "observerte", "løp", "kritiserte", "fridde", "hoppet", "donerte", "lærte", "søkte", "utforsket", "hjalp", "applauderte", "diskuterte", "oppfant", "forfulgte", "smakte", "forelsket", "oppdaget", "skapte", "fullførte", "vant", "malte", "besøkte", "pleide", "solgte", "begro", "kritiserte", "hjalp", "oppdaget", "trøstet", "feiret", "takket"];
const subjekt = ["barnet", "planten", "publikum", "katten", "jenta", "fuglene", "mannen", "studentene", "kunstneren", "kjæresten", "barna", "foreldrene", "vennene", "frivillige", "teamet", "boksen", "fotballspilleren", "lederen", "livredderen", "forskeren", "maratonløperen", "sjefen", "kjæresten", "katten", "samfunnet", "læreren", "journalisten", "oppdagelsesreisende", "hjemløse", "publikum", "politikerne", "oppfinneren", "helten", "matkritikeren", "paret", "forskeren", "kunstneren", "maratonløperen", "lotterivinneren", "barnet", "turisten", "sykepleieren", "gründeren", "familien", "anmelderen", "naboen", "astronauten", "venninnen", "vinnerne", "studenten", "professoren"];
const objekt = ["under stjernene", "i vinduskarmen", "under forestillingen", "sin favorittmat", "etter bruddet", "i morgenlyset", "på sofaen", "for eksamen", "sitt mesterverk", "i regnet", "skogen", "på nyhetene", "med omfavnelser", "mat til de trengende", "på prosjektet", "med en gave", "etter scoringen", "strategiplanen", "den druknende", "solformørkelsen", "over målstreken", "den dårlige beslutningen", "på stranda", "fra høyden", "til veldedighet", "elevene", "sannheten", "den ukjente øya", "hjemløse", "etter konserten", "den kontroversielle loven", "en ny gadget", "helten", "gourmetretten", "i solnedgangen", "en sjelden art", "et abstrakt maleri", "løpet", "millioner", "sitt første bilde", "det historiske slottet", "pasienten", "sitt første produkt", "den nedstemte", "seieren", "professoren"];

const konstaterendeSetning = () => {
    const sub = subjekt[Math.floor(Math.random()* subjekt.length)];
    const ver = verb[Math.floor(Math.random()* verb.length)];
    const obj = objekt[Math.floor(Math.random()* objekt.length)];

    return sub + ' ' + ver + ' ' + obj;
};

const sporresetning = () => {
    const sub = subjekt[Math.floor(Math.random()* subjekt.length)];
    const ver = verb[Math.floor(Math.random()* verb.length)];
    const obj = objekt[Math.floor(Math.random()* objekt.length)];

    return ver + ' ' + sub + ' ' + obj + '?';
};

const utsagnssetning = () => {
    const vrbl = verbal[Math.floor(Math.random()* verbal.length)];
    const sub = subjekt[Math.floor(Math.random()* subjekt.length)];
    const ver = verb[Math.floor(Math.random()* verb.length)];
    const obj = objekt[Math.floor(Math.random()* objekt.length)];


    return vrbl + ' ' + ver + ' ' + sub + ' ' + obj;
};




console.log(konstaterendeSetning());
console.log(sporresetning());
console.log(utsagnssetning());