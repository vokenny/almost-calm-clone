(function () {

  const rec = document.querySelector('#rectangle');
  let rotation = 0;

  document.addEventListener('pointermove', event => {
    rotation += Math.sqrt(event.movementX ** 2 + event.movementY ** 2) / 10;

    rec.style.setProperty('--rot', rotation + 'deg');
  });

}());