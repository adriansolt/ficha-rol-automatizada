var tabla_arma_list = [
    "-",
    "ARMAS CORTAS",
    "HACHAS",
    "MAZAS",
    "ESPADAS",
    "MANDOBLES",
    "ASTAS",
    "CUERDAS",
    "A. DE PROYECTIL",
    "-",
    "Lazo",
    "Red de gladiador",
    "Combate desarmado",
    "Jarrón",
    "Botella rota",
    "Antorcha",
    "Palo de madera",
    "Cadena",
    "Cestus",
    "Estilete",
    "Silla",
    "Barra metálica",
    "Cuchillo de cocina",
    "Garfio",
    "Garrote",
    "Daga",
    "Vara",
    "Daga de parada",
    "Martillo",
    "Azada",
    "Hoz",
    "Arpón",
    "Florete",
    "Guadaña",
    "Jabalina",
    "Látigo",
    "Hacha de leñador",
    "Pico",
    "Lanza",
    "Espada corta",
    "Mayal",
    "Maza",
    "Estoque",
    "Tridente",
    "Hacha de mano",
    "Sable",
    "Martillo de guerra",
    "Cimitarra",
    "Espada larga",
    "Espada ancha",
    "Maza pesada de combate",
    "Alabarda",
    "Espada bastarda",
    "Gran martillo de guerra",
    "Hacha de guerra",
    "Lanza de caballería",
    "Mangual",
    "Mandoble",
    "Hacha a dos manos",
    "Ballesta de mano",
    "Ballesta Pesada",
    "Arco corto",
    "Arco largo"
  ];
  
  var arma_list = [
    "-",
    "Red de gladiador",
    "Lazo",
    "Jarrón",
    "Botella rota",
    "Antorcha",
    "Palo de madera",
    "Cadena",
    "Cestus",
    "Estilete",
    "Silla",
    "Barra metálica",
    "Cuchillo de cocina",
    "Garfio",
    "Garrote",
    "Daga",
    "Vara",
    "Daga de parada",
    "Martillo",
    "Azada",
    "Hoz",
    "Arpón",
    "Florete",
    "Guadaña",
    "Jabalina",
    "Látigo",
    "Hacha de leñador",
    "Pico",
    "Lanza",
    "Espada corta",
    "Mayal",
    "Maza",
    "Estoque",
    "Tridente",
    "Hacha de mano",
    "Sable",
    "Martillo de guerra",
    "Cimitarra",
    "Espada larga",
    "Espada ancha",
    "Maza pesada de combate",
    "Alabarda",
    "Espada bastarda",
    "Gran martillo de guerra",
    "Hacha de guerra",
    "Lanza de caballería",
    "Mangual",
    "Mandoble",
    "Hacha a dos manos",
    "Ballesta de mano",
    "Ballesta Pesada",
    "Arco corto",
    "Arco largo",
    "Rodela",
    "Escudo",
    "Escudo corporal",
  ];
  
  this.getField("tabla_arma1").setItems(tabla_arma_list.slice(8));
  var i = 2;
  while (i <= 7) {
    this.getField("tabla_arma" + i).setItems(tabla_arma_list);
    i++;
  }
  i = 1;
  while(i < 7) {
    this.getField("arma" + i).setItems(arma_list);
    i++;
  }
  i = 1;
  while (i < 7) {
    this.getField("arma" + i + "_check").setItems(["-", "I", "D", "D+I"]);
    this.getField("arma" + i + "_calidad").setItems([
      "-2",
      "-1",
      "0",
      "+1",
      "+2",
      "+3",
    ]);
    i++;
  }