const selector = document.getElementById('langSelector');
  const currentFlag = document.getElementById('currentFlag');
  const currentLang = document.getElementById('currentLang');
  const options = document.querySelectorAll('.lang-option');

  let currentLanguage = 'pt';

  // Toggle dropdown
  selector.addEventListener('click', function(e) {
    e.stopPropagation();
    selector.classList.toggle('active');
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener('click', function() {
    selector.classList.remove('active');
  });


  // Troca de idioma
  options.forEach(option => {

    option.addEventListener('click', function(e) {

      e.stopPropagation();

      const lang = this.dataset.lang;

      // Atualiza estado ativo
      options.forEach(opt => opt.classList.remove('active'));

      this.classList.add('active');

      // Atualiza seletor principal
      if (lang === 'pt') {
        currentFlag.src = 'https://flagcdn.com/w20/br.png';
        currentFlag.alt = 'Brasil';
        currentLang.textContent = 'PT';
      } else {
        currentFlag.src = 'https://flagcdn.com/w20/us.png';
        currentFlag.alt = 'English';
        currentLang.textContent = 'EN';
      }

      currentLanguage = lang;

      // Fecha dropdown
      selector.classList.remove('active');
      console.log(`Idioma alterado para: ${lang.toUpperCase()}`);
    });

  });

  // Fecha dropdown com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      selector.classList.remove('active');
    }
  });