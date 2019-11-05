var compdata = document.getElementById('compdata')
compsearch = () =>{
   
   
    for(var i= 0 ;i<8 ;i++)
    {
        compdata.innerHTML += `
        <div class="col-md-3">
        <div class="team-player">
          <div class="card card-plain">
            <div class="col-md-10 ml-auto mr-auto">
              <img src="./assets/img/faces/hbl.jpg" alt="Thumbnail Image" class="img-raised rounded-image img-fluid">
            </div>
            <h4 class="card-title">HBL
              <br>
              <small class="card-description text-muted">Bank</small>
            </h4>
            <div class="card-body">
              <!-- <p class="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati incidunt in expedita repellendus dignissimos consequuntur rem cum optio fuga asperiores inventore ipsam, saepe esse sint tenetur quidem facere distinctio? -->
                <p> for people to be able to follow them outside the site. </p>
            </div>
            <button class="btn btn-primary">Generate Token</button>
    
          </div>
        </div>
       
      </div>
        
        `
    }
}


