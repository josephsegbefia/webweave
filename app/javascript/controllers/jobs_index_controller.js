import { Controller } from "@hotwired/stimulus";

const url = "https://jsearch.p.rapidapi.com/search";
let loaded = false;
let page_num = "1";
const params = new URLSearchParams({
  query: 'Fullstack developer in Germany',
  page: page_num,
  num_pages: '20'
});

// Connects to data-controller="jobs-index"
export default class extends Controller {
  static targets = ['results', 'jobs']
  static values = {
    apiKey: String
  }

  connect() {
    console.log("Connected!");
    // this.show(); // Trigger the show method when the controller connects
  }

  async show() {
    this.jobsTarget.style.display = "none";
    try {
      if (!loaded) {
        const loadingCard = `<div class="d-flex justify-content-center align-items-center">
          <h1>Loading... please wait</h1>
        </div>`;
        this.resultsTarget.innerHTML = loadingCard;
      }

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.apiKeyValue,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.resultsTarget.innerHTML = "";
        data.data.forEach((job) => {
          console.log(job);
          const jobCard = `<div class="card m-1" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${job.employer_name}</h4>
              <small style="color:green">${job.job_title}</small> |
              <small>${job.job_city}, ${job.job_country}</small>
              <p class="card-text"></p>
            </div>
          </div>`;

          this.resultsTarget.insertAdjacentHTML("beforeend", jobCard);
        });
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }
}
