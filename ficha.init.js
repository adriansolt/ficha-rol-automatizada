// FUNCIONES

function actualizarDatosArma(numero_arma) {
    var arma_par = this.getField("arma" + numero_arma + "_par");
    var arma_esq = this.getField("arma" + numero_arma + "_esq");
    var arma_atq = this.getField("arma" + numero_arma + "_atq");
    var arma_iniciativa = this.getField("arma" + numero_arma + "_iniciativa");
    var arma_db = this.getField("arma" + numero_arma + "_db");
    var arma_calidad = this.getField("arma" + numero_arma + "_calidad");

    arma_atq.value = 5 * Number(arma_calidad.value);
    arma_par.value = 5 * Number(arma_calidad.value);
    arma_esq.value = 0;
    arma_iniciativa.value = 5 * Number(arma_calidad.value);
    arma_db.value = 10 * Number(arma_calidad.value);

    switch (this.getField("arma" + numero_arma).value) {
        case "Lazo":
            arma_db.value += 5;
            arma_iniciativa.value += +10;
            break;
        case "Red de gladiador":
            arma_db.value += 5;
            arma_iniciativa.value += 0;
            break;
        case "Combate desarmado":
            arma_db.value += 10;
            arma_iniciativa.value += 20;
            break;
        case "Jarrón":
            arma_db.value += 15;
            arma_iniciativa.value -= 10;
            break;
        case "Botella rota":
            arma_db.value += 15;
            arma_iniciativa.value += 10;
            break;
        case "Antorcha":
            arma_db.value += 20;
            arma_iniciativa.value -= 10;
            break;
        case "Palo de madera":
            arma_db.value += 20;
            arma_iniciativa.value += 0;
            break;
        case "Cadena":
            arma_db.value += 25;
            arma_iniciativa.value += 0;
            break;
        case "Cestus":
            arma_db.value += 25;
            arma_iniciativa.value += 10;
            break;
        case "Estilete":
            arma_db.value += 25;
            arma_iniciativa.value += 20;
            break;
        case "Silla":
            arma_db.value += 25;
            arma_iniciativa.value -= 20;
            break;
        case "Barra metálica":
            arma_db.value += 25;
            arma_iniciativa.value -= 5;
            break;
        case "Cuchillo de cocina":
            arma_db.value += 25;
            arma_iniciativa.value += 10;
            break;
        case "Garfio":
            arma_db.value += 30;
            arma_iniciativa.value += 10;
            break;
        case "Garrote":
            arma_db.value += 30;
            arma_iniciativa.value += 0;
            break;
        case "Daga":
            arma_db.value += 30;
            arma_iniciativa.value += 20;
            break;
        case "Vara":
            arma_db.value += 30;
            arma_iniciativa.value += 10;
            break;
        case "Daga de parada":
            arma_db.value += 30;
            arma_iniciativa.value += 15;
            break;
        case "Martillo":
            arma_db.value += 30;
            arma_iniciativa.value -= 20;
            break;
        case "Azada":
            arma_db.value += 30;
            arma_iniciativa.value -= 20;
            break;
        case "Hoz":
            arma_db.value += 35;
            arma_iniciativa.value -= 10;
            break;
        case "Arpón":
            arma_db.value += 35;
            arma_iniciativa.value -= 5;
            break;
        case "Florete":
            arma_db.value += 35;
            arma_iniciativa.value += 15;
            break;
        case "Guadaña":
            arma_db.value += 35;
            arma_iniciativa.value += 0;
            break;
        case "Jabalina":
            arma_db.value += 35;
            arma_iniciativa.value += 5;
            break;
        case "Látigo":
            arma_db.value += 35;
            arma_iniciativa.value -= 20;
            break;
        case "Hacha de leñador":
            arma_db.value += 40;
            arma_iniciativa.value -= 10;
            break;
        case "Pico":
            arma_db.value += 40;
            arma_iniciativa.value -= 20;
            break;
        case "Lanza":
            arma_db.value += 40;
            arma_iniciativa.value += 5;
            break;
        case "Espada corta":
            arma_db.value += 40;
            arma_iniciativa.value += 15;
            break;
        case "Mayal":
            arma_db.value += 40;
            arma_iniciativa.value += 0;
            break;
        case "Maza":
            arma_db.value += 40;
            arma_iniciativa.value += 0;
            break;
        case "Estoque":
            arma_db.value += 40;
            arma_iniciativa.value += 15;
            break;
        case "Tridente":
            arma_db.value += 40;
            arma_iniciativa.value -= 10;
            break;
        case "Hacha de mano":
            arma_db.value += 45;
            arma_iniciativa.value += 0;
            break;
        case "Sable":
            arma_db.value += 45;
            arma_iniciativa.value += 10;
            break;
        case "Martillo de guerra":
            arma_db.value += 50;
            arma_iniciativa.value -= 5;
            break;
        case "Cimitarra":
            arma_db.value += 50;
            arma_iniciativa.value -= 5;
            break;
        case "Espada larga":
            arma_db.value += 50;
            arma_iniciativa.value += 0;
            break;
        case "Espada ancha":
            arma_db.value += 55;
            arma_iniciativa.value -= 5;
            break;
        case "Maza pesada de combate":
            arma_db.value += 60;
            arma_iniciativa.value -= 15;
            break;
        case "Alabarda":
            arma_db.value += 60;
            arma_iniciativa.value -= 15;
            break;
        case "Espada bastarda":
            arma_db.value += 70;
            arma_iniciativa.value -= 30;
            break;
        case "Gran martillo de guerra":
            arma_db.value += 70;
            arma_iniciativa.value -= 35;
            break;
        case "Hacha de guerra":
            arma_db.value += 70;
            arma_iniciativa.value -= 30;
            break;
        case "Lanza de caballería":
            arma_db.value += 80;
            arma_iniciativa.value -= 30;
            break;
        case "Mangual":
            arma_db.value += 80;
            arma_iniciativa.value -= 50;
            break;
        case "Mandoble":
            arma_db.value += 90;
            arma_iniciativa.value -= 60;
            break;
        case "Hacha a dos manos":
            arma_db.value += 100;
            arma_iniciativa.value -= 70;
            break;
        case "Rodela":
            arma_db.value += 15;
            arma_iniciativa.value -= 15;
            arma_par.value += 10;
            arma_esq.value += 5;
            break;
        case "Escudo":
            arma_db.value += 20;
            arma_iniciativa.value -= 25;
            arma_par.value += 20;
            arma_esq.value += 10;
            break;
        case "Escudo corporal":
            arma_db.value += 25;
            arma_iniciativa.value -= 40;
            arma_par.value += 30;
            arma_esq.value += 15;
            break;
        default:
            break;
    }
}

function aplicarNegativosArmaPorTabla(numero_arma) {
    var arma_clase = this.getField("arma" + numero_arma + "_clase");
    if (arma_clase.value !== "Escudo") {
        var arma = this.getField("arma" + numero_arma);
        var arma_ataque = this.getField("arma" + numero_arma + "_atq");
        var arma_parada = this.getField("arma" + numero_arma + "_par");
        var tabla_arma = this.getField("tabla_" + numero_arma);
        var tabla_arma_clase = this.getField("tabla_" + numero_arma + "_clase");

        var similar = false;
        var encontrado = false;

        var j = 1;
        while (j <= 7 && !encontrado) {
            var tabla_arma = this.getField("tabla_arma" + j);
            var tabla_arma_clase = this.getField("tabla_arma" + j + "_clase");
            if (arma.value === tabla_arma.value ||
                (arma_clase.value === tabla_arma_clase.value && tabla_arma.value === tabla_arma.value.toUpperCase())
            ) {
                encontrado = true;
            } else if (arma_clase.value === tabla_arma_clase.value) {
                similar = true;
            }
            j++;
        }

        if (!encontrado) {
            if (similar) {
                arma_ataque.value -= 20;
                arma_parada.value -= 20;
            } else {
                arma_ataque.value -= 60;
                arma_parada.value -= 60;
            }
        }
    }
}

function aplicarNegativosArmaPorFueReq(numero_arma) {
    var arma_freq = this.getField("arma" + numero_arma + "_freq");
    var arma_ataque = this.getField("arma" + numero_arma + "_atq");
    var arma_parada = this.getField("arma" + numero_arma + "_par");

    var fue_req_diff = Number(arma_freq.value) - Number(fue_actual.value);
    if (fue_req_diff > 0) {
        arma_ataque.value -= 5 * fue_req_diff;
        arma_parada.value -= 5 * fue_req_diff;
    }
}

function actualizarPrimerArma() {
    var arma_ataque = this.getField("arma0_atq");
    var arma_parada = this.getField("arma0_par");
    var arma_iniciativa = this.getField("arma0_iniciativa");
    var arma_db = this.getField("arma0_db");
    var arma_df = this.getField("arma0_df");
    var calidad = this.getField("arma0_calidad");
    var check = this.getField("arma0_check");

    check.value = "Eq.";
    arma_df.textSize = 12;
    arma_ataque.value = 5 * Number(calidad.value);
    arma_parada.value = 5 * Number(calidad.value);
    arma_iniciativa.value = 20 + (5 * Number(calidad.value));
    arma_db.value = 10 + (5 * Number(calidad.value));
    arma_df.value = Math.ceil(Number(arma_db.value) + Number(fue_bono.value));

    if (!combate_desarmado) {
        arma_ataque.value -= 60;
        arma_parada.value -= 60;
    }

}

function actualizarDatosArmadura(numero_armadura) {
    var armadura = this.getField("armadura" + numero_armadura);
    var armadura_def = this.getField("armadura" + numero_armadura + "_def");
    var armadura_reqarm = this.getField("armadura" + numero_armadura + "_reqarm");
    var armadura_advertir = this.getField("armadura" + numero_armadura + "_advertir");
    var armadura_mov = this.getField("armadura" + numero_armadura + "_mov");
    var armadura_calidad = this.getField("armadura" + numero_armadura + "_calidad");
    switch (armadura.value) {
        case "Peto de cuero endurecido":
            armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (20 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Peto de cuero tachonado":
            armadura_def.value = 30 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (25 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Peto de metal":
            armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (40 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Camisola acolchada":
            armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Camisola de cuero":
            armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Camisola de piel":
            armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (10 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Camisola de anillas":
            armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (60 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-20 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa gabardina":
            armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Completa de cuero":
            armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (10 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa de mallas":
            armadura_def.value = 30 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (30 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa de piezas":
            armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (50 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-20 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa de metal":
            armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (70 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-30 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa con escamas":
            armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (80 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-30 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa de placas":
            armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (90 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-40 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa de placas pesada":
            armadura_def.value = 60 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (120 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-50 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Completa de campaña pesada":
            armadura_def.value = 70 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (150 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = Math.min(0, (-60 + (5 * Number(armadura_calidad.value))));
            armadura_advertir.value = 0;
            break;
        case "Yelmo de anillas":
            armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Yelmo frentón":
            armadura_def.value = 30 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Yelmo coronilla":
            armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Yelmo de cuero":
            armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = 0;
            break;
        case "Yelmo de maya":
            armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = 0;
            armadura_mov.value = 0;
            armadura_advertir.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
            break;
        case "Yelmo completo abierto":
            armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (5 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = 0;
            armadura_advertir.value = Math.min(0, (-20 + (5 * Number(armadura_calidad.value))));
            break;
        case "Yelmo completo cerrado":
            armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
            armadura_reqarm.value = Math.max(0, (10 - (5 * Number(armadura_calidad.value))));
            armadura_mov.value = 0;
            armadura_advertir.value = Math.min(0, (-30 + (5 * Number(armadura_calidad.value))));
            break;

        default:
            break;
    }
}

function aplicarNegativosArmaduraEquipada(num_armadura) {
    var diff_reqarm = Number(this.getField("final_llA").value) - Number(this.getField("armadura" + num_armadura + "_reqarm").value);
    var armadura_mov = this.getField("armadura" + num_armadura + "_mov");
    var armadura_advertir = this.getField("armadura" + num_armadura + "_advertir");
    var armadura_clase = this.getField("armadura" + num_armadura).value.split(" ")[0];

    if (armadura_clase === "Yelmo") {
        // Yelmos
        // Tiene req armadura suficiente
        if (diff_reqarm >= 0) {
            armadura_advertir.value = Math.min(0, Number(armadura_advertir.value) + (Math.floor(diff_reqarm / 50) * 10));
        } else {
            // No tiene req armadura suficiente
            armadura_advertir.value = Number(armadura_advertir.value) + diff_reqarm;

        }
        // Varias equipadas
        if ((yelmos_blandos_eq + yelmos_duros_eq) > 1) {
            armadura_advertir.value += -20;
        }
    } else {
        // Armaduras
        // Tiene req armadura suficiente
        if (diff_reqarm >= 0) {
            armadura_mov.value = Math.min(0, Number(armadura_mov.value) + (Math.floor(diff_reqarm / 50) * 10));
        } else {
            // No tiene req armadura suficiente
            armadura_mov.value = Number(armadura_mov.value) + diff_reqarm;
        }
        // Varias equipadas
        if ((armaduras_duras_eq + armaduras_blandas_eq) > 1) {
            armadura_mov.value += -20;
        }
    }
}


function log(k, v) {
    if (v === undefined) {
        console.println(k);
    } else {
        console.println(k + ": " + v);
    }
}

var lista_habilidades = [
    // ATLETICAS (0-5)
    "acrobacias",
    "atletismo",
    "montar",
    "nadar",
    "trepar",
    "saltar",
    // VIGOR (6-7)
    "frialdad",
    "resdolor",
    // PERCEPTIVAS (8-11)
    "escuchar",
    "ver",
    "buscar",
    "rastrear",
    // INTELECTUALES (12-21)
    "animales",
    "ciencia",
    "herbolaria",
    "historia",
    "ley",
    "medicina",
    "memorizar",
    "navegacion",
    "ocultismo",
    "tasacion",
    // SOCIALES (22-28)
    "comerciar",
    "callejear",
    "estilo",
    "intimidar",
    "etiqueta",
    "persuasion",
    "advsocial",
    // SUBTERFUGIO (29-35)
    "cerrajeria",
    "disfraz",
    "ocultarse",
    "robo",
    "sigilo",
    "tramperia",
    "venenos",
    // CREATIVAS (30-40)
    "arte",
    "baile",
    "forja",
    "musica",
    "tmanos",
    "alquimia",
    "sastreria",
    "joyeria",
    "caligrafia",
    "mates",
    "cocina",
];

// Atributos
var con_actual = this.getField("con_actual");
var fue_actual = this.getField("fue_actual");
var agi_actual = this.getField("agi_actual");
var con_bono = this.getField("con_bono");
var des_bono = this.getField("des_bono");
var agi_bono = this.getField("agi_bono");
var fue_bono = this.getField("fue_bono");

// Vida
var coste_vida = this.getField("coste_vida");
var md_vida = this.getField("md_vida");
var pd_vida = this.getField("pd_vida");
var base_vida = this.getField("base_vida");
var cat_vida = this.getField("cat_vida");
var esp_vida = this.getField("esp_vida");
var totales_vida = this.getField("totales_vida");
var actuales_vida = this.getField("actuales_vida");

// Combate
var coste_ataque = this.getField("coste_ataque");
var cat_ataque = this.getField("cat_ataque");
var coste_parada = this.getField("coste_parada");
var cat_parada = this.getField("cat_parada");
var coste_esquiva = this.getField("coste_esquiva");
var cat_esquiva = this.getField("cat_esquiva");

// Llevar armadura
var coste_llA = this.getField("coste_llA");
var md_llA = this.getField("md_llA");
var pd_llA = this.getField("pd_llA");
var base_llA = this.getField("base_llA");
var cat_llA = this.getField("cat_llA");
var esp_llA = this.getField("esp_llA");

// Iniciativa
var cat_iniciativa = this.getField("cat_iniciativa");
var esp_iniciativa = this.getField("esp_iniciativa");

// Resistencias
var res_fisica_esp = this.getField("res_fisica_esp");
var res_enfermedades_esp = this.getField("res_enfermedades_esp");
var res_venenos_esp = this.getField("res_venenos_esp");

var nivel = this.getField("nivel");

var categoria = this.getField("categoria");

var md_totales = this.getField("md_totales");
var md_actuales = this.getField("md_actuales");

var esp_animales = this.getField("esp_animales");
var esp_frialdad = this.getField("esp_frialdad");
var esp_persuasion = this.getField("esp_persuasion");
var esp_ver = this.getField("esp_ver");
var esp_escuchar = this.getField("esp_escuchar");

var reg_base = 0;
var reg_esp = 0;
var reg_final = 0;
var reg_normal = this.getField("reg_normal");
var reg_max = this.getField("reg_max");

var i = 0;
var j = 0;
var k = 0;

var valor_multiplo = this.getField("valor_multiplo").value;

while (j < lista_habilidades.length) {
    var habilidad = lista_habilidades[j];
    var esp_habilidad = this.getField("esp_" + habilidad);
    var pd_habilidad = this.getField("pd_" + habilidad);
    esp_habilidad.value = 0;
    j++;
}
esp_iniciativa.value = 0;
esp_vida.value = 0;
esp_llA.value = 0;
reg_esp = 0;
res_fisica_esp.value = 0;
res_enfermedades_esp.value = 0;
res_venenos_esp.value = 0;
j = 0;

var ctm = false;
var puntos_base = 0;

var lista_atr = ["agi", "con", "des", "fue", "int", "per", "pod", "vol"];
var lista_bonos = [
    -30,
    -25,
    -20,
    -20,
    -15,
    -15,
    -10,
    -5,
    -5,
    0,
    5,
    5,
    5,
    5,
    10,
    10,
    10,
    15,
    15,
    20,
];
var puntos_gastados = 6 + Math.floor(Number(nivel.value) / 2);
i = 0;
while (i < lista_atr.length) {
    var atr = lista_atr[i];
    var atr_actual = this.getField(atr + "_actual");
    var atr_base = this.getField(atr + "_base");
    var atr_puntos = this.getField(atr + "_puntos");
    // var atr_puntos = Number(atr_actual.value) - Number(atr_base.value);
    atr_actual.value = atr_base.value + atr_puntos.value;
    this.getField(atr + "_bono").value =
        lista_bonos[Number(atr_actual.value) - 1];
    puntos_gastados -= Number(atr_puntos.value);
    puntos_base += atr_base.value === 20 ? 24 : atr_base.value;
    i++;
}
i = 0;

this.getField("armadura0_def").value = Number(this.getField("armadura0_calidad").value) * 10;