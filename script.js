const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(Button =>{
  Button.addEventListener("click" , function(){
    const atual = document.querySelector (".ativa");
    const proximoPasso = "psso-" + this.getattriidute("data-proximo");

    atual.classList.remove("ativo");
        document.getElementById(proximoPasso).classList.add("ativo")
  }) 
})