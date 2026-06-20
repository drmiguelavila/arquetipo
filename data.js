// ============================================
// 12 ARQUETIPOS DE MARCA — Margaret Mark & Carol S. Pearson
// Datos extraídos de imágenes originales (paletas reales, fuentes exactas)
// ============================================

const ARCHETYPES = {
  inocente:{
    name:"El Inocente",tagline:"Conocimiento + Fe − Negación",color:"#23398D",
    keywords:["Optimista","Puro","Honesto","Sencillo","Confiado","Leal","Romántico","Positivo","Nostálgico","Transparente"],
    objective:"Ser feliz y encontrar la felicidad en las cosas simples de la vida.",
    fortalezas:["Genera confianza y simpatía","Comunica autenticidad genuina","Despierta nostalgia positiva","Tono accesible y cálido"],
    debilidades:["Puede percibirse como ingenuo","Difícil de sostener ante crisis","Riesgo de parecer superficial"],
    metas:["Transmitir optimismo genuino","Conectar emocionalmente","Crear comunidades positivas"],
    miedos:["Ser visto como deshonesto","La complejidad y el caos","Perder la inocencia o la pureza"],
    personality:"El Inocente tiene un deseo profundo de encontrar y compartir la felicidad. Su visión del mundo es optimista y cree genuinamente que las cosas simples son las más valiosas. No busca complicar: busca claridad, bondad y momentos de alegría auténtica.\n\nEsta personalidad se manifiesta en marcas que prometen bienestar, simplicidad y experiencias puras. Su audiencia los sigue porque representan una pausa en la complejidad del mundo moderno.",
    strategy:"Las marcas Inocente funcionan mejor cuando apelan a la nostalgia y a la pureza de experiencias simples. Su comunicación debe ser cálida, directa y esperanzadora. Evitan la ironía y el cinismo. Son ideales para públicos que valoran la autenticidad sobre la sofisticación.",
    palette:["#E2061C","#EC6EA3","#FCEB19","#E9E0DB","#A08B7A","#219F48","#23398D"],
    fonts:[{name:"Caviar Dreams",role:"Display — Optimismo"},{name:"Retromark Script",role:"Acento — Honestidad"},{name:"Aller",role:"Cuerpo — Humildad"}],
    brands:["Coca-Cola","Dove","McDonald's","Dior"],
    actitud:"Marcas que prefieren la sencillez, la honestidad y el optimismo. Crean conexiones emocionales basadas en la confianza."},

  explorador:{
    name:"El Explorador",tagline:"Conocimiento + Autenticidad − Autocomplacencia",color:"#219F48",
    keywords:["Libre","Aventurero","Auténtico","Independiente","Curioso","Pionero","Nómada","Salvaje","Descubridor","Intrépido"],
    objective:"Descubrir el mundo y vivir con plena autenticidad y libertad.",
    fortalezas:["Inspira aventura y novedad","Atrae audiencias con mentalidad abierta","Diferenciación por autenticidad","Comunidad leal y apasionada"],
    debilidades:["Puede percibirse como irresponsable","Difícil de escalar sin perder autenticidad","Resistencia a la estructura"],
    metas:["Impulsar la búsqueda personal","Celebrar la independencia","Mostrar mundos posibles"],
    miedos:["El estancamiento y la rutina","La conformidad y la mediocridad","Perder la libertad o la autenticidad"],
    personality:"El Explorador no se conforma con la vida ordinaria. Busca constantemente experiencias nuevas, horizontes desconocidos y la versión más auténtica de sí mismo. Su filosofía es simple: vivir de manera plena significa salir de la zona de confort.\n\nEsta personalidad conecta con audiencias que sienten que hay más por descubrir, tanto en el mundo exterior como en su interior. Representan el espíritu pionero.",
    strategy:"Las marcas Explorador conectan mejor con mensajes de libertad, autenticidad y descubrimiento personal. Su comunicación es activa, visual y evocadora. Deben evitar parecer corporativas o demasiado pulidas. Funcionan mejor en plataformas visuales y en colaboración con comunidades activas.",
    palette:["#E2061C","#E9690D","#6D4426","#219F48","#D6C6AD","#8F6B47","#636722","#F7DAD5","#F09F81","#B4DCDE","#8AA8A8","#8F975C"],
    fonts:[{name:"Helvetica Neue",role:"Display — Emocionante"},{name:"Gotham",role:"Acento — Audaz"},{name:"Baskerville",role:"Cuerpo — Atrevido"}],
    brands:["Jeep","The North Face","Patagonia","Virgin"],
    actitud:"Marcas que celebran la aventura, la autenticidad y la exploración. Atraen a quienes buscan vivir sin límites artificiales."},

  sabio:{
    name:"El Sabio",tagline:"Conocimiento + Sabiduría − Dogmatismo",color:"#2E348B",
    keywords:["Experto","Analítico","Reflexivo","Erudito","Inteligente","Crítico","Objetivo","Investigador","Mentor","Visionario"],
    objective:"Usar la inteligencia y el análisis para entender el mundo y guiar a otros.",
    fortalezas:["Alta credibilidad y autoridad","Genera confianza intelectual","Ideal para nichos especializados","Contenido de alto valor"],
    debilidades:["Puede percibirse como frío o distante","Riesgo de elitismo o inaccesibilidad","Comunicación compleja si no se modera"],
    metas:["Compartir conocimiento transformador","Ser referente en su campo","Elevar el nivel del debate"],
    miedos:["La ignorancia y la superficialidad","Ser mal interpretado o citado fuera de contexto","Perder la objetividad"],
    personality:"El Sabio cree que la verdad, el conocimiento y la comprensión profunda son los mayores bienes que puede ofrecer. No se conforma con respuestas superficiales: investiga, analiza y sintetiza para ofrecer perspectivas que realmente transformen.\n\nSu audiencia lo busca cuando necesita claridad en la complejidad. El Sabio es el arquetipo del consultor de alto nivel, del pensador estratégico y del académico aplicado.",
    strategy:"Las marcas Sabio construyen autoridad a través del contenido de alta calidad, la investigación rigurosa y la comunicación clara pero profunda. Deben demostrar expertise genuino, no aparentarlo. Funcionan especialmente bien en B2B, consultoría, educación y sectores de alta especialización.",
    palette:["#020202","#949699","#E2061C","#2E348B","#A38762","#88735E","#F5F1EE","#B9BC9F","#314A20"],
    fonts:[{name:"Source Sans Variable",role:"Display — Sabiduría"},{name:"Gill Sans MT",role:"Acento — Seguro"},{name:"Minion Pro",role:"Cuerpo — Guía"}],
    brands:["TED","Harvard","Google","The Economist"],
    actitud:"Marcas que comparten conocimiento genuino para transformar perspectivas. Liderazgo intelectual como propuesta de valor central."},

  heroe:{
    name:"El Héroe",tagline:"Cambio + Coraje − Arrogancia",color:"#EA6A11",
    keywords:["Valiente","Competitivo","Disciplinado","Superador","Determinado","Triunfador","Resiliente","Poderoso","Inspirador","Campeón"],
    objective:"Demostrar que con esfuerzo, disciplina y valentía se puede superar cualquier obstáculo.",
    fortalezas:["Inspira acción y superación","Genera lealtad emocional intensa","Ideal para marcas de performance","Narrativas motivacionales potentes"],
    debilidades:["Puede parecer agresivo o excluyente","Presión por mantener imagen de éxito","Difícil de humanizar"],
    metas:["Inspirar a otros a superarse","Demostrar excelencia en acción","Crear comunidades de alto rendimiento"],
    miedos:["La debilidad y la rendición","El fracaso sin aprendizaje","Ser percibido como ordinario"],
    personality:"El Héroe vive para superar desafíos. Su motivación central es la mejora continua, la excelencia y la demostración de que el esfuerzo sostenido produce resultados extraordinarios. No evita la adversidad: la busca como terreno de crecimiento.\n\nSu audiencia lo sigue porque necesita creer que pueden más. El Héroe les devuelve esa convicción con evidencia y ejemplo.",
    strategy:"Las marcas Héroe utilizan narrativas de superación, testimonios de logro y lenguaje de acción. Su visual es dinámico, poderoso y aspiracional. Deben mostrar resultados reales, no solo prometerlos. Funcionan mejor en deportes, fitness, desarrollo personal y sectores competitivos.",
    palette:["#020202","#E2061C","#EA6A11","#B05F39","#FAF6EB","#522611","#A56F40","#EED595"],
    fonts:[{name:"Futura Md BT",role:"Display — Honesto"},{name:"Avant Garde Bk BT",role:"Acento — Sincero"},{name:"Futura Bk BT",role:"Cuerpo — Valiente"}],
    brands:["Nike","FedEx","Adidas","Under Armour"],
    actitud:"Marcas que creen en el potencial humano y lo demuestran. Inspiran a audiencias a alcanzar su máxima versión."},

  rebelde:{
    name:"El Rebelde",tagline:"Cambio + Revolución − Destrucción",color:"#CB3F30",
    keywords:["Disruptivo","Provocador","Auténtico","Revolucionario","Libre","Irreverente","Contracultura","Radical","Genuino","Transgresor"],
    objective:"Cuestionar el status quo y liberar a las personas de estructuras que las limitan.",
    fortalezas:["Diferenciación radical","Comunidades extremadamente leales","Alta recordación de marca","Autenticidad percibida como incomparable"],
    debilidades:["Puede alienar audiencias conservadoras","Difícil de escalar sin perder esencia","Riesgo de controversia no gestionada"],
    metas:["Romper con lo establecido","Dar voz a los inconformes","Demostrar que existe otra manera"],
    miedos:["La conformidad y el compromiso","Convertirse en lo que critica","Perder la autenticidad por el éxito"],
    personality:"El Rebelde existe para demostrar que hay otra forma de hacer las cosas. No se rebela por rebeldía: lo hace porque ve hipocresía, ineficiencia o injusticia en el sistema establecido y se niega a fingir que no existe.\n\nSu audiencia no lo sigue por moda: lo sigue porque siente que finalmente hay alguien que dice lo que todos piensan pero nadie se atreve a decir.",
    strategy:"Las marcas Rebelde comunican con provocación calculada, honestidad brutal y estética contracultural. Deben ser consistentes: un Rebelde que negocia con el sistema pierde todo. Funcionan en categorías donde existe frustración acumulada con las opciones existentes.",
    palette:["#020202","#949699","#E2061C","#2E348B","#0D0C10","#2B2E40","#F5F1EE","#C3BDC1","#CB3F30"],
    fonts:[{name:"Heaters",role:"Display — Disruptivo"},{name:"Helvetica LT Std Compressed",role:"Acento — Independiente"},{name:"Franklin Gothic Demi Cond",role:"Cuerpo — Combativo"}],
    brands:["Harley-Davidson","Diesel","Dainese","MTV"],
    actitud:"Marcas que se posicionan contra el establishment. Su propuesta de valor es la autenticidad radical y el coraje de ser diferente."},

  mago:{
    name:"El Mago",tagline:"Cambio + Transformación − Manipulación",color:"#5D2984",
    keywords:["Visionario","Transformador","Carismático","Poderoso","Intuitivo","Iluminado","Inspirador","Innovador","Misterioso","Catalizador"],
    objective:"Transformar la realidad y hacer que los sueños se conviertan en experiencias tangibles.",
    fortalezas:["Posicionamiento premium natural","Genera fascinación y deseo","Narrativas de transformación poderosas","Alta diferenciación percibida"],
    debilidades:["Difícil de mantener a largo plazo","Expectativas muy altas por cumplir","Riesgo de percepción de manipulación"],
    metas:["Catalizar transformaciones profundas","Crear momentos de revelación","Construir mundos de posibilidad"],
    miedos:["No cumplir con las expectativas","Perder el sentido de maravilla","Que la magia sea reducida a lo ordinario"],
    personality:"El Mago transforma lo ordinario en extraordinario. No solo vende productos o servicios: vende experiencias de transformación. Su promesa implícita es que después de interactuar con su marca, algo en ti habrá cambiado para siempre.\n\nSu audiencia busca más que funcionalidad: busca revelación. El Mago les da acceso a un mundo donde los límites entre lo posible y lo imposible se disuelven.",
    strategy:"Las marcas Mago comunican con experiencias inmersivas, narrativas de transformación y lenguaje evocador. Deben sorprender constantemente. Su visual es oscuro, misterioso o luminoso dependiendo del contexto. Funcionan excepcionalmente bien en tecnología, lujo y entretenimiento.",
    palette:["#020202","#999999","#5D2984","#0371B7","#49B7E8","#7E7DB9","#EF88B5","#E8473A","#25346C","#7A4977","#ACC4CE","#EF9FC4"],
    fonts:[{name:"Futura Hv BT",role:"Display — Místico"},{name:"Charlemagne STD",role:"Acento — Transformación"},{name:"Acorn Squash",role:"Cuerpo — Alentador"}],
    brands:["Absolut","Pixar","AXE"],
    actitud:"Marcas que prometen transformar vidas y realidades. Su poder está en hacer que lo imposible parezca inevitable."},

  comun:{
    name:"El Hombre Común",tagline:"Pertenencia + Igualdad − Venganza",color:"#304796",
    keywords:["Cercano","Accesible","Honesto","Inclusivo","Solidario","Práctico","Empático","Sin pretensiones","Confiable","Auténtico"],
    objective:"Crear sentido de pertenencia y demostrar que todos, sin excepción, tienen valor.",
    fortalezas:["Alta identificación emocional","Base de clientes amplia y diversa","Comunicación natural y sin barreras","Confianza construida desde la cercanía"],
    debilidades:["Difícil diferenciación por precio","Riesgo de parecer genérico","Tensión con posicionamiento premium"],
    metas:["Crear comunidades de pertenencia","Eliminar barreras de acceso","Demostrar que la calidad es para todos"],
    miedos:["La exclusión y el elitismo","Perder el contacto con la realidad","Ser percibido como mediocre"],
    personality:"El Hombre Común no busca ser especial: busca ser auténtico. Su mayor fortaleza es la identificación: cuando su audiencia lo ve, se ve a sí misma. No hay distancia, no hay pedestal, no hay performance de superioridad.\n\nEsta autenticidad construye una lealtad diferente: no de admiración sino de afecto genuino. Son marcas en las que confías porque sientes que te entienden de verdad.",
    strategy:"Las marcas del Hombre Común comunican con humor honesto, situaciones cotidianas y lenguaje sin pretensiones. Evitan la aspiracionalidad exagerada. Funcionan mejor con testimoniales reales, humor situacional y promesas simples pero cumplidas.",
    palette:["#304796","#E51F2E","#FCEB19","#8BBAE4","#2D3C8E","#9392A6","#91BD78","#A28D70","#F7E8ED","#EECEDB","#74849A","#9AB5D6","#DDE5F0"],
    fonts:[{name:"Noto",role:"Display — Amigable"},{name:"Verdana",role:"Acento — Igualdad"},{name:"Impact",role:"Cuerpo — Auténtico"}],
    brands:["IKEA","eBay","Levi's"],
    actitud:"Marcas que celebran la normalidad y la inclusión. Su propuesta es que todos merecen acceso a productos y experiencias de calidad."},

  amante:{
    name:"El Amante",tagline:"Pertenencia + Amor − Promiscuidad",color:"#C91D3B",
    keywords:["Sensual","Apasionado","Íntimo","Seductor","Sofisticado","Magnético","Atractivo","Deseable","Exclusivo","Intenso"],
    objective:"Crear experiencias de deseo, intimidad y placer que conecten profundamente.",
    fortalezas:["Alta aspiracionalidad y deseo","Posicionamiento premium natural","Lealtad emocional intensa","Diferenciación por experiencia sensorial"],
    debilidades:["Segmentación de audiencia estrecha","Riesgo de objetivización","Difícil de ejecutar sin parecer vulgar"],
    metas:["Despertar el deseo y la pasión","Crear momentos de intimidad","Posicionarse como símbolo de placer y sofisticación"],
    miedos:["La frialdad y la indiferencia","Perder el atractivo o la relevancia","La vulgaridad no intencionada"],
    personality:"El Amante entiende que el deseo es una de las fuerzas más poderosas en la decisión humana. No vende productos: vende experiencias de placer, intimidad y conexión emocional profunda.\n\nSu audiencia no compra por necesidad: compra por deseo. Y el Amante sabe que ese deseo debe ser cuidado, cultivado y renovado constantemente.",
    strategy:"Las marcas Amante comunican con imágenes aspiracionales, lenguaje evocador y experiencias sensoriales. Deben equilibrar accesibilidad con exclusividad. Funcionan excepcionalmente en moda, belleza, gastronomía y entretenimiento.",
    palette:["#E51F2E","#020202","#F19EC4","#598B4E","#7BA671","#828C9C","#AB3941","#69171C","#FBE5D6","#F3AF9A","#E96163","#C91D3B","#69161E"],
    fonts:[{name:"Couture",role:"Display — Sensual"},{name:"Trajan Pro",role:"Acento — Empático"},{name:"Bodoni",role:"Cuerpo — Dulce"}],
    brands:["Häagen-Dazs","Nespresso","L'Oréal"],
    actitud:"Marcas que apelan al deseo y la aspiración. Crean una relación íntima y exclusiva con sus audiencias basada en el placer."},

  bufon:{
    name:"El Bufón",tagline:"Pertenencia + Divertido − Mentiroso",color:"#EE7407",
    keywords:["Divertido","Irreverente","Espontáneo","Alegre","Despreocupado","Ingenioso","Juguetón","Entretenido","Humorístico","Liberador"],
    objective:"Traer alegría, ligereza y diversión genuina al mundo.",
    fortalezas:["Alta recordación por humor","Accesibilidad y simpatía naturales","Viralidad orgánica","Conexión emocional rápida"],
    debilidades:["Difícil de sostener con calidad constante","Riesgo de perder credibilidad","Límite difuso entre humor y falta de seriedad"],
    metas:["Hacer reír y disfrutar","Quitar el miedo a lo cotidiano","Crear momentos de conexión ligera"],
    miedos:["El aburrimiento y la solemnidad","Que nadie ría","Ser ignorado o irrelevante"],
    personality:"El Bufón sabe que la alegría es una necesidad humana fundamental, no un lujo. Su capacidad para encontrar humor en lo cotidiano, para quitarle dramatismo a lo serio y para hacer que la gente se relaje, es su superpoder.\n\nNo es superficial: detrás del humor del Bufón hay una comprensión profunda de la psicología humana. Sabe exactamente qué toca resortes emocionales y usa ese conocimiento para conectar.",
    strategy:"Las marcas Bufón comunican con humor inteligente, situaciones absurdas pero reconocibles y un tono que nunca se toma demasiado en serio a sí mismo. Deben ser genuinamente graciosas, no forzadamente. Funcionan en snacks, entretenimiento, apps y cualquier categoría donde el usuario quiera escapar del estrés.",
    palette:["#2E348B","#E51F2E","#EE7407","#FCEB19","#598B4E","#7BA671","#828C9C","#AB3941","#69171C","#F3AF9A","#F8D9E1","#D8EAF7","#B4C9DF","#C2DED0"],
    fonts:[{name:"Hand Of Sean",role:"Display — Divertido"},{name:"Rockwell",role:"Acento — Juguetón"},{name:"Brandon Grotesque",role:"Cuerpo — Positivo"}],
    brands:["Old Spice","Netflix","Oreo"],
    actitud:"Marcas que usan el humor como conexión genuina. Su irreverencia es calculada y su objetivo siempre es hacer sonreír."},

  cuidador:{
    name:"El Cuidador",tagline:"Orden + Cuidado − Mártir",color:"#1391D1",
    keywords:["Empático","Generoso","Compasivo","Guardián","Altruista","Paciente","Protector","Servicial","Desinteresado","Consolador"],
    objective:"Ayudar y proteger a los demás, construyendo comunidades fuertes y sostenibles.",
    fortalezas:["Brindando comodidad y servicio genuino","Creando estructura y estabilidad","Construyendo comunidades fuertes","Alta confianza y lealtad de clientes"],
    debilidades:["Puede permitir el mal comportamiento","Propenso a convertirse en mártir","Dificultad para decir que no"],
    metas:["Cuidar de otras personas","Marcar la diferencia en el mundo","Proteger a las personas de cualquier daño"],
    miedos:["Inestabilidad y caos","Ser visto como egoísta o ingrato","Quemarse y resentirse"],
    personality:"El Cuidador es altruista, movido por la compasión, la generosidad y el desinterés para ayudar a los demás. Aunque es propenso al martirio, el cuidador interior nos ayuda a criar a nuestros hijos, ayudar a los necesitados y construir estructuras para sustentar la vida.\n\nEsta personalidad se manifiesta perfectamente en la profesión de enfermería y en organizaciones de servicio. Los cuidadores no solo son reactivos, también son preventivos.",
    strategy:"El arquetipo Cuidador es perfecto para las marcas que ayudan a los necesitados. Las personas vulnerables requieren un toque suave. Un enfoque cálido, atento, generoso y maternal ofrece seguridad. El objetivo es hacer que sus clientes se sientan seguros, protegidos y atendidos.",
    palette:["#2E348B","#E51F2D","#EE7408","#FCEA19","#5B6A7A","#A2B2C3","#1391D1","#297E79","#ECD6D6","#E3BDB6","#BE8C82","#795B5C","#E7D2C3"],
    fonts:[{name:"Univers",role:"Display — Cuidador"},{name:"Britanic D Ultra",role:"Acento — Cálido"},{name:"Arial",role:"Cuerpo — Servicio"}],
    brands:["Nestlé","UNICEF","Danone"],
    actitud:"Marcas que anteponen el bienestar de sus clientes. Su comunicación es cálida, educativa y centrada en el cuidado genuino."},

  creador:{
    name:"El Creador",tagline:"Orden + Innovación − Perfeccionismo",color:"#A43089",
    keywords:["Artista","Visionario","Innovador","Creativo","Auténtico","Imaginativo","Expresivo","Inventor","Empresario","Soñador"],
    objective:"Materializar las ideas en hechos y objetos tangibles que permanezcan en el tiempo.",
    fortalezas:["Pensar más allá de los límites establecidos","Empujando fronteras constantemente","Ejecutando hábilmente ideas abstractas","Alta originalidad y distinción"],
    debilidades:["Perfeccionismo extremo","A veces impráctico","Puede ser insensible o arrogante cuando está en flujo"],
    metas:["Crear cosas de valor duradero","Mejorar continuamente su habilidad","Expresarse plenamente en cada obra"],
    miedos:["La mediocridad","Ser visto como un vendido","No poder ejecutar una visión"],
    personality:"El Creador fomenta todos los esfuerzos imaginativos, desde el arte más elevado hasta la más pequeña innovación en el estilo de vida. Los creadores buscan probar la realidad fuera de sus mentes. Una parte fundamental de su búsqueda es encontrarse y aceptarse a sí mismos.\n\nDebidamente canalizado, nos ayuda a expresarnos de manera hermosa. Adverso a la estasis, puede hacernos sobrecargar nuestras vidas con nuevos proyectos constantes.",
    strategy:"Para atraer a un Creador, debe celebrar el proceso creativo mientras inspira la autoexpresión. Las marcas que proporcionan herramientas para expresarse creativamente con libertad de elección estarían bien posicionadas. Su comunicación debe despertar el deseo del proceso creativo.",
    palette:["#020202","#999999","#E4241F","#A43089","#E10815","#1B1714","#F6E825","#DEB2A1","#F39C83","#F4B939","#A2BEB0","#3B746E"],
    fonts:[{name:"Lego Thick",role:"Display — Inspirador"},{name:"Myriad Pro",role:"Acento — Original"},{name:"San Francisco",role:"Cuerpo — Visión"}],
    brands:["Apple","LEGO","Canon"],
    actitud:"Marcas que dan a sus usuarios la posibilidad de desarrollar sus propias creaciones a partir de sus productos. Siempre van un paso adelante."},

  rey:{
    name:"El Rey",tagline:"Orden + Responsabilidad − Dictadura",color:"#D8B422",
    keywords:["Líder","Soberano","Responsable","Estructurado","Seguro","Fuerte","Organizado","Estable","Político","Aristócrata"],
    objective:"Crear una comunidad exclusiva unida por el éxito profesional, el prestigio y una posición social privilegiada.",
    fortalezas:["Personalidades naturalmente dominantes","Ofrece seguridad y estabilidad","Sofisticado y autorizado","Alta percepción de valor y exclusividad"],
    debilidades:["Fácilmente corruptible","Puede ser demasiado controlador","A veces puede tener derecho o codicia"],
    metas:["Ser poderoso e influyente","Para crear riqueza y prosperidad","Ser respetado y reconocido"],
    miedos:["Caos e inestabilidad","Siendo derrocado o desplazado","Ser visto como débil"],
    personality:"El gobernante desea control sobre todo lo demás y es una personalidad dominante. Son autoritarios en su comunicación y tienen un sentido de intimidación. Su objetivo es la prosperidad y el éxito y que esa prosperidad llegue a aquellos que son leales a su gobierno.\n\nSon seguros, responsables y controlan sus vidas. Los gobernantes se ven a sí mismos en la cima de la cadena alimentaria y defienden agresivamente esa posición.",
    strategy:"Para apelar a un gobernante, debes reafirmar su sentido de poder, control y respeto. Quieren tener una sensación de superioridad. Que sean parte de un exclusivo club V.I.P. Las marcas gobernantes deben proporcionar a sus clientes una reafirmación sensata de que están en la cima de la escalera del éxito.",
    palette:["#D8B422","#020202","#999999","#A43089","#E10815","#288334","#216FB6","#4CA1DA","#4E5E6C","#0B1016","#20404B","#3B767D","#7C1715","#D6BFB0","#DAA686","#B9785A","#BE8282","#835450"],
    fonts:[{name:"Futura STD Book",role:"Display — Dominante"},{name:"Corporate A BQ",role:"Acento — Refinado"},{name:"Garamond",role:"Cuerpo — Éxito"}],
    brands:["Rolex","Mercedes-Benz","Amazon"],
    actitud:"Marcas de tipo premium cuyo público tiene un estatus socioeconómico alto. Crean comunidades de éxito y pertenencia exclusiva."}
};

const COMBINATIONS = {
  "inocente-explorador":"La combinación Inocente + Explorador crea una marca de autenticidad pura: optimista y libre. Ideal para productos de bienestar y estilo de vida que prometen aventuras simples y genuinas.",
  "inocente-sabio":"Inocente + Sabio genera credibilidad con calidez. Una marca que enseña desde la honestidad, sin pretensiones académicas.",
  "inocente-cuidador":"Inocente + Cuidador combina pureza con protección genuina. Ideal para marcas de bienestar familiar e infantil.",
  "explorador-heroe":"Explorador + Héroe: aventura con propósito. Marcas que inspiran a superar límites físicos y mentales en terrenos desconocidos.",
  "explorador-rebelde":"Explorador + Rebelde genera la marca del pionero disruptivo. Desafía las rutas establecidas y encuentra nuevos caminos.",
  "explorador-mago":"Explorador + Mago combina la búsqueda externa con la transformación interna. Marcas de descubrimiento profundo y experiencias transformadoras.",
  "sabio-heroe":"Sabio + Héroe es la combinación del estratega de alto rendimiento. Conocimiento aplicado con disciplina de ejecución.",
  "sabio-mago":"Sabio + Mago crea la marca del visionario intelectual. Combina rigor analítico con capacidad de transformación.",
  "sabio-rey":"Sabio + Rey es el arquetipo del líder-estratega. Autoridad construida desde el conocimiento profundo.",
  "sabio-creador":"Sabio + Creador: innovación con fundamento. Crea desde el conocimiento profundo, no desde la intuición sola.",
  "heroe-mago":"Héroe + Mago: la transformación a través del esfuerzo extraordinario. Marcas que prometen cambios profundos a través de la acción disciplinada.",
  "heroe-rey":"Héroe + Rey combina la excelencia con la autoridad. Marcas que no solo logran resultados extraordinarios sino que los institucionaliza.",
  "heroe-rebelde":"Héroe + Rebelde: la fuerza que desafía al sistema. Combina disciplina con coraje disruptivo.",
  "rebelde-creador":"Rebelde + Creador: la innovación como acto político. Crea cosas nuevas precisamente porque lo existente es insuficiente.",
  "rebelde-mago":"Rebelde + Mago es de las combinaciones más disruptivas. Transforma las reglas del juego y hace que lo imposible parezca obvio en retrospectiva.",
  "mago-rey":"Mago + Rey es la combinación premium por excelencia. Transforma y lidera con autoridad absoluta.",
  "mago-creador":"Mago + Creador genera la marca del genio innovador. Transforma a través de la creación de mundos nuevos.",
  "mago-amante":"Mago + Amante combina transformación con deseo. Marcas que generan experiencias seductoras y memorables.",
  "comun-cuidador":"Hombre Común + Cuidador: la marca de la comunidad que cuida. Accesible, cercana y genuinamente preocupada por el bienestar de todos.",
  "comun-bufon":"Hombre Común + Bufón: cercanía con sentido del humor. Marcas que conectan desde lo cotidiano con ligereza.",
  "amante-rey":"Amante + Rey es el lujo aspiracional en su expresión más pura. Deseable y exclusivo a partes iguales.",
  "amante-mago":"Amante + Mago combina seducción y transformación. Marcas que prometen experiencias sensoriales inolvidables.",
  "bufon-rebelde":"Bufón + Rebelde: humor con filo. Marcas que usan la comedia como forma de cuestionar el status quo.",
  "cuidador-sabio":"Cuidador + Sabio: el mentor que transforma desde el cuidado genuino. Comparte conocimiento para proteger y empoderar.",
  "cuidador-rey":"Cuidador + Rey: lidera para servir. Una autoridad que usa su poder para construir estructuras que protejan a los más vulnerables.",
  "creador-mago":"Creador + Mago genera la marca del innovador transformador. Crea mundos nuevos que cambian cómo otros ven lo posible.",
  "rey-sabio":"Rey + Sabio es la combinación del líder intelectual. Autoridad fundada en el conocimiento."
};

function getCombNote(a1,a2){
  return COMBINATIONS[a1+"-"+a2]||COMBINATIONS[a2+"-"+a1]||
    "La combinación de "+ARCHETYPES[a1].name+" y "+ARCHETYPES[a2].name+" crea una marca con dimensiones complementarias. El primero define tu esencia, el segundo añade el matiz que te hace único e irrepetible.";
}

const QUESTIONS=[
  {category:"Motivación central",text:"¿Qué te impulsa más profundamente en tu trabajo?",options:[
    {text:"Ayudar a otros a crecer, protegerlos y estar bien",scores:{cuidador:3,inocente:1}},
    {text:"Crear algo nuevo que no existía antes y dejar huella",scores:{creador:3,mago:1}},
    {text:"Construir estructuras que perduren y dar orden al caos",scores:{rey:3,sabio:1}},
    {text:"Descubrir nuevas perspectivas y vivir con autenticidad total",scores:{explorador:3,bufon:1}}]},
  {category:"Estilo de liderazgo",text:"Cuando lideras un equipo, tu instinto natural es…",options:[
    {text:"Escuchar primero, asegurarme de que todos estén bien",scores:{cuidador:3,comun:1}},
    {text:"Proponer ideas disruptivas y empujar los límites",scores:{creador:3,rebelde:1}},
    {text:"Establecer dirección clara y asumir la responsabilidad total",scores:{rey:3,heroe:1}},
    {text:"Inspirar con visión y crear un ambiente de posibilidad",scores:{mago:3,explorador:1}}]},
  {category:"Miedo profundo",text:"¿Cuál de estos escenarios te perturba más?",options:[
    {text:"Ver que alguien sufre y no poder hacer nada para ayudarlo",scores:{cuidador:3,inocente:1}},
    {text:"Quedarme estancado, sin poder crear ni innovar",scores:{creador:3,explorador:1}},
    {text:"Perder el control, la autoridad o el respeto que he construido",scores:{rey:3,heroe:1}},
    {text:"Descubrir que lo que construí es superficial o sin significado real",scores:{sabio:3,mago:1}}]},
  {category:"Promesa de valor",text:"¿Cuál es tu promesa más genuina a tus clientes?",options:[
    {text:"Que estarán en buenas manos: cuidados, protegidos, acompañados",scores:{cuidador:3,comun:1}},
    {text:"Que algo en ellos habrá cambiado para siempre",scores:{mago:3,heroe:1}},
    {text:"Que tendrán claridad, estructura y resultados concretos",scores:{rey:3,sabio:1}},
    {text:"Que explorarán posibilidades que nunca habían imaginado",scores:{creador:3,explorador:1}}]},
  {category:"Comunicación de marca",text:"¿Cómo te sientes más cómodo comunicando tu valor?",options:[
    {text:"Compartiendo historias reales de personas que he transformado",scores:{cuidador:3,heroe:1}},
    {text:"Mostrando lo que he creado: libros, métodos, ideas originales",scores:{creador:3,sabio:1}},
    {text:"Proyectando autoridad, trayectoria y resultados demostrados",scores:{rey:3,heroe:1}},
    {text:"Articulando mi visión del futuro con convicción y pasión",scores:{mago:3,explorador:1}}]},
  {category:"Relación con clientes",text:"¿Cómo describes tu relación ideal con quienes trabajan contigo?",options:[
    {text:"Como un mentor que acompaña con calidez genuina",scores:{cuidador:3,sabio:1}},
    {text:"Como un socio que co-crea soluciones innovadoras",scores:{creador:3,comun:1}},
    {text:"Como su referente de autoridad y confianza total",scores:{rey:3,sabio:1}},
    {text:"Como un catalizador que despierta su mayor potencial",scores:{mago:3,heroe:1}}]},
  {category:"Criterio de decisión",text:"Ante una decisión compleja, ¿qué pesa más en tu razonamiento?",options:[
    {text:"El impacto humano: cómo afectará a las personas involucradas",scores:{cuidador:3,comun:1}},
    {text:"La originalidad de la solución y su potencial transformador",scores:{creador:3,mago:1}},
    {text:"Que sea la decisión correcta y sostenible a largo plazo",scores:{rey:3,sabio:1}},
    {text:"Que genere el mayor aprendizaje y crecimiento posible",scores:{explorador:3,sabio:1}}]},
  {category:"Diferenciación",text:"¿En qué aspecto sientes que eres genuinamente diferente?",options:[
    {text:"En la profundidad con la que me importa el bienestar de otros",scores:{cuidador:3,inocente:1}},
    {text:"En mi capacidad de ver y crear lo que otros no imaginan",scores:{creador:3,mago:1}},
    {text:"En la fortaleza de mi carácter y la claridad de mi visión de liderazgo",scores:{rey:3,heroe:1}},
    {text:"En el rigor de mi conocimiento y la profundidad de mi análisis",scores:{sabio:3,rey:1}}]},
  {category:"Audiencia ideal",text:"¿Con quién conectas más naturalmente?",options:[
    {text:"Con personas en momentos de vulnerabilidad que buscan apoyo",scores:{cuidador:3,comun:1}},
    {text:"Con mentes inquietas que quieren crear e innovar",scores:{creador:3,rebelde:1}},
    {text:"Con líderes y empresarios que buscan resultados de alto impacto",scores:{rey:3,heroe:1}},
    {text:"Con personas curiosas que quieren entender la profundidad de las cosas",scores:{sabio:3,explorador:1}}]},
  {category:"Contenido preferido",text:"¿Qué tipo de contenido disfrutas más crear?",options:[
    {text:"Historias emotivas e inspiradoras de transformación humana",scores:{cuidador:2,mago:2}},
    {text:"Análisis profundos, investigación y perspectivas no convencionales",scores:{sabio:3,creador:1}},
    {text:"Frameworks, metodologías y sistemas prácticos aplicables",scores:{rey:2,sabio:2}},
    {text:"Ideas disruptivas, innovación y visiones del futuro",scores:{creador:2,mago:2}}]},
  {category:"Legado",text:"¿Qué quieres que digan de ti en 20 años?",options:[
    {text:"Que cambió la vida de miles de personas con generosidad y amor",scores:{cuidador:3,inocente:1}},
    {text:"Que creó algo que ningún otro había imaginado antes",scores:{creador:3,mago:1}},
    {text:"Que construyó instituciones y sistemas que perduran en el tiempo",scores:{rey:3,sabio:1}},
    {text:"Que combinó humanismo y tecnología para transformar su industria",scores:{mago:2,creador:2}}]},
  {category:"Actitud ante el cambio",text:"Cuando el mundo a tu alrededor cambia radicalmente, tu primera reacción es…",options:[
    {text:"Asegurarme de que las personas a mi alrededor estén bien y orientadas",scores:{cuidador:3,rey:1}},
    {text:"Explorar las nuevas posibilidades que ese cambio abre",scores:{explorador:3,creador:1}},
    {text:"Analizar el cambio en profundidad antes de actuar",scores:{sabio:3,rey:1}},
    {text:"Liderar la adaptación con decisión y claridad para mi equipo",scores:{rey:2,heroe:2}}]},
  {category:"Sentido del humor",text:"¿Qué papel juega el humor en tu forma de comunicar?",options:[
    {text:"Lo uso para conectar y quitarle peso a lo cotidiano",scores:{bufon:3,comun:1}},
    {text:"Prefiero la seriedad y la profundidad sobre la ligereza",scores:{sabio:2,rey:1}},
    {text:"Uso el humor como forma de provocar y cuestionar",scores:{rebelde:2,bufon:1}},
    {text:"Casi no lo uso, prefiero la calidez genuina",scores:{cuidador:2,inocente:1}}]},
  {category:"Atracción y deseo",text:"¿Cómo describes tu forma de atraer a tu audiencia?",options:[
    {text:"A través de la calidez y la cercanía genuina",scores:{cuidador:2,comun:2}},
    {text:"A través de la sofisticación y el deseo aspiracional",scores:{amante:3,rey:1}},
    {text:"A través de la innovación y la sorpresa constante",scores:{creador:2,mago:2}},
    {text:"A través de la autoridad y los resultados comprobados",scores:{rey:2,heroe:2}}]}
];
