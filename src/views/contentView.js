import View from "./view";

class contentView extends View {
pageWrapper = document.querySelector('.single_page_wrapper')
singlePageD = document.querySelector(".single_page_details");
parentEl = document.querySelector('.single_bread_con')
    constructor() {
        super()
    }
    generateContent(data) {
      // console.log(input2)
      const html = ` 
      <div class="breadcrumb_contentpage" style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
         <li class="breadcrumb-item" aria-current="page"><a href="#">${data.type}</a></li>
         <li class="breadcrumb-item active" aria-current="page"><a href="#${data.slug}">${data.slug}</a></li>
       </ol>
      </div>
      <div class="single_page_wrapper">
      <div class="single_page_content" id="${data.id}">
      <div class="single_page_head">
        <div class="news_title_single">
          <h3>
            ${data.title}
          </h3>
        </div>
        <p class="single_page_author">${data.author}</p>
        <div class="single_page_date_cat">
          <div class="single_date">${data.date}</div>
          <div class="single_seperator">|</div>
          <div class="single_categories">
            <a class="single_link" href="#${data.category}">${data.category}</a>
          </div>
        </div>
      </div>
      <div class="single_page_details">
        <div class="single_image">
          <img
            src="${data.image_link}"
            alt="cnn news"
          />
        </div>
        <div class="page_details">
        ${data.content}
        </div>
      </div>
      </div>  `

      this.parentEl.innerHTML = '';
      this.parentEl.insertAdjacentHTML('afterbegin',html);

  }
  generateRelatedNews(data) {
    // console.log(data)
   const html = data.map(el => `
    <div class="sidebar_content">
    <div class="content_image">
      <img
        src="${el.image}"
        alt="news"
      />
    </div>
    <div class="sidebar_content_title">
      <p>
        <a href="#${el.slug}"
          >${el.title}</a
        >
      </p>
    </div>
  </div>
</div>`).join('')
// console.log(html)
 const parentEl = document.querySelector('.sidebar_content_con');
 parentEl.innerHTML = '';
 parentEl.insertAdjacentHTML('afterbegin', html)
}
    updateVerticalline () {
      const vertiacalLine = document.querySelector('.vertiacal_line')
      const footer = document.getElementById('footer')
      const singlepage = document.querySelector('.single_page--con')
      const getH = singlepage.getBoundingClientRect();
      const getHF = footer.getBoundingClientRect();
      vertiacalLine.style.height = (getH.height - getHF.height) + "px";
    };
}


export default new contentView()

