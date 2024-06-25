"use strict";

const topBar = document.querySelector(".top-bar");
const navBar = document.querySelector(".nav-bar");
const navLinkBar = document.querySelector(".nav__links");
const navLink = document.querySelector(".nav__link");
const navItem = document.querySelectorAll(".nav__item");
const header = document.querySelector(".header");
const sectionOne = document.querySelector(".section1");
const sectionTwo = document.querySelector(".section2");
const sectionThree = document.querySelector(".section3");
const paintingContainer = document.querySelector(".painting__container");
const slider = document.querySelector(".paintings__slider");
const paintingCard = document.querySelectorAll(".painting__card");
const text = document.querySelectorAll(".p");

//

navItem.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    e.style.color = "#edac76";
  });
  e.addEventListener("mouseout", function () {
    e.style.color = "";
  });
});

console.log(paintingCard);

paintingCard.forEach(function (e) {
  e.addEventListener("mouseover", function () {});
  e.addEventListener("mouseout", function () {
    e.style.border = "";
  });
});

// Image slider
