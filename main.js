document.addEventListener('DOMContentLoaded', () => {
    
    const screen = document.querySelector('[data-screen]')
    const tecla = document.querySelectorAll('[data-tecla]')
    let limpar = false

    tecla.forEach( (elemento) => {
        elemento.addEventListener('click', (evento) => {
            const tecla = evento.target.dataset.tecla
            
            if (limpar) {
                clear()
                limpar = false
            }
            
            if (tecla === 'BACKSPACE'){
                screen.textContent = backspace(screen.textContent)
            } else if (tecla === '='){
                try {
                    screen.textContent = eval(screen.textContent)
                    limpar = true
                } catch (error) {
                    console.log('Operação inválida:', error.message);
                    screen.textContent = 'Erro!!!';
                    limpar = true
                }
            } else if (tecla === 'CE'){
                clear()
            } else {
                screen.textContent += evento.target.dataset.tecla
            }
        })
    })
    
    function backspace (texto){
        return texto.substring(0, texto.length -1)
    }

    function clear (){
        screen.textContent = ''
    }

});