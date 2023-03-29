export const start = document.createElement("div");
export const finish = document.createElement("div");
export const header_question = document.querySelector(".header-question");
export const byteCloud = document.querySelector(".byte-cloud");
export const objectStorage = document.querySelector(".object-storage");
export const final = document.querySelector(".final");
// MAIN ELEMENTS
export const menList = document.querySelectorAll(".small-man, .medium-man, .large-man");
export const circlesList = document.querySelectorAll(".circle");
export const serversList = document.querySelectorAll(".server");
export const devicesList = document.querySelectorAll(".small, .medium, .large");
export const devicesNorthAmerica = [...devicesList].filter((item) => item.className.includes("north-america"));
export const devicesSouthAmerica = [...devicesList].filter((item) => item.className.includes("south-america"));
export const devicesEurope = [...devicesList].filter((item) => item.className.includes("europe"));
export const devicesAsia = [...devicesList].filter((item) => item.className.includes("asia"));
export const devicesOceania = [...devicesList].filter((item) => item.className.includes("oceania"));
export const arcsList = document.querySelectorAll(".arc_west-usa, .arc_east-usa, .arc_europe, .arc_asia");
export const arcsWestUsa = [...arcsList].filter((item) => item.className.includes("arc_west-usa"));
export const arcsEastUsa = [...arcsList].filter((item) => item.className.includes("arc_east-usa"));
export const arcsEurope = [...arcsList].filter((item) => item.className.includes("arc_europe"));
export const arcsAsia = [...arcsList].filter((item) => item.className.includes("arc_asia"));
export const people = [...menList];
export const devices = [...devicesList];
export const circles = [...circlesList];
export const servers = [...serversList];
export const arcs = [...arcsList];
// objects with latencies between the cities
export const Frankfurt = {
    Athens: 47,
    Lisbon: 50,
    Madrid: 32,
    Boston: 89,
    SanFrancisco: 156,
    Houston: 117,
    Dhaka: 170,
    NewDelhi: 147,
    Brasilia: 190,
    Lima: 179,
    Seoul: 288,
    Bangalore: 244,
    Melbourne: 253,
    Perth: 217
};

export const NewYork = {
    Amsterdam: 78,
    Budapest: 97,
    Kharkiv: 117,
    Dallas: 46,
    Phoenix: 55,
    SanDiego: 70,
    BuenosAires: 165,
    SaoPaulo: 125,
    Seoul: 230,
    Tokyo: 174,
    Bangkok: 268,
    Sydney: 208,
    Perth: 260
};

export const LosAngeles = {
    Antwerp: 144,
    Lisbon: 170,
    Boston: 76,
    Chicago: 52,
    Portland: 30,
    BuenosAires: 210,
    Santiago: 184,
    SaoPaulo: 181,
    Lima: 145,
    Perth: 212,
    Bangalore: 247,
    Shenzhen: 178,
    Melbourne: 191,
    Sydney: 180
};

export const Singapore = {
    Antwerp: 178,
    Stockholm: 193,
    Boston: 241,
    Portland: 206,
    Caracas: 259,
    SaoPaulo: 347,
    Shenzhen: 97,
    NewDelhi: 76,
    Bangalore: 41,
    Seoul: 69,
    Dhaka: 45,
    Sydney: 93,
    Melbourne: 82,
    Perth: 119
};
