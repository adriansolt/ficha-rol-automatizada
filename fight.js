this.getField("arma2_check").value = "-";
this.getField("arma3_check").value = "-";
this.getField("arma4_check").value = "-";

this.getField("arma3_check").value = "I";
this.getField("arma4_check").value = "D";



// console.clear();

var dmg_total = 0;
var fallos_totales = 0;
var atq_i = Number(this.getField("final_ataque_i").value);
var atq_d = Number(this.getField("final_ataque_d").value);
var arma_i = Number(this.getField("arma3_df").value);
var arma_d = Number(this.getField("arma4_df").value);
var esquiva = Number(this.getField("final_esquiva").value);
var tirada_atq_i;
var tirada_atq_d;
var tirada_def;
var diff;
var n = 10000;
// console.println(">>> COMBATE 2 ARMAS <<<");
// console.println("ATAQUE ARMA IZQUIERDA: " + atq_i);
// console.println("DAÑO ARMA IZQUIERDA: " + arma_i);

// console.println("-\nATAQUE ARMA DERECHA: " + atq_d);
// console.println("DAÑO ARMA DERECHA: " + arma_d);
// console.println("ESQUIVA: " + esquiva + "\n");
var dmg_media = 0;
for (var j = 0; j < n; j++) {
    dmg_total = 0;
    for (var index = 1; index <= 10; index++) {
        tirada_atq_i = Math.floor(Math.random() * 100);
        tirada_def = Math.floor(Math.random() * 100);
        // console.println("--- Ataque número " + index + " ---");
        // console.println("Tirada ataque izquierda: " + tirada_atq_i);
        // console.println("Ataque izquierda total: " + (arma_i + tirada_atq_i));
        // console.println("-\nTirada esquiva: " + (tirada_def));
        // console.println("Esquiva total: " + (esquiva + tirada_def) + "\n-");
        diff = (arma_i + tirada_atq_i) - (esquiva + tirada_def);
        if ((Math.round(diff / 10) * 10) > 0) {
            var dmg = Number(this.getField("a1_" + Math.round(diff / 10) * 10).value);
            // console.println("DAÑO ATAQUE: " +dmg);
            dmg_total += dmg;
        } else {
            // console.println("FALLO diff: " + diff*-1);
            fallos_totales++;
        }

        tirada_atq_d = Math.floor(Math.random() * 100);
        tirada_def = Math.floor(Math.random() * 100);
        // console.println("--\nTirada ataque derecha: " + tirada_atq_d);
        // console.println("Ataque derecha total: " + (arma_d + tirada_atq_d));
        // console.println("-\nTirada esquiva: " + (tirada_def));
        // console.println("Esquiva total: " + (esquiva + tirada_def) + "\n-");
        diff = (arma_d + tirada_atq_d) - (esquiva + tirada_def);
        if ((Math.round(diff / 10) * 10) > 0) {
            var dmg = Number(this.getField("a2_" + Math.round(diff / 10) * 10).value);
            // console.println("DAÑO ATAQUE: " +dmg);
            dmg_total += dmg;
        } else {
            // console.println("FALLO diff: " + diff*-1);
            fallos_totales++;
        }
        // console.println("----------------------------\n");
    }
    // console.println("2 ARMAS - DMG TOTAL: " + dmg_total);
    dmg_media += (dmg_total);
}
dmg_media = dmg_media / n;

console.println("2 ARMAS - DMG MEDIA: " + dmg_media + "\n");

//

// console.clear();
this.getField("arma2_check").value = "D+I";

var dmg_total = 0;
var fallos_totales = 0;
var atq_i = Number(this.getField("final_ataque_i").value);
var arma_i = Number(this.getField("arma2_df").value);
var esquiva = Number(this.getField("final_esquiva").value);
var tirada_atq_i;
var tirada_def;
var diff;
var n = 10000;

// console.println(">>> COMBATE 1 ARMA <<<");
// console.println("ATAQUE ARMA IZQUIERDA: " + atq_i);
// console.println("DAÑO ARMA IZQUIERDA: " + arma_i);

// console.println("-\nATAQUE ARMA DERECHA: " + atq_d);
// console.println("DAÑO ARMA DERECHA: " + arma_d);
// console.println("ESQUIVA: " + esquiva + "\n");
var dmg_media = 0;
for (var j = 0; j < n; j++) {
    dmg_total = 0;
    for (var index = 1; index <= 10; index++) {
        tirada_atq_i = Math.floor(Math.random() * 100);
        tirada_def = Math.floor(Math.random() * 100);
        // console.println("--- Ataque número " + index + " ---");
        // console.println("Tirada ataque izquierda: " + tirada_atq_i);
        // console.println("Ataque izquierda total: " + (arma_i + tirada_atq_i));
        // console.println("-\nTirada esquiva: " + (tirada_def));
        // console.println("Esquiva total: " + (esquiva + tirada_def) + "\n-");
        diff = (arma_i + tirada_atq_i) - (esquiva + tirada_def);
        if ((Math.round(diff / 10) * 10) > 0) {
            var dmg = Number(this.getField("a1_" + Math.round(diff / 10) * 10).value);
            // console.println("DAÑO ATAQUE: " +dmg);
            dmg_total += dmg;
        } else {
            // console.println("FALLO diff: " + diff*-1);
            fallos_totales++;
        }

        // console.println("----------------------------\n");
    }
    // console.println("1 ARMA - DMG TOTAL: " + dmg_total);
    dmg_media += (dmg_total);
}
dmg_media = dmg_media / n;
console.println("1 ARMA - DMG MEDIA: " + dmg_media + "\n");