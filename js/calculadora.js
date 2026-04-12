// ── Estado global ──
const calcDatos = {};
let calcSeguroActual = '';
let calcPasoActual = 1;

// ── Campos por seguro ──
const camposPorSeguro = {
  vida: [
    { id: 'sexo', label: 'Sexo', type: 'select', opciones: ['Hombre', 'Mujer'] },
    { id: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'codigo_postal', label: 'Código postal', type: 'text', placeholder: '18001' },
    { id: 'capital_fallecimiento', label: 'Capital fallecimiento (€)', type: 'number', placeholder: '150000' },
    { id: 'capital_invalidez', label: 'Capital invalidez (€)', type: 'number', placeholder: '150000' },
    { id: 'capital_enfermedades_graves', label: 'Capital enfermedades graves (€)', type: 'number', placeholder: '50000' },
    { id: 'otras_garantias', label: 'Otras garantías', type: 'select', opciones: ['Sí', 'No'] },
  ],
  hogar: [
    { id: 'dni', label: 'Número de DNI', type: 'text', placeholder: '12345678A' },
    { id: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'direccion', label: 'Dirección', type: 'text', placeholder: 'Calle Mayor, 1' },
    { id: 'codigo_postal', label: 'Código postal', type: 'text', placeholder: '18001' },
  ],
  decesos: [
    { id: 'sexo', label: 'Sexo', type: 'select', opciones: ['Hombre', 'Mujer'] },
    { id: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'codigo_postal', label: 'Código postal', type: 'text', placeholder: '18001' },
    { id: 'num_asegurados', label: 'Número de asegurados', type: 'number', placeholder: '1' },
  ],
  coche: [
    { id: 'dni', label: 'Número de DNI', type: 'text', placeholder: '12345678A' },
    { id: 'nombre_apellidos', label: 'Nombre y apellidos', type: 'text', placeholder: 'Antonio Gómez' },
    { id: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'fecha_carnet', label: 'Fecha de carnet', type: 'date' },
    { id: 'codigo_postal', label: 'Código postal', type: 'text', placeholder: '18001' },
    { id: 'matricula', label: 'Matrícula', type: 'text', placeholder: '1234ABC' },
    { id: 'modelo', label: 'Modelo del coche', type: 'text', placeholder: 'Toyota Corolla 2020' },
    { id: 'ultimos_5_poliza', label: 'Últimos 5 dígitos póliza anterior', type: 'text', placeholder: '12345' },
  ],
  moto: [
    { id: 'dni', label: 'Número de DNI', type: 'text', placeholder: '12345678A' },
    { id: 'nombre_apellidos', label: 'Nombre y apellidos', type: 'text', placeholder: 'Antonio Gómez' },
    { id: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'fecha_carnet', label: 'Fecha de carnet', type: 'date' },
    { id: 'codigo_postal', label: 'Código postal', type: 'text', placeholder: '18001' },
    { id: 'matricula', label: 'Matrícula', type: 'text', placeholder: '1234ABC' },
    { id: 'modelo', label: 'Modelo de la moto', type: 'text', placeholder: 'Honda CB500 2021' },
    { id: 'ultimos_5_poliza', label: 'Últimos 5 dígitos póliza anterior', type: 'text', placeholder: '12345' },
  ],
  accidentes: [
    { id: 'sexo', label: 'Sexo', type: 'select', opciones: ['Hombre', 'Mujer'] },
    { id: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
    { id: 'codigo_postal', label: 'Código postal', type: 'text', placeholder: '18001' },
  ],
  salud: [],
  empresas: [],
  'responsabilidad-civil': [],
};

const nombreSeguro = {
  vida: 'Seguro de Vida',
  hogar: 'Seguro de Hogar',
  decesos: 'Seguro de Decesos',
  coche: 'Seguro de Coche',
  moto: 'Seguro de Moto',
  accidentes: 'Seguro de Accidentes',
  salud: 'Seguro de Salud',
  empresas: 'Seguro para Empresas',
  'responsabilidad-civil': 'Responsabilidad Civil',
};

// ── Navegación ──
function calcIrAPaso(paso) {
  document.querySelectorAll('.calc-step').forEach(s => s.classList.remove('active'));
  document.querySelector(`.calc-step[data-step="${paso}"]`).classList.add('active');
  calcPasoActual = paso;
  const pct = ((paso - 1) / 3) * 100;
  document.getElementById('calc-progress-bar').style.width = pct + '%';
}

function calcSiguiente(paso) {
  if (paso === 1) {
    if (!calcSeguroActual) return;
    calcRenderizarCampos();
    calcIrAPaso(2);
    return;
  }
  if (paso === 2) {
    if (!calcValidarCampos()) return;
    calcMostrarResumen();
    calcIrAPaso(3);
    return;
  }
}

function calcAtras(paso) {
  calcIrAPaso(paso - 1);
}

// ── Selección seguro ──
document.querySelectorAll('.calc-opcion').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.calc-opcion').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
    calcSeguroActual = this.dataset.value;
    document.querySelector('.calc-step[data-step="1"] .calc-btn-siguiente').disabled = false;
  });
});

// ── Renderizar campos paso 2 ──
function calcRenderizarCampos() {
  const campos = camposPorSeguro[calcSeguroActual] || [];
  const container = document.getElementById('calc-campos-dinamicos');
  document.getElementById('calc-paso2-titulo').textContent = `Datos para ${nombreSeguro[calcSeguroActual]}`;

  if (campos.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 24px 0; color: var(--muted); font-size:0.9rem;">
        Para este seguro, Antonio te contactará directamente para recabar los datos necesarios.
      </div>`;
    return;
  }

  container.innerHTML = campos.map(campo => {
    if (campo.type === 'select') {
      return `
        <div class="calc-campo">
          <label class="calc-campo-label">${campo.label} <span class="calc-requerido">*</span></label>
          <span class="calc-error-msg" id="error-${campo.id}"></span>
          <select class="calc-select" id="calc-${campo.id}" onchange="calcDatos['${campo.id}'] = this.value; calcLimpiarError('${campo.id}')">
            <option value="">Selecciona...</option>
            ${campo.opciones.map(o => `<option value="${o}">${o}</option>`).join('')}
          </select>
        </div>`;
    }
    return `
      <div class="calc-campo">
        <label class="calc-campo-label">${campo.label} <span class="calc-requerido">*</span></label>
        <span class="calc-error-msg" id="error-${campo.id}"></span>
        <input
          type="${campo.type}"
          id="calc-${campo.id}"
          class="calc-input"
          placeholder="${campo.placeholder || ''}"
          oninput="calcDatos['${campo.id}'] = this.value; calcLimpiarError('${campo.id}')"
        />
      </div>`;
  }).join('');
}

// ── Validación ──
function calcValidarCampos() {
  const campos = camposPorSeguro[calcSeguroActual] || [];
  if (campos.length === 0) return true;

  let valido = true;
  campos.forEach(campo => {
    const el = document.getElementById(`calc-${campo.id}`);
    if (!el || !el.value.trim()) {
      calcMostrarError(campo.id, 'Este campo es obligatorio');
      if (valido) el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      valido = false;
    }
  });
  return valido;
}

function calcMostrarError(id, msg) {
  const el = document.getElementById(`calc-${id}`);
  if (el) el.classList.add('calc-select--error');
  const err = document.getElementById(`error-${id}`);
  if (err) { err.textContent = msg; err.style.display = 'block'; }
}

function calcLimpiarError(id) {
  const el = document.getElementById(`calc-${id}`);
  if (el) el.classList.remove('calc-select--error');
  const err = document.getElementById(`error-${id}`);
  if (err) { err.textContent = ''; err.style.display = 'none'; }
}

// ── Resumen paso 3 ──
function calcMostrarResumen() {
  const campos = camposPorSeguro[calcSeguroActual] || [];
  const desglose = document.getElementById('calc-desglose');

  if (campos.length === 0) {
    desglose.innerHTML = `<p style="color:var(--muted); font-size:0.88rem;">Sin datos adicionales para este seguro.</p>`;
  } else {
    desglose.innerHTML = campos.map(campo => `
      <div class="calc-desglose-item">
        <span>${campo.label}</span>
        <strong>${calcDatos[campo.id] || '—'}</strong>
      </div>
    `).join('');
  }

  document.getElementById('calc-seguro-nombre').textContent = nombreSeguro[calcSeguroActual];
  document.getElementById('calc-progress-bar').style.width = '100%';

  // WhatsApp
  document.getElementById('calc-btn-wa').onclick = function () {
    const lineas = campos.map(c => `• ${c.label}: ${calcDatos[c.id] || '—'}`).join('\n');
    const msg = `Hola Antonio, quiero solicitar información sobre el ${nombreSeguro[calcSeguroActual]}.\n\nMis datos:\n${lineas || '(sin datos adicionales)'}`;
    window.open(`https://wa.me/34692833640?text=${encodeURIComponent(msg)}`, '_blank');
  };
}

// ── Reiniciar ──
function calcReiniciar() {
  calcSeguroActual = '';
  Object.keys(calcDatos).forEach(k => delete calcDatos[k]);
  document.querySelectorAll('.calc-opcion').forEach(b => b.classList.remove('selected'));
  document.querySelector('.calc-step[data-step="1"] .calc-btn-siguiente').disabled = true;
  calcIrAPaso(1);
}