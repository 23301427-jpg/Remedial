const temperatureValue = document.getElementById('temperatureValue');
const humidityValue = document.getElementById('humidityValue');
const statusValue = document.getElementById('statusValue');
const statusHint = document.getElementById('statusHint');
const statusCard = document.getElementById('statusCard');
const lastUpdated = document.getElementById('lastUpdated');
const summaryText = document.getElementById('summaryText');

function getStatus(temperature, humidity) {
  if (temperature >= 30 || humidity >= 80) {
    return {
      label: 'Crítico',
      hint: 'Revisar ventilación y control ambiental',
      className: 'status-critical',
      summary: 'El laboratorio está en riesgo. Se recomienda actuar de inmediato.'
    };
  }

  if (temperature >= 26 || humidity >= 70) {
    return {
      label: 'Advertencia',
      hint: 'Condiciones por encima del rango recomendado',
      className: 'status-warning',
      summary: 'La temperatura o humedad están elevadas; monitorear de cerca.'
    };
  }

  return {
    label: 'Normal',
    hint: 'Condiciones estables',
    className: 'status-normal',
    summary: 'El entorno se encuentra dentro de los parámetros aceptables.'
  };
}

function updateDashboard() {
  const temperature = 21 + Math.random() * 8;
  const humidity = 45 + Math.random() * 28;
  const state = getStatus(temperature, humidity);

  temperatureValue.textContent = temperature.toFixed(1);
  humidityValue.textContent = humidity.toFixed(0);
  statusValue.textContent = state.label;
  statusHint.textContent = state.hint;
  statusCard.className = `metric-card accent-status ${state.className}`;
  lastUpdated.textContent = new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  summaryText.textContent = state.summary;
}

updateDashboard();
setInterval(updateDashboard, 4000);
