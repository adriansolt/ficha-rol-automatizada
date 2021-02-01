var md_totales = this.getField("md_totales");
var limite_md_combate = Number(md_totales.value) / 2;
var md_ataque = this.getField("md_ataque");
var md_parada = this.getField("md_parada");
var md_esquiva = this.getField("md_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if (
  Number(event.value) + md_parada.value + md_esquiva.value >
  limite_md_combate || Number(event.value) > limite_md_combate / 4
) {
  event.rc = false;
}