$(document).ready(function () {
    $('form').on('submit', function (event) {
        $.ajax({
            data: {
                name: $('#nameInput').val(),
                email: $('#emailInput').val(),
                telefone: $('#telInput').val(),
                cep: $('#cepInput').val(),
                log: $('#logInput').val(),
            },
            type: 'POST',
            url: '/process'
        })
            .done(function (data) {
                if (data.error) {
                    $('#errorAlert').text(data.error).show();
                    $('#sucessAlert').hide();
                }
                else {
                    let tbody = document.getElementById('tbody')

                    let tr = tbody.insertRow();

                    let td_id = tr.insertCell();
                    let td_name = tr.insertCell();
                    let td_email = tr.insertCell();
                    let td_telefone = tr.insertCell();
                    let td_cep = tr.insertCell();
                    let td_log = tr.insertCell();
                    let td_action_button = tr.insertCell();

                    let delete_button = document.createElement('a');
                    delete_button.innerHTML = "Deletar"
                    delete_button.className = ("class", "btn")
                    delete_button.setAttribute("href", "/deletar/" + data.id)

                    let edit_button = document.createElement('a');
                    edit_button.innerHTML = "Editar"
                    edit_button.className = ("class", "btn")
                    edit_button.setAttribute("href", "/edit/" + data.id)

                    td_id.innerText = data.id;
                    td_name.innerText = data.name;
                    td_email.innerText = data.email;
                    td_cep.innerText = data.cep;
                    td_log.innerText = data.log;
                    td_telefone.innerText = data.telefone;
                    td_action_button.appendChild(delete_button)
                    td_action_button.appendChild(edit_button)
                }
            });
        event.preventDefault();
    });
}); 