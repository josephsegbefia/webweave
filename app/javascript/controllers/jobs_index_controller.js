import { Controller } from "@hotwired/stimulus"

const url = "https://jsearch.p.rapidapi.com/search";
const loaded = false;
let page_num = "1";
const params = new URLSearchParams({
  query: 'Fullstack developer in Germany',
  page: page_num,
  num_pages: '20'
});




// Connects to data-controller="jobs-index"
export default class extends Controller {
  static targets = ['results']
  static values = {
    apiKey: String
  }



  connect() {
    this.resultsTarget.innerHTML = ""
    fetch(`${url}?${params}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': this.apiKeyValue,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data)
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

  next(){
    page_num = parseInt(page_num, 10)
    page_num += 1;
    page_num = page_num.toString();
    console.log(page_num)
    this.resultsTarget.innerHTML = ""
    fetch(`${url}?${params}`, {
      method: 'GET',
      headers: headers
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        data.data.forEach((job) => {
          console.log(job)
          const jobCard = `<div class="card m-1" style="width: 18rem;">

          <div class="card-body">
            <h4 class="card-title">${job.employer_name}</h4>
            <small style = "color:green">${job.job_title}</small> |
            <small>${job.job_city}
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
