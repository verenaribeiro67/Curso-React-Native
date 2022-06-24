import Enter from './Enter'

function ExibirQuestoes () {

    if (Enter.nome == '' || Enter.nome.trim()) {
        return
    }

    else {
        console.log(Enter.nome)
    }

}