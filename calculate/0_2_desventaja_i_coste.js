
var num = event.target.name.substr(10, 1);
var desventaja = this.getField("desventaja" + num).value;
if (
    desventaja.substr(0, 11) === "Vicio grave" ||
    desventaja.substr(0, 13) === "Alergia grave" ||
    desventaja.substr(0, 16) === "Debilidad física" ||
    desventaja === "Desafortunado" ||
    desventaja === "Endeble" ||
    desventaja.substr(0, 20) === "Extremidad atrofiada" ||
    desventaja.substr(0, 11) === "Fobia grave" ||
    desventaja === "Insufrible" ||
    desventaja === "Lenta curación" ||
    desventaja === "Mala suerte" ||
    desventaja === "Maldición" ||
    desventaja === "Miopía" ||
    desventaja === "Mudo" ||
    desventaja === "Reacción lenta" ||
    desventaja === "Salud enfermiza" ||
    desventaja === "Sordo" ||
    desventaja === "Sueño profundo" ||
    desventaja === "Vulnerable a los venenos" ||
    desventaja === "Vulnerable al dolor" ||
    desventaja === "Vulnerable al frío" ||
    desventaja === "Vulnerable al calor"
) {
    event.value = 2;
} else if (
    desventaja === "Enfermedad grave" ||
    desventaja === "Maldición II" ||
    desventaja === "Reacción lenta II"
) {
    event.value = 4;
} else {
    event.value = 0;
}