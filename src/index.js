"use strict";
import { start, header_question, byteCloud, final } from "./js/elements";
import { arcsWestUsa, arcsEastUsa, arcsEurope, arcsAsia, circles, servers } from "./js/elements";
import { Frankfurt, NewYork, LosAngeles, Singapore } from "./js/elements";
import { delay_buffer } from "./js/animation";
import { toggleStyle, handleHoverEvents, loading, toggleVisibility } from "./js/triggers";
import { hideQuestion, getRefreshPage } from "./js/questions";
import { renderingArcs, eraseArcs } from "./js/animation";
import { clientServer, redistributionRendering } from "./js/render";
let start_buffer = null;
//     mouse click animation
document.addEventListener("click", (event) => {
    const rebound = document.createElement("div");
    rebound.style.top = event.clientY + "px";
    rebound.style.left = event.clientX + "px";
    rebound.setAttribute("class", "pulse");
    document.body.append(rebound);
    setTimeout(() => {
        document.body.removeChild(rebound);
    }, 300);
});

export const startAnimationAuto = function () {
    if (servers.every((item) => getComputedStyle(item).display === "block")) {
        hideQuestion();
        renderingArcs(
            arcsWestUsa,
            arcsEastUsa,
            arcsEurope,
            arcsAsia,
            arcsAsia,
            LosAngeles.Lima,
            NewYork.Phoenix,
            Frankfurt.Lisbon,
            Singapore.Dhaka,
            Singapore.Melbourne,
            byteCloud
        );
        setTimeout(() => {
            eraseArcs();
        }, delay_buffer + 700);
        setTimeout(() => {
            clientServer();
            setTimeout(() => {
                final.style.display = "grid";
                getRefreshPage();
            }, delay_buffer + 800);
        }, delay_buffer + 1200);
    }
};

export const getStartAction = function () {
    let quantityServers = 0;
    if (servers.some((item) => getComputedStyle(item).display === "block") && !start_buffer) {
        header_question.textContent = "Choose minimum two additional spots for ByteCloud and press ";
        header_question.append(start);
        start.classList.toggle("start");
        start.textContent = "Start";
        start_buffer = start;
    }
    for (let i = 0; i < servers.length; i++) {
        if (getComputedStyle(servers[i]).display === "block") quantityServers++;
    }
    if (quantityServers === 3) {
        start.classList.toggle("start-act");
        start.addEventListener("click", () => {
            circles.map((item) => (item.style.display = "none"));
            hideQuestion();
            redistributionRendering(byteCloud);
            setTimeout(() => {
                eraseArcs();
            }, delay_buffer + 800);
            setTimeout(() => {
                clientServer(),
                    setTimeout(() => {
                        final.style.display = "grid";
                        getRefreshPage();
                    }, delay_buffer + 800);
            }, delay_buffer + 1300);
        });
    }
};
