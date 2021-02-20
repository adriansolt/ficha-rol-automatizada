console.clear();
var num_turnos = 10;
var tirada_atq_i;
var tirada_atq_d;
var tirada_def;
var diff;
var dmg_total;
var atq_i;
var atq_d;
var arma_i;
var arma_d;
var esquiva;
var dmg_media;
var n = 1000;

var armas = ["Daga", "Hacha de mano", "Gran martillo de guerra", "Mandoble"];
for (var z = 0; z < armas.length; z++) {

    this.getField("arma2_check").value = "-";
    this.getField("arma3_check").value = "-";
    this.getField("arma4_check").value = "-";

    this.getField("arma2").value = armas[z];
    this.getField("arma3").value = armas[z];
    this.getField("arma4").value = armas[z];

    this.getField("arma3_check").value = "I";
    this.getField("arma4_check").value = "D";
    console.println(">>> " + armas[z] + " <<<");
    dmg_total = 0;
    atq_i = Number(this.getField("final_ataque_i").value);
    atq_d = Number(this.getField("final_ataque_d").value);
    arma_i = Number(this.getField("arma3_df").value);
    arma_d = Number(this.getField("arma4_df").value);
    esquiva = Number(this.getField("final_esquiva").value);

    dmg_media = 0;
    for (var j = 0; j < n; j++) {
        dmg_total = 0;
        for (var index = 1; index <= num_turnos; index++) {
            tirada_atq_i = Math.floor(Math.random() * 100);
            tirada_def = Math.floor(Math.random() * 100);
            diff = (arma_i + tirada_atq_i) - (esquiva + tirada_def);
            if ((Math.round(diff / 10) * 10) > 0) {
                var dmg = Number(this.getField("a1_" + Math.round(diff / 10) * 10).value);
                // console.println("DAÑO ATAQUE: " +dmg);
                dmg_total += dmg;
            } else {
                // console.println("FALLO diff: " + diff*-1);
            }

            tirada_atq_d = Math.floor(Math.random() * 100) + Number(this.getField("atq_adicional").value);
            tirada_def = Math.floor(Math.random() * 100);
            diff = (arma_d + tirada_atq_d) - (esquiva + tirada_def);
            if ((Math.round(diff / 10) * 10) > 0) {
                var dmg = Number(this.getField("a2_" + Math.round(diff / 10) * 10).value);
                dmg_total += dmg;
            } else {
            }
        }
        dmg_media += (dmg_total);
    }
    dmg_media = dmg_media / n;

    console.println("2 ARMAS - DAÑO TOTAL TRAS " + num_turnos + " TURNOS : " + Math.round(dmg_media));

    this.getField("arma2_check").value = "D+I";

    dmg_total = 0;
    atq_i = Number(this.getField("final_ataque_i").value);
    arma_i = Number(this.getField("arma2_df").value);
    esquiva = Number(this.getField("final_esquiva").value);
    dmg_media = 0;
    for (var j = 0; j < n; j++) {
        dmg_total = 0;
        for (var index = 1; index <= num_turnos; index++) {
            tirada_atq_i = Math.floor(Math.random() * 100);
            tirada_def = Math.floor(Math.random() * 100);
            diff = (arma_i + tirada_atq_i) - (esquiva + tirada_def);
            if ((Math.round(diff / 10) * 10) > 0) {
                var dmg = Number(this.getField("a1_" + Math.round(diff / 10) * 10).value);
                dmg_total += dmg;
            } else {
            }
        }
        dmg_media += (dmg_total);
    }
    dmg_media = dmg_media / n;
    console.println("1 ARMA - DAÑO TOTAL TRAS " + num_turnos + " TURNOS : " + Math.round(dmg_media) + "\n");
}