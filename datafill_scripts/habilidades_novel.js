var lista_habilidades = [
    "-",
    ["Acrobacias", "acrobacias"],
    ["Adv. Social", "advsocial"],
    ["Alquimia", "alquimia"],
    ["Animales", "animales"],
    ["Arte", "arte"],
    ["Atletismo", "atletismo"],
    ["Baile", "baile"],
    ["Buscar", "buscar"],
    ["Caligrafia", "caligrafia"],
    ["Callejear", "callejear"],
    ["Cerrajeria", "cerrajeria"],
    ["Ciencia", "ciencia"],
    ["Cocina", "cocina"],
    ["Comerciar", "comerciar"],
    ["Disfraz", "disfraz"],
    ["Escuchar", "escuchar"],
    ["Estilo", "estilo"],
    ["Etiqueta", "etiqueta"],
    ["Forja", "forja"],
    ["Frialdad", "frialdad"],
    ["Herbolaria", "herbolaria"],
    ["Historia", "historia"],
    ["Intimidar", "intimidar"],
    ["Joyeria", "joyeria"],
    ["Ley", "ley"],
    ["Mates", "mates"],
    ["Medicina", "medicina"],
    ["Memorizar", "memorizar"],
    ["Montar", "montar"],
    ["Musica", "musica"],
    ["Nadar", "nadar"],
    ["Navegacion", "navegacion"],
    ["Ocultarse", "ocultarse"],
    ["Ocultismo", "ocultismo"],
    ["Persuasion", "persuasion"],
    ["Rastrear", "rastrear"],
    ["Res. Dolor", "resdolor"],
    ["Robo", "robo"],
    ["Saltar", "saltar"],
    ["Sastreria", "sastreria"],
    ["Sigilo", "sigilo"],
    ["T. Manos", "tmanos"],
    ["Tasacion", "tasacion"],
    ["Tramperia", "tramperia"],
    ["Trepar", "trepar"],
    ["Venenos", "venenos"],
    ["Ver", "ver"],
  ];

  var i = 1;
  while(i <= 4) {
      this.getField("habilidad_novel" + i).setItems(lista_habilidades);
      i++;
  }