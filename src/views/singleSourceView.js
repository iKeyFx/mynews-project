import View from "./view";

class singleSource extends View {
  singleSourcePD = document.querySelector(".single_source_news");
  singleType = document.querySelector(".single_source_heading");
  singleTypBread = document.querySelector(".single_source_con_breadcrumb");

  addRenderClick(handler) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handler));
  }

  errorHandler() {
    const box = document.querySelector(".errorlead");
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("hidden");
    box.style.display = "grid";
  }
  // clear
  clear() {
    const singleSourcePD = document.querySelector(".single_source_news");
    singleSourcePD.innerHTML = "";
    const section1 = document.querySelector(".section_1");
    const section2 = document.querySelector(".section_2");
    const singleF = document.querySelector(".single_page--con");

    singleF.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
  }
  // Load Type News
  updatePageSource(data) {
    const html = `
       <ol class="breadcrumb">
         <li class="breadcrumb-item"><a href="#">Home</a></li>
         <li class="breadcrumb-item active" aria-current="page">${data}-News</li>
       </ol>
     `;
    const markUp = `
             <h3>${data} News</h3>    
   `;

    this.singleType.innerHTML = " ";
    this.singleTypBread.innerHTML = " ";
    this.singleTypBread.insertAdjacentHTML("afterbegin", html);
    this.singleType.insertAdjacentHTML("afterbegin", markUp);
    this.singleType.style.textTransform = "uppercase";
    this.singleTypBread.style.textTransform = "capitalize";
  }

  generateMarkUp(data) {
    data.map((el) => {
      const html = `
      <div class="source_news_container">
                <div class="source_news_content">
                  <div class="source_media_image">
                    <img
                      src="${el.image}"
                       alt="${el.source} news"
                    />
                  </div>
                  <div class="source_media_summary">
                    <div class="source_media_title">
                      <a class="markUplink" href="#${el.slug}">
                      ${el.title}</a
                      >
                    </div>
                    <p class="source_media_description">
                    ${el.description}
                    </p>
                    <div class="source_media_date-cat">
                      <div class="source_media_date">${el.date}</div>
                      <div class="source_media_seperator">|</div>
                      <div class="source_media_categories">
                        <a class="source_media_link" href="">${el.category}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `;
      this.singleSourcePD.insertAdjacentHTML("afterbegin", html);
    });
  }
}

export default new singleSource();
