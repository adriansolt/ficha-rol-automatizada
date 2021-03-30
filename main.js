import {
    PDFDocument
} from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';

var log = function (k, v) {
    if (v === undefined) {
        console.println(k);
    } else {
        console.println(k + ": " + v);
    }
}

// CALCULATE

var ventaja_coste = function (event) {
    var num = event.target.name.substr(7, 1);
    var ventaja = this.getField("ventaja" + num).value;
    if (
        ventaja === "Ambidiestría" ||
        ventaja === "Aprendizaje innato en llevar armadura" ||
        ventaja === "Dificil de matar" ||
        ventaja === "Fondos iniciales" ||
        ventaja === "Al límite" ||
        ventaja === "Armadura natural" ||
        ventaja === "Buena suerte" ||
        ventaja === "Reflejos rápidos" ||
        ventaja === "Regeneración mejorada" ||
        ventaja === "Resistencia física excepcional" ||
        ventaja === "Sueño ligero" ||
        ventaja === "Tocado por el destino"
    ) {
        event.value = 2;
    } else if (
        ventaja === "Aprendizaje innato en llevar armadura II" ||
        ventaja === "Conecedor de todas las materias" ||
        ventaja === "Dificil de matar II" ||
        ventaja === "Fondos iniciales II" ||
        ventaja === "Reflejos rápidos II" ||
        ventaja === "Regeneración mejorada II" ||
        ventaja === "Resistencia física excepcional II"
    ) {
        event.value = 4;
    } else if (
        ventaja === "Aprendizaje innato en llevar armadura III" ||
        ventaja === "Aprendizaje innato en un campo II" ||
        ventaja === "Dificil de matar III" ||
        ventaja === "Fondos iniciales III" ||
        ventaja === "Reflejos rápidos III" ||
        ventaja === "Regeneración mejorada III"
    ) {
        event.value = 6;
    } else if (
        ventaja.substr(0, 7) === "Apto en" ||
        ventaja.substr(0, 21) === "Aprendizaje innato en"
    ) {
        // apto en un campo (4)
        // apto en una materia (2)
        // apto en una materia II (4)

        // aprendizaje innato en materia (2)
        // aprendizaje innato en materia II (4)
        // aprendizaje innato en campo (4)
        // aprendizaje innato en campo II (6)
        var ventaja_lC = ventaja.toLowerCase();
        if (
            ventaja_lC.match("vigor") ||
            ventaja_lC.match("atleticas") ||
            ventaja_lC.match("perceptivas") ||
            ventaja_lC.match("subterfugio") ||
            ventaja_lC.match("intelectuales") ||
            ventaja_lC.match("sociales") ||
            ventaja_lC.match("creativas")
        ) {
            // apto en un campo (4)
            // aprendizaje innato en campo (4)
            // aprendizaje innato en campo II (6)

            if (ventaja_lC.match(" ii")) {
                event.value = 6;
            } else {
                event.value = 4;
            }
        } else {
            // apto en una materia (2)
            // apto en una materia II (4)
            // aprendizaje innato en materia (2)
            // aprendizaje innato en materia II (4)
            if (ventaja_lC.match(" ii")) {
                event.value = 4;
            } else {
                event.value = 2;
            }
        }
    } else {
        event.value = 0;
    }

}

var desventaja_coste = function (event) {
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
}

var main1 = function () {
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
    var con_bono = this.getField("con_bono");
    var des_bono = this.getField("des_bono");
    var fue_bono = this.getField("fue_bono");

    // Vida
    var coste_vida = this.getField("coste_vida");
    var md_vida = this.getField("md_vida");
    var pd_vida = this.getField("pd_vida");
    var base_vida = this.getField("base_vida");
    var esp_vida = this.getField("esp_vida");
    var totales_vida = this.getField("totales_vida");
    var actuales_vida = this.getField("actuales_vida");
    var mod_vida = this.getField("mod_vida");

    // Llevar armadura
    var md_llA = this.getField("md_llA");
    var esp_llA = this.getField("esp_llA");
    var base_llA = this.getField("base_llA");

    // Iniciativa
    var esp_iniciativa = this.getField("esp_iniciativa");
    var mod_iniciativa = this.getField("mod_iniciativa");

    // Resistencias
    var res_fisica_esp = this.getField("res_fisica_esp");
    var res_enfermedades_esp = this.getField("res_enfermedades_esp");
    var res_venenos_esp = this.getField("res_venenos_esp");
    var res_frio_esp = this.getField("res_frio_esp");
    var res_calor_esp = this.getField("res_calor_esp");

    var res_fisica_final = this.getField("res_fisica_final");
    var res_enfermedades_final = this.getField("res_enfermedades_final");
    var res_venenos_final = this.getField("res_venenos_final");
    var res_frio_final = this.getField("res_frio_final");
    var res_calor_final = this.getField("res_calor_final");

    var res_fisica_mod = this.getField("res_fisica_mod");
    var res_enfermedades_mod = this.getField("res_enfermedades_mod");
    var res_venenos_mod = this.getField("res_venenos_mod");
    var res_frio_mod = this.getField("res_frio_mod");
    var res_calor_mod = this.getField("res_calor_mod");

    var nivel = this.getField("nivel");

    var categoria = this.getField("categoria");

    var esp_animales = this.getField("esp_animales");
    var esp_frialdad = this.getField("esp_frialdad");
    var esp_persuasion = this.getField("esp_persuasion");
    var esp_intimidar = this.getField("esp_intimidar");
    var esp_ver = this.getField("esp_ver");
    var esp_escuchar = this.getField("esp_escuchar");
    var esp_buscar = this.getField("esp_buscar");

    var valor_multiplo = this.getField("valor_multiplo").value;

    var reg_base = 0;
    var reg_esp = 0;
    var reg_final = 0;
    var reg_normal = this.getField("reg_normal");
    var reg_max = this.getField("reg_max");
    var armadura_vel = this.getField("armadura_vel");

    var md_totales = this.getField("md_totales");
    var md_actuales = this.getField("md_actuales");
    md_actuales.value = Number(md_totales.value);

    var mano_dominante = this.getField("mano_dominante");
    var ambidiestria = false;

    var i = 0;
    var j = 0;
    var k = 0;

    var ventaja_limite = false;

    // Ventajas
    i = 1;
    var ventajas_list = [];
    while (i < 8) {
        var ventaja = this.getField("ventaja" + i);
        if (ventaja.value) {
            ventajas_list.push(ventaja.value);
        }
        i++;
    }

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
    res_frio_esp.value = 0;
    res_calor_esp.value = 0;
    armadura_vel.value = 0;

    j = 0;

    var ctm = false;
    var puntos_base = 0;

    var lista_atr = ["agi", "con", "des", "fue", "int", "per", "vol"];
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

    this.getField("armadura0_def").value =
        Number(this.getField("armadura0_calidad").value) * 10;

    // Categorias base
    this.getField("puntos_base").value = 70 - puntos_base;

    // Nivel
    var base = Number(nivel.value) == 0 ? 80 : 100;
    md_totales.value = Number(nivel.value) * 10 + base;

    // Categoria

    switch (categoria.value) {
        // Coste Vida
        // Cat. Vida
        // Cat. Iniciativa
        // Coste LL.A.
        // Coste Parada
        // Cat. Atq
        // Cat. Esq
        // Cat. Par
        // Cat. Ll.A.
        case "Guerrero":
            actualizarDatosCategoria(5, 4, 5, 1, 2, 5, 0, 5, 10);
            break;
        case "Guerrero Acróbata":
            actualizarDatosCategoria(10, 2, 10, 2, 3, 5, 5, 0, 0);
            break;
        case "Paladín":
            actualizarDatosCategoria(7, 3, 5, 2, 2, 0, 0, 5, 10);
            break;
        case "Paladín Oscuro":
            actualizarDatosCategoria(7, 3, 5, 2, 2, 5, 0, 0, 5);
            break;
        case "Explorador":
            actualizarDatosCategoria(10, 2, 5, 2, 2, 5, 0, 0, 0);
            break;
        case "Sombra":
            actualizarDatosCategoria(10, 1, 10, 2, 3, 5, 5, 0, 0);
            break;
        case "Ladrón":
            actualizarDatosCategoria(10, 1, 10, 3, 3, 0, 5, 0, 0);
            break;
        case "Asesino":
            actualizarDatosCategoria(10, 1, 10, 3, 3, 5, 0, 0, 0);
            break;
        case "Ilusionista":
            actualizarDatosCategoria(10, 1, 5, 3, 3, 0, 5, 0, 0);
            break;
        case "Novel":
            actualizarDatosCategoria(10, 1, 5, 2, 2, 0, 0, 0, 0);
            break;
        default:
            break;
    }

    var actualizarDatosCategoria = function (
        coste_vida_v,
        cat_vida_v,
        cat_iniciativa_v,
        coste_llA_v,
        coste_parada_v,
        cat_ataque_v,
        cat_esquiva_v,
        cat_parada_v,
        cat_llA_v
    ) {
        coste_vida.value = coste_vida_v;
        this.getField("cat_vida").value = cat_vida_v * Math.floor(nivel.value / 2);
        this.getField("cat_iniciativa").value =
            cat_iniciativa_v * Math.floor(nivel.value / 2);
        this.getField("coste_llA").value = coste_llA_v;
        this.getField("coste_parada").value = coste_parada_v;
        this.getField("cat_ataque").value =
            cat_ataque_v * Math.floor(nivel.value / 2);
        this.getField("cat_esquiva").value =
            cat_esquiva_v * Math.floor(nivel.value / 2);
        this.getField("cat_parada").value =
            cat_parada_v * Math.floor(nivel.value / 2);
        this.getField("cat_llA").value = cat_llA_v * Math.floor(nivel.value / 2);
    }


    i = 0;
    while (i < ventajas_list.length) {
        var ventaja = ventajas_list[i];
        if (ventaja.match("Apto en")) {
            var ventaja_formateada = ventaja.substr(8).replace(/\./g, "").toLowerCase();
            // t manos ii
            var ventaja_sin_espacios;
            var ventaja_nombre;
            if (ventaja_formateada.substr(ventaja_formateada.length - 2) === "ii") {
                ventaja_sin_espacios = ventaja_formateada.replace(/\s+/g, "");
                // tmanosii
                ventaja_nombre = ventaja_sin_espacios.substr(
                    0,
                    ventaja_sin_espacios.length - 2
                );
                // tmanos
                var ventaja_field = this.getField("coste_" + ventaja_nombre);
                ventaja_field.value = 1;
            } else {
                // t manos
                // intelectuales
                ventaja_nombre = ventaja_formateada.replace(/\s+/g, "");
                var i_primera_ventaja = null;
                var i_ultima_ventaja = null;
                switch (ventaja_nombre) {
                    case "vigor":
                        i_primera_ventaja = 6;
                        i_ultima_ventaja = 7;
                        break;
                    case "atleticas":
                        i_primera_ventaja = 0;
                        i_ultima_ventaja = 5;
                        break;
                    case "perceptivas":
                        i_primera_ventaja = 8;
                        i_ultima_ventaja = 11;
                        break;
                    case "subterfugio":
                        i_primera_ventaja = 29;
                        i_ultima_ventaja = 35;
                        break;
                    case "intelectuales":
                        i_primera_ventaja = 12;
                        i_ultima_ventaja = 21;
                        break;
                    case "sociales":
                        i_primera_ventaja = 22;
                        i_ultima_ventaja = 28;
                        break;
                    case "creativas":
                        i_primera_ventaja = 30;
                        i_ultima_ventaja = 40;
                        break;
                    default:
                        break;
                }
                if (i_primera_ventaja !== null || i_ultima_ventaja !== null) {
                    // intelectuales
                    while (i_primera_ventaja <= i_ultima_ventaja) {
                        var coste_ventaja = this.getField(
                            "coste_" + lista_habilidades[i_primera_ventaja]
                        );
                        coste_ventaja.value = Number(coste_ventaja.value) === 3 ? 2 : 1;
                        i_primera_ventaja++;
                    }
                } else {
                    // tmanos
                    var coste_ventaja = this.getField("coste_" + ventaja_nombre);
                    if (coste_ventaja) {
                        coste_ventaja.value = Number(coste_ventaja.value) === 3 ? 2 : 1;
                    }
                }
            }
        } else if (
            ventaja.match("Aprendizaje innato en") &&
            !ventaja.match("Aprendizaje innato en llevar armadura")
        ) {
            var ventaja_formateada = ventaja
                .substr(22)
                .replace(/\./g, "")
                .toLowerCase();
            // t manos
            // t manos ii
            // intelectuales
            // intelectuales ii
            var i_primera_ventaja = null;
            var i_ultima_ventaja = null;
            switch (ventaja_formateada.split(" ")[0]) {
                case "vigor":
                    i_primera_ventaja = 6;
                    i_ultima_ventaja = 7;
                    break;
                case "atleticas":
                    i_primera_ventaja = 0;
                    i_ultima_ventaja = 5;
                    break;
                case "perceptivas":
                    i_primera_ventaja = 8;
                    i_ultima_ventaja = 11;
                    break;
                case "subterfugio":
                    i_primera_ventaja = 29;
                    i_ultima_ventaja = 35;
                    break;
                case "intelectuales":
                    i_primera_ventaja = 12;
                    i_ultima_ventaja = 21;
                    break;
                case "sociales":
                    i_primera_ventaja = 22;
                    i_ultima_ventaja = 28;
                    break;
                case "creativas":
                    i_primera_ventaja = 30;
                    i_ultima_ventaja = 40;
                    break;
                default:
                    break;
            }
            if (i_primera_ventaja !== null || i_ultima_ventaja !== null) {
                // intelectuales
                var incr = 1 * Number(nivel.value);
                if (ventaja_formateada.substr(ventaja_formateada.length - 2) === "ii") {
                    incr = incr * 2;
                }
                while (i_primera_ventaja <= i_ultima_ventaja) {
                    var esp_ventaja = this.getField(
                        "esp_" + lista_habilidades[i_primera_ventaja]
                    );
                    esp_ventaja.value += Number(esp_ventaja.value) + incr;
                    i_primera_ventaja++;
                }
            } else {
                // tmanos
                var incr = 2 * Number(nivel.value);
                var ventaja_nombre = ventaja_formateada.replace(/\s+/g, "");
                if (ventaja_formateada.substr(ventaja_formateada.length - 2) === "ii") {
                    incr = incr * 2;
                    ventaja_nombre = ventaja_nombre.substr(0, ventaja_nombre.length - 2);
                }
                var esp_ventaja = this.getField("esp_" + ventaja_nombre);
                if (esp_ventaja) {
                    esp_ventaja.value = Number(esp_ventaja.value) + incr;
                }
            }
        } else {
            switch (ventaja) {
                case "Ambidiestría":
                    ambidiestria = true;
                    break;
                case "Al límite":
                    ventaja_limite = true;
                    break;
                case "Aprendizaje innato en llevar armadura":
                    esp_llA.value = 5 * Math.floor(Number(nivel.value / 2));
                    break;
                case "Aprendizaje innato en llevar armadura II":
                    esp_llA.value = 10 * Math.floor(Number(nivel.value / 2));
                    break;
                case "Aprendizaje innato en llevar armadura III":
                    esp_llA.value = 15 * Math.floor(Number(nivel.value / 2));
                    break;
                case "Armadura natural":
                    this.getField("armadura0_def").value += 20;
                    break;
                case "Buena suerte":
                    break;
                case "Conecedor de todas las materias":
                    ctm = true;
                    break;
                case "Dificil de matar":
                    esp_vida.value = 2 * (nivel.value / 2);
                    break;
                case "Dificil de matar II":
                    esp_vida.value = 4 * (nivel.value / 2);
                    break;
                case "Dificil de matar III":
                    esp_vida.value = 6 * (nivel.value / 2);
                    break;
                case "Fondos iniciales":
                    this.getField("oro").value = 2000;
                    break;
                case "Fondos iniciales II":
                    this.getField("oro").value = 5000;
                    break;
                case "Fondos iniciales III":
                    this.getField("oro").value = 10000;
                    break;
                case "Reflejos rápidos":
                    esp_iniciativa.value = Number(esp_iniciativa.value) + 25;
                    break;
                case "Reflejos rápidos II":
                    esp_iniciativa.value = Number(esp_iniciativa.value) + 45;
                    break;
                case "Reflejos rápidos III":
                    esp_iniciativa.value = Number(esp_iniciativa.value) + 60;
                    break;
                case "Regeneración mejorada":
                    reg_esp = Number(reg_esp) + 2;
                    break;
                case "Regeneración mejorada II":
                    reg_esp = Number(reg_esp) + 4;
                    break;
                case "Regeneración mejorada III":
                    reg_esp = Number(reg_esp) + 6;
                    break;
                case "Resistencia física excepcional":
                    res_fisica_esp.value = Number(res_fisica_esp.value) + 25;
                    res_enfermedades_esp.value = Number(res_enfermedades_esp.value) + 25;
                    res_venenos_esp.value = Number(res_venenos_esp.value) + 25;
                    break;
                case "Resistencia física excepcional II":
                    res_fisica_esp.value = Number(res_fisica_esp.value) + 50;
                    res_enfermedades_esp.value = Number(res_enfermedades_esp.value) + 50;
                    res_venenos_esp.value = Number(res_venenos_esp.value) + 50;
                    break;
                case "Sueño ligero":
                case "Tocado por el destino":
                default:
                    break;
            }
        }
        i++;
    }
    // mano_dominante.display = ambidiestria ? 1 : 0;
    puntos_gastados =
        puntos_gastados -
        Number(this.getField("ventaja1_coste").value) -
        Number(this.getField("ventaja2_coste").value) -
        Number(this.getField("ventaja3_coste").value) -
        Number(this.getField("ventaja4_coste").value) -
        Number(this.getField("ventaja5_coste").value) -
        Number(this.getField("ventaja6_coste").value) -
        Number(this.getField("ventaja7_coste").value) +
        Number(this.getField("desventaja1_coste").value) +
        Number(this.getField("desventaja2_coste").value) +
        Number(this.getField("desventaja3_coste").value);

    this.getField("puntos_creacion").value = Number(puntos_gastados);

    var lista_vida = [
        1,
        3,
        4,
        7,
        8,
        10,
        11,
        13,
        14,
        16,
        17,
        18,
        19,
        21,
        22,
        23,
        24,
        26,
        28,
        30,
    ];

    pd_vida.value = Number(md_vida.value) * valor_multiplo;

    base_vida.value =
        lista_vida[Number(con_actual.value) - 1] +
        Math.floor(Number(pd_vida.value) / Number(coste_vida.value));
    // biolimite.value = ( -1) * Number(con_actual.value);

    totales_vida.value =
        Number(base_vida.value) +
        Number(esp_vida.value) +
        Number(mod_vida.value) +
        Number(this.getField("cat_vida").value);

    var op_vida_1 = this.getField("op_vida_1");
    var op_vida_2 = this.getField("op_vida_2");

    if (
        Number(op_vida_1).value !== 0 &&
        op_vida_1.value !== "-" &&
        op_vida_1.value !== "+"
    ) {
        actuales_vida.value = Number(actuales_vida.value) + Number(op_vida_1.value);
    }
    if (
        Number(op_vida_2.value) !== 0 &&
        op_vida_2.value !== "-" &&
        op_vida_2.value !== "+"
    ) {
        actuales_vida.value = Number(actuales_vida.value) + Number(op_vida_2.value);
    }

    if (actuales_vida.value > totales_vida.value) {
        actuales_vida.value = totales_vida.value;
    } else if (actuales_vida.value < 0) {
        actuales_vida.value = 0;
    }
    // else if (actuales_vida.value < biolimite.value) {
    //  actuales_vida.value = biolimite.value;
    // }

    var defensa_ataque = ["parada", "esquiva", "ataque"];
    i = 0;
    while (i < defensa_ataque.length) {
        var c = defensa_ataque[i];
        var pd_defatq = this.getField("pd_" + c);
        var md_defatq = this.getField("md_" + c);
        var base_defatq = this.getField("base_" + c);
        // MD
        var md_restantes =
            md_totales.value / 2 -
            this.getField("md_" + defensa_ataque[(i + 1) % defensa_ataque.length])
            .value -
            this.getField("md_" + defensa_ataque[(i + 2) % defensa_ataque.length])
            .value;
        if (Number(md_defatq.value) > Number(md_restantes)) {
            md_defatq.value = Number(md_restantes);
        }

        if (Number(md_defatq.value) > md_totales.value / 4) {
            md_defatq.value = Math.floor(md_totales.value / 4);
        }

        //PD
        pd_defatq.value = md_defatq.value * valor_multiplo;

        // BASE
        if (pd_defatq.value && this.getField("coste_" + c).value > 0) {
            base_defatq.value = Math.floor(
                pd_defatq.value / this.getField("coste_" + c).value
            );
        } else {
            base_defatq.value = 0;
        }
        i++;
    }

    var limite_md_llA = Number(md_totales.value) / 10;
    if (Number(md_llA.value) > Number(limite_md_llA)) {
        md_llA.value = Number(limite_md_llA);
    }

    this.getField("pd_llA").value = Number(md_llA.value) * valor_multiplo;

    // PD Actuales

    var lista_habilidades_atributos = [
        // ATLETICAS
        "agi", //  acrobacias
        "agi", //  atletismo
        "agi", //  montar
        "agi", //  nadar
        "agi", //  trepar
        "fue", //  saltar

        // VIGOR
        "vol", //  frialdad
        "vol", //  resdolor

        // PERCEPTIVAS
        "per", //  escuchar
        "per", //  ver
        "per", //  buscar
        "per", //  rastrear

        // INTELECTUALES
        "int", //  animales
        "int", //  ciencia
        "int", //  herbolaria
        "int", //  historia
        "int", //  ley
        "int", //  medicina
        "int", //  memorizar
        "int", //  navegacion
        "int", //  ocultismo
        "per", //  tasacion

        // SOCIALES
        "int", //  comerciar
        "int", //  callejear
        "vol", //  estilo
        "vol", //  intimidar
        "int", //  etiqueta
        "vol", //  persuasion
        "vol", //  advsocial

        // SUBTERFUGIO
        "des", //  cerrajeria
        "des", //  disfraz
        "per", //  ocultarse
        "des", //  robo
        "agi", //  sigilo
        "per", //  tramperia
        "int", //  venenos

        // CREATIVAS
        "des", //  arte
        "agi", //  baile
        "des", //  forja
        "per", //  musica
        "des", //  tmanos
        "int", //  alquimia
        "des", //  sastreria
        "des", //  joyeria
        "des", //  caligrafia
        "int", //  mates
        "des", //  cocina

        // FUE => 1
        // AGI => 7
        // DES => 10

        // VOL => 6
        // PER => 8
        // INT => 15
    ];

    // Regeneracion
    if (Number(con_actual.value) >= 1 && Number(con_actual.value) <= 4) {
        reg_base = 0;
    } else if (Number(con_actual.value) >= 5 && Number(con_actual.value) <= 14) {
        reg_base = 1;
    } else if (Number(con_actual.value) >= 15 && Number(con_actual.value) <= 19) {
        reg_base = 2;
    } else {
        reg_base = 3;
    }

    reg_final = Number(reg_esp) + Number(reg_base);

    switch (reg_final) {
        case 1:
            reg_max.value = 2;
            reg_normal.value = 1;
            break;
        case 2:
            reg_max.value = 4;
            reg_normal.value = 2;
            break;
        case 3:
            reg_max.value = 6;
            reg_normal.value = 3;
            break;
        case 4:
            reg_max.value = 8;
            reg_normal.value = 4;
            break;
        case 5:
            reg_max.value = 10;
            reg_normal.value = 5;
            break;
        case 6:
            reg_max.value = 15;
            reg_normal.value = 6;
            break;
        case 7:
            reg_max.value = 20;
            reg_normal.value = 10;
            break;
        case 8:
            reg_max.value = 50;
            reg_normal.value = 20;
            break;
        case 9:
            reg_max.value = 100;
            reg_normal.value = 40;
            break;
        default:
            break;
    }

    // Presencia
    var presencia = this.getField("presencia");
    presencia.value = 25 + 5 * nivel.value;

    // Resistencias
    res_fisica_final.value =
        presencia.value +
        Number(con_bono.value) +
        Number(res_fisica_esp.value) +
        Number(res_fisica_mod.value);
    res_enfermedades_final.value =
        presencia.value +
        Number(con_bono.value) +
        Number(res_enfermedades_esp.value) +
        Number(res_enfermedades_mod.value);
    res_venenos_final.value =
        presencia.value +
        Number(con_bono.value) +
        Number(res_venenos_esp.value) +
        Number(res_venenos_mod.value);
    res_frio_final.value =
        presencia.value +
        Number(con_bono.value) +
        Number(res_frio_esp.value) +
        Number(res_frio_mod.value);
    res_calor_final.value =
        presencia.value +
        Number(con_bono.value) +
        Number(res_calor_esp.value) +
        Number(res_calor_mod.value);

    // Carga

    var carga_normal = this.getField("carga_normal");
    var carga_max = this.getField("carga_max");

    switch (fue_actual.value) {
        case 1:
            carga_normal.value = "< 1";
            carga_max.value = 1;
            break;
        case 2:
            carga_normal.value = 1;
            carga_max.value = 2;
            break;
        case 3:
            carga_normal.value = 3;
            carga_max.value = 7;
            break;
        case 4:
            carga_normal.value = 5;
            carga_max.value = 10;
            break;
        case 5:
            carga_normal.value = 8;
            carga_max.value = 16;
            break;
        case 6:
            carga_normal.value = 10;
            carga_max.value = 20;
            break;
        case 7:
            carga_normal.value = 12;
            carga_max.value = 30;
            break;
        case 8:
            carga_normal.value = 15;
            carga_max.value = 40;
            break;
        case 9:
            carga_normal.value = 20;
            carga_max.value = 50;
            break;
        case 10:
            carga_normal.value = 25;
            carga_max.value = 60;
            break;
        case 11:
            carga_normal.value = 30;
            carga_max.value = 100;
            break;
        case 12:
            carga_normal.value = 40;
            carga_max.value = 120;
            break;
        case 13:
            carga_normal.value = 50;
            carga_max.value = 150;
            break;
        case 14:
            carga_normal.value = 60;
            carga_max.value = 180;
            break;
        case 15:
            carga_normal.value = 70;
            carga_max.value = 230;
            break;
        case 16:
            carga_normal.value = 80;
            carga_max.value = 260;
            break;
        case 17:
            carga_normal.value = 90;
            carga_max.value = 300;
            break;
        case 18:
            carga_normal.value = 100;
            carga_max.value = 350;
            break;
        case 19:
            carga_normal.value = 125;
            carga_max.value = 400;
            break;
        case 20:
            carga_normal.value = 150;
            carga_max.value = 420;
            break;
        default:
            break;
    }

    // Tabla de Armas

    var combate_desarmado = false;

    var num_tablas = 7;
    i = 1;
    while (i <= 7 && this.getField("tabla_arma" + i).value !== "-") {
        var tabla_arma_clase_i = this.getField("tabla_arma" + i + "_clase");
        var tabla_arma_clase_i_md = this.getField("tabla_arma" + i + "_md");
        var tabla_arma_i = this.getField("tabla_arma" + i);
        if (!combate_desarmado && tabla_arma_clase_i.value === "Sin armas") {
            combate_desarmado = true;
        }
        var encontrado = false;
        var similar = false;
        for (j = 1; j < i && !encontrado; j++) {
            var tabla_arma_j = this.getField("tabla_arma" + j);
            var tabla_arma_clase_j = this.getField("tabla_arma" + j + "_clase");
            if (tabla_arma_i.value === tabla_arma_i.value.toUpperCase()) {
                tabla_arma_clase_i_md.value = 10;
                encontrado = true;
            } else if (tabla_arma_clase_i.value === tabla_arma_clase_j.value) {
                // clases iguales
                if (
                    tabla_arma_i.value === tabla_arma_j.value ||
                    tabla_arma_j.value === tabla_arma_j.value.toUpperCase()
                ) {
                    // tabla de arma_clase
                    tabla_arma_clase_i_md.value = 0;
                    encontrado = true;
                } else {
                    // similar
                    similar = true;
                    tabla_arma_clase_i_md.value = 2;
                }
            }
        }
        if (i > 1) {
            if (!encontrado) {
                tabla_arma_clase_i_md.value = similar ? 2 : 4;
            }
            if (this.getField("categoria").value === "Guerrero") {
                tabla_arma_clase_i_md.value = tabla_arma_clase_i_md.value / 2;
            }
        }
        i++;
    }

    // Armas
    /*
    Llevar un arma pequeña -> -10
    Llevar un arma mediana -> -15
    Llevar un arma grande -> -20
    Llevar un arma con dos manos -> 0
    
    Llevar dos armas pequeñas -> (-10-10) -> -20
    Llevar dos armas medianas -> (-15-15) -> -30
    Llevar dos armas grandes -> (-20-20) -> -40
    
    Usar arma no dominante -> -30
    
    Realizar ataque adicional -> -25
    
    ----
    Usar daga con una mano
    Atacar con mano dominante -> -10
    Atacar con mano no dominante -> -40
    Atacar usando ambas manos -> 0
    
    Llevar dos dagas -> -20 (mano dominante) y -50 (mano no dominante)
    Atacar con ambas sin ambidiestria -> -20 (mano dominante) y -75 (mano no dominante)
    Atacar con ambas con ambidiestria -> -20 (mano dominante) y -45 (otra mano dominante)
    ----
    Usar maza grande con una mano
    Atacar con mano dominante -> -20
    Atacar con mano no dominante -> -50
    Atacar usando ambas manos -> 0
    
    Llevar dos mazas grandes -> -40 (mano dominante) y -70 (mano no dominante)
    Atacar con ambas sin ambidiestria -> -40 (mano dominante) y -95 (mano no dominante)
    Atacar con ambas con ambidiestria -> -40 (mano dominante) y -65 (otra mano dominante)
    ----
    */

    var f = this.getField("arma1");

    // f.setAction("Format", "javascript:console.println(\"abc\");");

    var equipo_parada_i = this.getField("equipo_parada_i");
    var equipo_parada_d = this.getField("equipo_parada_d");
    var equipo_esquiva = this.getField("equipo_esquiva");
    var equipo_ataque_i = this.getField("equipo_ataque_i");
    var equipo_ataque_d = this.getField("equipo_ataque_d");
    var iniciativa_total_arma = this.getField("arma_vel");
    equipo_parada_i.value = 0;
    equipo_parada_d.value = 0;
    equipo_esquiva.value = 0;
    equipo_ataque_i.value = 0;
    equipo_ataque_d.value = 0;
    iniciativa_total_arma.value = 0;
    var num_checks_armas = 0;
    var manos_ocupadas = false;
    var mano_d_ocupada = false;
    var mano_i_ocupada = false;
    var manos_libres = true;
    i = 0;
}

var arma_check = function (event) {
    var i = event.target.name.substr(4, 1);

    var arma = this.getField("arma" + i);
    var arma_par = this.getField("arma" + i + "_par");
    var arma_esq = this.getField("arma" + i + "_esq");
    var arma_atq = this.getField("arma" + i + "_atq");
    var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
    var arma_db = this.getField("arma" + i + "_db");
    var arma_df = this.getField("arma" + i + "_df");
    var arma_calidad = this.getField("arma" + i + "_calidad");
    var arma_freq = this.getField("arma" + i + "_freq");
    var arma_clase = this.getField("arma" + i + "_clase");
    var arma_especial = this.getField("arma" + i + "_especial");
    var arma_tam = this.getField("arma" + i + "_tam");
    var arma_fue_bono = this.getField("arma" + i + "_fue_bono");

    if (
        (mano_d_ocupada && (event.value === "D" || event.value === "D+I")) ||
        (mano_i_ocupada && (event.value === "I" || event.value === "D+I")) ||
        (manos_ocupadas) ||
        (arma_clase.value === "A. de proyectil") && (event.value === "I" || event.value === "D")) {
        event.value = "-";
    }

    if (arma.value !== "-") {
        arma_atq.value = 0;
        arma_par.value = 0;
        arma_esq.value = 0;
        arma_db.value = 0;
        arma_iniciativa.value = 0;
        switch (arma.value) {
            case "Lazo":
                arma_db.value += 5;
                arma_iniciativa.value += 10;
                arma_freq.value = 8;
                arma_clase.value = "Cuerda";
                arma_tam.value = "S";
                arma_especial.value = "Presa 18";
                break;
            case "Red de gladiador":
                arma_db.value += 5;
                arma_iniciativa.value += 0;
                arma_freq.value = 4;
                arma_clase.value = "Cuerda";
                arma_tam.value = "M";
                arma_especial.value = "Presa 20";
                break;
            case "Combate desarmado":
                arma_db.value += 10;
                arma_iniciativa.value += 20;
                arma_freq.value = "-";
                arma_tam.value = "-";
                arma_clase.value = "Sin armas";
                arma_especial.value = "Precisa";
                break;
            case "Jarrón":
                arma_db.value += 15;
                arma_iniciativa.value -= 10;
                arma_freq.value = 8;
                arma_clase.value = "Maza";
                arma_tam.value = "S";
                break;
            case "Botella rota":
                arma_db.value += 15;
                arma_iniciativa.value += 10;
                arma_freq.value = 6;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                break;
            case "Antorcha":
                arma_db.value += 20;
                arma_iniciativa.value -= 10;
                arma_freq.value = 8;
                arma_clase.value = "Maza";
                arma_tam.value = "S";
                break;
            case "Palo de madera":
                arma_db.value += 20;
                arma_iniciativa.value += 0;
                arma_freq.value = 8;
                arma_clase.value = "Maza";
                arma_tam.value = "S";
                break;
            case "Cadena":
                arma_db.value += 25;
                arma_iniciativa.value += 0;
                arma_freq.value = 12;
                arma_clase.value = "Cuerda";
                arma_tam.value = "M";
                arma_especial.value = "Presa 16";
                break;
            case "Estilete":
                arma_db.value += 25;
                arma_iniciativa.value += 20;
                arma_freq.value = 6;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                arma_especial.value = "Precisa";
                break;
            case "Silla":
                arma_db.value += 25;
                arma_iniciativa.value -= 20;
                arma_freq.value = 10;
                arma_clase.value = "Mandoble";
                arma_tam.value = "M";
                break;
            case "Barra metálica":
                arma_db.value += 25;
                arma_iniciativa.value -= 5;
                arma_freq.value = 10;
                arma_clase.value = "Maza";
                arma_tam.value = "M";
                break;
            case "Cestus":
                arma_freq.value = 6;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                arma_especial.value = "Precisa";
                arma_db.value += 25;
                arma_iniciativa.value += 10;
                break;
            case "Cuchillo de cocina":
                arma_db.value += 25;
                arma_iniciativa.value += 10;
                arma_freq.value = 8;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                break;
            case "Garrote":
                arma_db.value += 30;
                arma_iniciativa.value += 0;
                arma_freq.value = 10;
                arma_clase.value = "Maza";
                arma_tam.value = "S";
                break;
            case "Daga":
                arma_db.value += 30;
                arma_iniciativa.value += 20;
                arma_freq.value = 8;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                arma_especial.value = "Precisa";
                break;
            case "Vara":
                arma_db.value += 30;
                arma_iniciativa.value += 10;
                arma_freq.value = 8;
                arma_clase.value = "Asta";
                arma_tam.value = "L";
                break;
            case "Garfio":
                arma_db.value += 30;
                arma_iniciativa.value += 10;
                arma_freq.value = 8;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                break;
            case "Daga de parada":
                arma_db.value += 30;
                arma_iniciativa.value += 15;
                arma_freq.value = 6;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                arma_especial.value = "Precisa";
                break;
            case "Azada":
                arma_db.value += 30;
                arma_iniciativa.value -= 20;
                arma_freq.value = 8;
                arma_clase.value = "Hacha";
                arma_tam.value = "M";
                break;
            case "Hoz":
                arma_db.value += 35;
                arma_iniciativa.value -= 10;
                arma_freq.value = 8;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                break;
            case "Arpón":
                arma_db.value += 35;
                arma_iniciativa.value -= 5;
                arma_freq.value = 10;
                arma_clase.value = "Asta";
                arma_tam.value = "M";
                break;
            case "Florete":
                arma_db.value += 35;
                arma_iniciativa.value += 15;
                arma_freq.value = 6;
                arma_clase.value = "Espada";
                arma_especial.value = "Precisa";
                arma_tam.value = "S";
                break;
            case "Guadaña":
                arma_db.value += 35;
                arma_iniciativa.value += 0;
                arma_freq.value = 10;
                arma_clase.value = "Asta";
                arma_tam.value = "L";
                break;
            case "Jabalina":
                arma_db.value += 35;
                arma_iniciativa.value += 5;
                arma_freq.value = 8;
                arma_clase.value = "Asta";
                arma_tam.value = "L";
                break;
            case "Látigo":
                arma_db.value += 35;
                arma_iniciativa.value -= 20;
                arma_freq.value = 8;
                arma_clase.value = "Cuerda";
                arma_tam.value = "M";
                arma_especial.value = "Presa 16";
                break;
            case "Tridente":
                arma_db.value += 40;
                arma_iniciativa.value -= 10;
                arma_freq.value = 12;
                arma_clase.value = "Asta";
                arma_tam.value = "L";
                break;
            case "Hacha de leñador":
                arma_db.value += 40;
                arma_iniciativa.value -= 10;
                arma_freq.value = 10;
                arma_clase.value = "Hacha";
                arma_tam.value = "M";
                break;
            case "Pico":
                arma_db.value += 40;
                arma_iniciativa.value -= 20;
                arma_freq.value = 10;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                break;
            case "Lanza":
                arma_db.value += 40;
                arma_iniciativa.value += 5;
                arma_freq.value = 8;
                arma_clase.value = "Asta";
                break;
            case "Estoque":
                arma_db.value += 40;
                arma_iniciativa.value += 15;
                arma_freq.value = 8;
                arma_clase.value = "Espada";
                arma_especial.value = "Precisa";
                break;
            case "Espada corta":
                arma_db.value += 40;
                arma_iniciativa.value += 15;
                arma_freq.value = 8;
                arma_clase.value = "Arma corta";
                arma_tam.value = "S";
                arma_especial.value = "Precisa";
                break;
            case "Mayal":
            case "Maza":
                arma_db.value += 40;
                arma_iniciativa.value += 0;
                arma_freq.value = 12;
                arma_clase.value = "Maza";
                arma_tam.value = "M";
                break;
            case "Hacha de mano":
                arma_db.value += 45;
                arma_iniciativa.value += 0;
                arma_freq.value = 10;
                arma_clase.value = "Hacha";
                arma_tam.value = "M";
                break;
            case "Sable":
                arma_db.value += 45;
                arma_iniciativa.value += 10;
                arma_freq.value = 12;
                arma_clase.value = "Espada";
                arma_tam.value = "M";
                break;
            case "Martillo de guerra":
                arma_db.value += 50;
                arma_iniciativa.value -= 5;
                arma_freq.value = 12;
                arma_clase.value = "Asta";
                arma_tam.value = "M";
                break;
            case "Cimitarra":
                arma_db.value += 50;
                arma_iniciativa.value -= 5;
                arma_freq.value = 10;
                arma_clase.value = "Espada";
                arma_tam.value = "M";
                break;
            case "Espada larga":
                arma_db.value += 50;
                arma_iniciativa.value += 0;
                arma_freq.value = 12;
                arma_clase.value = "Espada";
                arma_tam.value = "M";
                break;
            case "Espada ancha":
                arma_db.value += 55;
                arma_iniciativa.value -= 5;
                arma_freq.value = 10;
                arma_clase.value = "Espada";
                arma_tam.value = "M";
                break;
            case "Maza pesada de combate":
                arma_db.value += 60;
                arma_iniciativa.value -= 15;
                arma_freq.value = 12;
                arma_clase.value = "Maza";
                arma_tam.value = "L";
                break;
            case "Alabarda":
                arma_db.value += 60;
                arma_iniciativa.value -= 15;
                arma_freq.value = 12;
                arma_clase.value = "Asta";
                arma_tam.value = "L";
                break;
            case "Espada bastarda":
                arma_db.value += 70;
                arma_iniciativa.value -= 30;
                arma_freq.value = 14;
                arma_clase.value = "Espada";
                arma_tam.value = "L";
                break;
            case "Hacha de guerra":
                arma_db.value += 70;
                arma_iniciativa.value -= 30;
                arma_freq.value = 14;
                arma_clase.value = "Hacha";
                arma_tam.value = "L";
                break;
            case "Gran martillo de guerra":
                arma_db.value += 70;
                arma_iniciativa.value -= 35;
                arma_freq.value = 14;
                arma_clase.value = "Maza";
                arma_tam.value = "L";
                break;
            case "Lanza de caballería":
                arma_db.value += 80;
                arma_iniciativa.value -= 30;
                arma_freq.value = 16;
                arma_clase.value = "Asta";
                arma_tam.value = "L";
                break;
            case "Mangual":
                arma_db.value += 80;
                arma_iniciativa.value -= 50;
                arma_freq.value = 16;
                arma_clase.value = "Mandoble";
                arma_tam.value = "L";
                break;
            case "Mandoble":
                arma_db.value += 90;
                arma_iniciativa.value -= 60;
                arma_freq.value = 16;
                arma_clase.value = "Mandoble";
                arma_tam.value = "L";
                break;
            case "Hacha a dos manos":
                arma_db.value += 100;
                arma_iniciativa.value -= 70;
                arma_freq.value = 18;
                arma_clase.value = "Hacha";
                arma_tam.value = "L";
                break;
            case "Ballesta de mano":
                arma_db.value += 30;
                arma_iniciativa.value += 10;
                arma_freq.value = 6;
                arma_clase.value = "A. de proyectil";
                arma_tam.value = "S";
                break;
            case "Ballesta Pesada":
                arma_db.value += 60;
                arma_iniciativa.value -= 20;
                arma_freq.value = 20;
                arma_clase.value = "A. de proyectil";
                arma_tam.value = "L";
                arma_especial.value = "Recarga";
                break;
            case "Arco corto":
                arma_db.value += 30;
                arma_iniciativa.value -= 10;
                arma_freq.value = 8;
                arma_clase.value = "A. de proyectil";
                arma_tam.value = "S";
                break;
            case "Arco largo":
                arma_db.value += 40;
                arma_iniciativa.value -= 30;
                arma_freq.value = 7;
                arma_clase.value = "A. de proyectil";
                arma_tam.value = "L";
                break;
            case "Rodela":
                arma_db.value += 15;
                arma_iniciativa.value -= 15;
                arma_par.value += 10;
                arma_esq.value += 5;
                arma_freq.value = 10;
                arma_clase.value = "Escudo";
                arma_tam.value = "-";
                break;
            case "Escudo":
                arma_db.value += 20;
                arma_iniciativa.value -= 25;
                arma_par.value += 20;
                arma_esq.value += 10;
                arma_freq.value = 10;
                arma_tam.value = "-";
                arma_clase.value = "Escudo";
                break;
            case "Escudo corporal":
                arma_db.value += 25;
                arma_iniciativa.value -= 40;
                arma_par.value += 30;
                arma_esq.value += 15;
                arma_freq.value = 10;
                arma_tam.value = "-";
                arma_clase.value = "Escudo";
                break;
            default:
                break;
        }
        if (arma_clase.value !== "A. de proyectil") {
            arma_fue_bono.value = Number(this.getField("fue_bono").value);
        } else {
            arma_fue_bono.value = 0;
        }

        arma_df.value = Math.ceil(Number(arma_db.value) + arma_fue_bono.value);

        if (event.value !== "-") {
            // Arma equipada

            // Negativos por no saber usar el arma
            if (arma_clase.value !== "Escudo") {
                var tabla_arma = this.getField("tabla_" + i);
                var tabla_arma_clase = this.getField("tabla_" + i + "_clase");

                var similar = false;
                var encontrado = false;

                var j = 1;
                while (j <= 7 && !encontrado) {
                    var tabla_arma = this.getField("tabla_arma" + j);
                    var tabla_arma_clase = this.getField("tabla_arma" + j + "_clase");
                    if (
                        arma.value === tabla_arma.value ||
                        (arma_clase.value === tabla_arma_clase.value &&
                            tabla_arma.value === tabla_arma.value.toUpperCase())
                    ) {
                        encontrado = true;
                    } else if (arma_clase.value === tabla_arma_clase.value) {
                        similar = true;
                    }
                    j++;
                }
                if (!encontrado) {
                    if (similar) {
                        arma_atq.value -= 20;
                        arma_par.value -= 20;
                    } else {
                        arma_atq.value -= 60;
                        arma_par.value -= 60;
                    }
                }
            }

            // Negativos por no tener fuerza requerida
            if (arma_freq.value !== "-") {
                var fue_req_diff =
                    Number(arma_freq.value) - Number(this.getField("fue_actual").value);
                if (fue_req_diff > 0) {
                    arma_atq.value -= 5 * fue_req_diff;
                    arma_par.value -= 5 * fue_req_diff;
                }
            }
            if (manos_libres) {
                manos_libres = false;
            }

            if (event.value === "D+I" || (mano_d_ocupada && mano_i_ocupada)) {
                manos_ocupadas = true;
            }
            equipo_esquiva.value += Number(arma_esq.value);


            num_checks_armas++;
        }
    } else {
        event.value = "-";
        arma_atq.value = "-";
        arma_par.value = "-";
        arma_esq.value = "-";
        arma_freq.value = "-";
        arma_db.value = "-";
        arma_iniciativa.value = "-";
        arma_clase.value = "-";
        arma_tam.value = "-";
        arma_especial.value = "-";
        arma_df.value = "-";
        arma_fue_bono.value = "-";

    }
}

var arma_check0 = function (event) {
    var i = event.target.name.substr(4, 1);

    var arma = this.getField("arma" + i);
    var arma_par = this.getField("arma" + i + "_par");
    var arma_esq = this.getField("arma" + i + "_esq");
    var arma_atq = this.getField("arma" + i + "_atq");
    var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
    var arma_db = this.getField("arma" + i + "_db");
    var arma_df = this.getField("arma" + i + "_df");
    var arma_calidad = this.getField("arma" + i + "_calidad");
    var arma_freq = this.getField("arma" + i + "_freq");
    var arma_clase = this.getField("arma" + i + "_clase");
    var arma_especial = this.getField("arma" + i + "_especial");
    var arma_tam = this.getField("arma" + i + "_tam");
    var arma_fue_bono = this.getField("arma" + i + "_fue_bono");

    arma_atq.value = 0;
    arma_par.value = 0;
    arma_esq.value = 0;
    arma_db.value = 0;
    arma_iniciativa.value = 0;
    arma_fue_bono.value = Number(this.getField("fue_bono").value);

    arma_db.value += 10;
    arma_iniciativa.value += 20;

    arma_df.value = Math.ceil(Number(arma_db.value) + arma_fue_bono.value);
    if (manos_libres === true) {
        event.value = "D+I";

        // Negativos por no saber usar el arma
        var tabla_arma = this.getField("tabla_" + i);
        var tabla_arma_clase = this.getField("tabla_" + i + "_clase");

        var similar = false;
        var encontrado = false;

        var j = 1;
        while (j <= 7 && !encontrado) {
            var tabla_arma = this.getField("tabla_arma" + j);
            var tabla_arma_clase = this.getField("tabla_arma" + j + "_clase");
            if (
                arma.value === tabla_arma.value ||
                (arma_clase.value === tabla_arma_clase.value &&
                    tabla_arma.value === tabla_arma.value.toUpperCase())
            ) {
                encontrado = true;
            } else if (arma_clase.value === tabla_arma_clase.value) {
                similar = true;
            }
            j++;
        }
        if (!encontrado) {
            if (similar) {
                arma_atq.value -= 20;
                arma_par.value -= 20;
            } else {
                arma_atq.value -= 60;
                arma_par.value -= 60;
            }
        }

    } else {
        event.value = "-"
    }
}

var arma_calidad = function (event) {
    var i = event.target.name.substr(4, 1);
    var arma_clase = this.getField("arma" + i + "_clase");

    var arma_par = this.getField("arma" + i + "_par");
    var arma_esq = this.getField("arma" + i + "_esq");
    var arma_atq = this.getField("arma" + i + "_atq");
    var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
    var arma_db = this.getField("arma" + i + "_db");
    var arma_check = this.getField("arma" + i + "_check");

    if (arma_clase.value === "Escudo" || arma_clase.value === "-") {
        event.value = "0";
    } else {
        arma_atq.value = Number(arma_atq.value) + (5 * Number(event.value));
        arma_par.value = Number(arma_par.value) + (5 * Number(event.value));
        arma_db.value = Number(arma_db.value) + (10 * Number(event.value));
        arma_iniciativa.value = Number(arma_iniciativa.value) + (5 * Number(event.value));

        if (arma_check.value === "D" || arma_check.value === "I" || arma_check.value === "D+I") {
            if (arma_check.value === "I") {
                mano_i_ocupada = true;
            } else if (arma_check.value === "D") {
                mano_d_ocupada = true;
            }
            iniciativa_total_arma.value = Number(iniciativa_total_arma.value) + Number(arma_iniciativa.value);
            equipo_esquiva.value = Number(equipo_esquiva.value) + Number(arma_esq.value);
        }

    }
}

var habilidad_novel = function (event) {
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
}

var main2 = function () {
    i = 0;
    var diferencia = 10;
    var diff_x = this.getField("diff_x");
    var a1_x = this.getField("a1_x");
    var a2_x = this.getField("a2_x");
    a1_x.value = "-";
    a2_x.value = "-";
    while (i < 7) {
        var arma_check = this.getField("arma" + i + "_check");
        var arma_especial = this.getField("arma" + i + "_especial");
        var arma_df = this.getField("arma" + i + "_df");
        var arma_atq = this.getField("arma" + i + "_atq");
        var arma_par = this.getField("arma" + i + "_par");
        var arma_tam = this.getField("arma" + i + "_tam");
        if (arma_check.value === "D+I") {
            if (i !== 0) {
                var arma_fue_bono = this.getField("arma" + i + "_fue_bono");
                // duplicar el bono de fuerza si lleva el arma con las dos manos
                arma_df.value += arma_fue_bono.value;
                arma_fue_bono.value = arma_fue_bono.value * 2;
            }
            diferencia = 10;
            while (diferencia <= 200) {
                // diferencia => diferencia
                this.getField("a2_" + diferencia).value = Math.round(
                    (Number(arma_df.value) * diferencia) / 500
                );
                this.getField("a1_" + diferencia).value = Math.round(
                    (Number(arma_df.value) * diferencia) / 500
                );
                diferencia = diferencia + 10;
            }
            if (Number(diff_x.value) >= 0) {
                a1_x.value = Math.round(
                    (Number(arma_df.value) * Number(diff_x.value)) / 500
                );
                a2_x.value = Math.round(
                    (Number(arma_df.value) * Number(diff_x.value)) / 500
                );
            }

            equipo_ataque_i.value += Number(arma_atq.value);
            equipo_parada_i.value += Number(arma_par.value);
            equipo_ataque_d.value += Number(arma_atq.value);
            equipo_parada_d.value += Number(arma_par.value);
        } else if (arma_check.value === "D") {
            diferencia = 10;
            while (diferencia <= 200) {
                // diferencia => diferencia
                this.getField("a2_" + diferencia).value = Math.round(
                    (Number(arma_df.value) * diferencia) / 500
                );
                diferencia = diferencia + 10;
            }
            if (Number(diff_x.value) >= 0) {
                a2_x.value = Math.round(
                    (Number(arma_df.value) * Number(diff_x.value)) / 500
                );
            }
            if (mano_i_ocupada) {
                switch (arma_tam.value) {
                    case "S":
                        arma_atq.value += -20;
                        arma_par.value += -20;
                        break;
                    case "M":
                        arma_atq.value += -30;
                        arma_par.value += -30;
                        break;
                    case "L":
                        arma_atq.value += -40;
                        arma_par.value += -40;
                        break;
                    default:
                        break;
                }

            } else {
                switch (arma_tam.value) {
                    case "S":
                        arma_atq.value += -10;
                        arma_par.value += -10;
                        break;
                    case "M":
                        arma_atq.value += -15;
                        arma_par.value += -15;
                        break;
                    case "L":
                        arma_atq.value += -20;
                        arma_par.value += -20;
                        break;
                    default:
                        break;
                }
            }
            equipo_ataque_d.value += Number(arma_atq.value);
            equipo_parada_d.value += Number(arma_par.value);
        } else if (arma_check.value === "I") {
            diferencia = 10;
            while (diferencia <= 200) {
                // diferencia => diferencia
                this.getField("a1_" + diferencia).value = Math.round(
                    (Number(arma_df.value) * diferencia) / 500
                );
                diferencia = diferencia + 10;
            }
            if (Number(diff_x.value) >= 0) {
                a1_x.value = Math.round(
                    (Number(arma_df.value) * Number(diff_x.value)) / 500
                );
            }
            if (mano_d_ocupada) {
                switch (arma_tam.value) {
                    case "S":
                        arma_atq.value += -20;
                        arma_par.value += -20;
                        break;
                    case "M":
                        arma_atq.value += -30;
                        arma_par.value += -30;
                        break;
                    case "L":
                        arma_atq.value += -40;
                        arma_par.value += -40;
                        break;
                    default:
                        break;
                }
            } else {
                switch (arma_tam.value) {
                    case "S":
                        arma_atq.value += -10;
                        arma_par.value += -10;
                        break;
                    case "M":
                        arma_atq.value += -15;
                        arma_par.value += -15;
                        break;
                    case "L":
                        arma_atq.value += -20;
                        arma_par.value += -20;
                        break;
                    default:
                        break;
                }
            }
            equipo_ataque_i.value += Number(arma_atq.value);
            equipo_parada_i.value += Number(arma_par.value);
        }

        if (
            (arma_check.value === "D" || arma_check.value === "I") &&
            arma_check.value !== mano_dominante.value.substr(0, 1) &&
            !ambidiestria
        ) {
            // mano no dominante
            if (arma_check.value === "D") {
                equipo_ataque_d.value += -30;
                equipo_parada_d.value += -30;
            } else {
                equipo_ataque_i.value += -30;
                equipo_parada_i.value += -30;
            }
            this.getField("arma" + i + "_atq").value += -30;
            this.getField("arma" + i + "_par").value += -30;
        }

        i++;
    }

    base_llA.value = Math.floor(
        Number(this.getField("pd_llA").value) /
        Number(this.getField("coste_llA").value)
    );

    this.getField("final_llA").value =
        Number(base_llA.value) +
        Number(this.getField("esp_llA").value) +
        Number(this.getField("mod_llA").value) +
        Number(fue_bono.value) +
        Number(this.getField("cat_llA").value);

    // Combate final

    if (this.getField("equipo_ataque_i").value !== "-") {
        this.getField("final_ataque_i").value =
            Number(this.getField("base_ataque").value) +
            Number(this.getField("equipo_ataque_i").value) +
            Number(this.getField("mod_ataque_i").value) +
            Number(des_bono.value) +
            Number(this.getField("cat_ataque").value);
    } else {
        this.getField("final_ataque_i").value = "-";
    }

    if (this.getField("equipo_parada_i").value !== "-") {
        this.getField("final_parada_i").value =
            Number(this.getField("base_parada").value) +
            Number(this.getField("equipo_parada_i").value) +
            Number(this.getField("mod_parada_i").value) +
            Number(des_bono.value) +
            Number(this.getField("cat_parada").value);
    } else {
        this.getField("final_parada_i").value = "-";
    }
    if (this.getField("equipo_ataque_d").value !== "-") {
        this.getField("final_ataque_d").value =
            Number(this.getField("base_ataque").value) +
            Number(this.getField("equipo_ataque_d").value) +
            Number(this.getField("mod_ataque_d").value) +
            Number(des_bono.value) +
            Number(this.getField("cat_ataque").value);
    } else {
        this.getField("final_ataque_d").value = "-";
    }
    if (this.getField("equipo_parada_d").value !== "-") {
        this.getField("final_parada_d").value =
            Number(this.getField("base_parada").value) +
            Number(this.getField("equipo_parada_d").value) +
            Number(this.getField("mod_parada_d").value) +
            Number(des_bono.value) +
            Number(this.getField("cat_parada").value);
    } else {
        this.getField("final_parada_d").value = "-";
    }
    this.getField("final_esquiva").value =
        Number(this.getField("base_esquiva").value) +
        Number(this.getField("equipo_esquiva").value) +
        Number(this.getField("mod_esquiva").value) +
        Number(this.getField("agi_bono").value) +
        Number(this.getField("cat_esquiva").value);

    // Iniciativa
    this.getField("final_iniciativa").value =
        Number(this.getField("agi_bono").value) +
        Number(this.getField("des_bono").value) +
        Number(this.getField("arma_vel").value) +
        Number(this.getField("cat_iniciativa").value) +
        Number(this.getField("mod_iniciativa").value) +
        Number(this.getField("mod_iniciativa").value) +
        Number(this.getField("esp_iniciativa").value);

    if (ventaja_limite && actuales_vida.value <= Math.floor(Number(totales_vida.value) / 4)) {
        j = 0;
        while (j < lista_habilidades.length) {
            var habilidad = lista_habilidades[j];
            var esp_habilidad = this.getField("esp_" + habilidad);
            esp_habilidad.value = Number(esp_habilidad.value) + 20;
            j++;
        }
        this.getField("final_iniciativa").value = Number(this.getField("final_iniciativa").value) + 20;

        this.getField("final_esquiva").value = Number(this.getField("final_esquiva").value) + 20;

        if (this.getField("final_parada_i").value !== "-") {
            this.getField("final_parada_i").value = Number(this.getField("final_parada_i").value) + 20;
        }
        if (this.getField("final_parada_d").value !== "-") {
            this.getField("final_parada_d").value = Number(this.getField("final_parada_d").value) + 20;
        }
        if (this.getField("final_ataque_d").value !== "-") {
            this.getField("final_ataque_d").value = Number(this.getField("final_ataque_d").value) + 20;
        }
        if (this.getField("final_ataque_i").value !== "-") {
            this.getField("final_ataque_i").value = Number(this.getField("final_ataque_i").value) + 20;
        }
    }

    // Habilidades

    i = 0;
    while (i < lista_habilidades.length) {
        var habilidad = lista_habilidades[i];
        var md_habilidad = this.getField("md_" + habilidad);
        var pd_habilidad = this.getField("pd_" + habilidad);
        var base_habilidad = this.getField("base_" + habilidad);
        pd_habilidad.value =
            Number(md_habilidad.value) * this.getField("valor_multiplo").value;
        if (Number(pd_habilidad.value) > 0) {
            base_habilidad.value = Math.floor(
                Number(pd_habilidad.value) /
                Number(this.getField("coste_" + habilidad).value)
            );
            md_actuales.value = Number(md_actuales.value) - Number(md_habilidad.value);
        } else {
            base_habilidad.value = ctm ? 0 : -30;
        }
        var bono = this.getField(lista_habilidades_atributos[i] + "_bono");
        var esp = this.getField("esp_" + habilidad);
        var cat_nivel = this.getField("cat_nivel_" + habilidad);
        var final_habilidad = this.getField("final_" + habilidad);
        if (ctm) {
            esp.value = Number(esp.value) + 10;
        }

        final_habilidad.value =
            Number(base_habilidad.value) +
            Number(bono.value) +
            Number(esp.value) +
            Number(cat_nivel.value);

        i++;
    }

    var oro = this.getField("oro");
    var plata = this.getField("plata");
    var bronce = this.getField("bronce");

    var op_oro_1 = this.getField("op_oro_1");
    var op_plata_1 = this.getField("op_plata_1");
    var op_bronce_1 = this.getField("op_bronce_1");

    var op_oro_2 = this.getField("op_oro_2");
    var op_plata_2 = this.getField("op_plata_2");
    var op_bronce_2 = this.getField("op_bronce_2");

    // Operaciones bronce
    if (
        (Number(op_bronce_1.value) !== 0 &&
            op_bronce_1.value !== "-" &&
            op_bronce_1.value !== "+") ||
        (Number(op_bronce_2.value) !== 0 &&
            op_bronce_2.value !== "-" &&
            op_bronce_2.value !== "+")
    ) {
        if (
            Number(op_bronce_2.value) !== 0 &&
            op_bronce_2.value !== "-" &&
            op_bronce_2.value !== "+"
        ) {
            bronce.value = Number(bronce.value) + Number(op_bronce_2.value);
        } else {
            bronce.value = Number(bronce.value) + Number(op_bronce_1.value);
        }
        if (bronce.value >= 100) {
            var plata_up = Math.floor(bronce.value / 100);
            plata.value = Number(plata.value) + plata_up;
            bronce.value = Number(bronce.value) - plata_up * 100;
        } else if (bronce.value < 0) {
            bronce.value = 0;
        }
    }

    // Operaciones plata
    if (
        (Number(op_plata_2.value) !== 0 &&
            op_plata_2.value !== "-" &&
            op_plata_2.value !== "+") ||
        (Number(op_plata_1.value) !== 0 &&
            op_plata_1.value !== "-" &&
            op_plata_1.value !== "+") ||
        plata.value > 99
    ) {
        if (
            Number(op_plata_1.value) !== 0 &&
            op_plata_1.value !== "-" &&
            op_plata_1.value !== "+"
        ) {
            plata.value = Number(plata.value) + Number(op_plata_1.value);
        } else if (
            Number(op_plata_2.value) !== 0 &&
            op_plata_2.value !== "-" &&
            op_plata_2.value !== "+"
        ) {
            plata.value = Number(plata.value) + Number(op_plata_2.value);
        }
        var oro_update = Math.floor(plata.value / 100);
        if ((oro_update < 0 && oro_update <= Number(oro.value)) || oro_update > 0) {
            plata.value = Math.abs(oro_update * 100) - Math.abs(plata.value);
            oro.value = Number(oro.value) + oro_update;
        }
    }

    if (Number(oro.value) + Number(op_oro_2.value) < 0 || Number(oro.value) + Number(op_oro_1.value) < 0) {
        oro.value = 0;
    }

    // Operaciones oro
    // 1
    if (
        Number(op_oro_1.value) !== 0 &&
        Number(op_oro_1.value) !== "-" &&
        Number(op_oro_1.value) !== "+" &&
        (Number(op_oro_1.value) > 0 ||
            Number(oro.value) + Number(op_oro_1.value) >= 0)
    ) {
        oro.value = Number(oro.value) + Number(op_oro_1.value);
    }

    // 2
    if (
        Number(op_oro_2.value) !== 0 &&
        op_oro_2.value !== "-" &&
        op_oro_2.value !== "+" &&
        Number(oro.value) + Number(op_oro_2.value) >= 0
    ) {
        oro.value = Number(oro.value) + Number(op_oro_2.value);
    }

    var agi_actual = this.getField("agi_actual");
    var md_actuales = this.getField("md_actuales");


}

var armadura_check = function (event) {
    var i = event.target.name.substr(8, 1);
    var armadura_dureza = this.getField("armadura" + i + "_dureza");
    var armadura_mov = this.getField("armadura" + i + "_mov");
    var armadura_advertir = this.getField("armadura" + i + "_advertir");
    var armadura_def = this.getField("armadura" + i + "_def");
    var armadura = this.getField("armadura" + i);
    var armadura_reqarm = this.getField("armadura" + i + "_reqarm");
    var armadura_clase = this.getField("armadura" + i).value.split(" ")[0];

    if (armadura.value === "-") {
        event.value = "-";
    }

    if (
        armadura.value === "Peto de cuero endurecido" ||
        armadura.value === "Peto de cuero tachonado" ||
        armadura.value === "Peto de metal" ||
        armadura.value === "Completa de piezas" ||
        armadura.value === "Completa de metal" ||
        armadura.value === "Completa con escamas" ||
        armadura.value === "Completa de placas" ||
        armadura.value === "Completa de placas pesada" ||
        armadura.value === "Completa de campaña pesada" ||
        armadura.value === "Yelmo de anillas" ||
        armadura.value === "Yelmo frentón" ||
        armadura.value === "Yelmo coronilla" ||
        armadura.value === "Yelmo completo abierto" ||
        armadura.value === "Yelmo completo cerrado"
    ) {
        armadura_dureza.value = "Dura";
    } else if (
        armadura.value === "Camisola acolchada" ||
        armadura.value === "Camisola de cuero" ||
        armadura.value === "Camisola de piel" ||
        armadura.value === "Camisola de anillas" ||
        armadura.value === "Completa gabardina" ||
        armadura.value === "Completa de cuero" ||
        armadura.value === "Completa de mallas" ||
        armadura.value === "Yelmo de cuero" ||
        armadura.value === "Yelmo de maya"
    ) {
        armadura_dureza.value = "Blanda";
    } else {
        armadura_dureza.value = "-";
        armadura_def.value = "-";
        armadura_reqarm.value = "-";
        armadura_advertir.value = "-";
        armadura_mov.value = "-";
    }

    if (armadura_dureza.value !== "-") {
        var armadura_calidad = this.getField("armadura" + i + "_calidad");
        switch (armadura.value) {
            case "Peto de cuero endurecido":
                armadura_def.value = 20 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    20 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -10 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Peto de cuero tachonado":
                armadura_def.value = 30 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    25 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -10 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Peto de metal":
                armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    40 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -10 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Camisola acolchada":
            case "Camisola de cuero":
            case "Completa gabardina":
            case "Yelmo de cuero":
                armadura_def.value = 10 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = 0;
                armadura_mov.value = 0;
                armadura_advertir.value = 0;
                break;
            case "Camisola de piel":
            case "Completa de cuero":
                armadura_def.value = 20 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    10 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -10 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Camisola de anillas":
                armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    60 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -20 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa de mallas":
                armadura_def.value = 30 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    30 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -10 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa de piezas":
                armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    50 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -20 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa de metal":
                armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    70 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -30 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa con escamas":
                armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    80 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -30 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa de placas":
                armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    90 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -40 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa de placas pesada":
                armadura_def.value = 60 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    120 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -50 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Completa de campaña pesada":
                armadura_def.value = 70 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    150 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = Math.min(
                    0,
                    -60 + 5 * Number(armadura_calidad.value)
                );
                armadura_advertir.value = 0;
                break;
            case "Yelmo de anillas":
            case "Yelmo coronilla":
                armadura_def.value = 20 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = 0;
                armadura_mov.value = 0;
                armadura_advertir.value = 0;
                break;
            case "Yelmo frentón":
                armadura_def.value = 30 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = 0;
                armadura_mov.value = 0;
                armadura_advertir.value = 0;
                break;
            case "Yelmo de maya":
                armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = 0;
                armadura_mov.value = 0;
                armadura_advertir.value = Math.min(
                    0,
                    -10 + 5 * Number(armadura_calidad.value)
                );
                break;
            case "Yelmo completo abierto":
                armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    5 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = 0;
                armadura_advertir.value = Math.min(
                    0,
                    -20 + 5 * Number(armadura_calidad.value)
                );
                break;
            case "Yelmo completo cerrado":
                armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
                armadura_reqarm.value = Math.max(
                    0,
                    10 - 5 * Number(armadura_calidad.value)
                );
                armadura_mov.value = 0;
                armadura_advertir.value = Math.min(
                    0,
                    -30 + 5 * Number(armadura_calidad.value)
                );
                break;

            default:
                break;
        }

        if (event.value === "Eq.") {
            var final_llA_v = this.getField("final_llA").value;
            if (armadura_clase === "Yelmo") {
                // Yelmos
                // Tiene req armadura suficiente
                if (final_llA_v >= armadura_reqarm.value) {
                    armadura_advertir.value = Math.min(
                        0,
                        Number(armadura_advertir.value) + Math.floor((final_llA_v - armadura_reqarm.value) / 50) * 10
                    );
                }
            } else {
                // Armaduras
                // Tiene req armadura suficiente
                if (final_llA_v >= armadura_reqarm.value) {
                    armadura_mov.value = Math.min(
                        0,
                        Number(armadura_mov.value) + Math.floor((final_llA_v - armadura_reqarm.value) / 50) * 10
                    );
                }
            }


        }
    }

}

var main3 = function () {
    var req_armadura_total = 0;
    var req_yelmo_total = 0;
    var i = 1;
    var armadura_count = 0;
    var yelmo_count = 0;

    var armadura_cabeza_lista = [];
    var armadura_espalda_lista = [];
    var armadura_hombro_der_lista = [];
    var armadura_hombro_izq_lista = [];
    var armadura_pecho_lista = [];
    var armadura_brazo_der_lista = [];
    var armadura_brazo_izq_lista = [];
    var armadura_mano_der_lista = [];
    var armadura_mano_izq_lista = [];
    var armadura_pierna_der_lista = [];
    var armadura_pierna_izq_lista = [];
    var armadura_pie_der_lista = [];
    var armadura_pie_izq_lista = [];


    var cuerpo_def = this.getField("armadura0_def").value;

    if (cuerpo_def > 0) {
        armadura_pecho_lista.push(cuerpo_def);
        armadura_espalda_lista.push(cuerpo_def);
        armadura_hombro_der_lista.push(cuerpo_def);
        armadura_hombro_izq_lista.push(cuerpo_def);
        armadura_brazo_der_lista.push(cuerpo_def);
        armadura_brazo_izq_lista.push(cuerpo_def);
        armadura_mano_der_lista.push(cuerpo_def);
        armadura_mano_izq_lista.push(cuerpo_def);
        armadura_pierna_der_lista.push(cuerpo_def);
        armadura_pierna_izq_lista.push(cuerpo_def);
        armadura_pie_der_lista.push(cuerpo_def);
        armadura_pie_izq_lista.push(cuerpo_def);
        armadura_cabeza_lista.push(cuerpo_def);
    }

    var armadura_peto = [];
    var armadura_camisola = [];
    var armadura_completa = [];
    var armadura_yelmo = [];

    var restriccion_mov_armadura = 0;
    while (i <= 6) {
        var armadura_check = this.getField("armadura" + i + "_check");
        if (armadura_check.value === "Eq.") {
            var armadura_advertir = this.getField("armadura" + i + "_advertir");
            var armadura_clase = this.getField("armadura" + i).value.split(" ")[0];
            var armadura_mov = this.getField("armadura" + i + "_mov");
            var armadura_reqarm = this.getField("armadura" + i + "_reqarm");
            var armadura_dureza = this.getField("armadura" + i + "_dureza");
            if (armadura_clase === "Yelmo") {
                req_yelmo_total += Number(armadura_reqarm.value);
                // Varias equipadas
                if (yelmo_count > 0) {
                    armadura_advertir.value = Number(armadura_advertir.value) - 20;
                }
                yelmo_count++;

                this.getField("final_ver").value += Number(armadura_advertir.value);
                this.getField("final_escuchar").value += Number(armadura_advertir.value);
                this.getField("final_buscar").value += Number(armadura_advertir.value);
                this.getField("esp_ver").value += Number(armadura_advertir.value);
                this.getField("esp_escuchar").value += Number(armadura_advertir.value);
                this.getField("esp_buscar").value += Number(armadura_advertir.value);

            } else {

                req_armadura_total += Number(armadura_reqarm.value);
                // Varias equipadas
                if (armadura_count > 0) {
                    armadura_mov.value = Number(armadura_mov.value) - 20;
                }
                armadura_count++;

                this.getField("armadura_vel").value += Number(armadura_mov.value);
                this.getField("final_iniciativa").value += Number(armadura_mov.value);
                restriccion_mov_armadura += Math.floor(
                    (Number(armadura_mov.value) * 2) / 10
                );
                this.getField("esp_acrobacias").value += Number(armadura_mov.value);
                this.getField("esp_atletismo").value += Number(armadura_mov.value);
                this.getField("esp_montar").value += Number(armadura_mov.value);
                this.getField("esp_nadar").value += Number(armadura_mov.value);
                this.getField("esp_trepar").value += Number(armadura_mov.value);
                this.getField("esp_saltar").value += Number(armadura_mov.value);
                this.getField("final_acrobacias").value += Number(armadura_mov.value);
                this.getField("final_atletismo").value += Number(armadura_mov.value);
                this.getField("final_montar").value += Number(armadura_mov.value);
                this.getField("final_nadar").value += Number(armadura_mov.value);
                this.getField("final_trepar").value += Number(armadura_mov.value);
                this.getField("final_saltar").value += Number(armadura_mov.value);

            }

            var armadura_def = this.getField("armadura" + i + "_def");
            switch (armadura_clase) {
                case "Peto":
                    armadura_pecho_lista.push(armadura_def.value);
                    armadura_espalda_lista.push(armadura_def.value);
                    break;
                case "Camisola":
                    armadura_pecho_lista.push(armadura_def.value);
                    armadura_espalda_lista.push(armadura_def.value);
                    armadura_hombro_der_lista.push(armadura_def.value);
                    armadura_hombro_izq_lista.push(armadura_def.value);
                    armadura_brazo_der_lista.push(armadura_def.value);
                    armadura_brazo_izq_lista.push(armadura_def.value);
                    armadura_mano_der_lista.push(armadura_def.value);
                    armadura_mano_izq_lista.push(armadura_def.value);
                    break;
                case "Completa":
                    armadura_pecho_lista.push(armadura_def.value);
                    armadura_espalda_lista.push(armadura_def.value);
                    armadura_hombro_der_lista.push(armadura_def.value);
                    armadura_hombro_izq_lista.push(armadura_def.value);
                    armadura_brazo_der_lista.push(armadura_def.value);
                    armadura_brazo_izq_lista.push(armadura_def.value);
                    armadura_mano_der_lista.push(armadura_def.value);
                    armadura_mano_izq_lista.push(armadura_def.value);
                    armadura_pierna_der_lista.push(armadura_def.value);
                    armadura_pierna_izq_lista.push(armadura_def.value);
                    armadura_pie_der_lista.push(armadura_def.value);
                    armadura_pie_izq_lista.push(armadura_def.value);
                    break;
                case "Yelmo":
                    armadura_cabeza_lista.push(armadura_def.value);
                    break;
                default:
                    break;
            }
        }
        i++;
    }

    var diff_yelmo = Number(this.getField("final_llA").value) - req_yelmo_total;
    var diff_armadura = Number(this.getField("final_llA").value) - req_armadura_total;

    // Yelmos
    if (diff_yelmo < 0) {
        this.getField("esp_ver").value += Number(diff_yelmo);
        this.getField("esp_escuchar").value += Number(diff_yelmo);
        this.getField("esp_buscar").value += Number(diff_yelmo);
        this.getField("final_ver").value += Number(diff_yelmo);
        this.getField("final_escuchar").value += Number(diff_yelmo);
        this.getField("final_buscar").value += Number(diff_yelmo);
    }

    // Armaduras
    if (diff_armadura < 0) {
        this.getField("armadura_vel").value += Number(diff_armadura);
        this.getField("final_iniciativa").value += Number(diff_armadura);

        this.getField("esp_acrobacias").value += Number(diff_armadura);
        this.getField("esp_atletismo").value += Number(diff_armadura);
        this.getField("esp_montar").value += Number(diff_armadura);
        this.getField("esp_nadar").value += Number(diff_armadura);
        this.getField("esp_trepar").value += Number(diff_armadura);
        this.getField("esp_saltar").value += Number(diff_armadura);
        this.getField("final_acrobacias").value += Number(diff_armadura);
        this.getField("final_atletismo").value += Number(diff_armadura);
        this.getField("final_montar").value += Number(diff_armadura);
        this.getField("final_nadar").value += Number(diff_armadura);
        this.getField("final_trepar").value += Number(diff_armadura);
        this.getField("final_saltar").value += Number(diff_armadura);
        restriccion_mov_armadura += Math.round(
            (Number(diff_armadura) * 2) / 10
        );
    }



    var armadura_cabeza_total = 0;
    var armadura_espalda_total = 0;
    var armadura_hombro_der_total = 0;
    var armadura_hombro_izq_total = 0;
    var armadura_pecho_total = 0;
    var armadura_brazo_der_total = 0;
    var armadura_brazo_izq_total = 0;
    var armadura_mano_der_total = 0;
    var armadura_mano_izq_total = 0;
    var armadura_pierna_der_total = 0;
    var armadura_pierna_izq_total = 0;
    var armadura_pie_der_total = 0;
    var armadura_pie_izq_total = 0;

    armadura_pecho_lista.sort().reverse();
    armadura_espalda_lista.sort().reverse();
    armadura_hombro_der_lista.sort().reverse();
    armadura_hombro_izq_lista.sort().reverse();
    armadura_brazo_der_lista.sort().reverse();
    armadura_brazo_izq_lista.sort().reverse();
    armadura_mano_der_lista.sort().reverse();
    armadura_mano_izq_lista.sort().reverse();
    armadura_pierna_der_lista.sort().reverse();
    armadura_pierna_izq_lista.sort().reverse();
    armadura_pie_der_lista.sort().reverse();
    armadura_pie_izq_lista.sort().reverse();
    armadura_cabeza_lista.sort().reverse();

    var armadura_cabeza = this.getField("armadura_cabeza");
    var armadura_espalda = this.getField("armadura_espalda");
    var armadura_hombro_der = this.getField("armadura_hombro_der");
    var armadura_hombro_izq = this.getField("armadura_hombro_izq");
    var armadura_pecho = this.getField("armadura_pecho");
    var armadura_brazo_der = this.getField("armadura_brazo_der");
    var armadura_brazo_izq = this.getField("armadura_brazo_izq");
    var armadura_mano_der = this.getField("armadura_mano_der");
    var armadura_mano_izq = this.getField("armadura_mano_izq");
    var armadura_pierna_der = this.getField("armadura_pierna_der");
    var armadura_pierna_izq = this.getField("armadura_pierna_izq");
    var armadura_pie_der = this.getField("armadura_pie_der");
    var armadura_pie_izq = this.getField("armadura_pie_izq");

    var mod_armadura_cabeza = this.getField("mod_armadura_cabeza");
    var mod_armadura_espalda = this.getField("mod_armadura_espalda");
    var mod_armadura_hombro_der = this.getField("mod_armadura_hombro_der");
    var mod_armadura_hombro_izq = this.getField("mod_armadura_hombro_izq");
    var mod_armadura_pecho = this.getField("mod_armadura_pecho");
    var mod_armadura_brazo_der = this.getField("mod_armadura_brazo_der");
    var mod_armadura_brazo_izq = this.getField("mod_armadura_brazo_izq");
    var mod_armadura_mano_der = this.getField("mod_armadura_mano_der");
    var mod_armadura_mano_izq = this.getField("mod_armadura_mano_izq");
    var mod_armadura_pierna_der = this.getField("mod_armadura_pierna_der");
    var mod_armadura_pierna_izq = this.getField("mod_armadura_pierna_izq");
    var mod_armadura_pie_der = this.getField("mod_armadura_pie_der");
    var mod_armadura_pie_izq = this.getField("mod_armadura_pie_izq");

    i = 0;
    while (i < armadura_cabeza_lista.length) {
        if (i === 0) {
            armadura_cabeza_total += Number(armadura_cabeza_lista[i]);
        } else {
            armadura_cabeza_total += Number(
                Math.floor(armadura_cabeza_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_cabeza = armadura_cabeza_total - mod_armadura_cabeza.value;
    armadura_cabeza.value = Math.max(0, diff_armadura_cabeza);

    i = 0;
    while (i < armadura_pecho_lista.length) {
        if (i === 0) {
            armadura_pecho_total += Number(armadura_pecho_lista[i]);
        } else {
            armadura_pecho_total += Number(
                Math.floor(armadura_pecho_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_pecho = armadura_pecho_total - mod_armadura_pecho.value;
    armadura_pecho.value = Math.max(0, diff_armadura_pecho);

    i = 0;
    while (i < armadura_espalda_lista.length) {
        if (i === 0) {
            armadura_espalda_total += Number(armadura_espalda_lista[i]);
        } else {
            armadura_espalda_total += Number(
                Math.floor(armadura_espalda_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_espalda = armadura_espalda_total - mod_armadura_espalda.value;
    armadura_espalda.value = Math.max(0, diff_armadura_espalda);

    i = 0;
    while (i < armadura_hombro_der_lista.length) {
        if (i === 0) {
            armadura_hombro_der_total += Number(armadura_hombro_der_lista[i]);
        } else {
            armadura_hombro_der_total += Number(
                Math.floor(armadura_hombro_der_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_hombro_der =
        armadura_hombro_der_total - mod_armadura_hombro_der.value;
    armadura_hombro_der.value = Math.max(0, diff_armadura_hombro_der);

    i = 0;
    while (i < armadura_hombro_izq_lista.length) {
        if (i === 0) {
            armadura_hombro_izq_total += Number(armadura_hombro_izq_lista[i]);
        } else {
            armadura_hombro_izq_total += Number(
                Math.floor(armadura_hombro_izq_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_hombro_izq =
        armadura_hombro_izq_total - mod_armadura_hombro_izq.value;
    armadura_hombro_izq.value = Math.max(0, diff_armadura_hombro_izq);

    i = 0;
    while (i < armadura_brazo_der_lista.length) {
        if (i === 0) {
            armadura_brazo_der_total += Number(armadura_brazo_der_lista[i]);
        } else {
            armadura_brazo_der_total += Number(
                Math.floor(armadura_brazo_der_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_brazo_der =
        armadura_brazo_der_total - mod_armadura_brazo_der.value;
    armadura_brazo_der.value = Math.max(0, diff_armadura_brazo_der);

    i = 0;
    while (i < armadura_brazo_izq_lista.length) {
        if (i === 0) {
            armadura_brazo_izq_total += Number(armadura_brazo_izq_lista[i]);
        } else {
            armadura_brazo_izq_total += Number(
                Math.floor(armadura_brazo_izq_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_brazo_izq =
        armadura_brazo_izq_total - mod_armadura_brazo_izq.value;
    armadura_brazo_izq.value = Math.max(0, diff_armadura_brazo_izq);

    i = 0;
    while (i < armadura_mano_der_lista.length) {
        if (i === 0) {
            armadura_mano_der_total += Number(armadura_mano_der_lista[i]);
        } else {
            armadura_mano_der_total += Number(
                Math.floor(armadura_mano_der_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_mano_der =
        armadura_mano_der_total - mod_armadura_mano_der.value;
    armadura_mano_der.value = Math.max(0, diff_armadura_mano_der);

    i = 0;
    while (i < armadura_mano_izq_lista.length) {
        if (i === 0) {
            armadura_mano_izq_total += Number(armadura_mano_izq_lista[i]);
        } else {
            armadura_mano_izq_total += Number(
                Math.floor(armadura_mano_izq_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_mano_izq =
        armadura_mano_izq_total - mod_armadura_mano_izq.value;
    armadura_mano_izq.value = Math.max(0, diff_armadura_mano_izq);

    i = 0;
    while (i < armadura_pierna_der_lista.length) {
        if (i === 0) {
            armadura_pierna_der_total += Number(armadura_pierna_der_lista[i]);
        } else {
            armadura_pierna_der_total += Number(
                Math.floor(armadura_pierna_der_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_pierna_der =
        armadura_pierna_der_total - mod_armadura_pierna_der.value;
    armadura_pierna_der.value = Math.max(0, diff_armadura_pierna_der);

    i = 0;
    while (i < armadura_pierna_izq_lista.length) {
        if (i === 0) {
            armadura_pierna_izq_total += Number(armadura_pierna_izq_lista[i]);
        } else {
            armadura_pierna_izq_total += Number(
                Math.floor(armadura_pierna_izq_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_pierna_izq =
        armadura_pierna_izq_total - mod_armadura_pierna_izq.value;
    armadura_pierna_izq.value = Math.max(0, diff_armadura_pierna_izq);

    i = 0;
    while (i < armadura_pie_der_lista.length) {
        if (i === 0) {
            armadura_pie_der_total += Number(armadura_pie_der_lista[i]);
        } else {
            armadura_pie_der_total += Number(
                Math.floor(armadura_pie_der_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_pie_der = armadura_pie_der_total - mod_armadura_pie_der.value;
    armadura_pie_der.value = Math.max(0, diff_armadura_pie_der);

    i = 0;
    while (i < armadura_pie_izq_lista.length) {
        if (i === 0) {
            armadura_pie_izq_total += Number(armadura_pie_izq_lista[i]);
        } else {
            armadura_pie_izq_total += Number(
                Math.floor(armadura_pie_izq_lista[i] / 2 / 10) * 10
            );
        }
        i++;
    }

    var diff_armadura_pie_izq = armadura_pie_izq_total - mod_armadura_pie_izq.value;
    armadura_pie_izq.value = Math.max(0, diff_armadura_pie_izq);

    // Movimiento
    var mov_max = this.getField("mov_max");
    var mov_base = this.getField("mov_base");
    var mov_total = agi_actual.value + restriccion_mov_armadura;

    switch (mov_total) {
        case 1:
        case 2:
        case 3:
        case 4:
            mov_max.value = 1;
            break;
        case 5:
            mov_max.value = 2;
            break;
        case 6:
            mov_max.value = 3;
            break;
        case 7:
            mov_max.value = 4;
            break;
        case 8:
            mov_max.value = 5;
            break;
        case 9:
            mov_max.value = 6;
            break;
        case 10:
        case 11:
        case 12:
            mov_max.value = 7;
            break;
        case 13:
        case 14:
        case 15:
            mov_max.value = 8;
            break;
        case 16:
            mov_max.value = 9;
            break;
        case 17:
            mov_max.value = 10;
            break;
        case 18:
        case 19:
            mov_max.value = 11;
            break;
        case 20:
            mov_max.value = 12;
            break;
        default:
            mov_max.value = 0;
            break;
    }

    this.getField("mov_restr").value = mov_max.value - mov_base.value;

    md_actuales.value =
        Number(md_actuales.value) -
        Number(this.getField("md_ataque").value) -
        Number(this.getField("md_parada").value) -
        Number(this.getField("md_esquiva").value) -
        Number(this.getField("md_llA").value) -
        Number(this.getField("md_vida").value) -
        Number(this.getField("idioma2_md").value) -
        Number(this.getField("idioma3_md").value) -
        Number(this.getField("idioma4_md").value) -
        Number(this.getField("idioma5_md").value) -
        Number(this.getField("tabla_arma2_md").value) -
        Number(this.getField("tabla_arma3_md").value) -
        Number(this.getField("tabla_arma4_md").value) -
        Number(this.getField("tabla_arma5_md").value) -
        Number(this.getField("tabla_arma6_md").value) -
        Number(this.getField("tabla_arma7_md").value);

}

// VALIDATIONS

var v_armadura_check = function (event) {
    if (event.value === "Eq.") {
        var yelmo_duro_count = 0;
        var yelmo_blando_count = 0;
        var armadura_duro_count = 0;
        var armadura_blando_count = 0;
        var num = Number(event.target.name.substr(8, 1));
        var armadura_clase = this.getField("armadura" + num).value.split(" ")[0];
        var armadura_dureza = this.getField("armadura" + num + "_dureza");
        if (armadura_dureza.value === "Dura") {
            if (armadura_clase === "Yelmo") {
                yelmo_duro_count++;
            } else {
                armadura_duro_count++;
            }
        } else {
            if (armadura_clase === "Yelmo") {
                yelmo_blando_count++;
            } else {
                armadura_blando_count++;
            }
        }
        var i = 1;
        while (i <= 6) {
            var armadura_check = this.getField("armadura" + i + "_check");
            if (armadura_check.value === "Eq.") {
                var armadura_clase_i = this.getField("armadura" + i).value.split(" ")[0];
                var armadura_dureza_i = this.getField("armadura" + i + "_dureza");
                if (armadura_clase_i === "Yelmo") {
                    if (armadura_dureza_i.value === "Dura") {
                        yelmo_duro_count++;
                    } else {
                        yelmo_blando_count++;
                    }
                } else {
                    if (armadura_dureza_i.value === "Dura") {
                        armadura_duro_count++;
                    } else {
                        armadura_blando_count++;
                    }
                }
            }
            i++;
        }
        if (
            armadura_duro_count > 1 ||
            yelmo_duro_count > 1 ||
            (armadura_duro_count > 0 && (armadura_blando_count > 2)) ||
            (yelmo_duro_count > 0 && (yelmo_blando_count > 2))
        ) {
            event.rc = false;
        }
    }

}

var v_armadura = function (event) {
    this.getField(event.target.name + "_calidad").value = 0;
    this.getField(event.target.name + "_check").value = "-";

}

var v_arma = function (event) {
    this.getField(event.target.name + "_calidad").value = 0;
    this.getField(event.target.name + "_check").value = "-";
}

var v_desventaja = function (event) {
    if (event.value !== " " && event.value !== "" && event.value !== "-") {
        var repetido = false;
        var cond1 = event.value.toLowerCase();
        var num_desventaja = event.target.name.substr(10, 1);

        if (cond1.substr(cond1.length - 3) === " iii") {
            cond1 = cond1.substr(0, cond1.length - 3);
        } else if (cond1.substr(cond1.length - 3) === " ii") {
            cond1 = cond1.substr(0, cond1.length - 3);
        }
        for (var l = 1; l <= 2 && !repetido; l++) {
            var desventaja = this.getField(
                "desventaja" + (((Number(num_desventaja) + l - 1) % 3) + 1)
            ).value;
            var cond2 = desventaja.toLowerCase();
            if (cond2.substr(ventaja.length - 3) === " iii") {
                cond2 = cond2.substr(0, cond2.length - 3);
            } else if (cond2.substr(ventaja.length - 3) === " ii") {
                cond2 = cond2.substr(0, cond2.length - 3);
            }

            if (cond1 === cond2) {
                event.rc = false;
                repetido = true;
            }
        }
    }
}

var v_exp_actual = function (event) {
    var nivel = this.getField("nivel");
    var loop = true;
    while (event.value > Number(this.getField("exp_totales").value) && loop) {
        var nRslt = app.alert(
            "Has sobrepasado los puntos de experiencia.\n\n" +
            "¿Quieres subir de nivel?",
            2,
            2,
            "Submit Validation"
        );
        if (nRslt === 4) {
            nivel.value++;
            event.value = event.value - Number(this.getField("exp_totales").value);
        } else {
            loop = false;
        }
    }
    loop = true;
    var exp_actual = event.value;
    while (exp_actual < 0 && Number(nivel.value) >= 0 && loop) {
        var nRslt = app.alert(
            "Has introducido un valor negativo.\n\n" + "¿Quieres bajar de nivel?",
            2,
            2,
            "Submit Validation"
        );
        if (nRslt === 4) {
            nivel.value--;
            event.value =
                Number(event.value) + Number(this.getField("exp_totales").value);
            exp_actual = Number(event.value);
        } else {
            loop = false;
        }
    }
}

var v_idioma_escrito = function (event) {
    var num = event.target.name.substr(6, 1);
    var coste_idioma = this.getField("idioma" + num + "_md");

    switch (event.value) {
        case "Bajo":
            coste_idioma.value = 2;
            break;
        case "Medio":
            coste_idioma.value = 3;
            break;
        case "Alto":
            coste_idioma.value = 4;
            break;
        case "Nativo":
            coste_idioma.value = 5;
            break;
        default:
            coste_idioma.value = 0;
            break;
    }

    switch (this.getField("idioma" + num + "_hablado").value) {
        case "Bajo":
            coste_idioma.value += 2;
            break;
        case "Medio":
            coste_idioma.value += 3;
            break;
        case "Alto":
            coste_idioma.value += 4;
            break;
        case "Nativo":
            coste_idioma.value += 5;
            break;
        default:
            break;
    }
}

var v_idioma_hablado = function (event) {
    var num = event.target.name.substr(6, 1);
    var coste_idioma = this.getField("idioma" + num + "_md");

    switch (event.value) {
        case "Bajo":
            coste_idioma.value = 2;
            break;
        case "Medio":
            coste_idioma.value = 3;
            break;
        case "Alto":
            coste_idioma.value = 4;
            break;
        case "Nativo":
            coste_idioma.value = 5;
            break;
        default:
            coste_idioma.value = 0;
            break;
    }

    switch (this.getField("idioma" + num + "_escrito").value) {
        case "Bajo":
            coste_idioma.value += 2;
            break;
        case "Medio":
            coste_idioma.value += 3;
            break;
        case "Alto":
            coste_idioma.value += 4;
            break;
        case "Nativo":
            coste_idioma.value += 5;
            break;
        default:
            break;
    }
}

var v_md_ataque = function (event) {
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
}

var v_md_esquiva = function (event) {
    var md_totales = this.getField("md_totales");
    var limite_md_combate = Number(md_totales.value) / 2;
    var md_ataque = this.getField("md_ataque");
    var md_parada = this.getField("md_parada");
    var md_esquiva = this.getField("md_esquiva");
    if (Number(event.value) <= 0) {
        event.value = 0;
    } else if (
        Number(event.value) + md_ataque.value + md_parada.value >
        limite_md_combate || Number(event.value) > limite_md_combate / 4
    ) {
        event.rc = false;
    }
}

var v_md_llA = function (event) {
    var md_totales = this.getField("md_totales");
    var limite_md_llA = Number(md_totales.value) / 10;
    var md_llA = this.getField("md_llA");
    if (Number(event.value) <= 0) {
        event.value = 0;
    } else if (Number(event.value) > Number(limite_md_llA)) {
        event.value = md_llA.value;
    }
}

var v_md_parada = function (event) {
    var md_totales = this.getField("md_totales");
    var limite_md_combate = Number(md_totales.value) / 2;
    var md_ataque = this.getField("md_ataque");
    var md_parada = this.getField("md_parada");
    var md_esquiva = this.getField("md_esquiva");
    if (Number(event.value) <= 0) {
        event.value = 0;
    } else if (
        Number(event.value) + md_ataque.value + md_esquiva.value >
        limite_md_combate || Number(event.value) > limite_md_combate / 4
    ) {
        event.rc = false;
    }
}

var v_tabla_arma = function (event) {
    var num = Number(event.target.name.substr(event.target.name.length - 1));
    var tabla_arma = this.getField(event.target.name);
    var coste_md = this.getField(event.target.name + "_md");
    var arma_clase = this.getField(event.target.name + "_clase");


    if ((num > 1 && this.getField("tabla_arma" + (num - 1)).value === "-") || (num < 7 && this.getField("tabla_arma" + (num + 1)).value !== "-")) {
        event.rc = false;
    }

    if (event.rc) {
        switch (event.value) {
            case "ARMAS CORTAS":
            case "Cuchillo de cocina":
            case "Garfio":
            case "Daga":
            case "Daga de parada":
            case "Botella rota":
            case "Cestus":
            case "Estilete":
            case "Espada corta":
            case "Pico":
            case "Hoz":
                arma_clase.value = "Arma corta";
                break;
            case "HACHAS":
            case "Azada":
            case "Hacha de leñador":
            case "Hacha de mano":
            case "Hacha de guerra":
            case "Hacha a dos manos":
                arma_clase.value = "Hacha";
                break;
            case "MAZAS":
            case "Jarrón":
            case "Antorcha":
            case "Barra metálica":
            case "Garrote":
            case "Martillo de guerra":
            case "Maza":
            case "Martillo":
            case "Palo de madera":
            case "Gran martillo de guerra":
            case "Maza pesada de combate":
                arma_clase.value = "Maza";
                break;
            case "ESPADAS":
            case "Florete":
            case "Estoque":
            case "Cimitarra":
            case "Sable":
            case "Espada larga":
            case "Espada bastarda":
            case "Espada ancha":
                arma_clase.value = "Espada";
                break;
            case "MANDOBLES":
            case "Silla":
            case "Mangual":
            case "Mandoble":
                arma_clase.value = "Mandoble";
                break;
            case "ASTAS":
            case "Vara":
            case "Arpón":
            case "Guadaña":
            case "Jabalina":
            case "Lanza":
            case "Tridente":
            case "Lanza de caballería":
            case "Alabarda":
                arma_clase.value = "Asta";
                break;
            case "CUERDAS":
            case "Lazo":
            case "Látigo":
            case "Mayal":
            case "Cadena":
            case "Red de gladiador":
                arma_clase.value = "Cuerda";
                break;
            case "A. DE PROYECTIL":
            case "Ballesta de mano":
            case "Ballesta Pesada":
            case "Arco corto":
            case "Arco largo":
                arma_clase.value = "A. de proyectil";
                break;
            case "ESCUDOS":
            case "Rodela":
            case "Escudo":
            case "Escudo completo":
                arma_clase.value = "Escudo";
                break;
            case "Combate desarmado":
                arma_clase.value = "Sin armas";
                break;
            default:
                event.value = "-";
                arma_clase.value = "-";
                coste_md.value = 0;
                break;
        }
    }
}

var v_ventaja = function (event) {
    if (event.value !== " " && event.value !== "" && event.value !== "-") {
        var num_ventaja = event.target.name.substr(7, 1);
        var repetido = false;
        var cond1 = event.value.toLowerCase();

        if (cond1.substr(cond1.length - 4) === " iii") {
            cond1 = cond1.substr(0, cond1.length - 4);
        } else if (cond1.substr(cond1.length - 3) === " ii") {
            cond1 = cond1.substr(0, cond1.length - 3);
        }

        for (var l = 1; l <= 6 && !repetido; l++) {
            var ventaja = this.getField(
                "ventaja" + (((Number(num_ventaja) + l - 1) % 7) + 1)
            ).value;
            var cond2 = ventaja.toLowerCase();

            if (cond2.substr(ventaja.length - 4) === " iii") {
                cond2 = cond2.substr(0, cond2.length - 4);
            } else if (cond2.substr(ventaja.length - 3) === " ii") {
                cond2 = cond2.substr(0, cond2.length - 3);
            }

            if (cond1 === cond2) {
                repetido = true;
                event.rc = false;
            }
        }
        if (!repetido) {
            if (event.value === "Fondos iniciales") {
                var oro = this.getField("oro");
                oro.value = Number(oro.value) + 200;
            } else if (event.value === "Fondos iniciales II") {
                var oro = this.getField("oro");
                oro.value = Number(oro.value) + 500;
            } else if (event.value === "Fondos iniciales III") {
                var oro = this.getField("oro");
                oro.value = Number(oro.value) + 1000;
            }
        }
    }
}

// Create a new PDFDocument
const pdfDoc = await PDFDocument.load('./ficha-rol.pdf');
pdfDoc.addJavaScript(
    'main',
    log + ";" +
    ventaja_coste + ";" +
    desventaja_coste + ";" +
    main1 + ";" +
    arma_check + ";" +
    arma_check0 + ";" +
    arma_calidad + ";" +
    habilidad_novel + ";" +
    main2 + ";" +
    armadura_check + ";" +
    main3 + ";" +
    v_armadura_check + ";" +
    v_armadura + ";" +
    v_arma + ";" +
    v_desventaja + ";" +
    v_exp_actual + ";" +
    v_idioma_escrito + ";" +
    v_idioma_hablado + ";" +
    v_md_ataque + ";" +
    v_md_esquiva + ";" +
    v_md_llA + ";" +
    v_md_parada + ";" +
    v_tabla_arma + ";" +
    v_ventaja + ";"
);

// Save the PDFDocument and write it to a file
const pdfBytes = await pdfDoc.save();
await Deno.writeFile('ficha-rol-automatizada.pdf', pdfBytes);