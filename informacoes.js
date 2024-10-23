const url = 'https://raw.githubusercontent.com/Akiovictor/trabalho_json_grafico/refs/heads/main/disciplina.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    const quantidade_alunos = (dados.numero_alunos)
    const numero_votos = (dados.total_votos)
    const numero_aula_Victor = (dados.total_aula_profVictor)
    const numero_aula_Mazza = (dados.total_aula_semana)
    const porcentagem_Victor = ((numero_aula_Victor / numero_aula_Mazza ) * 100)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Vocês que o time <span>real madrid</span> tem <span>${quantidade_alunos} jogadores</span> e apenas <span>${numero_votos} joagores </span> se encontram no time titular? <span>e so 3 joagores se encontram na artilharia de gols </span> que são <span>${numero_aula_Victor} do vini jr </span>, e do embappe sao  <span>${numero_aula_Mazza} gols no real e no psg</span> <br>e tambem o Jude Bellingham<span>${porcentagem_Victor}</span> que tambem esta nssa lista . Abaixo está o resultado`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()
