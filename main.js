// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".

// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.

// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).

// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50

alert('Benvenuto! Premi ok per giocare')

var mine = []
var bandiere = []
var punteggio = 1


for (var i = 0; i < 16; i++) {
    var random = Math.floor(Math.random() * 100) + 1;
    mine.push(random);
}

for (var i = 0; i < 84; i++) {
    var numeroUtente = parseInt(prompt('Inserisci un numero'))
    var verifica1 = isNaN(numeroUtente)
    var verifica2 = mine.includes(numeroUtente);
    var verifica3 = bandiere.includes(numeroUtente)

    if (verifica1 == true) {
        alert('Il carattere inserito non è un carattere numerico, riprova')
        var punteggio = punteggio + 0
    }
    else if (verifica2 == true) {
        console.log(mine)
        alert('Ops, hai trovato una mina! Hai perso');
        i = 85;
        alert('Il tuo punteggio è ' + punteggio)
    } else if (verifica3 == true) {
        alert('Hai già inserito questo numero, riprova');
        i = (i-1);
        var punteggio = punteggio + 0
    } else
        alert('Continua così');
        console.log(numeroUtente);
        bandiere.push(numeroUtente);
        console.log(punteggio);
        var punteggio = punteggio + 1
}
