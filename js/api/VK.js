/**
 * Класс VK
 * Управляет изображениями из VK. С помощью VK API.
 * С помощью этого класса будет выполняться загрузка изображений из vk.
 * Имеет свойства ACCESS_TOKEN и lastCallback
 * */
class VK {

  static ACCESS_TOKEN = 'e8932a05e8932a05e8932a05e6eb83e1efee893e8932a058bbf1ce0d87edfdcaa73e024';
  // static ACCESS_TOKEN = '958eb5d439726565e9333aa30e50e0f937ee432e927f0dbd541c541887d919a7c56f95c04217915c32008';
  static lastCallback;

  /**
   * Получает изображения
   * */
  static get(id = '', callback){
    this.lastCallback = callback;

    const script = document.createElement('SCRIPT');
    script.src = `https://api.vk.com/method/photos.get?access_token=${VK.ACCESS_TOKEN}&owner_id=${id}&album_id=profile&v=5.131&callback=VK.processData}`;
    document.getElementsByTagName("head")[0].appendChild(script);

  }

  /**
   * Передаётся в запрос VK API для обработки ответа.
   * Является обработчиком ответа от сервера.
   */
  static processData(result){
    document.querySelectorAll('script').forEach(element => {
      if (element.src.startsWith('https://api.vk.com')){
        element.remove();
      }
    })
    if (result.error) {
      alert(result.error.error_msg)
      return
    }
    console.log(result)
    const images = []
    for(let i = 0; i < result.response.count; i++){
      const a = result.response.items[i].sizes.reduce((res, el) => el.width > res.width ? el : res);
      images.push(a.url)
    }
    this.lastCallback(images);
    this.lastCallback = () => { };
  }
}
