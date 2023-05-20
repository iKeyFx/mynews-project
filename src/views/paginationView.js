import { categoryNews } from "../model";
import View from "./view";


class paginationView extends View {
    constructor(){
        super()
    }
    addhandlerCLick(handler) {
        const parentEL = document.querySelector('.pagination');
        parentEL.addEventListener('click', function (e) {
          const btn = e.target.closest('.page-link');
          if (!btn) return;
          
          const goToPage = +btn.dataset.page;    
          const singleSourcePD = document.querySelector(".single_source_news");
          singleSourcePD.innerHTML = '';
          handler(goToPage);
        });
      }

 generateMarkUp() {
    const id =  window.location.hash.slice(1)
    const currentPage = this.data.page;
    const totalPage = Math.ceil(
      this.data.result.length / this.data.resultPerPage
    );

    // On page > 3  
    if (currentPage === 1 && totalPage > 3) {
         return `
        <li class="page-item disabled">
        <a  data-page="${currentPage - 1}" class="page-link">Previous</a>
      </li>
      <li class="page-item"><a data-page="1" class="page-link" href="#${id}">1</a></li>
      <li  class="page-item"><a data-page="2" class="page-link" href="#${id}">2</a></li>
      <li class="page-item"><a data-page="3" class="page-link" href="#${id}">3</a></li>
      <li class="page-item"><a data-page="4" class="page-link" href="#${id}">4</a></li>
      <li class="page-item">
        <a data-page="${currentPage + 1}" class="page-link" href="#${id}">Next</a>
      </li>
  `
    }
    // On other categoryNews page 
    if (currentPage === 1 && totalPage === 1) {
        return `
        <li class="page-item"><a data-page="1" class="page-link" href="#${id}">Page  ${currentPage}</a></li> 
    `
   }
        //    On CNN 
   if (currentPage === 1 && totalPage === 3) {
    return `
        <li class="page-item disabled">
        <a  data-page="${currentPage - 1}" class="page-link">Previous</a>
        </li>
        <li class="page-item"><a data-page="1" class="page-link" href="#${id}">1</a></li>
        <li  class="page-item"><a data-page="2" class="page-link" href="#${id}">2</a></li>
        <li class="page-item"><a data-page="3" class="page-link" href="#${id}">3</a></li>
        <li class="page-item">
        <a data-page="${currentPage + 1}" class="page-link" href="#${id}">Next</a>
        </li>
        `
    }
    // On other Pages 
    if (currentPage > 1 && totalPage >= 3) {
        return `
            <li class="page-item">
            <a  data-page="${currentPage - 1}" class="page-link">Previous</a>
            </li>
            <li  class="page-item"><a data-page="2" class="page-link" href="#${id}">2</a></li>
            <li class="page-item"><a data-page="3" class="page-link" href="#${id}">3</a></li>
            <li class="page-item">
            <a data-page="${currentPage + 1}" class="page-link" href="#${id}">Next</a>
            </li>
            `
        }
 }
   
}

export default new paginationView()