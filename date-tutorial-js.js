// date-tutorial-js 

const fechaActual = new Date();
const fechaEspecifica = new Date('2023-07-10');
const fechaHoraEspecificas = new Date('2023-07-10T09:30:00');

const fecha = new Date('2023-07-10T09:30:00');
const año = fecha.getFullYear();
const mes = fecha.getMonth();
const día = fecha.getDate();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

const fecha1 = new Date('2023-07-10T09:30:00');
fecha1.setFullYear(2024);
fecha1.setMonth(6);
fecha1.setDate(15);
fecha1.setHours(14);
fecha1.setMinutes(45);
fecha1.setSeconds(30);


const fecha2 = new Date('2023-07-10T09:30:00');
const fechaLegible = fecha2.toString();
const fechaSinHora = fecha2.toDateString();
const fechaLocalizada = fecha2.toLocaleString();
