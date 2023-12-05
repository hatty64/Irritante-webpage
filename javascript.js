
const eenheden = ["I know when your birthday is, June 28th.", "Make a wish!", "HAPPY BIRTHDAY!!!", "Oh happy birthday, oh happy happy birthday, oh happy birthday, happy birthday to youuuuuuuuuuuuuuuuoooooooooooo", "I just don't get it, why would you wanna stay?"]



setInterval(function() {
  const random = Math.floor(Math.random() * eenheden.length)
  alert(eenheden[random])

  const popupContent = 'https://www.youtube.com/watch?v=QwLvrnlfdNo';
const popupProperties = 'width=400,height=300,scrollbars=yes';

const newPopup = window.open(popupContent, 'Popup', popupProperties);
newPopup.document.body.innerHTML = popupContent;
  }, 1000);
