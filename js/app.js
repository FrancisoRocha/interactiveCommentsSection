import { renderComments } from './ui.js';
import { getComments } from './API.js';

document.addEventListener('DOMContentLoaded', async () => {


    const commentsContainer = document.querySelector('.comments')

    // Fetch comments from API
    const commentas = await getComments();

    // Render Comments to page
    renderComments(commentas, commentsContainer);

})