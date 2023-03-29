"use strict";
let definition = null;

const formatString = function (str) {
    str = str.replace(/-/g, " ");
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
};

const getRating = function (time) {
    const fullHD = "4K/2160p Ultra HD";
    const ultraHD = "1080p Full HD";
    const HD = "720p HD Ready";
    const SD = "480 SD";
    let rating = 0;
    if (time < 20) {
        definition = fullHD;
        rating = 5;
    } else if (time >= 10 && time < 30) {
        definition = ultraHD;
        rating = 4;
    } else if (time >= 30 && time < 50) {
        definition = HD;
        rating = 3;
    } else if (time >= 50 && time < 70) {
        definition = SD;
        rating = 2;
    } else {
        definition = SD;
        rating = 1;
    }
    return rating;
};

export const createTable = function (delay, container, downloadTime, mainland) {
    const latency = +delay.match(/\d+/)[0];
    const table = document.createElement("table");
    const row1 = table.insertRow(0);
    row1.classList.add("table-head");
    const stars = getRating(downloadTime * 10);
    const starHTML = Array.from({ length: 5 }, (_, index) => {
        const color = index < stars ? "#ffb800" : "black";
        return `<span class="star" style="color: ${color}">&#9733</span>`;
    }).join("");
    row1.innerHTML = `<td class='mainland' colspan=2>${formatString(mainland)}</td>
<td class='rating'>${starHTML}</td>`;
    const row2 = table.insertRow(1);
    const cell2_1 = row2.insertCell(0);
    const cell2_2 = row2.insertCell(1);
    cell2_2.style.width = "120px";
    const cell2_3 = row2.insertCell(2);
    cell2_1.textContent = `Latency: ${latency}`;
    cell2_2.textContent = `Download time: ${downloadTime * 10} sec`;
    cell2_3.innerHTML = `Video streaming:</br>${definition}`;
    container.append(table);
};
