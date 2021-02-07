var num = Number(event.target.name.substr(15, 1));
if (this.getField("categoria").value === "Novel" &&
    event.value !== "-" &&
    event.value !== this.getField("habilidad_novel" + ((num) % 4 + 1)).value &&
    event.value !== this.getField("habilidad_novel" + ((num + 1) % 4 + 1)).value &&
    event.value !== this.getField("habilidad_novel" + ((num + 2) % 4 + 1)).value
) {
    this.getField("esp_" + event.value).value += Number(this.getField("nivel").value) * 5;
} else {
    event.value = "-";
}