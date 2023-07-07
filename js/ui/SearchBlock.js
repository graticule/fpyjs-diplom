/**
 * Класс SearchBlock
 * Используется для взаимодействием со строкой ввода и поиска изображений
 * */
class SearchBlock {
  constructor( element ) {
    this.block = element;
    this.input = element.querySelector('input');
    this.replaceButton = element.querySelector('.replace');
    this.addButton = element.querySelector('.add');

    this.registerEvents()
  }

  /**
   * Выполняет подписку на кнопки "Заменить" и "Добавить"
   * Клик по кнопкам выполняет запрос на получение изображений и отрисовывает их,
   * только клик по кнопке "Заменить" перед отрисовкой очищает все отрисованные ранее изображения
   */
  registerEvents(){
    this.replaceButton.addEventListener('click', e => {
      e.preventDefault();
      const id = this.input.value.trim();
      if (id !== '') {
        console.log(App.imageViewer);
        App.imageViewer.clear();
        VK.get(id, App.imageViewer.drawImages);
      }
    })

    this.addButton.addEventListener('click', e => {
      e.preventDefault();
      const id = this.input.value.trim();
      if (id !== '') {
        console.log(App.imageViewer);
        VK.get(id, App.imageViewer.drawImages);
      }
    })
  }

}