// Get reference
const colorChange = document.querySelector('#colorChange');

// Conditional statement
colorChange.addEventListener('click', () => {
  if (colorChange.style.backgroundColor === 'yellow') {
    colorChange.style.backgroundColor = 'blue';
  } else if (colorChange.style.backgroundColor === 'blue') {
    colorChange.style.backgroundColor = 'red';
  } else if (colorChange.style.backgroundColor === 'red') {
    colorChange.style.backgroundColor = 'orange';
  } else if (colorChange.style.backgroundColor === 'orange') {
    colorChange.style.backgroundColor = 'violet';
  } else if (colorChange.style.backgroundColor === 'violet') {
    colorChange.style.backgroundColor = 'brown';
  } else if (colorChange.style.backgroundColor === 'brown') {
    colorChange.style.backgroundColor = 'green';
  } else if (colorChange.style.backgroundColor === 'green') {
    colorChange.style.backgroundColor = 'purple';
  } else if (colorChange.style.backgroundColor === 'purple') {
    colorChange.style.backgroundColor = 'pink';
  } else if (colorChange.style.backgroundColor === 'pink') {
    colorChange.style.backgroundColor = 'black';
  } else {
    colorChange.style.backgroundColor = 'yellow';
  }
});
