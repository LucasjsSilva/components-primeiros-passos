class CardNews extends HTMLElement {
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = `<div class="container">
        <div class="card">
            <div class="card_left">
                <span>
                    Nome da Pessoa
                </span>
                <h2>
                    Darth Vader está contratando devs
                </h2>
        
                <p>
                    Está procurando novos devs hahah.
                </p>
            </div>
            <div class="card_right">
                <img src="assets/asset-vader.jpeg" alt="vader">
            </div>
        </div>
    </div>`
    }
}

customElements.define('card-news', CardNews)