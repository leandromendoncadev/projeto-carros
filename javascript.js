let listaCarros = [
    {
        "nome": "Drako GTE",
        "img": "img/drako-gte.webp",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis eius, sequi tempore inventore sed dolore quibusdam laudantium dignissimos provident velit. Aspernatur, natus est quia doloremque minus sequi tempora minima."
    },
    {
        "nome": "De Tomaso P72",
        "img": "img/de-tomaso.webp",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis eius, sequi tempore inventore sed dolore quibusdam laudantium dignissimos provident velit. Aspernatur, natus est quia doloremque minus sequi tempora minima."
    },
    {
        "nome": "Ferrari LaFerrari",
        "img": "img/ferrari-laferrari.webp",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis eius, sequi tempore inventore sed dolore quibusdam laudantium dignissimos provident velit. Aspernatur, natus est quia doloremque minus sequi tempora minima."
    },
    {
        "nome": "Pagani Huayra",
        "img": "img/pagani-huayra.webp",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis eius, sequi tempore inventore sed dolore quibusdam laudantium dignissimos provident velit. Aspernatur, natus est quia doloremque minus sequi tempora minima."
    },
    {
        "nome": "McLaren Elva",
        "img": "img/mclaren-elva.webp",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis eius, sequi tempore inventore sed dolore quibusdam laudantium dignissimos provident velit. Aspernatur, natus est quia doloremque minus sequi tempora minima."
    },
    {
        "nome": "Czinger 21C",
        "img": "img/czinger-21c.webp",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis eius, sequi tempore inventore sed dolore quibusdam laudantium dignissimos provident velit. Aspernatur, natus est quia doloremque minus sequi tempora minima."
    }
]

listaCarros.map((carro, posicao)=> {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `

                <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
            </div>
    
    `
})

function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }
    else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}