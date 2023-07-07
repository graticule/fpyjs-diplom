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
    this.viewer.addEventListener('click', (e) => {
      const target = e.target;
      console.log(target);
    })
    this.viewer.addEventListener('dblclick', (e) => {
      const target = e.target;
      console.log('double');
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

  }

}