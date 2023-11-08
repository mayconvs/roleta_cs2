var wheel = document.getElementById('whell') //13seg
var bixa_detectada = document.getElementById('bixa_detectada') //audio bixa detectada
const botao = document.querySelector('#adicionar');
const botaoSortear = document.querySelector('#sortear');
var alternancia = false;
var time1 = [];
var time2 = [];
const cores = ['#E30016', '#0097E3', '#00DB00', '#E3DB00', '#E300FF', '#6717E3', '#1A17E3', '#E3A217', '#00FFFF', '#8E6A3E', '#9BE317', '#8E3E3E', '#3C5463'];
let playersSeparados;
var jaForam = [];
var results = [];
let jaFoiSorteado = 0;
let numeroDeNomes = 0;

document.querySelector('#players').focus();

function attCountPlayers(players) {
    const nomesSeparados = players.split('\n');

    // Remove linhas em branco (caso existam)
    const nomesFiltrados = nomesSeparados.filter(players => players.trim() !== '');
    numeroDeNomes = nomesFiltrados.length;

    document.getElementById('cont_player').innerHTML = `${numeroDeNomes} players`;
    addNaRoleta(document.querySelector('#players').value)
}
function addNaRoleta(players) {
    console.log(players);
    if (players <= 0) {

    } else {
        playersSeparados = players.split('\n');
        //botaoSortear.style.background = "#3281ac";
        botaoSortear.innerHTML = "Sortear"

        //Zerar .box1 e .box2
        document.querySelector('#box1').innerHTML = "";
        document.querySelector('#box2').innerHTML = "";
        //Para cada player
        for (i = 0; i <= 4; i++) {
            corSorteada = cores[i];

            //Criando span
            NovoPedacoPizza = document.createElement("span");
            NovoPedacoPizza.classList.add(`font`);
            NovoPedacoPizza.classList.add(`span${i + 1}`);
            NovoPedacoPizza.id = `${playersSeparados[i]}_${i}`;
            NovoPedacoPizza.setAttribute("data-color", corSorteada);

            //Criando h5
            NovoPedacoPizzaH5 = document.createElement("h5");
            playerConvertido = playersSeparados[i].charAt(0).toUpperCase() + playersSeparados[i].slice(1).toLowerCase();
            NovoPedacoPizzaH5.innerHTML = playerConvertido;


            // Colocando h5 dentro do span
            NovoPedacoPizza.appendChild(NovoPedacoPizzaH5)

            //Colocando span dentro da box1
            document.querySelector('#box1').appendChild(NovoPedacoPizza);

        }

        for (i = 5; i <= 9; i++) {
            corSorteada = cores[i];

            //Criando span
            NovoPedacoPizza = document.createElement("span");
            NovoPedacoPizza.classList.add(`font`);
            NovoPedacoPizza.classList.add(`span${i - 4}`);
            NovoPedacoPizza.id = `${playersSeparados[i]}_${i}`;
            NovoPedacoPizza.setAttribute("data-color", corSorteada);

            //Criando h5
            NovoPedacoPizzaH5 = document.createElement("h5");
            playerConvertido = playersSeparados[i].charAt(0).toUpperCase() + playersSeparados[i].slice(1).toLowerCase();
            NovoPedacoPizzaH5.innerHTML = playerConvertido;


            // Colocando h5 dentro do span
            NovoPedacoPizza.appendChild(NovoPedacoPizzaH5)

            //Colocando span dentro da box1
            document.querySelector('#box2').appendChild(NovoPedacoPizza);


        }


        //document.querySelector('#players').value = "";
        //attCountPlayers(document.querySelector('#players').value)
        document.querySelector('#players').focus();
    }

}

/* function shuffle(array) {
    var currentIndex = array.length,randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
} */

function preencherTimes(time1, time2) {
    var conteudoOl1 = "";
    var conteudoOl2 = "";
    //Zera HTML de listas
    document.getElementById("time1").innerHTML = "";
    document.getElementById("time2").innerHTML = "";

    //Preenchendo Time 2
    for (var i = 0; i < time1.length; i++) {
        conteudoOl1 += `<li>${time1[i]}</li>`
    }
    document.getElementById("time1").innerHTML = conteudoOl1;

    //Preenchendo Time 2
    for (i = 0; i < time2.length; i++) {
        conteudoOl2 += `<li>${time2[i]}</li>`
    }
    document.getElementById("time2").innerHTML = conteudoOl2;


    if (time1.length == 5 && time2.length == 5) {
        botaoSortear.style.background = "#32AB44";
        botaoSortear.innerHTML = "Times sorteados!"
    }

}


function shuffle(array) {
    var currentIndex = array.length, randomIndex, temporaryValue;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function sortear(botaoSortear) {
    if (numeroDeNomes < 10 || numeroDeNomes > 10) {
        Swal.fire({
            title: 'Por favor, coloque 10 jogadores.',
            icon: 'error',
            //text: '',
        })
        return
    }
    botaoSortear.disabled = true;
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";

    // 720 1080  1440 1800
    /*
    var player1 = shuffle([880, 1240, 1600]); //160 beto
    var player2 = shuffle([1920, 840, 1200]); //120 jo
    var player3 = shuffle([1530, 1890, 810]); //90 graus 100 mong
    var player4 = shuffle([1125, 1485, 1845]); //45 will
    var player5 = shuffle([740, 1100, 1460]); //20 10 fabin
    var player6 = shuffle([2140, 1060, 1420]); //340 leo
    var player7 = shuffle([1750, 2110, 1030]); //310 kadu
    var player8 = shuffle([1340, 1700, 2060]); //260 amigo
    var player9 = shuffle([950, 1310, 1670]); //230 mike
    var player10 = shuffle([1990, 910, 1270]);*/ //190 voyd

    var player1 = shuffle([160 + 720, 160 + 1080, 160 + 1440]); //160 beto
    var player2 = shuffle([120 + 1800, 120 + 2160, 120 + 2520]); //120 jo
    var player3 = shuffle([90 + 2880, 90 + 3240, 90 + 3600]); //90 graus 100 mong
    var player4 = shuffle([45 + 3960, 45 + 4320, 45 + 4680]); //45 will
    var player5 = shuffle([20 + 5040, 20 + 5400, 20 + 5760]); //20 10 fabin
    var player6 = shuffle([340 + 6120, 340 + 6480, 340 + 6840]); //340 leo
    var player7 = shuffle([310 + 7200, 310 + 7560, 310 + 7920]); //310 kadu
    var player8 = shuffle([260 + 8280, 260 + 8640, 260 + 9000]); //260 amigo
    var player9 = shuffle([230 + 9360, 230 + 9720, 230 + 10080]); //230 mike
    var player10 = shuffle([190 + 10440, 190 + 10800, 190 + 11160]); //190 voyd

    var vetores = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];

    console.log(vetores);

    var results = shuffle([
        player1[0],
        player2[0],
        player3[0],
        player4[0],
        player5[0],
        player6[0],
        player7[0],
        player8[0],
        player9[0],
        player10[0],
    ])

    console.log(results);

    //Verificar se o valor sorteado já foi sorteado
    if (jaForam.includes(results[0])) {
        console.log(results[0])
        console.log('Valor já sorteado')
        //Se já foi sorteado, verificar em qual dos vetores se encontra o valor sorteado e incluir todos esses valores em jaForam
        for (i = 0; i < vetores.length; i++) {
            if (vetores[i].includes(results[0])) {
                //Se já foi sorteado, Sorteia de novo
                while (jaForam.includes(results[0])) {
                    /*var player1 = shuffle([880, 1240, 1600]); //160 beto
                    var player2 = shuffle([1920, 840, 1200]); //120 jo
                    var player3 = shuffle([1530, 1890, 810]); //90 graus 100 mong
                    var player4 = shuffle([1125, 1485, 1845]); //45 will
                    var player5 = shuffle([740, 1100, 1460]); //20 10 fabin
                    var player6 = shuffle([2140, 1060, 1420]); //340 leo
                    var player7 = shuffle([1750, 2110, 1030]); //310 kadu
                    var player8 = shuffle([1340, 1700, 2060]); //260 amigo
                    var player9 = shuffle([950, 1310, 1670]); //230 mike
                    var player10 = shuffle([1990, 910, 1270]);*/ //190 voyd

                    var player1 = shuffle([160 + 720, 160 + 1080, 160 + 1440]); //160 beto
                    var player2 = shuffle([120 + 1800, 120 + 2160, 120 + 2520]); //120 jo
                    var player3 = shuffle([90 + 2880, 90 + 3240, 90 + 3600]); //90 graus 100 mong
                    var player4 = shuffle([45 + 3960, 45 + 4320, 45 + 4680]); //45 will
                    var player5 = shuffle([20 + 5040, 20 + 5400, 20 + 5760]); //20 10 fabin
                    var player6 = shuffle([340 + 6120, 340 + 6480, 340 + 6840]); //340 leo
                    var player7 = shuffle([310 + 7200, 310 + 7560, 310 + 7920]); //310 kadu
                    var player8 = shuffle([260 + 8280, 260 + 8640, 260 + 9000]); //260 amigo
                    var player9 = shuffle([230 + 9360, 230 + 9720, 230 + 10080]); //230 mike
                    var player10 = shuffle([190 + 10440, 190 + 10800, 190 + 11160]); //190 voyd

                    var vetores = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];

                    var results = shuffle([
                        player1[0],
                        player2[0],
                        player3[0],
                        player4[0],
                        player5[0],
                        player6[0],
                        player7[0],
                        player8[0],
                        player9[0],
                        player10[0],
                    ])
                }

                for (i = 0; i < vetores.length; i++) {
                    if (vetores[i].includes(results[0])) {
                        jaForam = jaForam.concat(vetores[i]);
                    }
                }



            }
        }
    } else {
        console.log('Valor não sorteado');
        //Se não foi sortedo, coloca os valores como já sortedos
        for (i = 0; i < vetores.length; i++) {
            if (vetores[i].includes(results[0])) {
                jaForam = jaForam.concat(vetores[i]);
            }
        }

    }



    console.log(`Já foram: ${jaForam}`)
    console.log(`valor sorteado: ${results[0]}`)


    //console.log(vetoresNovos);
    console.log(vetores);


    if (player1.includes(results[0])) SelectedItem = playersSeparados[0];
    if (player2.includes(results[0])) SelectedItem = playersSeparados[1];
    if (player3.includes(results[0])) SelectedItem = playersSeparados[2];
    if (player4.includes(results[0])) SelectedItem = playersSeparados[3];
    if (player5.includes(results[0])) SelectedItem = playersSeparados[4];
    if (player6.includes(results[0])) SelectedItem = playersSeparados[5];
    if (player7.includes(results[0])) SelectedItem = playersSeparados[6];
    if (player8.includes(results[0])) SelectedItem = playersSeparados[7];
    if (player9.includes(results[0])) SelectedItem = playersSeparados[8];
    if (player10.includes(results[0])) SelectedItem = playersSeparados[9];


    /* if (vetores[0].includes(results[0])) SelectedItem = playersSeparados[0];
    if (vetores[1].includes(results[0])) SelectedItem = playersSeparados[1];
    if (vetores[2].includes(results[0])) SelectedItem = playersSeparados[2];
    if (vetores[3].includes(results[0])) SelectedItem = playersSeparados[3];
    if (vetores[4].includes(results[0])) SelectedItem = playersSeparados[4];
    if (vetores[5].includes(results[0])) SelectedItem = playersSeparados[5];
    if (vetores[6].includes(results[0])) SelectedItem = playersSeparados[6];
    if (vetores[7].includes(results[0])) SelectedItem = playersSeparados[7];
    if (vetores[8].includes(results[0])) SelectedItem = playersSeparados[8];
    if (vetores[9].includes(results[0])) SelectedItem = playersSeparados[9]; */



    /* if (vetoresNovos[0].includes(results[0])) SelectedItem = playersSeparados[0];
    if (vetoresNovos[1].includes(results[0])) SelectedItem = playersSeparados[1];
    if (vetoresNovos[2].includes(results[0])) SelectedItem = playersSeparados[2];
    if (vetoresNovos[3].includes(results[0])) SelectedItem = playersSeparados[3];
    if (vetoresNovos[4].includes(results[0])) SelectedItem = playersSeparados[4];
    if (vetoresNovos[5].includes(results[0])) SelectedItem = playersSeparados[5];
    if (vetoresNovos[6].includes(results[0])) SelectedItem = playersSeparados[6];
    if (vetoresNovos[7].includes(results[0])) SelectedItem = playersSeparados[7];
    if (vetoresNovos[8].includes(results[0])) SelectedItem = playersSeparados[8];
    if (vetoresNovos[9].includes(results[0])) SelectedItem = playersSeparados[9]; */


    //Animação de girar
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
    }, 5000);

    setTimeout(function () {
        applause.volume = 0.2;
        applause.play();
        playerConvertidoSorteado = SelectedItem.charAt(0).toUpperCase() + SelectedItem.slice(1).toLowerCase();
        Swal.fire({
            title: playerConvertidoSorteado,
            //text: '',
        })
        /*
        if (playerConvertidoSorteado.toLowerCase() == "kadu" ||
            playerConvertidoSorteado.toLowerCase() == "kdu" ||
            playerConvertidoSorteado.toLowerCase() == "udak") {
            bixa_detectada.play()
        } else {

        }*/

        if (!alternancia) {
            time1.push(playerConvertidoSorteado)
            alternancia = true;
        } else if (alternancia) {
            time2.push(playerConvertidoSorteado)
            alternancia = false;
        }

        preencherTimes(time1, time2);

    }, 5000)

    setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90def)";
        botaoSortear.disabled = false;
    }, 6000);


}



// Adicione um ouvinte de evento para o botão
botao.addEventListener('click', function () {
    event.preventDefault();
    addNaRoleta(document.querySelector('#players').value);
});


