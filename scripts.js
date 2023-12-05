const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const galleryImgs = document.querySelectorAll('.gallery-img');
const closeModal = document.getElementById('close');

galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
