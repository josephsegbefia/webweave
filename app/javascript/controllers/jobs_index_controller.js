import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="jobs-index"
export default class extends Controller {
  static targets = ['results']


  connect() {
    console.log("hello from the jobs controller")
    this.resultsTarget.innerHTML = ""
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then((data) => {
        data.results.forEach((result) => {
          const jobTag = `<li class = "list-group-item border-0">
            <p>${result.name}</p>
          </li>`

          this.resultsTarget.insertAdjacentHTML("beforeend", jobTag);
        })
      })
  }
}
