
export function renderComments(comments, container) {

    // Limpiar contenido anteriro
    container.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = document.createElement('ARTICLE');
        commentElement.classList.add('comment');
        commentElement.innerHTML =
            `
            <!-- HEADER COMENTARIO -->
            <header class="comment__header">
                <img src="${comment.user.image.png}" alt="Foto usuario" class="img__user">
                <div class="comment__info">
                    <h4 class="user">${comment.user.username}</h4>
                    <p class="time__comment">${comment.createdAt}</p>
                </div>
            </header>

            <!-- CUERPO DEL COMENTARIO -->
            <div class="comment__body">
                <p class="comment__text">${comment.content}</p>
            </div>

            <!-- ACCIONES (LIKES Y RESPUESTA) -->
            <div class="comment__actions">
                <div class="comment__likes">
                    <a href="#" class="btn__like" aria-label="Aumentar likes">
                        <img src="./images/icon-plus.svg" alt="icon plus" class="icon__plus">
                    </a>
                    <p class="likes">${comment.score}</p>
                    <a href="#" class="btn__like" aria-label="Disminuir likes">
                        <img src="./images/icon-minus.svg" alt="icon minus" class="icon__minus">
                    </a>
                </div>
            </div>
                <a href="#" class="btn__answer" aria-label="Responder comentario">
                    <img src="./images/icon-reply.svg" alt="icon reply"> Reply
                </a>
            </div>
            `;
        container.appendChild(commentElement)
    });
}

