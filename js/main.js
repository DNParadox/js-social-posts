// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


const myPosts = [ 
    {
        idPost: 1, 
        name: 'Phil Mangione',
        photo: 'https://unsplash.it/300/300?image=15',
        date : '6/25/2021',
        text : 'Discorso sul riscaldamento globale...',
        img : 'https://unsplash.it/300/300?image=15',
        like : '80'
    },
    {
        idPost: 2, 
        name: 'Sofia Perlari',
        photo: 'https://unsplash.it/300/300?image=15',
        date :'3/9/2021',
        text : 'Come fare il pollo alla piastra giallozafferano',
        img : 'https://unsplash.it/300/300?image=15',
        like : '120'
    },
    {
        idPost: 3, 
        name: 'Leon Kennedy',
        photo: 'https://m.media-amazon.com/images/S/aplus-media/sota/647d0d05-a73c-4d28-8a9f-812110fccd75.__CR1287,99,1142,1142_PT0_SX300_V1___.jpg',
        date :'25/01/2019',
        text : 'Bellissimo primo giorno a Racoon City (lie)',
        img : 'null',
        like : '5'
    },
    {
        idPost: 4, 
        name: 'Jerry Polemica',
        photo: 'https://pbs.twimg.com/profile_images/660767345489657856/WPfYZZD3_400x400.jpg',
        date :'3/9/2021',
        text : "Sono l'uomo con la licenza polemica!",
        img : 'https://upload.wikimedia.org/wikipedia/it/thumb/d/d7/Jerry_Polemica.jpg/1200px-Jerry_Polemica.jpg',
        like : '999'
    }
];
drawMyPosts(myPosts)
// -------------
// FUNCTIONS  1
// -------------

const likebutton = document.querySelectorAll('.js-like-button');

const allFavouriteTexts = document.querySelectorAll('.js-likes-counter');
console.log(allFavouriteTexts)
for(let i = 0; i < likebutton.length; i++) {
    const thislikebtn = likebutton[i];
    thislikebtn.addEventListener('click', function(event) {
        // Evitiamo il comportamento di default del browser
        event.preventDefault();

        // Incrementiamo il like solo se l'elemento su cui ho cliccato non ha gia classe clicked
        if(!this.classList.contains('like-button--liked ')) {
            // Aggiungo all'elemento cliccato la classe 'clicked'
            this.classList.toggle('like-button--liked');
            // Prenderci l'elemento html di testo che ha il numero relativo a questo btn
            const relatedNumberText = allFavouriteTexts[i];
            // Ci prendiamo il numero dentro relatedNumberText
            let relatedNumber = parseInt(relatedNumberText.innerHTML);
            console.log(relatedNumber);
            // Incrementiamo di 1
            relatedNumber++;
            
            // Scriviamo il numero incrementato dentro relatedNumberText
            relatedNumberText.innerHTML = relatedNumber;
        }
    });
}






// -------------
// FUNCTIONS  2
// -------------


function drawMyPosts(postsArray) {
    const postsContainer = document.querySelector('.post')

    for(let i = 0; i < postsArray.length; i++){
        const thisPost = postsArray[i];
        const {idPost, name, photo, date, text, img, like} = thisPost;
        // console.log(thisPost)

        // Per ogni Post creo template e stampo
        const postTemplate = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${photo}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                <img src="${img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${idPost}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${like}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
            `
        console.log(postsContainer)
            postsContainer.innerHTML += postTemplate;
            
    }
}