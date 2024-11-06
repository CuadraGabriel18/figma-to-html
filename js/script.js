document.getElementById('btnSignIn').addEventListener('click', function () {
    alert('Redirigiendo a la página de inicio de sesión.');
  });
  
  document.getElementById('btnVisitante').addEventListener('click', function () {
    alert('Redirigiendo como visitante.');
  });
  
  document.getElementById('formLogin').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Inicio de sesión exitoso.\nCorreo: ${email}`);
  });
  