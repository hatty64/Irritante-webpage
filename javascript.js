
const eenheden = ["I know when your birthday is, June 28th.", "Make a wish!", "HAPPY BIRTHDAY!!!", "Oh happy birthday, oh happy happy birthday, oh happy birthday, happy birthday to youuuuuuuuuuuuuuuuoooooooooooo", "I just don't get it, why would you wanna stay?"]



setInterval(function() {
  const random = Math.floor(Math.random() * eenheden.length)
  alert(eenheden[random])

  const popupContent = 'https://www.youtube.com/watch?v=QwLvrnlfdNo';
const popupProperties = 'width=400,height=300,scrollbars=yes';

const newPopup = window.open(popupContent, 'Popup', popupProperties);
newPopup.document.body.innerHTML = popupContent;
  }, 1000);

// random color generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function () {
  const text_container = document.querySelector('.text-container');
  const phone_container = document.querySelector('.phone-container');
  const text = document.getElementById('texter')

  text_container.style.backgroundColor = getRandomColor();
  phone_container.style.backgroundColor = getRandomColor();
  text.style.color = getRandomColor();
}, Math.floor(Math.random() * 300) + 1);
