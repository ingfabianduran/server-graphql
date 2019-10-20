module.exports = {
    // Get data in the main form:
    dataForm: () => {
        const data = {
            servicios: ["Soporte", "Mantenimiento", "Audiovisuales", "Desarrollo Fisico", "Redes"],
            tecnicos: ["John Jairo Agudelo", "Julian Camilo Lopez", "Orlando Garcia Zapata", "Fabian Esteban Duran", "Ivan Arturo Ortiz", "David Stiven Martinez", "Sebastian Torres"],
            perfiles: ["Administrativo", "Docente", "Estudiante"],
            bloques: ["Bloque A", "Bloque B", "Bloque C", "Bloque E", "Bloque F", "Bloque G", "Bloque I", "Bloque J", "Bloque K", "Bloque L", "Bloque M", "Bloque N", "Bloque O", "Edificio HUB", "Centro de Lenguas", "Casa Fotografia"],
            soluciones: ["Si", "No"],
            consultas: ["Soporte", "Mantenimiento", "servicio", "tecnico", "bloque"]  
        };
        
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
                    "Daño en Tomas de Conectividad", 
                    "Duplicado de Pantallas", 
                    "Encender Equipo de Cómputo", 
                    "Reiniciar Sistema", 
                    "Revisión o Cambio de Periféricos", 
                    "Soporte No Necesario", 
                    "Usuario o Clave de Ingreso", 
                    "Verificar Conectividad a Internet"];
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