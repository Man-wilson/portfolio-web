const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg sticky-top navbar-dark text-dark bg-dark">
             <div class="container-fluid pl-5 ml-4">
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
            
                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="logo">
                    <a href="re">
                     Portfo
                     <span className="spa">lio.</span>
                      </a>
                      <br />
                       <a className="icons pr-2" href="sf" target="__blank">
                         <i className="fab fa-linkedin">
                         </i>
                        </a> 
                           <a className="icons" href="https://www.instagram.com/pacific001" target="__blank">
                              <i className="fab fa-instagram">
                              </i>
                            </a>
                  </div>
                     <div class="navbar-nav nav-text">
                          <a class="nav-link active" aria-current="page" href="Footer.js">Home</a>
                          <a class="nav-link active"  href="Footer">About</a>
                          <a class="nav-link active" href="Experience.js">Experience</a>
                          <a class="nav-link active" href="Skills">Skills</a>
                          <a class="nav-link active" href="Work">Projects</a>
                          <a class="nav-link active"  href="Section.js">Contact</a>
                      </div>
                   </div>
             </div>
        </nav>
        
    );
}

export default NavBar;