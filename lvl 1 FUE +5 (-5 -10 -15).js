console.clear();

var tirada_atq1;
var tirada_atq2;
var tirada_par1;
var tirada_par2;
var diff_atq1;
var diff_atq2;
var index = 1;
var dmg_total;
var paradas;
var criticos_ataque;
var criticos_parada;
var atq_i;
var atq_d;
var par_i;
var par_d;
var df_i;
var df_d;

var turnos = 200000;

// 2 VS 1 S

dmg_total = 0;

atq_i = 50;
atq_d = 50;
df_i = 25;
df_d = 25;
par_i = 60;

for (index = 1; index <= turnos; index++) {
  tirada_atq1 = Math.floor(Math.random() * 100);
  tirada_atq2 = Math.floor(Math.random() * 100) + n(atq_adicional.value);
  tirada_par1 = Math.floor(Math.random() * 100);
  tirada_par2 = Math.floor(Math.random() * 100);

  diff_atq1 = tirada_atq1 + atq_i - (tirada_par1 + par_i);

  if (diff_atq1 > 0) {
    dmg_total += (df_i * diff_atq1) / 500;
  }

  diff_atq2 = tirada_atq2 + atq_d - (tirada_par2 + par_i);

  if (diff_atq2 > 0) {
    dmg_total += (df_d * diff_atq2) / 500;
  }
}

log("(S) 2 vs 1 -> DMG Medio: " + Math.round((dmg_total / turnos) * 100) / 100);

// 1 VS 2 S

dmg_total = 0;

atq_i = 60;
df_i = 30;
par_i = 60;

for (index = 1; index <= turnos; index++) {
  tirada_atq1 = Math.floor(Math.random() * 100);
  tirada_par1 = Math.floor(Math.random() * 100);

  diff_atq1 = tirada_atq1 + atq_i - (tirada_par1 + par_i);
  if (diff_atq1 > 0) {
    dmg_total += (df_i * diff_atq1) / 500;
  }
}

log("(S) 1 vs 2 -> DMG Medio: " + Math.round((dmg_total / turnos) * 100) / 100);

//

// 2 VS 1 M

dmg_total = 0;

atq_i = 40;
atq_d = 40;
df_i = 55;
df_d = 55;
par_i = 60;

for (index = 1; index <= turnos; index++) {
  tirada_atq1 = Math.floor(Math.random() * 100);
  tirada_atq2 = Math.floor(Math.random() * 100) + n(atq_adicional.value);
  tirada_par1 = Math.floor(Math.random() * 100);
  tirada_par2 = Math.floor(Math.random() * 100);

  diff_atq1 = tirada_atq1 + atq_i - (tirada_par1 + par_i);

  if (diff_atq1 > 0) {
    dmg_total += (df_i * diff_atq1) / 500;
  }

  diff_atq2 = tirada_atq2 + atq_d - (tirada_par2 + par_i);

  if (diff_atq2 > 0) {
    dmg_total += (df_d * diff_atq2) / 500;
  }
}

log("(M) 2 vs 1 -> DMG Medio: " + Math.round((dmg_total / turnos) * 100) / 100);

// 1 VS 2 M

dmg_total = 0;

atq_i = 60;
df_i = 60;
par_i = 60;

for (index = 1; index <= turnos; index++) {
  tirada_atq1 = Math.floor(Math.random() * 100);
  tirada_par1 = Math.floor(Math.random() * 100);

  diff_atq1 = tirada_atq1 + atq_i - (tirada_par1 + par_i);
  if (diff_atq1 > 0) {
    dmg_total += (df_i * diff_atq1) / 500;
  }
}

log("(M) 1 vs 2 -> DMG Medio: " + Math.round((dmg_total / turnos) * 100) / 100);

//

// 2 VS 1 L

dmg_total = 0;

atq_i = 15;
atq_d = 15;
df_i = 95;
df_d = 95;
par_i = 40;

for (index = 1; index <= turnos; index++) {
  tirada_atq1 = Math.floor(Math.random() * 100);
  tirada_atq2 = Math.floor(Math.random() * 100) + n(atq_adicional.value);
  tirada_par1 = Math.floor(Math.random() * 100);
  tirada_par2 = Math.floor(Math.random() * 100);

  diff_atq1 = tirada_atq1 + atq_i - (tirada_par1 + par_i);

  if (diff_atq1 > 0) {
    dmg_total += (df_i * diff_atq1) / 500;
  }

  diff_atq2 = tirada_atq2 + atq_d - (tirada_par2 + par_i);

  if (diff_atq2 > 0) {
    dmg_total += (df_d * diff_atq2) / 500;
  }
}

log("(L) 2 vs 1 -> DMG Medio: " + Math.round((dmg_total / turnos) * 100) / 100);

// 1 VS 2 L

dmg_total = 0;

atq_i = 50;
df_i = 100;
par_i = 40;

for (index = 1; index <= turnos; index++) {
  tirada_atq1 = Math.floor(Math.random() * 100);
  tirada_par1 = Math.floor(Math.random() * 100);

  diff_atq1 = tirada_atq1 + atq_i - (tirada_par1 + par_i);
  if (diff_atq1 > 0) {
    dmg_total += (df_i * diff_atq1) / 500;
  }
}

log("(L) 1 vs 2 -> DMG Medio: " + Math.round((dmg_total / turnos) * 100) / 100);

//
