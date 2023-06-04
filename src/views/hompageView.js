import View from "./view";

class hompageView extends View {
  constructor() {
    super();
  }

  generateMarkUp(data) {
    data.map((el) => {
      const html = `
        <div class="news_container">
                  <div class="news_content">
                    <div class="media_image">
                      <img
                      src="${el.image}"
                      alt="${el.source} news"
                      />
                    </div>
                    <div class="media_summary">
                      <div class="media_title">
                        <a href="#${el.slug}">
                          ${el.title}</a
                        >
                      </div>
                      <p class="media_description">
                      ${el.description}
                      </p>
                      <div class="media_date-cat">
                        <div class="media_date">${el.date}</div>
                        <div class="media_seperator">|</div>
                        <div class="media_categories">
                          <a class="media_link" href="#${el.category}">${el.category}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;

      const id = window.location.hash.slice(1);
      if (id === "") {
        const parentEL = document.querySelector(".bbc-home");
        parentEL.insertAdjacentHTML("afterbegin", html);
      }
    });
  }

  generateMarkUpCnn(data) {
    data.map((el) => {
      const html = `
        <div class="news_container">
                  <div class="news_content">
                    <div class="media_image">
                      <img
                      src="${el.image}"
                      alt="${el.source} news"
                      />
                    </div>
                    <div class="media_summary">
                      <div class="media_title">
                        <a href="#${el.slug}">
                          ${el.title}</a
                        >
                      </div>
                      <p class="media_description">
                      ${el.description}
                      </p>
                      <div class="media_date-cat">
                        <div class="media_date">${el.date}</div>
                        <div class="media_seperator">|</div>
                        <div class="media_categories">
                          <a class="media_link" href="#${el.category}">${el.category}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
      const id = window.location.hash.slice(1);
      if (id === "") {
        const parentEL = document.querySelector(".cnn-home");
        parentEL.insertAdjacentHTML("afterbegin", html);
      }
    });
  }

  generateMarkUpCarousel(data) {
    data.map((el) => {
      const html = `
    <div class="carousel-item active">
              <img
                src="${el.image}"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="details_warpper">
                  <h3 class="content_title">
                    <a class="title_link" href="#${el.slug}">
                    ${el.title}
                    </a>
                  </h3>
                  <p class="content_description">
                  ${el.description}
                  </p>
                  <div class="cat_date">
                    <div class="content_date">${el.date}</div>
                    <div class="date_seperator">|</div>
                    <div class="content_categories">
                      <a class="cat_link" href="#${el.category}">${el.category}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
      const carousel = document.querySelector(".carousel-inner");
      carousel.insertAdjacentHTML("afterbegin", html);
    });
  }
}

export default new hompageView();
