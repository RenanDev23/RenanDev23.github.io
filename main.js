$(document).ready(function () {
    $('#carousel-imagens, #carousel-imagens1').slick({ 
        autoplay: true,
        arrows: false
    })
});

$('.menu-hamburguer').click(function() {
    $('nav').slideToggle();  
});

$(document).ready(function(){
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    $('#tel').mask('(00)00000-0000')

$(document).ready(function() {
    // ... (seu código existente)
        $('form').validate({
            rules: {
                name: {
                    required: true
                },
                tel: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
                },
                messages: {
                    name:'Por favor, insira o seu nome.',
                    tel:'Telefone obrigatório.',
                    email:'E-mail obrigatório.',
                    message:'Todos os detalhes importam!',
                },
                submitHandler: function(form) {
                    if ($(form).valid()) {
                    alert('Formulário enviado com sucesso!');
                    $(form).trigger('reset')
                };
            }
        })
    })
});
        