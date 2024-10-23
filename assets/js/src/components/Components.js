export class Components {

    static oneCardStarWars(starWars) {
        return `
    <div class="col-12 col-md-6 col-lg-2">
        <div class="single-timeline-content d-flex wow fadeInLeft">
                <div class="timeline-text">          
                    <h6>${starWars.name}</h6>
                    <p>Talla: ${starWars.height}</p>
                    <p>Peso: ${starWars.mass}</p>
                </div>           
        </div>
    </div>    
        `;
    }


    static cardStarWars(starWars) {
        return `
        <div class="card">
            <div class="card_header">
            </div>
            <div class="card_body">
            <h2>${starWars.name}</h2>
            <p>N° ${starWars.id}</p>
            </div>
        </div>
        `;
    }
}