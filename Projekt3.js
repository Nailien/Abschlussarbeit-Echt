const increase = document.getElementById("increase");
const reduce = document.getElementById("reduce");
const reset = document.getElementById("reset");
let number = document.getElementById("number")
let hid = 0;

number.textContent = hid

increase.addEventListener("click", function(event) {
  event.preventDefault();
});

reduce.addEventListener("click", function(event) {
  event.preventDefault();
});

reset.addEventListener("click", function(event) {
  event.preventDefault();
});

increase.onclick = function () {
if (hid > 49) {
hid += 2;
} else if (hid > 98) {
hid == 0;
} else {
hid++;
}
number.textContent = hid;
};
reduce.onclick = function () {
if (hid > 49) {
hid -= 2;
} else if (-100 > hid) {
hid = 0;
} else {
hid--;
}
number.textContent = hid;
};
reset.onclick = function () {
hid = 0;
number.textContent = hid;
};
//><