var md_totales = this.getField("md_totales");
var limite_md_llA = Number(md_totales.value) / 10;
var md_llA = this.getField("md_llA");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if (Number(event.value) > Number(limite_md_llA)) {
  event.value = md_llA.value;
}