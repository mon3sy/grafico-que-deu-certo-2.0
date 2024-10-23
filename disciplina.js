
async function quantidadeVoto() {
    const url = 'https://raw.githubusercontent.com/mon3sy/gr-fico-que-deu-certo-/refs/heads/main/disciplina2.json'
    const res = await fetch(url)
    const dados = await res.json()
    const disciplina = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: disciplina, 
            y: votos, 
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadeVoto()
