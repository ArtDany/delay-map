"use strict";
import { people, circles, servers } from "./elements";
import { getNextQuestion } from "./questions";
import { getStartAction, startAnimationAuto } from "../index";
let client_server = null;
//     toggle visibility people on the map
export const toggleStyle = function (elem, fill) {
    if (elem.className.includes("small")) {
        elem.classList.toggle(fill);
    } else if (elem.className.includes("medium")) {
        [...elem.parentElement.children].slice(0, 2).map((item) => item.classList.toggle(fill));
    } else if (elem.className.includes("large")) {
        [...elem.parentElement.children].map((item) => item.classList.toggle(fill));
    }
};
//     events mouseover/out on the people
export const handleHoverEvents = function (select) {
    function hoverAction(act) {
        select.addEventListener(act, () => {
            toggleStyle(select, "man-filled");
        });
    }
    hoverAction("mouseover");
    hoverAction("mouseout");
};
//     appearance of loading circles
export const loading = function () {
    if (people.every((item) => item.style.display === "none"))
        circles.map((item) => (item.style.display = "inline-block"));
};
//     trigger visibility for devices after disappear the people
export const toggleVisibility = function (person) {
    person.addEventListener("click", () => {
        [...person.parentElement.children].map((item) => (item.style.display = "none"));
        const sibling = [...person.parentElement.nextElementSibling.children].find((item) =>
            item.className.includes(person.className.slice(0, 5))
        );
        toggleStyle(sibling, "device-filled");
        loading();
        getNextQuestion();
    });
};
//     appearance of servers
function createServer(select) {
    select.addEventListener("click", (event) => {
        event.target.style.display = "none";
        const accessory = event.target.classList[1];
        const server = servers.find((item) => item.classList.contains(accessory));
        if (!client_server) {
            server.classList.toggle("client-server");
            client_server = server;
        } else {
            server.style.display = "block";
        }
        getStartAction();
        startAnimationAuto();
    });
}
//     activating triggers on elements
people.map((item) => {
    handleHoverEvents(item);
    toggleVisibility(item);
});
circles.map((item) => {
    createServer(item);
});
