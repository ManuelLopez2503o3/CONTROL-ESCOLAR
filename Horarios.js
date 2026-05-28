class Horario {

    constructor(materia, profesor, hora, salon) {
        this.materia = materia;
        this.profesor = profesor;
        this.hora = hora;
        this.salon = salon;
    }

    mostrarHorario() {

        console.log("Materia: " + this.materia);
        console.log("Profesor: " + this.profesor);
        console.log("Hora: " + this.hora);
        console.log("Salon: " + this.salon);
    }
}

const horario1 = new Horario(
    "Programacion",
    "Juan Perez",
    "08:00 AM",
    "A-12"
);

horario1.mostrarHorario();