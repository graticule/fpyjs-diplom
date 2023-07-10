/**
 * Класс App управляет всем приложением
 * */
class App {
  /**
   * С вызова этого метода начинается работа всего приложения
   * Он производит перваоначальную настройку блоков поиска и просмотра изображений,
   * а так же всплывающих окон.
   * */
  static init() {
    this.searchBlock = new SearchBlock(document.getElementsByClassName('search-block')[0]);
    this.imageViewer = new ImageViewer(document.getElementsByClassName('images-wrapper')[0]);
    this.initModals();
    // if (localStorage.getItem('tokenVK') === null) {
    //   localStorage.setItem('tokenVK', prompt('Введите токен для VK'));
    // }
    // VK.ACCESS_TOKEN = localStorage.getItem('tokenYandex')
    
    // if (localStorage.getItem('tokenYandex') === null) {
    //   localStorage.setItem('tokenYandex', prompt('Введите токен для Yandex'));
    // }
  }

  /**
   * Инициализирует всплывающее окна
   * */
  static initModals() {
    this.modals = {
      fileUploader: new FileUploaderModal($('.ui.modal.file-uploader-modal').modal({closable: false})),
      filePreviewer: new PreviewModal($('.ui.modal.uploaded-previewer-modal').modal({closable: false})),
    }
  }

   /**
   * Возвращает всплывающее окно
   * Обращается к объекту App.modals и извлекает
   * из него свойство modalName:
   * App.getModal( 'login' ); // извелекает App.modals.login
   * */
  static getModal(name) {
    return this.modals[name];
  }
}
