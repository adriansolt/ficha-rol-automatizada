var lista_armaduras = [
    "—",
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
  var i = 0;
  while (i < 7) {
    this.getField("armadura" + i).setItems(lista_armaduras);
    i++;
  }