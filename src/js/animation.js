"use strict";
import { devicesNorthAmerica, devicesSouthAmerica, devicesEurope, devicesAsia, devicesOceania } from "./elements";
import { arcs, servers, devices } from "./elements";
import { createTable } from "./tables";
export let delay_buffer = null;
const delayArray = [];
//     drawing arcs and the appearance of accompanying animation and text to existing devices
export const drawArcs = function (gadgets, curves, latency, table) {
    const downloadTime = Math.round(((latency * 30) / 1000) * 10) / 10;
    const availableDevices = gadgets.filter((item) => {
        return (item.style.display = getComputedStyle(item).display !== "none");
    });
    availableDevices.map((item) => {
        item.children[0].children[0].classList.toggle("device-filled");
        item.children[0].children[0].style.animationDuration = `${downloadTime}s`;
    });
    if (availableDevices.length > 0) {
        const mainland = availableDevices[0].parentElement.parentElement.className;
        const latencyTime = availableDevices[0].parentElement.parentElement.lastElementChild;
        latencyTime.classList.toggle("latency-filled");
        latencyTime.textContent = `latency: ${latency}`;
        setTimeout(() => (latencyTime.textContent = `time: ${downloadTime * 10} sec`), (downloadTime + 0.3) * 1000);
        createTable(latencyTime.textContent, table, downloadTime, mainland);
        delayArray.push(latency * 30);
    }
    const comparisonClass = availableDevices.map((item) => item.classList[1]);
    const filteredArray = [];
    for (let key of comparisonClass) {
        filteredArray.push(curves.find((item) => item.classList[1].includes(key)));
    }
    filteredArray.map((item) => item.classList.toggle("arc-filled"));
};
//     rendering arcs to devices on the map with a specify latency
export const renderingArcs = function (arc1, arc2, arc3, arc4, arc5, d, e, l, a, y, table) {
    drawArcs(devicesSouthAmerica, arc1, d, table);
    drawArcs(devicesNorthAmerica, arc2, e, table);
    drawArcs(devicesEurope, arc3, l, table);
    drawArcs(devicesAsia, arc4, a, table);
    drawArcs(devicesOceania, arc5, y, table);
    return (delay_buffer = Math.max(...delayArray));
};
//     identifying a missing server
export const excludedServer = function () {
    const unselectedServer = servers.find((item) => {
        return (item.style.display = getComputedStyle(item).display != "block");
    });
    return unselectedServer;
};
//     removing arcs and accompanying animation and text
export const eraseArcs = function () {
    const availableDevices = devices.filter((item) => {
        return (item.style.display = getComputedStyle(item).display !== "none");
    });
    availableDevices.map((item) => item.children[0].children[0].classList.toggle("device-filled"));
    const explicitArcs = arcs.filter((item) => item.classList.contains("arc-filled"));
    explicitArcs.map((item) => item.classList.toggle("arc-filled"));
    const latencies = document.querySelectorAll(".latency-time");
    [...latencies].map((item) => item.classList.toggle("latency-filled"));
};
