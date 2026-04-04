

const seguros = {
    vida: {
        id: "vida",
        tagline: "Protección para los tuyos",
        titulo: "Seguro de vida",
        subtitulo: "Cuando ya no estés, asegúrate de que quienes más quieres estén protegidos.",
        descripcion: "El seguro de vida es la decisión más importante que puedes tomar para proteger a tu familia. Ante un fallecimiento o invalidez, tus seres queridos recibirán el capital asegurado para mantener su nivel de vida, pagar la hipoteca o cubrir los estudios de tus hijos.",
        color: "#C21B17",
        colorBg: "#fff5f5",
        coberturas: [
            "Fallecimiento por cualquier causa",
            "Invalidez absoluta y permanente",
            "Enfermedad grave (opcional)",
            "Doble capital por accidente de tráfico",
            "Anticipación del capital en caso de enfermedad terminal"
        ],
        ventajas: [
            "Prima fija durante toda la vigencia",
            "Capital exento de IRPF para los beneficiarios",
            "Designación libre de beneficiarios",
            "Posibilidad de asegurar a toda la familia"
        ],
        paraTi: "Ideal si tienes hipoteca, hijos a cargo o eres el sustento principal de tu hogar.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <path d="M24 40S6 28.5 6 17a9 9 0 0 1 18-1.5A9 9 0 0 1 42 17c0 11.5-18 23-18 23Z" fill="#C21B17" opacity="0.15"/>
      <path d="M24 40S6 28.5 6 17a9 9 0 0 1 18-1.5A9 9 0 0 1 42 17c0 11.5-18 23-18 23Z" stroke="#C21B17" stroke-width="2" stroke-linejoin="round"/>
    </svg>`
    },

    hogar: {
        id: "hogar",
        tagline: "Tu hogar, siempre a salvo",
        titulo: "Seguro de hogar",
        subtitulo: "Protege tu casa, tus pertenencias y tu tranquilidad ante cualquier imprevisto.",
        descripcion: "Tu hogar es mucho más que cuatro paredes: es donde vives, donde crecen tus hijos, donde guardas lo que más quieres. El seguro de hogar de Generali protege tanto la estructura del inmueble como el contenido, con coberturas amplias ante incendios, robos, daños por agua y responsabilidad civil.",
        color: "#1a5fa8",
        colorBg: "#f0f6ff",
        coberturas: [
            "Incendio, explosión y daños por agua",
            "Robo y actos vandálicos",
            "Daños eléctricos y roturas",
            "Responsabilidad civil del hogar",
            "Asistencia en el hogar 24h",
            "Pérdida de alquileres"
        ],
        ventajas: [
            "Tasación real del inmueble sin infraseguros",
            "Servicio de reparaciones urgentes incluido",
            "Cobertura en toda España y Europa",
            "Gestión de siniestros rápida y sin complicaciones"
        ],
        paraTi: "Imprescindible tanto si eres propietario como si vives de alquiler.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <path d="M8 22L24 8l16 14v20H30v-10h-12v10H8V22Z" fill="#1a5fa8" opacity="0.12"/>
      <path d="M8 22L24 8l16 14v20H30v-10h-12v10H8V22Z" stroke="#1a5fa8" stroke-width="2" stroke-linejoin="round"/>
    </svg>`
    },

    decesos: {
        id: "decesos",
        tagline: "Acompañamos en lo difícil",
        titulo: "Seguro de decesos",
        subtitulo: "Gestionamos todos los trámites para que tu familia no tenga que preocuparse.",
        descripcion: "En los momentos más duros, lo último que quieres es ocuparte de trámites y gestiones. El seguro de decesos de Generali se encarga de todo: desde el traslado y los servicios funerarios hasta las gestiones con la administración, en cualquier punto de España o del extranjero.",
        color: "#0e7a5a",
        colorBg: "#f0faf5",
        coberturas: [
            "Servicios funerarios completos",
            "Traslado nacional e internacional",
            "Gestión de trámites administrativos",
            "Lápida y nicho durante 10 años",
            "Asistencia psicológica para la familia",
            "Servicio de repatriación"
        ],
        ventajas: [
            "Prima muy asequible desde joven",
            "Cobertura inmediata desde el primer día",
            "Sin límite de edad para contratarlo",
            "Extensible a toda la unidad familiar"
        ],
        paraTi: "El seguro más valorado por las familias: protege a los tuyos de un gasto inesperado y muy elevado.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <circle cx="24" cy="24" r="14" fill="#0e7a5a" opacity="0.12"/>
      <path d="M24 10v28M15 19c3-2 6-3 9-3s6 1 9 3M13 27c3-3 7-5 11-5s8 2 11 5" stroke="#0e7a5a" stroke-width="2" stroke-linecap="round"/>
    </svg>`
    },

    coche: {
        id: "coche",
        tagline: "Circula con total seguridad",
        titulo: "Seguro de coche",
        subtitulo: "Desde cobertura a terceros hasta todo riesgo. Viaja con la tranquilidad de estar bien cubierto.",
        descripcion: "El seguro de coche de Generali se adapta a tu forma de conducir y al tipo de vehículo que tienes. Elige entre diferentes modalidades de cobertura y personaliza tu póliza con las garantías que realmente necesitas, sin pagar por lo que no usas.",
        color: "#555",
        colorBg: "#f5f5f5",
        coberturas: [
            "Responsabilidad civil obligatoria y voluntaria",
            "Daños propios (todo riesgo con o sin franquicia)",
            "Robo e incendio del vehículo",
            "Asistencia en carretera 24h",
            "Defensa jurídica y reclamación de daños",
            "Seguro del conductor"
        ],
        ventajas: [
            "Bonus por no siniestralidad",
            "Vehículo de sustitución incluido",
            "Red de talleres concertados en toda España",
            "Gestión online de siniestros"
        ],
        paraTi: "Para conductores que valoran la tranquilidad y un servicio de verdad cuando lo necesitan.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <rect x="6" y="16" width="36" height="20" rx="4" fill="#555" opacity="0.10"/>
      <path d="M6 26h36M14 36v4M34 36v4M10 26l4-10h20l4 10" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="14" cy="34" r="3" stroke="#555" stroke-width="1.5"/>
      <circle cx="34" cy="34" r="3" stroke="#555" stroke-width="1.5"/>
    </svg>`
    },

    moto: {
        id: "moto",
        tagline: "Disfruta la carretera sin preocupaciones",
        titulo: "Seguro de moto",
        subtitulo: "Coberturas específicas para tu moto, adaptadas a tu forma de conducir.",
        descripcion: "La moto tiene sus propios riesgos y necesidades. El seguro de moto de Generali está diseñado para motociclistas, con coberturas específicas ante accidentes, robos y daños. Tanto si usas la moto a diario como si solo ruedas en fin de semana, hay una modalidad para ti.",
        color: "#555",
        colorBg: "#f5f5f5",
        coberturas: [
            "Responsabilidad civil obligatoria y voluntaria",
            "Robo e incendio",
            "Daños propios por accidente",
            "Asistencia en carretera 24h",
            "Protección del equipamiento del motorista",
            "Defensa jurídica"
        ],
        ventajas: [
            "Coberturas adaptadas al uso real de la moto",
            "Asistencia en toda Europa",
            "Seguro específico para motos de alta cilindrada",
            "Prima competitiva para conductores con experiencia"
        ],
        paraTi: "Para motoristas que quieren disfrutar sin preocupaciones, tanto en ciudad como en carretera abierta.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <circle cx="12" cy="34" r="6" stroke="#555" stroke-width="2"/>
      <circle cx="36" cy="34" r="6" stroke="#555" stroke-width="2"/>
      <path d="M18 34h12M24 34l-4-12h8l6 8" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 22l-4-6h-4" stroke="#555" stroke-width="2" stroke-linecap="round"/>
    </svg>`
    },

    salud: {
        id: "salud",
        tagline: "Cuida de ti y de los tuyos",
        titulo: "Seguro de salud",
        subtitulo: "Acceso a los mejores especialistas sin listas de espera.",
        descripcion: "La sanidad privada ya no es un lujo. Con el seguro de salud de Generali accedes a un cuadro médico de más de 40.000 profesionales en toda España, sin esperas y con la mejor atención. Cuida tu salud y la de tu familia con tranquilidad.",
        color: "#555",
        colorBg: "#f5f5f5",
        coberturas: [
            "Médico de cabecera y especialistas",
            "Hospitalización y cirugía",
            "Urgencias 24h en toda España",
            "Pruebas diagnósticas y análisis",
            "Maternidad (opcional)",
            "Salud dental básica incluida"
        ],
        ventajas: [
            "Sin periodo de carencia en urgencias",
            "Más de 40.000 médicos en el cuadro",
            "App para gestionar citas y consultas",
            "Segunda opinión médica incluida"
        ],
        paraTi: "Para quien no quiere depender de las listas de espera y quiere lo mejor para su salud y la de su familia.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <rect x="10" y="10" width="28" height="28" rx="6" fill="#555" opacity="0.10"/>
      <path d="M24 17v14M17 24h14" stroke="#555" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
    },

    accidentes: {
        id: "accidentes",
        tagline: "Protección ante lo inesperado",
        titulo: "Seguro de accidentes",
        subtitulo: "Cobertura ante accidentes en el trabajo, en casa o en tu tiempo libre.",
        descripcion: "Los accidentes ocurren cuando menos te lo esperas. El seguro de accidentes de Generali te protege las 24 horas del día, en cualquier lugar del mundo, con indemnizaciones por invalidez y fallecimiento, además de asistencia sanitaria completa.",
        color: "#555",
        colorBg: "#f5f5f5",
        coberturas: [
            "Fallecimiento por accidente",
            "Invalidez permanente total o parcial",
            "Gastos de curación y hospitalización",
            "Incapacidad temporal (baja laboral)",
            "Asistencia en viaje",
            "Cobertura 24h en todo el mundo"
        ],
        ventajas: [
            "Cobertura global sin restricciones geográficas",
            "Compatible con cualquier otro seguro",
            "Especialmente pensado para activos y deportistas",
            "Prima muy asequible"
        ],
        paraTi: "Ideal para autónomos, deportistas, trabajadores manuales o cualquier persona que quiera una red de seguridad extra.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" fill="#555" opacity="0.10" stroke="#555" stroke-width="2" stroke-linejoin="round"/>
    </svg>`
    },

    empresas: {
        id: "empresas",
        tagline: "Protege tu negocio",
        titulo: "Seguro para empresas",
        subtitulo: "Soluciones de protección para autónomos y empresas de todos los tamaños.",
        descripcion: "Tu negocio es el resultado de mucho esfuerzo. Protégelo con coberturas diseñadas específicamente para empresas y autónomos: desde el local y las instalaciones hasta la responsabilidad frente a terceros, los empleados y la continuidad del negocio.",
        color: "#555",
        colorBg: "#f5f5f5",
        coberturas: [
            "Daños al local e instalaciones",
            "Responsabilidad civil empresarial",
            "Seguro colectivo de empleados",
            "Pérdida de beneficios por paralización",
            "Robo y daños en equipos",
            "Ciberriesgos y protección de datos"
        ],
        ventajas: [
            "Póliza adaptada a cada tipo de negocio",
            "Asesoramiento especializado para empresas",
            "Gestión centralizada de toda la cartera",
            "Deducible como gasto empresarial"
        ],
        paraTi: "Para autónomos, pequeñas y medianas empresas que necesitan protección completa sin complicaciones.",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <rect x="8" y="18" width="32" height="24" rx="2" fill="#555" opacity="0.10"/>
      <path d="M16 18V14a8 8 0 0 1 16 0v4" stroke="#555" stroke-width="2"/>
      <path d="M8 18h32M20 30h8" stroke="#555" stroke-width="2" stroke-linecap="round"/>
    </svg>`
    },

    "responsabilidad-civil": {
        id: "responsabilidad-civil",
        tagline: "Responde ante terceros sin preocuparte",
        titulo: "Responsabilidad civil",
        subtitulo: "Cubre los daños que puedas causar involuntariamente a otras personas o sus bienes.",
        descripcion: "La responsabilidad civil cubre los daños materiales y personales que puedas causar a terceros de forma involuntaria, tanto en tu vida personal como en la profesional. Es una cobertura esencial que a menudo se olvida hasta que realmente se necesita.",
        color: "#555",
        colorBg: "#f5f5f5",
        coberturas: [
            "Daños personales a terceros",
            "Daños materiales a terceros",
            "Responsabilidad civil como propietario",
            "Responsabilidad civil profesional",
            "Defensa jurídica ante reclamaciones",
            "Cobertura en toda la Unión Europea"
        ],
        ventajas: [
            "Prima muy económica para la cobertura que ofrece",
            "Ampliable a la actividad profesional",
            "Complementa a otros seguros como el de hogar",
            "Tramitación rápida de reclamaciones"
        ],
        paraTi: "Para cualquier persona que quiera estar protegida ante imprevistos cotidianos: un tropiezo en casa de un amigo, un daño accidental en el trabajo...",
        icono: `<svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <path d="M24 6L8 14v12c0 10 7 18 16 20 9-2 16-10 16-20V14L24 6z" fill="#555" opacity="0.10" stroke="#555" stroke-width="2" stroke-linejoin="round"/>
      <path d="M17 24l5 5 9-9" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    }
};