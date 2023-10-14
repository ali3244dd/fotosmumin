const visitCount = Math.floor(Math.random() * 1000) + 1;
document.getElementById('visit-count').textContent = `Sitemizi Son 24 Saatte ${visitCount} Kişi Ziyaret Etti`;

const submitImage = document.getElementById('submitImage');
const usernameInput = document.getElementById('username');
const imageUrlInput = document.getElementById('imageUrl');
const imageGallery = document.getElementById('imageGallery');

submitImage.addEventListener('click', () => {
    const username = usernameInput.value;
    const imageUrl = imageUrlInput.value;
    if (username && imageUrl) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `<img src="${imageUrl}" alt="Resim">
                              <div class="grid-item-footer">
                                <button class="like-button">Beğen</button>
                                <button class="comment-button">Yorum Yap</button>
                                <span class="like-count">0 Beğeni</span>
                                <div class="comments"></div>
                              </div>`;
        imageGallery.appendChild(gridItem);
        usernameInput.value = '';
        imageUrlInput.value = '';

        const likeButton = gridItem.querySelector('.like-button');
        const likeCount = gridItem.querySelector('.like-count');
        const commentButton = gridItem.querySelector('.comment-button');
        const commentsContainer = gridItem.querySelector('.comments');

        let likeCountValue = 0;

        likeButton.addEventListener('click', () => {
            likeCountValue++;
            likeCount.textContent = `${likeCountValue} Beğeni`;
            likeButton.disabled = true;
        });

        commentButton.addEventListener('click', () => {
            const commentInput = document.createElement('input');
            commentInput.type = 'text';
            commentInput.placeholder = 'Yorumunuzu buraya girin...';
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Gönder';

            submitButton.addEventListener('click', () => {
                if (commentInput.value) {
                    const comment = document.createElement('div');
                    comment.className = 'comment';
                    comment.textContent = `${username}: ${commentInput.value}`;
                    commentsContainer.appendChild(comment);
                    commentInput.value = '';
                }
            });

            commentsContainer.appendChild(commentInput);
            commentsContainer.appendChild(submitButton);
        });
    } else {
        alert('Lütfen kullanıcı adı ve resim URL\'sini girin.');
    }
});
