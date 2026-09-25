// const slicer = (str, num) => {
//     return str.trim().lenght > num ?
//     str.trim().substring(0, num) + '...' :
//     str.trim()
// }

const animate = ({timing, draw, duration}) => {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

// export { slicer }
export { animate }



// ПРИМЕР
// вызов функции. когда вызываем в нужном нам файле
// к примеру есть модуль one
// и мы ходим подвигать блок

// import { animate } from "./helpers"

// const one = () => {
//     const block = document.querySelector('.block')
//     setTimeout(() => { // сделаем, чтобы при загрузке страницы не тупило это всё
//         animate({
//             duration: 1000,
//             timing(timeFraction) {
//                 return timeFraction;
//             },
//             draw(progress) {
//                 block.style.opacity = progress
//                 block.style.left = (50*progress) + '%'
//                 block.style.top = (25*progress) + '%'
//             }
//         });
//     }, 1500)
// }

// export default one

