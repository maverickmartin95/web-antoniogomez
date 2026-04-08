 // ── Estado global ──
    const calcDatos = {
      seguro: '', edad: 35, personas: 1,
      comunidad: '', profesion: '',
      inmueble: 200000, capital: 150000,
      cobertura: ''
    };
    // ── Paso actual ──
    let calcPasoActual = 1;

    function calcIrAPaso(paso) {
      document.querySelectorAll('.calc-step').forEach(s => s.classList.remove('active'));
      document.querySelector(`.calc-step[data-step="${paso}"]`).classList.add('active');
      calcPasoActual = paso;
      // Progreso
      const pct = ((paso - 1) / 3) * 100;
      document.getElementById('calc-progress-bar').style.width = pct + '%';
    }

    function calcSiguiente(paso) {
      if (paso === 1 && !calcDatos.seguro) return;
      if (paso === 2) {
        if (!calcDatos.comunidad) {
          calcMostrarError('calc-comunidad', 'Por favor, selecciona tu comunidad autónoma');
          document.getElementById('calc-comunidad').scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        if (!calcDatos.profesion) {
          calcMostrarError('calc-profesion', 'Por favor, selecciona tu profesión o actividad');
          document.getElementById('calc-profesion').scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        calcConfigurarPaso3();
      }
      if (paso === 3 && !calcDatos.cobertura) return;
      if (paso === 3) { calcCalcular(); calcIrAPaso(4); return; }
      calcIrAPaso(paso + 1);
    }

    function calcMostrarError(id, msg) {
      const el = document.getElementById(id);
      el.classList.add('calc-select--error');
      const err = document.getElementById('error-' + id);
      if (err) { err.textContent = msg; err.style.display = 'block'; }
    }

    function calcLimpiarError(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('calc-select--error');
      const err = document.getElementById('error-' + id);
      if (err) { err.textContent = ''; err.style.display = 'none'; }
    }

    function calcAtras(paso) { calcIrAPaso(paso - 1); }

    // ── Selección de seguro (paso 1) ──
    document.querySelectorAll('.calc-opcion').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.calc-opcion').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        calcDatos.seguro = this.dataset.value;
        document.querySelector('.calc-step[data-step="1"] .calc-btn-siguiente').disabled = false;
      });
    });

    // ── Sliders ──
    function calcActualizarSlider(campo, valor) {
      calcDatos[campo] = parseInt(valor);
      if (campo === 'inmueble' || campo === 'capital') {
        document.getElementById(`calc-${campo}-val`).textContent =
          parseInt(valor).toLocaleString('es-ES');
      } else {
        document.getElementById(`calc-${campo}-val`).textContent = valor;
      }
    }

    // ── Stepper personas ──
    function calcStepper(campo, delta) {
      calcDatos[campo] = Math.max(1, Math.min(8, calcDatos[campo] + delta));
      document.getElementById(`calc-${campo}-val`).textContent = calcDatos[campo];
    }

    // ── Cobertura ──
    function calcSeleccionarCobertura(valor, btn) {
      document.querySelectorAll('.calc-cobertura-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      calcDatos.cobertura = valor;
    }

    // ── Configurar paso 3 según seguro ──
    function calcConfigurarPaso3() {
      const nombres = { vida:'Seguro de vida', hogar:'Seguro de hogar', coche:'Seguro de coche',
        moto:'Seguro de moto', salud:'Seguro de salud', decesos:'Seguro de decesos',
        accidentes:'Seguro de accidentes', empresas:'Seguro para empresas' };
      document.getElementById('calc-paso3-titulo').textContent =
        `Detalles · ${nombres[calcDatos.seguro] || ''}`;
      document.getElementById('campo-inmueble').style.display =
        calcDatos.seguro === 'hogar' ? 'block' : 'none';
      document.getElementById('campo-capital').style.display =
        calcDatos.seguro === 'vida' ? 'block' : 'none';
    }

    // ── Cálculo ──
    function calcCalcular() {
      const coberturaLabel = { basica: 'Básica', completa: 'Completa', premium: 'Premium' };
      const comunidadLabel = document.getElementById('calc-comunidad').options[document.getElementById('calc-comunidad').selectedIndex]?.text || '—';
      const profesionLabel = document.getElementById('calc-profesion').options[document.getElementById('calc-profesion').selectedIndex]?.text || '—';
      const seguroLabel = document.querySelector('.calc-opcion.selected .calc-opcion-nombre')?.textContent || '';

      document.getElementById('calc-desglose').innerHTML = `
        <div class="calc-desglose-item"><span>Seguro</span><strong>${seguroLabel}</strong></div>
        <div class="calc-desglose-item"><span>Cobertura</span><strong>${coberturaLabel[calcDatos.cobertura]}</strong></div>
        <div class="calc-desglose-item"><span>Edad</span><strong>${calcDatos.edad} años</strong></div>
        <div class="calc-desglose-item"><span>Personas</span><strong>${calcDatos.personas}</strong></div>
        <div class="calc-desglose-item"><span>Comunidad</span><strong>${comunidadLabel}</strong></div>
        <div class="calc-desglose-item"><span>Profesión</span><strong>${profesionLabel}</strong></div>
        ${calcDatos.seguro === 'hogar' ? `<div class="calc-desglose-item"><span>Valor inmueble</span><strong>${calcDatos.inmueble.toLocaleString('es-ES')} €</strong></div>` : ''}
        ${calcDatos.seguro === 'vida' ? `<div class="calc-desglose-item"><span>Capital asegurado</span><strong>${calcDatos.capital.toLocaleString('es-ES')} €</strong></div>` : ''}
      `;

      // WhatsApp con resumen de datos
      document.getElementById('calc-btn-wa').onclick = function () {
        const msg = `Hola Antonio, he usado la calculadora de tu web. Quiero informarme sobre el seguro de ${seguroLabel}, cobertura ${coberturaLabel[calcDatos.cobertura]}, Mis datos son: ${calcDatos.edad} años, ${calcDatos.personas} persona/s, ${comunidadLabel}. Me gustaría recibir una oferta real.`;
        window.open(`https://wa.me/34692833640?text=${encodeURIComponent(msg)}`, '_blank');
      };

      document.getElementById('calc-progress-bar').style.width = '100%';
    }

    // ── Reiniciar ──
    function calcReiniciar() {
      calcDatos.seguro = ''; calcDatos.cobertura = '';
      document.querySelectorAll('.calc-opcion').forEach(b => b.classList.remove('selected'));
      document.querySelectorAll('.calc-cobertura-btn').forEach(b => b.classList.remove('selected'));
      document.querySelector('.calc-step[data-step="1"] .calc-btn-siguiente').disabled = true;
      calcIrAPaso(1);
    }