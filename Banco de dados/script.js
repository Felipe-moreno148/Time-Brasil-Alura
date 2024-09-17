function pesquisar(){
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if(!campoPesquisa) {
        section.innerHTML = "<p>Nenhum item correspondente a pesquisa</p>"
        return
    }     
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let desc = ""; 
    let tags = "";

    // Itera sobre cada dado da lista de dados
    
        // Cria um novo elemento HTML para cada resultado
        for (let dado of data) {
            titulo = dado.titulo.toLowerCase()
            desc = dado.desc.toLowerCase()
            tags = dado.tags.toLowerCase()
        if(dado.titulo.includes(campoPesquisa) || dado.desc.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.desc}</p>
                <a href=${dado.insta} target="_blank">Mais informações</a>
            </div>
        `;
    }
        }
        if(!resultados) {
            resultados = "<p>Nenhum item correspondente a pesquisa</p>"
        }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
