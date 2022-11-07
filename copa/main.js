function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
            <strong>16:00</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
        </li>
    `
}

let delay = 0;
function createCard(date, day, games){
    delay = delay + 0.3;
    return `   
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div> 
    `
}

document.querySelector("#cards").innerHTML = 
    
    createCard('21/11', 'quinta',
        createGame('Brazil', '16:00', 'serbia')
    ) +
    createCard('28/11', 'segunda',
        createGame('Brazil', '13:00', 'switzerland') +
        createGame('portugal', '13:00', 'uruguay'))
    +
    createCard('02/12', 'sexta',
        createGame('Brazil', '16:00', 'camaron')
    )
