// Script para manejar el estado de las bombas

document.getElementById("activarBomba1").addEventListener("click", function() {
    document.getElementById("bomba1Status").innerText = "Activada";
  });
  
  document.getElementById("desactivarBomba1").addEventListener("click", function() {
    document.getElementById("bomba1Status").innerText = "Desactivada";
  });
  
  document.getElementById("activarBomba2").addEventListener("click", function() {
    document.getElementById("bomba2Status").innerText = "Activada";
  });
  
  document.getElementById("desactivarBomba2").addEventListener("click", function() {
    document.getElementById("bomba2Status").innerText = "Desactivada";
  });
  
  // Modo Manual y Automático
  document.getElementById("modoManual").addEventListener("click", function() {
    alert("Modo Manual Activado");
  });
  
  document.getElementById("modoAutomatico").addEventListener("click", function() {
    alert("Modo Automático Activado");
  });
  