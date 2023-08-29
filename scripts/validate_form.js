/* 
 * FunÃ§Ã£o para validar os campos do formulÃ¡rio antes de submeter os dados.
 */
'use strict';
window.addEventListener('load', function () {
    // Pega todos os formulÃ¡rios que nÃ³s queremos aplicar estilos de validaÃ§Ã£o Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);