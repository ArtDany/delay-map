"use strict";
import "./quest.css";
import { finish, header_question, final, people, circles } from "./elements";
let next_buffer = null;

export const getNextQuestion = function () {
    const spot = document.createElement("div");
    if (!next_buffer) {
        header_question.append(spot);
        spot.classList.toggle("quest");
        spot.textContent = "Next";
        next_buffer = spot;
        spot.addEventListener("click", () => {
            header_question.textContent = "Where is your data? Chose one spot for Object Storage system. ";
            people.map((item) => item.classList.toggle("men-trigger"));
            circles.map((item) => (item.style.display = "inline-block"));
            spot.remove();
        });
    }
};

export const hideQuestion = function () {
    header_question.classList.toggle("header-toggle");
    header_question.children[0].remove();
};

export const getRefreshPage = function () {
    if (final.style.display === "grid") {
        header_question.classList.toggle("header-toggle");
        header_question.textContent = "Do you want to ";
        header_question.append(finish);
        finish.classList.add("finish-act");
        finish.textContent = "start again?";
        finish.addEventListener("click", () => {
            location.reload();
        });
    }
};
