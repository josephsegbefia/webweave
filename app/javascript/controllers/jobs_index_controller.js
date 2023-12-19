import { Controller } from "@hotwired/stimulus"

const url = "https://jsearch.p.rapidapi.com/search";
const loaded = false;
const params = new URLSearchParams({
  query: 'Fullstack developer in Germany',
  page: '1',
  num_pages: '20'
});

const headers = {
  'X-RapidAPI-Key': '35cf0f26f2mshf30474c3c0fabe1p162696jsnce0701eed772',
  'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
};
// Connects to data-controller="jobs-index"
export default class extends Controller {
  static targets = ['results']


  connect() {
    console.log("hello from the jobs controller")
    this.resultsTarget.innerHTML = ""
    // fetch("https://pokeapi.co/api/v2/pokemon/")
    //   .then(response => response.json())
    //   .then((data) => {
    //     data.results.forEach((result) => {
    //       const jobTag = `<li class = "list-group-item border-0">
    //         <p>${result.name}</p>
    //       </li>`

    //       this.resultsTarget.insertAdjacentHTML("beforeend", jobTag);
    //     })
    //   })

    fetch(`${url}?${params}`, {
      method: 'GET',
      headers: headers
    }).then(response => response.json())
      .then(data => {
        data.data.forEach((job) => {
          console.log(job)
          const jobCard = `<div class="card m-1" style="width: 18rem;">

          <div class="card-body">
            <h4 class="card-title">${job.employer_name}</h4>
            <small style = "color:green">${job.job_title}</small> |
            <small>${job.job_city}, ${job.job_country}</small>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`

        this.resultsTarget.insertAdjacentHTML("beforeend", jobCard);
        })
      })
        .catch(error => {
          console.log('Error:', error)
        });
  }
}
