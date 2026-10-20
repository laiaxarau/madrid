/* ══════════════════════════════════════════════════════════════
   MADRID · Tria la teva aventura  —  Lògica de l'aplicació
   ══════════════════════════════════════════════════════════════ */

/* ══ DADES ══════════════════════════════════════════════════ */
const REST = [
  {n:"Bodega de la Ardosa",          z:"Malasaña",          t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"Casa Camacho",                 z:"Malasaña",          t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"El Tigre Sidra Bar",           z:"Centro/Plaza Mayor",t:["dinar","copa"],              p:"baix", a:"informal", nota:"Tapas XXL gratis!"},
  {n:"La Esquina de Eusebio",        z:"La Latina",         t:["dinar","copa"],              p:"baix", a:"informal", nota:"Buffet de tapes gratis"},
  {n:"Bodegas el Maño",              z:"Malasaña",          t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"Taberna La Fragua de Vulcano", z:"Las Letras",        t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Café Comercial",               z:"Malasaña",          t:["esmorzar","dinar","pausa"],  p:"mig",  a:"informal", nota:"Des de 1887"},
  {n:"Sobrino de Botín",             z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"alt",  a:"formal",   nota:"Restaurant més antic del món (1725)"},
  {n:"Casa Labra",                   z:"Centro/Plaza Mayor",t:["dinar","copa"],              p:"baix", a:"informal", nota:"Bacallà fregit"},
  {n:"Trattoria Fratelli Figurato",  z:"Malasaña",          t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"Top 50 Pizza Europa"},
  {n:"NAP Pizzeria",                 z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Circolo Popolare Madrid",      z:"",                  t:["dinar","sopar"],             p:"alt",  a:"informal"},
  {n:"Villa Capri",                  z:"Chueca",            t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Grosso Napoletano (Pez 11)",   z:"Malasaña",          t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Grosso Napoletano (Hermosilla)",z:"",                 t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Beata Pasta",                  z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"MY Pasta Room",                z:"Malasaña",          t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Araldo Madrid",                z:"Las Letras",        t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"2a millor pizza Madrid"},
  {n:"400 Grados",                   z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"MICA",                         z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Toto e Peppino",               z:"Chueca",            t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"9,5/10 – increïble"},
  {n:"Il Piccolino della Farfalla",  z:"Las Letras",        t:["dinar"],                    p:"baix", a:"informal", nota:"Menú 13,90€"},
  {n:"Filippo Pizza",                z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"El Bacaro de Fabio",           z:"La Latina",         t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Restaurante La Nonna",         z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Arrogante",                    z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Ponja Nikkei",                 z:"Las Letras",        t:["dinar","sopar"],             p:"alt",  a:"formal",   nota:"Cal reserva"},
  {n:"El Buda Feliz 1974",           z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"Xinès més antic de Madrid"},
  {n:"Sumo Fusión (Gran Vía)",       z:"Centro/Plaza Mayor",t:["dinar"],                    p:"mig",  a:"informal"},
  {n:"Kaiten Sushi Madrid",          z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Hemu Sushi Buffet Libre",      z:"Centro/Plaza Mayor",t:["dinar"],                    p:"baix", a:"informal", nota:"12,95€ migdia"},
  {n:"Kuikku / Baro Hand Roll Bar",  z:"Retiro-Prado",      t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Toy Panda",                    z:"Malasaña",          t:["dinar"],                    p:"baix", a:"informal", tancat:true},
  {n:"Bunny Chao",                   z:"Lavapiés",          t:["dinar","sopar"],             p:"baix", a:"informal", nota:"Thai · Indonèsia · Vietnam"},
  {n:"El Japo",                      z:"Chueca",            t:["dinar"],                    p:"baix", a:"informal", nota:"Menú L–J: 16€"},
  {n:"Lamonarracha Chamberí",        z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Go! Sushing",                  z:"",                  t:["dinar","sopar"],             p:"mig",  a:"informal"},
  {n:"Takos Al Pastor",              z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"baix", a:"informal", nota:"Sense reserves, cua habitual"},
  {n:"Casa Jaguar",                  z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"mig",  a:"informal", tancat:true},
  {n:"Santita",                      z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"mig",  a:"informal", tancat:true},
  {n:"Honest Greens (Hortaleza)",    z:"Chueca",            t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"Vegà · s/gluten"},
  {n:"Superchulo Gran Vía",          z:"Centro/Plaza Mayor",t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"Vegà"},
  {n:"Superchulo (Fuencarral)",      z:"Malasaña",          t:["dinar","sopar"],             p:"mig",  a:"informal", nota:"Vegà"},
  {n:"Celicioso Gluten Free",        z:"Centro/Plaza Mayor",t:["esmorzar","pausa"],          p:"mig",  a:"informal"},
  {n:"HanSo Café",                   z:"Malasaña",          t:["esmorzar","pausa"],          p:"mig",  a:"informal"},
  {n:"Pum Pum Café",                 z:"Lavapiés",          t:["esmorzar","dinar","pausa"],  p:"mig",  a:"informal", nota:"Brunch orgànic"},
  {n:"Misión Café",                  z:"",                  t:["esmorzar","pausa"],          p:"mig",  a:"informal"},
  {n:"Ojalá Beach Bar",              z:"Malasaña",          t:["esmorzar","dinar","pausa"],  p:"mig",  a:"informal", nota:"Planta de sorra!"},
  {n:"Toma Café",                    z:"Malasaña",          t:["esmorzar","pausa"],          p:"mig",  a:"informal", nota:"El favorit dels hipsters"},
  {n:"Café del Art",                 z:"Malasaña",          t:["esmorzar","pausa"],          p:"baix", a:"informal"},
  {n:"Chocolatería San Ginés",       z:"Centro/Plaza Mayor",t:["esmorzar","pausa"],          p:"baix", a:"informal", nota:"Obert 24h · Des de 1894"},
  {n:"Hola Coffee",                  z:"Lavapiés",          t:["esmorzar","pausa"],          p:"mig",  a:"informal"},
  {n:"La Duquesita",                 z:"Chueca",            t:["esmorzar","pausa"],          p:"mig",  a:"informal", nota:"Millors croissants de Madrid"},
  {n:"Café Barbieri",                z:"Lavapiés",          t:["esmorzar","pausa"],          p:"baix", a:"informal"},
  {n:"Maestro Churrero",             z:"Malasaña",          t:["esmorzar","pausa"],          p:"baix", a:"informal", nota:"Churros sense gluten!"},
  {n:"Salmon Guru",                  z:"Las Letras",        t:["copa"],                      p:"alt",  a:"informal", nota:"World's 50 Best Bars"},
  {n:"1862 Dry Bar",                 z:"Malasaña",          t:["copa"],                      p:"mig",  a:"informal"},
  {n:"Café Berlín",                  z:"Centro/Plaza Mayor",t:["copa"],                      p:"mig",  a:"informal", nota:"Jazz en viu"},
  {n:"Macera Taller Bar",            z:"Malasaña",          t:["copa"],                      p:"mig",  a:"informal", nota:"Destil·lats propis"},
  {n:"Lateral (Pza. Santa Ana)",     z:"Las Letras",        t:["sopar","copa"],              p:"mig",  a:"formal"},
  {n:"Hermanos Vinagre (Cisneros)",  z:"",                  t:["copa"],                      p:"baix", a:"informal"},
  {n:"Hermanos Vinagre (Narváez)",   z:"Retiro-Prado",      t:["copa"],                      p:"baix", a:"informal"},
  {n:"Hermanos Vinagre (Gravina)",   z:"Chueca",            t:["copa"],                      p:"baix", a:"informal"},
  {n:"La Vía Láctea",                z:"Malasaña",          t:["copa"],                      p:"baix", a:"informal", nota:"Icona de la Movida"},
  {n:"Mi Madre Era Una Groupie",     z:"Malasaña",          t:["copa"],                      p:"baix", a:"informal", tancat:true},
  {n:"Joy Eslava / Teatro Eslava",   z:"Centro/Plaza Mayor",t:["copa"],                      p:"mig",  a:"informal", nota:"Des de 1981"},
  {n:"Medias Puri",                  z:"Las Letras",        t:["copa"],                      p:"mig",  a:"informal", nota:"3 pistes de ball"},
  {n:"Mondo Disko",                  z:"Malasaña",          t:["copa"],                      p:"mig",  a:"informal", nota:"Electrònica i house"},
  {n:"Fanático / Hipnótico",         z:"",                  t:["copa"],                      p:"alt",  a:"formal"},
  {n:"Teatro Barceló",               z:"Malasaña",          t:["copa"],                      p:"mig",  a:"informal", nota:"Club clàssic des dels 80"},
  {n:"Goya Social Club",             z:"",                  t:["copa"],                      p:"mig",  a:"informal"},
  {n:"Mercado de San Miguel",        z:"Centro/Plaza Mayor",t:["dinar","pausa"],             p:"mig",  a:"informal", nota:"Mercat gourmet des de 1916"},
  {n:"Mercado de San Ildefonso",     z:"Malasaña",          t:["dinar","copa","pausa"],      p:"baix", a:"informal"},
  {n:"Mercado de San Antón",         z:"Chueca",            t:["dinar","pausa"],             p:"mig",  a:"informal"},
  {n:"Mercado de San Fernando",      z:"Lavapiés",          t:["dinar","pausa"],             p:"baix", a:"informal", nota:"Menys turístic"},
  {n:"Mercado de Antón Martín",      z:"Lavapiés",          t:["dinar","pausa"],             p:"baix", a:"informal"},
  {n:"Docamar",                      z:"",                  t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"Casa Iván",                    z:"",                  t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"Montero de Cazorla",           z:"",                  t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"El Dokamar (Barri Concepció)", z:"",                  t:["dinar","copa"],              p:"baix", a:"informal"},
  {n:"Última Planta El Corte Inglés",z:"Centro/Plaza Mayor",t:["pausa","copa"],              p:"mig",  a:"informal", nota:"Vistes Gran Vía · Accés lliure"},
  {n:"Gran Vía 18 (Azotea)",         z:"Centro/Plaza Mayor",t:["pausa","copa"],              p:"mig",  a:"informal"},
  {n:"Ella Sky Bar",                 z:"Centro/Plaza Mayor",t:["copa"],                      p:"alt",  a:"informal"},
  {n:"El Brillante",                 z:"Retiro-Prado",      t:["dinar"],                    p:"baix", a:"informal", nota:"El millor bocata de calamares de Madrid"},
];

/* ══ FLUXES ════════════════════════════════════════════════ */
const FLOWS = {
  dijous: {
    title: "DIJOUS · 5 DE NOVEMBRE",
    nodes: [
      { k:"fix", e:"✈️", h:"12:17", tit:"Arribes a Atocha", note:"No podeu entrar a l'hostal fins les 14h" },
      { k:"dec", q:"Aneu al centre i cap a la aventura? O dineu un bocata de calamares a El Brillante?",
        opts:[
          { l:"A", tit:"Al centre!",    det:"Agafeu el cercanías · Visiteu Plaza del Sol · Busqueu un lloc on dinar",          act:"sel", ctx:{zona:"Centro/Plaza Mayor", tipus:"dinar"} },
          { l:"B", tit:"El Brillante",  det:"Us mengeu el millor bocata de calamares de tot Madrid · Plens i cofois a l'hotel", act:"sel", ctx:{zona:"Retiro-Prado",       tipus:"dinar"} }
        ]},
      { k:"fix", e:"🏨", h:"14:00", tit:"Deixeu maletes a l'hotel" },
      { k:"fix", e:"☀️", h:"14:30", tit:"Puerta del Sol", note:"El km 0 de les carreteres", detail:"sol" },
      { k:"fix", e:"🏛️", h:"15:00", tit:"Plaza Mayor", note:"Arcs, estàtua de Felip III i l'ambient dels Àustries", detail:"plaza-mayor" },
      { k:"fix", e:"🌅", h:"18:00", tit:"Posta de sol al Templo de Debod", note:"No us el perdeu — una de les millors vistes de Madrid", loc:"Templo de Debod Madrid", detail:"debod" },
      { k:"dec", q:"On sopeu avui?",
        opts:[
          { l:"A", tit:"Las Letras",  det:"Torneu cap a l'hotel i sopeu al barrio de las letras",        act:"sel", ctx:{zona:"Las Letras",  tipus:"sopar"} },
          { l:"B", tit:"Malasaña",    det:"Us quedeu per Malasaña, prop de Debod",                       act:"sel", ctx:{zona:"Malasaña",    tipus:"sopar"} },
          { l:"C", tit:"La Latina",   det:"No queda gaire a prop de Debod, però ara hi esteu a prop",    act:"sel", ctx:{zona:"La Latina",   tipus:"sopar"} }
        ]}
    ]
  },
  divendres: {
    title: "DIVENDRES · 6 DE NOVEMBRE",
    nodes: [
      { k:"sel", lbl:"Esmorzar", ctx:{tipus:"esmorzar"} },
      { k:"fix", e:"🖼️", h:"09:30–13:00", tit:"Museo del Prado", note:"Reserveu entrada amb antelació · El Greco, Velázquez, Goya", loc:"Museo del Prado Madrid", detail:"prado" },
      { k:"sel", lbl:"Dinar", ctx:{tipus:"dinar"} },
      { k:"dec", q:"Tarda: Retiro o més museus?",
        opts:[
          { l:"A", tit:"Parque del Retiro",     det:"Si no hi heu anat: El Brillante està a propet",              act:"detail", detail:"retiro" },
          { l:"B", tit:"Reina Sofia o Thyssen",det:"Decidiu visitar un altre dels 2 museus que queden",           act:"detail", detail:"reina" }
        ]},
      { k:"dec", q:"Passejada de les 18h, per on?",
        opts:[
          { l:"A", tit:"Lavapiés",         det:"La Casa Encendida · Mercat de San Fernando",  act:"sel", ctx:{zona:"Lavapiés"} },
          { l:"B", tit:"Gran Via i Chueca",det:"Gran Vía y Chueca",                               act:"sel", ctx:{zona:"Chueca"} },
          { l:"C", tit:"Malasaña",         det:"Igual que dijous",                                act:"sel", ctx:{zona:"Malasaña"} }
        ]},
      { k:"sel", lbl:"Sopar", ctx:{tipus:"sopar"} }
    ]
  },
  dissabte: {
    title: "DISSABTE · 7 DE NOVEMBRE",
    nodes: [
      { k:"sel", lbl:"Esmorzar", ctx:{tipus:"esmorzar"} },
      { k:"dec", q:"Matí: museus o parc?",
        opts:[
          { l:"A", tit:"Museu Thyssen",     det:"Si no l'heu vist divendres",                                          act:"detail", detail:"thyssen" },
          { l:"B", tit:"Museu Reina Sofia", det:"Si no l'heu vist divendres",                                          act:"detail", detail:"reina" },
          { l:"C", tit:"Parque del Retiro", det:"Si no hi hem anat",                                                   act:"detail", detail:"retiro" },
          { l:"D", tit:"Maestro Churrero",  det:"Churros sense gluten i una quantitat indecent de delícies",           act:"sel",    ctx:{zona:"Malasaña", tipus:"esmorzar"} },
          { l:"E", tit:"Totes les anteriors",det:"Feu-ho tot. Viviu a tope.",                                          act:"sel",    ctx:{tipus:"dinar"} }
        ]},
      { k:"sel", lbl:"Dinar", ctx:{tipus:"dinar"} },
      { k:"dec", q:"Tarda-nit: copes o sopar on?",
        opts:[
          { l:"A", tit:"Las Letras / Sol", det:"Zona cèntrica · Salmon Guru és aquí",  act:"sel", ctx:{zona:"Las Letras", tipus:"sopar"} },
          { l:"B", tit:"Malasaña",         det:"La nit de Malasaña és llarga",          act:"sel", ctx:{zona:"Malasaña",   tipus:"copa"} },
          { l:"C", tit:"Chueca",           det:"Ambient animat i molt variat",          act:"sel", ctx:{zona:"Chueca",     tipus:"sopar"} }
        ]}
    ]
  },
  diumenge: {
    title: "DIUMENGE · 8 DE NOVEMBRE",
    nodes: [
      { k:"sel", lbl:"Esmorzar", ctx:{tipus:"esmorzar"} },
      { k:"dec", q:"Matí: mercat o Lavapiés?",
        opts:[
          { l:"A", tit:"El Rastro",        det:"El mercat d'encants més famós de Madrid · Obert els diumenges", loc:"El Rastro Madrid" },
          { l:"B", tit:"Tapetes Lavapiés",det:"Tapetes a Lavapiés",                                                    act:"sel", ctx:{zona:"Lavapiés", tipus:"dinar"} }
        ]},
      { k:"sel", lbl:"Últim dinar a Madrid", ctx:{zona:"Lavapiés", tipus:"dinar"} },
      { k:"fix", e:"🚂", h:"13:45", tit:"Ser a Atocha", note:"Agafeu el tren · Fins aviat, Madrid! 🥲", loc:"Estación de Atocha Madrid" }
    ]
  }
};

/* ══ ESTAT ══════════════════════════════════════════════════ */
let curView = "home", curDay = null, curDetail = null, prevView = "home", prevDay = null;
const fil = { zona:null, tipus:null, preu:null, ambient:null };

/* ══ ROUTER ════════════════════════════════════════════════ */
function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}
function goHome() {
  prevView = curView; prevDay = curDay;
  curView = "home"; curDay = null;
  showView("v-home");
}
function goDay(day) {
  prevView = curView; prevDay = curDay;
  curView = "day"; curDay = day;
  renderDay(day); showView("v-day");
}
function goSel(ctx) {
  prevView = curView; prevDay = curDay;
  curView = "sel"; openSel(ctx || {}); showView("v-sel");
}
function goDetail(key) {
  prevView = curView; prevDay = curDay;
  curView = "detail"; curDetail = key;
  renderDetail(key); showView("v-detail");
}
function goBack() {
  if (prevView === "day" && prevDay) {
    curView = "day"; curDay = prevDay; curDetail = null;
    showView("v-day");
  } else goHome();
}

/* ══ RENDER DAY ════════════════════════════════════════════ */
function mapsUrl(loc) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(loc);
}

/* ── Progressive reveal: group-based amb botó "Continua" ── */

/** Divideix els nodes en chunks: cada chunk acaba en un node dec/sel */
function makeChunks(nodes) {
  const chunks = [];
  let cur = [];
  nodes.forEach(n => {
    cur.push(n);
    if (n.k === "dec" || n.k === "sel") {
      chunks.push(cur);
      cur = [];
    }
  });
  if (cur.length) chunks.push(cur);
  return chunks;
}

function nodeHTML(n) {
  if (n.k === "fix") {
    const link = n.detail
      ? `<button class="node-maps" onclick='goDetail("${n.detail}")'>ℹ️ Més informació</button>`
      : n.loc
        ? `<a class="node-maps" href="${mapsUrl(n.loc)}" target="_blank" rel="noopener">📍 Obre a Maps</a>`
        : "";
    return `<div class="node-fixed">
      <div class="node-icon">${n.e || "📍"}</div>
      <div class="node-body">
        ${n.h ? `<div class="node-time">${n.h}</div>` : ""}
        <div class="node-title">${n.tit}</div>
        ${n.note ? `<div class="node-note">${n.note}</div>` : ""}
        ${link}
      </div>
    </div>`;
  }
  if (n.k === "sel") {
    const lbl = n.lbl || "Tria el restaurant";
    const lblL = lbl.toLowerCase();
    const moment = n.moment || (
      lblL.includes("esmorzar") ? "Esmorzar" :
      lblL.includes("dinar")    ? "Dinar" :
      lblL.includes("sopar")    ? "Sopar" :
      lblL.includes("copes")    ? "Copes" : "Àpat"
    );
    const emoji = n.e || (
      moment === "Esmorzar" ? "☕" :
      moment === "Dinar"    ? "🍽️" :
      moment === "Sopar"    ? "🌙" :
      moment === "Copes"    ? "🥂" : "🍽️"
    );
    const chips = (n.hints || ["Zona","Tipus","Preu"]).map(h => `<span class="sel-chip">${h}</span>`).join("");
    return `<div class="sel-node" onclick='goSel(${JSON.stringify(n.ctx||{})})'>
      <div class="sel-top">
        <span class="sel-emoji">${emoji}</span>
        <div class="sel-texts">
          <div class="sel-moment">${moment}</div>
          <div class="sel-cta">${lbl}</div>
        </div>
        <div class="sel-arrow">›</div>
      </div>
      <div class="sel-hint-bar">${chips}</div>
    </div>`;
  }
  if (n.k === "dec") {
    const opts = n.opts.map(o => {
      if (o.act === "sel") {
        return `<button class="opt" onclick='goSel(${JSON.stringify(o.ctx||{})})'>
          <div class="opt-badge">${o.l}</div>
          <div class="opt-content">
            <div class="opt-title">${o.tit}</div>
            ${o.det ? `<div class="opt-detail">${o.det}</div>` : ""}
            <span class="opt-tag">🍽️ obre el selector</span>
          </div>
        </button>`;
      } else if (o.act === "detail" && o.detail) {
        return `<button class="opt" onclick='goDetail("${o.detail}")'>
          <div class="opt-badge">${o.l}</div>
          <div class="opt-content">
            <div class="opt-title">${o.tit}</div>
            ${o.det ? `<div class="opt-detail">${o.det}</div>` : ""}
            <span class="opt-tag">ℹ️ veure detalls</span>
          </div>
        </button>`;
      } else {
        const href = o.loc ? mapsUrl(o.loc) : "#";
        const tag  = o.loc ? `<span class="opt-tag">📍 obre a Maps</span>` : "";
        return `<a class="opt" href="${href}" target="${o.loc?'_blank':'_self'}" rel="noopener">
          <div class="opt-badge">${o.l}</div>
          <div class="opt-content">
            <div class="opt-title">${o.tit}</div>
            ${o.det ? `<div class="opt-detail">${o.det}</div>` : ""}
            ${tag}
          </div>
        </a>`;
      }
    }).join("");
    return `<div class="dec-node">
      <div class="dec-bar"></div>
      <div class="dec-inner">
        <div class="dec-label">DECISIÓ</div>
        <div class="dec-q">${n.q}</div>
        <div class="dec-opts">${opts}</div>
      </div>
    </div>`;
  }
  return "";
}

function revealGroup(groupEl) {
  const steps = groupEl.querySelectorAll('.flow-step');
  steps.forEach((s, i) => {
    setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => s.classList.add('revealed')));
    }, i * 80);
  });
  const last = steps[steps.length - 1];
  if (last) setTimeout(() => last.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), steps.length * 80 + 60);
}

function renderDay(key) {
  const f = FLOWS[key];
  document.getElementById("day-title").textContent = f.title;
  const wrap = document.getElementById("day-flow");
  wrap.innerHTML = "";

  const chunks = makeChunks(f.nodes);

  chunks.forEach((chunk, ci) => {
    const isLast = ci === chunks.length - 1;

    const group = document.createElement('div');
    group.className = 'flow-group';
    group.dataset.idx = ci;

    chunk.forEach((n, ni) => {
      if (ci > 0 || ni > 0) {
        const line = document.createElement('div');
        line.className = 'flow-line flow-step';
        group.appendChild(line);
      }
      const step = document.createElement('div');
      step.className = 'flow-step';
      step.innerHTML = nodeHTML(n);
      group.appendChild(step);
    });

    if (!isLast) {
      const line2 = document.createElement('div');
      line2.className = 'flow-line flow-step';
      group.appendChild(line2);

      const btn = document.createElement('div');
      btn.className = 'flow-step';
      btn.innerHTML = `<button class="btn-continua" onclick="continua(this)">CONTINUA →</button>`;
      group.appendChild(btn);
    }

    wrap.appendChild(group);
  });

  revealGroup(wrap.querySelector('.flow-group'));

  // Botó dia següent
  const DAY_ORDER = ['dijous','divendres','dissabte','diumenge'];
  const nextKey = DAY_ORDER[DAY_ORDER.indexOf(key) + 1];
  if (nextKey) {
    const nextFlow = FLOWS[nextKey];
    const nextBtn = document.createElement('div');
    nextBtn.className = 'next-day-wrap';
    nextBtn.innerHTML = `<button class="btn-next-day" onclick='goDay("${nextKey}")'>
      <span class="btn-next-day-label">
        <span class="btn-next-day-sub">Continua amb</span>
        <span class="btn-next-day-tit">${nextFlow.title}</span>
      </span>
      <span class="btn-next-day-arr">›</span>
    </button>`;
    wrap.appendChild(nextBtn);
  }
}

function continua(btn) {
  btn.classList.add('hidden-btn');
  const curGroup = btn.closest('.flow-group');
  const nextGroup = curGroup.nextElementSibling;
  if (nextGroup) revealGroup(nextGroup);
}

/* ══ LLOCS ══════════════════════════════════════════════════ */
const PLACES = {
  prado: {
    emoji:"🖼️", nom:"Museo del Prado",
    tipus:"Museu Nacional", zona:"Passeig del Prado",
    horari:"Di–Di 10–20h · Dg 10–19h · Dl tancat",
    preu:"15€ · gratuït festius 17–19h",
    loc:"Museo del Prado Madrid",
    desc:`El prado conté una de les coleccions més importants d'art del món. Hi ha alguns autors destacats de la pintura espanyola no tan coneguts com Goya o Velázquez, però d'una qualitat excepcional, com Greco, Murillo, Zurbarán, Ribera o Sorolla. Per no mencionar figures internacionals com Rubens, Tiziano o Fra Angelico.`,
    sections:[
      { tit:"Els imprescindibles",
        body:`Greco: El caballero de la mano en el pecho. La Trinidad<br><br>Velázquez: La rendición de Breda, Las Meninas, Las hilanderas<br><br>Ribera: sueño de Jacob<br><br>Zurbarán: borreguillo<br><br>Goya: el seu somni era ser pintor de cort. Va començar a la real fàbrica de tapissos fins que va arribar a complir el seu somni: La família de Carlos IV<br><br>Quan queda sord, comença a veure la vida diferent: la maja desnuda, és un encàrrec.<br><br>Es considera Goya com l'inici de la pintura moderna<br><br>Els afusellaments del 3 de maig, després de l'aixecament del 2 de maig, rebel·lió contra les tropes napoleòniques.<br><br>Pintures negres: finalment, Goya es reclou a la Quinta del Sordo, una casa a les afores de Madrid, malalt, pinta a les parets de la casa.<br><br>Velázquez: Las Meninas, Los Borrachos<br><br>Sorolla: Nois a la platja<br><br>Rafael: El cardenal<br><br>Caravaggio: David vencedor de Goliad<br><br>tintoretto: Lavatorio<br><br>Tiziano: La bacanal de los andrios<br><br>Roger Van der Weyden: el devallament de la creu<br><br>El Bosco: el Jardí de les Delícies<br><br>Peter Bruegel el Viejo: El triumfo de la muerte<br><br>Rubens: Las tres gracias<br><br>Albert Durer: autoretrat` },
      { tit:"Las Meninas, de Diego Velázquez",
        body:`És una de les pintures més famoses del museu. Hi apareix la infanta Margarida envoltada de persones de la cort, però el que la fa fascinant és la manera com Velázquez juga amb la mirada, la perspectiva i la presència de l'espectador.<br><br>Mirem el mirall del fons, el pintor que apareix a l'esquerra i la manera com la llum entra a l'escena. Qui mira qui? On som nosaltres, com a espectadors? És un quadre que sembla senzill al primer cop d'ull, però que planteja moltes preguntes.<br><br><strong>Elements clau del joc de mirades</strong><br><br>La mirada de Velázquez: El pintor es retrata a si mateix davant d'un gran llenç i mira directament cap a fora del quadre, cap a l'espai on es troba qui observa l'obra.<br><br>La mirada de la infanta Margarita i les seves acompanyants: Tot i estar atentes a la dinàmica de la cort, algunes figures o la mateixa infanta dirigeixen la seva atenció cap a la zona del davant del quadre.<br><br>El mirall del fons: Al fons de l'habitació hi ha un mirall penjar a la paret que reflecteix els rostres dels reis Felip IV i la reina Mariana d'Àustria, suggerint que ells són qui estan posant (o qui estan al lloc de l'espectador).<br><br>La inclusió de l'espectador: En no veure clarament a qui mira Velázquez si no és al mateix pla dels reis reflectits, l'espectador ocupa físicament el lloc dels monarques, quedant atrapat dins de la perspectiva del quadre.` },
      { tit:"El jardí de les delícies, de Hieronymus Bosch",
        body:`Aquest tríptic és com entrar en un univers ple de figures estranyes, animals, símbols i escenes sorprenents. A l'esquerra hi ha el paradís; al centre, un món ple de plaers i excessos; a la dreta, una visió inquietant de l'infern.<br><br>Podem dedicar-hi una estona a descobrir-ne els detalls. Sempre hi ha alguna figura que no havíem vist abans.<br><br><strong>Estructura i parts de l'obra</strong><br><br>L'obra és un tríptic tancat que, en obrir-se, mostra tres taules amb un missatge moral i simbòlic sobre el destí de la humanitat:<br><br>El tauler esquerre (El Paradís): Representa la creació d'Eva per part de Déu al jardí de l'Edèn, acompanyat d'animals reals i fantàstics.<br><br>El tauler central (El Jardí de les delícies): Dóna nom a l'obra; és una escena on multitud de figures humanes despullades conviuen amb plantes gigantismes, fruites (cireres, maduixes) i animals en actituds de plaer, desenfrenament i luxúria.<br><br>El tauler dret (L'Infern): Mostra un paisatge fosc i aclaparador on les persones pateixen càstigs grotescos i tortures físiques a causa dels pecats comesos a la Terra.<br><br>L'exterior (tancat): Quan el tríptic està tancat, es veu una esfera transparent que representa el tercer dia de la creació del món (el planeta abans de la vida animal i humana), pintada en grisalles.<br><br><strong>Principals interpretacions</strong><br><br>Missatge moral i religiós: La lectura tradicional veu l'obra com un advertiment contra els pecats de la carn (especialment la luxúria) que porten directament de la innocència del Paradís cap al càstig de l'Infern.<br><br>Altres hipòtesis: Al llarg de la història s'ha interpretat des de múltiples perspectives, com a una obra hermètica per a sectes com els adamistes (que defensaven el nudisme), codis alquímics o una sàtira utòpica de la societat de l'època.<br><br>Precursor del surrealisme: Per la seva imaginació desbordant, criatures híbrides i elements onírics, s'considera una obra avançada al seu temps que va inspirar segles més tard a artistes com Salvador Dalí.` },
      { tit:"El 3 de mayo de 1808, de Francisco de Goya",
        body:`Goya representa l'afusellament de ciutadans madrilenys per les tropes napoleòniques. La figura central, amb els braços oberts, concentra tota la força emocional de l'escena.<br><br><strong>Composició i simbolisme:</strong><br><br>A l'esquerra apareixen les víctimes, plenes de por i resignació davant la mort. Destaca l'home amb la camisa blanca i els braços en creu, una postura que recorda la crucifixió de Crist.<br><br>A la dreta hi ha l'escamot d'execució francès, representat d'esquena, de manera homogènia i mecànica, com una màquina de matar deshumanitzada.<br><br>Una llanterna al terra il·luminar de manera dramàtica la escena en la foscor de la nit.<br><br><strong>Significat:</strong> No és només una crònica d'un fet històric concret, sinó que es considera el primer gran quadre antinacional o crit universal contra la crueltat, la irracionalitat i el patiment que provoquen les guerres. També va marcar un trencament amb la pintura d'història tradicional per obrir pas al realisme i al romanticisme.` },
      { tit:"Goya, més enllà d'aquest quadre: Les pintures negres",
        body:`Si tenim temps, busquem altres obres de Goya. La seva pintura va evolucionar des dels retrats i les escenes de la vida quotidiana fins a imatges molt més fosques i personals. És interessant veure com un mateix artista pot passar de la llum a la inquietud.<br><br>No cal sortir del Prado amb la sensació d'haver-ho vist tot. Si recordem tres o quatre obres i hem pogut parlar del que ens transmeten, haurà valgut la pena.<br><br><strong>Cronologia i context:</strong> Van ser pintades entre 1819 i 1823. En aquests anys, Goya era un home vell, aïllat, profundament afectat per la sordesa i desenganyat pel clima polític opressor de Ferran VII i la repressió a Espanya.<br><br><strong>Tècnica i origen:</strong> Són 14 pintures fetes amb tècnica mixta (oli al secco i tremp gras) sobre els guixos de les parets de la casa (distribuïdes entre la planta baixa i el pis superior).<br><br><strong>Trasllat a llenç:</strong> Com que eren murals a la paret, l'any 1874 van ser arrencades i traslladades a llenç per Salvador Martínez Cubells per encàrrec del baró Frédéric Émile d'Erlanger.<br><br><strong>Temàtica i estil:</strong> Tenen un cromatisme fosc dominat pels negres, ocres i grisos. Les escenes són tètriques, fantàstiques i carregades d'angoixa (bruixeria, vellesa, la mort, la follia o la violència).<br><br><strong>Obres més destacades:</strong> Saturn devorant un fill · El aquelarre (o El gran cabrón) · El gos semihundit (Perro semihundido) · El duel a garrotazos (Duelo a garrotazos) · Asmodea · Les Parques (Átropos).<br><br><strong>Significat històric:</strong> No van ser concebudes per ser venudes ni exposades al públic; eren per a la intimitat de la seva casa. Avui dia es consideren una obra avançada a la seva època i un precursor directe de l'expressionisme i de la pintura moderna.` }
    ],
    tips:["Reserveu l'entrada en línia — les cues sense reserva poden ser molt llargues.",
          "Busqueu directament Las Meninas (sala 12), El jardí de les delícies (sala 56A) i El 3 de mayo (sala 64).",
          "L'audioguia gratuïta de l'app del Prado val molt la pena per entendre el context.",
          "El Jardí Botànic al costat és ideal per descansar i prendre l'aire."]
  },
  retiro: {
    emoji:"🌳", nom:"Parque del Retiro",
    tipus:"Parc urbà · Patrimoni UNESCO", zona:"Retiro",
    horari:"6h – 22h (oct–mar) · 6h – 24h (abr–set)",
    preu:"Gratuït",
    loc:"Parque del Retiro Madrid",
    desc:`El Parque del Buen Retiro de Madrid (conegut com a El Retiro) és el pulmó verd més important del centre de la capital i forma part del Patrimoni Mundial de la UNESCO des del juliol de 2021 (integrat en el anomenat Paisaje de la Luz al costat del Passeig del Prado).<br><br>Superfície: Ocupa unes 125 hectàrees i compta amb més de 15.000 arbres.`,
    sections:[
      { tit:"La Fuente del Ángel Caído",
        body:`És un emblemàtic monument situat al Parc del Retiro de Madrid, famós per ser una de les poques escultures públiques del món dedicades a Llucifer (l'àngel caigut).<br><br>Què representa: Mostra a Llucifer en el moment exacte de la seva expulsió del Paradís després de rebel·lar-se contra Déu, amb una serp enroscada al cos i cridant de desesperació.<br><br>Autors: L'escultura principal de bronze va ser realitzada per Ricardo Bellver el 1878, i el pedestal de granit i pedra va ser dissenyat per l'arquitecte Francisco Jareño.<br><br>Inspiració: Es basa en els versos del cèlebre poema èpic El paradís perdut, escrit per John Milton.<br><br>Història i origen: Bellver va crear l'obra original en guix durant la seva estada a Roma; després va guanyar la Medalla de Primera Classe a l'Exposició Nacional de Belles Arts i es va fondre en bronze per a l'Exposició Universal de París de 1878 abans d'instal·lar-se a Madrid.<br><br>Inauguració: Va ser inaugurada oficialment el novembre de 1885 per la reina regent Maria Cristina d'Habsburg.<br><br>La curiositat dels 666 metres: La glorieta on s'assenta la font es troba situada exactament a 666 metres sobre el nivell del mar (l'altitud mitjana topogràfica de la capital), una coincidència numèrica que ha donat peu a múltiples llegendes urbanes i misteris.` },
      { tit:"El estanque grande",
        body:`També podem acostar-nos al gran estany, amb el monument dedicat a Alfons XII al fons. És un dels racons més reconeixibles del parc i convida a seure una estona i mirar l'aigua.<br><br>Si ens ve de gust, podem simplement caminar, fer fotografies o buscar un banc i descansar. No tot ha de tenir una explicació històrica.` },
      { tit:"El Palacio de Cristal y el Palacio de Velázquez",
        body:`Entre el Ángel Caído y el Estanque Grande hi ha els Palaus de Cristal i de Velázquez.<br><br>El Palacio de Cristal està en reformes fins a 2027. Es va construir el 1887 per a una exposició de flora de les Filipines i es va inspirar en les estructures de ferro i vidre que es van posar de moda al segle XIX.<br><br>El vidre deixa passar la llum i fa que l'edifici sembli molt lleuger. Quan el veiem reflectit a l'aigua, l'efecte és encara més bonic.<br><br>La programació artística i les condicions d'accés poden variar, així que comprovarem si es pot visitar per dins el dia que hi anem.<br><br>El palacio de velázquez avui funciona com un pavelló annex al Reina Sofia, es pot visitar l'exposició que hi ha. Va ser creat per l'Exposició Nacional de Mineria (1881-1883). Combina estructura de ferro, grans voltes amb lluernes de vidre per a il·luminació natural i maó multicolor amb rajoles de ceràmica.` },
      { tit:"La Rosaleda",
        body:`Molt a prop de l'Ángel Caído hi ha la Rosaleda, un jardí paisatgístic ple de rosers (entre 4 i 5mil).` }
    ],
    tips:["El Brillante, just davant de la porta de l'Alfons XII, serveix el millor bocata de calamares de Madrid.",
          "Podeu llogar una barca al gran estanc — molt recomanable si fa bon temps.",
          "El Palacio de Cristal és en reformes fins al 2027; el Palacio de Velázquez s'hi pot visitar.",
          "Metro: Retiro (L2), Ibiza (L9) o Príncipe de Vergara (L2/L9)."]
  },
  debod: {
    emoji:"🌅", nom:"Templo de Debod",
    tipus:"Temple Egipci · 2.200 anys", zona:"Parque del Oeste",
    horari:"Dt–Vi 10–14h i 18–20h · Sa–Dg 10–14h · Dl: tancat",
    preu:"Gratuït",
    loc:"Templo de Debod Madrid",
    desc:`Decidiu anar a veure la posta de sol des del Templo de Debod.<br><br>Teniu 20 minuts caminant des de la plaza Mayor. Segons Google, amb metro son 23 minuts, però hi ha uns 20 minuts de caminar.<br><br>Caminant passem pel Teatro Real o per la plaza de Oriente, entre el teatre i el Palacio Real.<br><br>és un autèntic temple de l'antic Egipte amb més de 2.200 anys d'història.`,
    sections:[
      { tit:"Origen i Història",
        body:`Regal d'Egipte: Va ser donat a Espanya el 1968 pel govern egipci. Es va lliurar com a agraïment per l'ajuda espanyola per salvar els temples de Núbia (com Abu Simbel) després de la construcció de la Presa d'Asuan.<br><br>Construcció original: La seva capella més antiga va ser iniciada al segle II a. C. (cap al 200–180 a. C.) pel rei nubi Adijalamani de Meroe i dedicada als déus Amón i Isis. Més endavant, els ptolemaics i emperadors romans (com August i Tiberi) van ampliar el recinte.<br><br>Arribada a Madrid: Es va desmuntar pedra a pedra i es va reconstruir a Espanya, obrint el públic el 1972. Es va col·locar respectant la seva orientació original d'est a oest.` }
    ],
    tips:["Teniu entrada reservada a les 18:30 — confirmeu l'hora el dia anterior.",
          "Arribeu 15–20 minuts abans per trobar lloc al mirador.",
          "Les vistes amb la llum daurada de la tarda sobre la serralada són increïbles.",
          "Podeu caminar des de la Plaza Mayor passant pel Teatro Real i la Plaza de Oriente (~20 min)."]
  },
  sol: {
    emoji:"☀️", nom:"La Puerta del Sol",
    tipus:"Centre Històric", zona:"Centro",
    horari:"Accessible tot el dia",
    preu:"Gratuït",
    loc:"Puerta del Sol Madrid",
    desc:`Ja sou a la Puerta del Sol! És una de les places més conegudes de Madrid, plena de gent, de botigues i d'històries. Però no vull que simplement la creueu: feu-hi un cop d'ull per trobar cinc detalls concrets.`,
    sections:[
      { tit:"Cinc coses a trobar",
        body:`Ens posem davant de la façana de la Real Casa de Correos. És l'edifici del rellotge que veiem cada Cap d'Any a la televisió. Va ser construït al segle XVIII i ha tingut diferents usos al llarg de la història. Avui és la seu de la Presidència de la Comunitat de Madrid.<br><br>busquem la placa del Kilómetro Cero. Tornem cap a la façana de la Real Casa de Correos i mirem el terra que hi ha al davant. Hi trobarem la placa del Kilómetro Cero, el punt de referència des d'on es mesuren les distàncies de les carreteres radials espanyoles.<br><br>Aixequem la mirada per trobar el rètol de Tío Pepe. Mirem cap amunt, als edificis que envolten la plaça, i busquem el gran rètol lluminós de Tío Pepe. És un dels anuncis més emblemàtics de Madrid. El rètol va canviar d'ubicació el 2014, així que el buscarem a la façana de l'edifici del número 11 de la Puerta del Sol.<br><br>Caminem fins al centre de la plaça per veure l'estàtua de Carles III. Ens acostem a l'estàtua eqüestre de Carles III, situada al centre de la plaça, a prop de la font. Aquest rei del segle XVIII va impulsar moltes reformes urbanes i culturals a Madrid. Per això sovint se'l recorda com un dels monarques que més van contribuir a transformar la ciutat.<br><br>Anem fins a la cantonada del carrer Mayor per veure La Mallorquina. Busquem la pastisseria La Mallorquina, a la cantonada de la Puerta del Sol amb el carrer Mayor, al número 8 de la plaça. Va obrir en aquesta ubicació el 1894 i s'ha convertit en una institució madrilenya. Ens podem aturar a mirar-ne l'aparador i l'ambient, encara que no comprem res.<br><br>Cinc petites troballes en una mateixa plaça. I ja tindreu la primera història per explicar del viatge.` }
    ],
    tips:["La placa del Kilómetro Cero és al terra, davant la Real Casa de Correos.",
          "El rètol de Tío Pepe és a la façana del número 11.",
          "La Mallorquina (núm. 8) fa les napolitanes de crema que molts consideren les millors de Madrid.",
          "La Chocolatería San Ginés queda a dos minuts, per a xurros amb xocolata."]
  },
  "plaza-mayor": {
    emoji:"🏛️", nom:"La Plaza Mayor",
    tipus:"Centre Històric", zona:"Centro",
    horari:"Accessible tot el dia",
    preu:"Gratuït",
    loc:"Plaza Mayor Madrid",
    desc:`Des de la Puerta del Sol, camineu uns minuts fins a la Plaza Mayor.<br><br>És una gran plaça porticada, de planta rectangular, envoltada d'edificis amb balcons que semblen observar tot el que passa a sota. Al llarg dels segles ha acollit mercats, celebracions, festes i esdeveniments públics.`,
    sections:[
      { tit:"La plaça",
        body:`Al centre trobem l'estàtua eqüestre de Felip III, al centre. També podeu mirar les façanes de La Casa de la Panadería.<br><br>Hi ha 10 arcs d'entrada, construïts per salvar els desnivells del terreny. Molts tenen noms de gremis i llocs de fets històrics.<br><br>No teniu cap pressa. Podeu fer fotografies, passejar sota les arcades i gaudir de l'ambient.` },
      { tit:"Els 10 arcs d'entrada",
        body:`<strong>Arco de Cuchilleros</strong> — El más famoso y pintoresco, diseñado por Juan de Villanueva, que comunica con la calle Cuchilleros a través de una característica escalinata de piedra (Escalerilla de Piedra).<br><br><strong>Arco de Ciudad Rodrigo</strong> — Conecta con la calle Ciudad Rodrigo y la plaza de San Miguel, nombrado en honor a la ciudad salmantina.<br><br><strong>Estatua de Felipe III</strong> — Ubicado bajo la zona norte, nombrado por la estatua ecuestre del rey Felipe III que preside la plaza.<br><br><strong>Calle de la Sal</strong> — Acceso norte que albergaba el antiguo depósito de sal y conecta con la Posada del Peine.<br><br><strong>Arco de 7 de Julio</strong> — Conmemora los sucesos del 7 de julio de 1822; anteriormente conocido como calle de la Amargura.<br><br><strong>Arco de Toledo (Cofreros)</strong> — Diseñado también por Juan de Villanueva hacia la calle Toledo.<br><br><strong>Arco de Gerona</strong> — Nombrado en 1835 en conmemoración de la defensa durante el sitio de 1808.<br><br><strong>Arco de Zaragoza</strong> — Nombrado en 1835 en honor a la resistencia frente a las tropas francesas.` }
    ],
    tips:["L'Arco de Cuchilleros és el més famós — porta a una escala que baixa fins al carrer Cuchilleros.",
          "La Casa de la Panadería (edifici amb murals pintats) és la façana nord de la plaça.",
          "Eviteu els restaurants directament a la plaça — millor buscar als carrers dels voltants."]
  },
  reina: {
    emoji:"🎨", nom:"Museu Reina Sofia",
    tipus:"Art Modern i Contemporani", zona:"Atocha",
    horari:"Dl–Di 10–21h · Dg 10–14:30h · Dimarts: tancat",
    preu:"12€ · gratuït Sa 19–21h i Dg fins les 14:30h",
    loc:"Museo Reina Sofia Madrid",
    desc:`Museu dedicat a l'art modern i contemporani`,
    sections:[
      { tit:"Guernica, de Pablo Picasso",
        body:`És la gran obra que volem veure avui.<br><br>Picasso la va pintar el 1937, en resposta al bombardeig de la població basca de Gernika durant la Guerra Civil espanyola. El quadre no mostra una batalla de manera convencional: mostra el patiment de les persones i dels animals, la destrucció i el terror.<br><br>És una pintura en blanc, negre i gris, sense els colors habituals de la vida. Les figures estan fragmentades i deformades, com si la mateixa realitat s'hagués trencat.<br><br>Quan ens hi posem al davant, podem observar:<br><br>El cavall ferit al centre, una de les figures més expressives de l'obra.<br><br>La mare amb el fill mort, que transmet un dolor profund.<br><br>La figura amb el llum, que sembla buscar una veritat enmig del caos.<br><br>Les figures que criden, les postures impossibles i l'absència de color.<br><br>No cal entendre cada símbol per captar la força del quadre. És una obra que parla de la guerra i de les seves víctimes, i que encara avui resulta colpidora.` },
      { tit:"L'art surrealista i les noves formes d'expressió",
        body:`Si tenim temps, també podem buscar obres vinculades al surrealisme i a les avantguardes. Aquests artistes volien anar més enllà de la realitat visible, explorar els somnis, l'inconscient i les associacions inesperades.<br><br>És interessant comparar aquesta manera de pintar amb les obres que haurem vist al Prado: en uns segles, la pintura ha passat de representar el món amb gran precisió a qüestionar què vol dir realment representar-lo.<br><br>El gran masturbador i la noia de la finestra de Salvador Dalí.<br><br>Caracol, mujer, flor y estrella de Joan Miró.<br><br>La ventana abierta de Juan Gris.` }
    ],
    tips:["El Guernica és a la planta 2, sala 206 — busqueu-lo directament.",
          "Gratis els dissabtes de 19 a 21h i els diumenges fins les 14:30h.",
          "Combina molt bé amb el Prado: el Triangle de l'Art és a 10 minuts a peu."]
  },
  thyssen: {
    emoji:"🖌️", nom:"Museu Thyssen-Bornemisza",
    tipus:"Museu", zona:"Passeig del Prado",
    horari:"Dl 12–16h · Di–Di 10–19h",
    preu:"13€ · gratuït Dl 12–16h",
    loc:"Museo Thyssen-Bornemisza Madrid",
    desc:`No és només una successió de quadres: és una manera de veure com han canviat les idees, els colors, les tècniques i la mirada dels artistes.`,
    sections:[
      { tit:"Què hi buscarem?",
        body:`Les pintures antigues, per observar com els artistes representaven els personatges, la religió i els espais.<br><br>Els paisatges i les escenes de la vida quotidiana, que ens permeten acostar-nos a altres èpoques.<br><br>L'impressionisme i la pintura moderna, amb els seus canvis en la llum, el color i la manera de captar un instant.<br><br>Les obres de Van Gogh i altres artistes moderns, per veure com la pintura es va allunyant de la representació estrictament realista.<br><br>Una obra que podem buscar és Les Vessenots en Auvers, de Vincent van Gogh. Fixem-nos en les pinzellades i en com el color i el traç transmeten una sensació que va més enllà del paisatge representat.<br><br>Podem mirar els quadres sense haver de saber-ne tots els detalls. De vegades, la pregunta més interessant és simplement: «Què em fa sentir això?».` }
    ],
    tips:["La col·lecció Thyssen és la tercera col·lecció privada d'art més important del món.",
          "Les sales impressionistes (Monet, Renoir, Sisley) al primer pis són especialment destacades.",
          "Els dilluns s'entra gratis, però en horari reduït (12–16h)."]
  },
  "gran-via": {
    emoji:"🌆", nom:"Gran Vía, Malasaña i Chueca",
    tipus:"Passejada urbana", zona:"Centro / Malasaña / Chueca",
    horari:"Sempre accessible",
    preu:"Gratuït",
    loc:"Gran Via Madrid",
    desc:`A la tarda deixem enrere els museus i tornem al carrer per descobrir tres cares diferents de Madrid: l'elegància monumental de la Gran Vía, l'esperit creatiu de Malasaña i l'ambient vibrant de Chueca.`,
    sections:[
      { tit:"1. Gran Vía: arquitectura, teatres i vistes des de les altures",
        body:`La Gran Vía és una de les grans artèries de Madrid. Construïda principalment durant les primeres dècades del segle XX, va transformar el centre de la ciutat i es va convertir en un aparador de la modernitat de l'època.<br><br>Mentre hi passegem, val la pena aixecar la mirada. No ens fixarem només en els aparadors: observarem les façanes monumentals, les cúpules, les escultures, els ornaments i els edificis que semblen competir per captar la nostra atenció. També hi trobarem teatres, cinemes i grans rètols lluminosos que li donen aquest aire de ciutat cosmopolita.<br><br>Una recomanació: veure Madrid des de dalt. A la zona hi ha terrasses amb vistes panoràmiques que permeten contemplar la ciutat des d'una altra perspectiva. Una de les opcions és la terrassa de El Corte Inglés de Callao, des d'on es pot gaudir d'una vista privilegiada de la Gran Vía i dels seus edificis. És una bona parada per fer fotografies i descansar una estona.` },
      { tit:"2. Malasaña: el Madrid més creatiu i desenfadat",
        body:`Des de la Gran Vía ens podem endinsar a Malasaña, un barri conegut pel seu esperit alternatiu i per haver estat un dels epicentres de la Movida madrilenya dels anys vuitanta.<br><br>Aquí el paisatge canvia: deixem enrere les grans avingudes i ens trobem amb carrers més estrets, places petites, botigues independents, locals vintage, cafeteries i bars amb molta personalitat.<br><br>No cal seguir una ruta estricta. La gràcia de Malasaña és passejar sense presses, observar els grafits, descobrir aparadors originals i entrar en algun establiment que ens cridi l'atenció. Si passem per la plaça del Dos de Mayo, ens trobarem en un dels punts més emblemàtics del barri, un bon lloc per aturar-nos i observar-ne l'ambient.` },
      { tit:"3. Chueca: diversitat, disseny i vida urbana",
        body:`Si encara tenim ganes de caminar, podem continuar cap a Chueca, un barri cèntric, animat i conegut per la seva diversitat i pel seu paper destacat en la comunitat LGTBIQ+ de Madrid.<br><br>Els seus carrers combinen botigues de disseny, moda, cafeteries, restaurants i places plenes de vida. La plaça de Chueca n'és el cor: un lloc ideal per fer una pausa, prendre alguna cosa o simplement observar el ritme del barri.<br><br>Chueca té una personalitat diferent de Malasaña: és igualment creatiu, però amb un ambient més urbà, comercial i cosmopolita.` },
      { tit:"Com gaudir d'aquesta passejada?",
        body:`La idea no és recórrer tots els carrers ni anar marcant punts en un mapa, sinó descobrir com canvia Madrid d'un barri a l'altre. Comencem admirant l'arquitectura de la Gran Vía, ens perdem una mica pels carrers de Malasaña i acabem a Chueca, potser amb una beguda en una terrassa.<br><br>El consell: deixem marge per improvisar. De vegades, el millor record d'un passeig per Madrid és aquell carrer que no teníem previst visitar o aquell local on hem entrat per pura curiositat.` }
    ],
    tips:["La terrassa de El Corte Inglés de Callao té accés lliure i vistes increïbles a la Gran Vía.",
          "Plaça del Dos de Mayo és el cor de Malasaña — bon lloc per prendre alguna cosa.",
          "La plaça de Chueca és ideal per fer una pausa i observar l'ambient del barri.",
          "De Malasaña a Chueca hi ha uns 10 minuts a peu."]
  }
};

function renderDetail(key) {
  const p = PLACES[key];
  if (!p) return;
  document.getElementById("detail-header").textContent = p.nom;
  const tips = p.tips.map(t => `<div class="detail-tip">${t}</div>`).join("");
  const mapBtn = p.loc
    ? `<a class="btn-detail-map" href="${mapsUrl(p.loc)}" target="_blank" rel="noopener">📍 Veure a Google Maps</a>`
    : "";
  const sectionsHTML = (p.sections || []).map(s => `
    <div class="detail-section">
      <div class="detail-section-title">${s.tit}</div>
      <div class="detail-section-body">${s.body}</div>
    </div>`).join("");

  document.getElementById("detail-content").innerHTML = `
    <div class="detail-hero">
      <div class="detail-emoji">${p.emoji}</div>
      <div class="detail-name">${p.nom}</div>
      <div class="detail-tags">
        <span class="detail-tag">${p.tipus}</span>
        <span class="detail-tag">${p.zona}</span>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-info-row">
        <div class="detail-info-item">
          <span class="detail-info-icon">⏰</span>
          <div class="detail-info-col">
            <span class="detail-info-lbl">HORARI</span>
            <span class="detail-info-val">${p.horari}</span>
          </div>
        </div>
        <div class="detail-info-item">
          <span class="detail-info-icon">💶</span>
          <div class="detail-info-col">
            <span class="detail-info-lbl">PREU</span>
            <span class="detail-info-val">${p.preu}</span>
          </div>
        </div>
      </div>
      <div class="detail-divider"></div>
      <div class="detail-desc">${p.desc}</div>
      ${sectionsHTML}
      <div class="detail-tips">
        <div class="detail-tips-head">CONSELLS</div>
        ${tips}
      </div>
      ${mapBtn}
    </div>`;
}

/* ══ SELECTOR ══════════════════════════════════════════════ */
const ZONES    = ["Las Letras","Centro/Plaza Mayor","Malasaña","La Latina","Retiro-Prado","Lavapiés","Chueca"];
const TIPUSL   = ["esmorzar","dinar","sopar","copa","pausa"];
const PREUL    = ["baix","mig","alt"];
const AMBIENTL = ["informal","formal"];

function openSel(ctx) {
  fil.zona    = ctx.zona    || null;
  fil.tipus   = ctx.tipus   || null;
  fil.preu    = ctx.preu    || null;
  fil.ambient = ctx.ambient || null;
  renderFil(); renderRes();
}
function renderFil() {
  chips("f-zona",    ZONES,    "zona");
  chips("f-tipus",   TIPUSL,   "tipus");
  chips("f-preu",    PREUL,    "preu");
  chips("f-ambient", AMBIENTL, "ambient");
}
function chips(id, vals, key) {
  document.getElementById(id).innerHTML = vals.map(v =>
    `<button class="chip${fil[key]===v?" on":""}" onclick="tog('${key}','${v}')">${v}</button>`
  ).join("");
}
function tog(key, val) {
  fil[key] = fil[key] === val ? null : val;
  renderFil(); renderRes();
}
function resetFil() {
  fil.zona = fil.tipus = fil.preu = fil.ambient = null;
  renderFil(); renderRes();
}
function renderRes() {
  const PS = { baix:"€", mig:"€€", alt:"€€€" };
  let list = REST.filter(r => {
    if (r.tancat) return false;
    if (fil.zona    && r.z !== fil.zona)          return false;
    if (fil.tipus   && !r.t.includes(fil.tipus))  return false;
    if (fil.preu    && r.p !== fil.preu)           return false;
    if (fil.ambient && r.a !== fil.ambient)        return false;
    return true;
  });
  list.sort((a,b) => {
    if (a.z && !b.z) return -1;
    if (!a.z && b.z) return 1;
    return a.n.localeCompare(b.n, "ca");
  });
  document.getElementById("res-count").textContent =
    `${list.length} resultat${list.length !== 1 ? "s" : ""}`;
  if (!list.length) {
    document.getElementById("r-list").innerHTML =
      `<div class="no-res"><div class="no-res-e">🤷</div>Cap restaurant amb aquests filtres.<br>Proveu de treure algun filtre.</div>`;
    return;
  }
  document.getElementById("r-list").innerHTML = list.map(r => {
    const url  = mapsUrl(r.n + " Madrid");
    const meta = [r.z, r.t.join(" · ")].filter(Boolean);
    return `<div class="r-card">
      <div class="r-info">
        <div class="r-name">${r.n}</div>
        <div class="r-meta">${meta.map(m=>`<span>${m}</span>`).join("")}</div>
        ${r.nota ? `<div class="r-nota">${r.nota}</div>` : ""}
      </div>
      <span class="preu-badge preu-${r.p}">${PS[r.p]}</span>
      <a class="btn-maps" href="${url}" target="_blank" rel="noopener" title="Google Maps">📍</a>
    </div>`;
  }).join("");
}

/* ══ INIT ═══════════════════════════════════════════════════ */
showView("v-home");
