// Select order 1 elements
const order1Root = document.querySelector('[data-key="order1"]');
const order1Biscuits = document.querySelector('[data-key="order1"] .biscuits dd');
const order1Donuts = document.querySelector('[data-key="order1"] .donuts dd');
const order1Pancakes = document.querySelector('[data-key="order1"] .pancakes dd');
const order1Status = document.querySelector('[data-key="order1"] .status dd');

// Select order 2 elements
const order2Root = document.querySelector('[data-key="order2"]');
const order2Biscuits = document.querySelector('[data-key="order2"] .biscuits dd');
const order2Donuts = document.querySelector('[data-key="order2"] .donuts dd');
const order2Pancakes = document.querySelector('[data-key="order2"] .pancakes dd');
const order2Status = document.querySelector('[data-key="order2"] .status dd');

// Select order 3 elements
const order3Root = document.querySelector('[data-key="order3"]');
const order3Biscuits = document.querySelector('[data-key="order3"] .biscuits dd');
const order3Donuts = document.querySelector('[data-key="order3"] .donuts dd');
const order3Pancakes = document.querySelector('[data-key="order3"] .pancakes dd');
const order3Status = document.querySelector('[data-key="order3"] .status dd');

// Update order 1 values
order1Biscuits.textContent = order1Root.dataset.biscuits;
order1Donuts.textContent = order1Root.dataset.donuts;
order1Pancakes.textContent = order1Root.dataset.pancakes;
order1Status.textContent = order1Root.dataset.delivered === "true" ? "Delivered" : "Pending";

// Update order 2 values
order2Biscuits.textContent = order2Root.dataset.biscuits;
order2Donuts.textContent = order2Root.dataset.donuts;
order2Pancakes.textContent = order2Root.dataset.pancakes;
order2Status.textContent = order2Root.dataset.delivered === "true" ? "Delivered" : "Pending";

// Update order 3 values
order3Biscuits.textContent = order3Root.dataset.biscuits;
order3Donuts.textContent = order3Root.dataset.donuts;
order3Pancakes.textContent = order3Root.dataset.pancakes;
order3Status.textContent = order3Root.dataset.delivered === "true" ? "Delivered" : "Pending";