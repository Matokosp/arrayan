# Index.php
- Hice una div con id errors, estos son los mensajes que se entregan de error por front si es que estan mal validados.
- El unico error que no esta en ese div, es el error de mensaje que esta justo encima del input mensaje.

# Myscript.js
- Se encarga de hacer la validacion de los campos, si es que hay algo que esta mal validado no se envia el formulario y cambia los mensajes de errores

# contactForm.php
- Se encarga de enviar el correo, revisa nuevamente los campos. Si es que el mensaje es enviado te reenvia a success.php si es que falla te envia a fail.php
