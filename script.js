const first = document.getElementById("first");
const second = document.getElementById("second");

function handleAdd() {
   let ans = +first.value + Number(second.value);
   alert(`Addition: ${ans}`);
}
