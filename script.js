const hiddenText = document.getElementById('hidden-Text');
const showPopupButton = document.getElementById('Show-popup-Button');

  showPopupButton.addEventListener('click', () => {
    hiddenText.classList.toggle('hidden') 
  })