/**
 * Класс ImageViewer
 * Используется для взаимодействием блоком изображений
 * */
class ImageViewer {
  constructor( element ) {
    this.viewer = element;
    this.preview = this.viewer.querySelector('.image');
    this.imageList = this.viewer.querySelector('.images-list');
    this.drawImages = this.drawImages.bind(this);
    this.images = [];
    this.selectButton = this.viewer.querySelector('button.select-all');
    this.showButton = this.viewer.querySelector('button.show-uploaded-files');
    this.sendButton = this.viewer.querySelector('button.send');

    this.registerEvents();
  }

  /**
   * Добавляет следующие обработчики событий:
   * 1. Клик по изображению меняет класс активности у изображения
   * 2. Двойной клик по изображению отображает изображаения в блоке предпросмотра
   * 3. Клик по кнопке выделения всех изображений проверяет у всех ли изображений есть класс активности?
   * Добавляет или удаляет класс активности у всех изображений
   * 4. Клик по кнопке "Посмотреть загруженные файлы" открывает всплывающее окно просмотра загруженных файлов
   * 5. Клик по кнопке "Отправить на диск" открывает всплывающее окно для загрузки файлов
   */
  registerEvents(){
    this.checkButtonText();
    this.viewer.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target.tagName === 'IMG'){
        target.classList.toggle('selected');
        this.checkButtonText();
        return
      }
    })
    
    this.viewer.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target.tagName === 'IMG') {
        this.preview.src = target.src;
      }
    })

    this.selectButton.addEventListener('click', (e) => {
      if(this.selectButton.textContent === "Выбрать всё"){
        ;[...this.images].forEach(el => {
          const img = el.querySelector('img');
          if( img ){
            img.classList.add('selected');
          }
        })
      }else{
        ;[...this.images].forEach(el => {
          const img = el.querySelector('img.selected');
          if(img){
            img.classList.remove('selected');
          }
        })
      }
      this.checkButtonText();
    })
  }

  /**
   * Очищает отрисованные изображения
   */
  clear() {
    this.images.forEach(el => {
      el.remove();
    })
    this.images = [];

  }

  /**
   * Отрисовывает изображения.
  */
  drawImages(images) {
    images.forEach(element => {
      console.log(element);
      const image = document.createElement('DIV');
      image.classList.add('four', 'wide', 'column', 'ui', 'medium', 'image-wrapper')
      image.innerHTML = `<img src=${element} />`;
      this.imageList.appendChild(image);
      this.images.push(image);
    });
  }

  /**
   * Контроллирует кнопки выделения всех изображений и отправки изображений на диск
   */
  checkButtonText(){
    if(this.images.length > 0){
      this.selectButton.classList.remove('disabled');
    }else {
      this.selectButton.classList.add('disabled');
    }

    if(this.images.some(el => el.querySelector('img').classList.contains('selected'))){
      this.selectButton.textContent = "Снять выделение";
      this.sendButton.classList.remove('disabled');
    }else{
      this.selectButton.textContent = "Выбрать всё";
      this.sendButton.classList.add('disabled');
    }
  }

}