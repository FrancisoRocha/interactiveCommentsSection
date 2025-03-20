import { obtenerComentarios } from './services/API.js'

document.addEventListener('DOMContentLoaded',  mostrarComentarios);

async function mostrarComentarios() {

    try {

        const comentarios = await obtenerComentarios();
        const containerComentarios = document.querySelector('.comments__section')
        const formComentarios = document.querySelector('.comment__form');

        comentarios.comments.forEach(comentario => {

            const { content, createdAt, score, user, replies } = comentario;
            const { image, username } = user;

            const divComentario = document.createElement('DIV');
            divComentario.classList.add('comment__box');

            divComentario.innerHTML =
            `<div class="comment__content">
                <img src="${image.png}" alt="foto usuario" class="comment__img--user">
                <p class="comment__user">${username}</p>
                <p class="comment__time">${createdAt}</p>
            </div>
            <p class="comment__input">${content}</p>
            <!-- LIKES -->
            <div class="comment__actions">
                <div class="comment__likes--buttons">
                    <button type="button" class="button__plus">
                        <img src="./images/icon-plus.svg" alt="icon plus" class="btn__icon--plus">
                    </button>
                    <span class="comment__likes">${score}</span>
                    <button type="button" class="button__minus">
                        <img src="./images/icon-minus.svg" alt="icon minus" class="btn__icon--minus">
                    </button>
                </div>
                <!-- REPLY -->
            <button type="button" href="#" class="replies">
                <img src="./images/icon-reply.svg" alt="icon reply" class="icon__reply">
                <p class="replie">Reply</p>
            </button>
        `;        
        containerComentarios.insertBefore(divComentario, formComentarios);

        // SI TIENE RESPUESTAS
    if(replies && replies.length > 0){

        const divRespuestas = document.createElement('DIV');
        divRespuestas.classList.add('replies__section');

        //RENDERIZAR RESPUESTAS 
        replies.forEach( reply => {
            const { content, createdAt, score, user } = reply;
            const { image, username } = user;

            const divRespuesta = document.createElement('DIV');
            divRespuesta.classList.add('replies__box');

            divRespuesta.innerHTML = 
            `
                <div class="replies__comments--box">
                    <img src="${image.png}" alt="img user" class="replies__img--user">
                    <p class="replies__user">${username}</p>
                    <p class="replies__time">${createdAt}</p>
                </div>
                <p class="replies__input">
                    <span class="user">@${username}</span>
                    ${content}
                </p>
                <div class="replies__actions">
                    <div class="replies__likes--buttons">
                        <button type="button" class="button__plus">
                            <img src="./images/icon-plus.svg" alt="icon plus" class="btn__icon--plus">
                        </button>
                        <span class="replies__likes">${score}</span>
                        <button type="button" class="button__minus">
                            <img src="./images/icon-minus.svg" alt="icon minus" class="btn__icon--minus">
                        </button>
                    </div>
                    <button type="button" href="#" class="replies__btn">
                        <img src="./images/icon-reply.svg" alt="icon reply" class="icon__reply">
                        <p class="replie">Reply</p>
                    </button>
                </div>
                </div>`;

            divRespuestas.appendChild(divRespuesta);
            })
            //AGREGAR COMENTARIO
            divComentario.appendChild(divRespuestas);
        }
    })

    } catch (error) {
        console.log(error)
    }

}
