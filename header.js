var header = document.getElementById('header');
header.innerHTML = `
<nav class="navbar navbar-inverse navbar-expand-lg bg-primary m-0" role="navigation-demo">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-translate">
        <a class="navbar-brand" href="./index.html">e-Token</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"  aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="./login.html" class="nav-link">
              Login
            </a>
          </li>
             <li class="nav-item">
            <a href="register.html" class="nav-link">
              Signup
            </a>
          </li>   <li class="nav-item">
            <a href="./companies.html" class="nav-link">
              Companies
            </a>
          </li>
        </li>   <li class="nav-item">
          <a href="./about.html" class="nav-link">
            About Us
          </a>
        </li>
      </li>   <li class="nav-item">
        <a href="./contact.html" class="nav-link">
          Contact Us
        </a>
      </li>
          <li class="dropdown nav-item">
            <a href="#pablo" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
              <div class="profile-photo-small">
                <img src="./assets/img/faces/marc.jpg" alt="Circle Image" class="rounded-circle img-fluid">
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
             
              <a href="#pablo" class="dropdown-item">Richard james</a>
              <a href="#pablo" class="dropdown-item">Profile Setting</a>
              <a href="#pablo"  onclick="logout()" class="dropdown-item">Sign out</a>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
    
</nav>

`

