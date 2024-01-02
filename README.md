Rails app generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team.


show(){
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
          </div>
        </div>`

        this.resultsTarget.insertAdjacentHTML("beforeend", jobCard);
        })
      })
        .catch(error => {
          console.log('Error:', error)
        });
  }
