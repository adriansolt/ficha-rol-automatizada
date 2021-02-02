var lista_armaduras = [
    "-",
    "Peto de cuero endurecido",
    "Peto de cuero tachonado",
    "Peto de metal",
    "Camisola acolchada",
    "Camisola de cuero",
    "Camisola de piel",
    "Camisola de anillas",
    "Completa gabardina",
    "Completa de cuero",
    "Completa de mallas",
    "Completa de piezas",
    "Completa de metal",
    "Completa con escamas",
    "Completa de placas",
    "Completa de placas pesada",
    "Completa de campaña pesada",
    "Yelmo de anillas",
    "Yelmo frentón",
    "Yelmo coronilla",
    "Yelmo de cuero",
    "Yelmo de maya",
    "Yelmo completo abierto",
    "Yelmo completo cerrado",
  ];
  var armaduras_check = ["-", "Eq."];
  var i = 1;
  while (i < 7) {
    this.getField("armadura" + i).setItems(lista_armaduras);
    this.getField("armadura" + i + "_check").setItems(armaduras_check);
    i++;
  }