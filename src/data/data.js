module.exports = {
    // Get data in the main form:
    dataForm: () => {
        const data = {
            servicios: ["Soporte", "Mantenimiento", "Audiovisuales", "Desarrollo Fisico", "Redes"],
            tecnicos: ["David Stiven Martinez", "Fabian Esteban Duran", "Maripaz Carrillo", "Norberto Borja", "John Jairo Agudelo", "Nancy Johanna Ochoa"],
            perfiles: ["Administrativo", "Docente", "Estudiante"],
            bloques: ["Bloque A", "Bloque B", "Bloque C", "Bloque E", "Bloque F", "Bloque G", "Bloque I", "Bloque J", "Bloque K", "Bloque L", "Bloque M", "Bloque N", "Bloque O", "Edificio HUB", "Edificio HUB 2", "Centro de Lenguas", "Casa Fotografia"],
            soluciones: ["Si", "No"],
            consultas: ["Soporte", "Mantenimiento", "Servicio", "Tecnico", "Bloque"],
            cambios: ["VGA", "HDMI", "Red", "Poder", "Teclado", "Mouse", "Monitor", "CPU"]
        };
        
        return data;
    },
    // Get data in the main form:
    dataFormReport: () => {
        const data = {
            consultas: ["Soporte", "Mantenimiento", "Servicio", "Tecnico", "Bloque"]
        }

        return data;
    },
    // Validate typeSuport and get labores: 
    getLabores: (typeSuport) => {
        var data = {};

        switch (typeSuport) 
        {
            case "Soporte":
                data.labores = ["Asignación Provisional de portatil", 
                    "Configuración Vídeo Beam - TV",
                    "Configuración de Sonido",
                    "Daño en Tomas de Conectividad", 
                    "Duplicado de Pantallas", 
                    "Encender Equipo de Cómputo",
                    "Encender Videoproyector - TV",
                    "Reiniciar Sistema", 
                    "Revisión o Cambio de Periféricos",  
                    "Soporte No Necesario", 
                    "Usuario o Clave de Ingreso",
                    "Vandalismo", 
                    "Verificar Conectividad a Internet",
                    "Revision diadema o camara"];
                break;
            case "Mantenimiento":
                data.labores = ["Adecuación Mesa de Docentes", 
                    "Adecuación Mesa de Docentes", 
                    "Instalación de Software", 
                    "Mantenimiento Correctivo Equipo de Cómputo", 
                    "Mantenimiento Preventivo - Limpieza", 
                    "Préstamo Aula Móvil", 
                    "Préstamo Portatil", 
                    "Renovación Equipos de Cómputo", 
                    "Traslado Equipos de Cómputo"];
                break;
        }

        return data;
    },
};