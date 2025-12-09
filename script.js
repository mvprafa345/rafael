document.addEventListener("DOMContentLoaded", function () {

    // MENU ATIVO
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("ativo"));
            this.classList.add("ativo");
        });
    });

    // BOAS-VINDAS
    setTimeout(() => {
        alert("Bem-vindo ao Meu Site de Natureza!");
    }, 800);

    // CLIQUE NAS IMAGENS
    const imagens = document.querySelectorAll(".imagem-real");
    imagens.forEach(img => {
        img.addEventListener("click", function () {
            alert("Imagem de natureza selecionada!");
        });
    });

    // TEXTO DINÂMICO NA POSTAGEM
    const post = document.querySelector("main p");
    post.addEventListener("click", function () {
        this.innerText = "Texto alterado com JavaScript com sucesso!";
    });

    // BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.createElement("button");
    botaoTopo.innerText = "↑ Topo";
    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "20px";
    botaoTopo.style.right = "20px";
    botaoTopo.style.padding = "10px 15px";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.display = "none";
    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // MODO ESCURO
    const botaoDark = document.createElement("button");
    botaoDark.innerText = "Modo Escuro";
    botaoDark.style.position = "fixed";
    botaoDark.style.bottom = "60px";
    botaoDark.style.right = "20px";
    botaoDark.style.padding = "10px";
    botaoDark.style.cursor = "pointer";
    document.body.appendChild(botaoDark);

    let dark = false;

    botaoDark.addEventListener("click", () => {
        if (!dark) {
            document.body.style.backgroundColor = "#111";
            document.body.style.color = "#fff";
            dark = true;
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
            dark = false;
        }
    });

});

