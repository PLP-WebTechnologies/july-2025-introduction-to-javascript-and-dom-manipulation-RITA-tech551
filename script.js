// =============================
// Part 1: Variables & Conditionals
// =============================
let userName = "Rita";
let age = 20;
let isStudent = true;

if (age < 18) {
  console.log("Minor");
} else if (isStudent) {
  console.log("Adult Student");
} else {
  console.log("Adult Non-Student");
}

// Output to the page too
document.getElementById("output").innerHTML = 
  `<p>Hello ${userName}, age ${age}. Status: ${isStudent ? "Student" : "Not a student"}</p>`;

// =============================
// Part 2: Custom Functions
// =============================

// Function 1: Greeting
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function 2: Add two numbers
function add(a, b) {
  return a + b;
}

// Example usage in console
console.log(greet("Ada"));
console.log("5 + 7 =", add(5, 7));

// =============================
// Part 3: Loops
// =============================

// Loop 1: for loop
for (let i = 1; i <= 5; i++) {
  console.log(`For loop count: ${i}`);
}

// Loop 2: while loop
let j = 0;
while (j < 3) {
  console.log(`While loop at: ${j}`);
  j++;
}

// =============================
// Part 4: DOM Interactions
// =============================

// 1. Change content when button clicked
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("output").innerHTML += `<p>${greet(userName)}</p>`;
});

// 2. Generate numbers dynamically with a loop
document.getElementById("countBtn").addEventListener("click", function() {
  let list = "<ul>";
  for (let i = 1; i <= 5; i++) {
    list += `<li>Number ${i}</li>`;
  }
  list += "</ul>";
  document.getElementById("output").innerHTML += list;
});

// 3. Style manipulation
document.getElementById("output").style.color = "darkblue";
