function convert() {
  let mv = Number(document.getElementById("input").value);
  let hv = Number(document.getElementById("inputs").value);
  let calculate = mv / (hv * hv);
  let convert = document.getElementById("result");
  convert.innerHTML = calculate.toFixed(2);
}
