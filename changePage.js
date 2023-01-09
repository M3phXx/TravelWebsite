function changePage(page) {
    let pageContainer = document.getElementsByClassName("pageContainer")[0];
    let pageContainer2 = document.getElementById("xDxD");
    switch(page) {
        case "main": {
            pageContainer2.innerHTML = `<header class="container headerContainer">
            <div class="mt-3 carousel slide" data-ride="carousel" id="topCarousel">
                <ol class="carousel-indicators">
                    <li data-target="#topCarousel" data-slide-to="0"></li>
                    <li data-target="#topCarousel" data-slide-to="1"></li>
                    <li data-target="#topCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item rounded ad1 active ">
                        <div class="carousel-caption text-light">
                            <h3>Where to go on vacation?</h3>
                        </div>
                    </div>
                    <div class="carousel-item rounded ad2">
                        <div class="carousel-caption text-light">
                            <h4>How to plan a trip?</h4>
                            <p>Venue, tickets, expenses.</p>
                            <div class="data-caption">February 19</div>
                        </div>
                    </div>
                    <div class="carousel-item rounded ad3">
                        <div class="carousel-caption text-light">
                            <h4>Life in the city</h4>
                            <p>Pluses and minuses</p>
                            <div class="data-caption">April 15</div>
                        </div>
                    </div>
                </div>
                <a href="#topCarousel" type="button" data-slide="prev" class="carousel-control-prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span></a>
                <a href="#topCarousel" type="button" data-slide="next" class="carousel-control-next"><span
                        class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Następny</span></a>
            </div>
        </header>
        <main class="container cardsContainer mt-5">
            <!--Cards-->
            <div class="row cardContainer" id="cards" fetchpriority="highest"></div>
            <!--Posts-->
            <div class="row">
                <div class="col-md-8 mt-5 mb-5">
                    <div id="postContainer">
                        <div class="blog-post pl-1">
                            <img src="images/Bosnia.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
                            <h4 class="blog-post-title">Bosnia Road Trip</h4>
                            <p class="blog-post-date">Feb 9, 2020 <a href="#">Harry Callum</a></p>
                            <p>Itinerary for Bosnia-Herzegovina [10 Days] in the Balkans</p>
                            <hr>
                            <h5>How awesome is Bosnia-Herzegovina</h5>
                            <p>How awesome is Bosnia-Herzegovina – there are epic waterfalls, stunning clear rivers and
                                charming little towns.
                                When considering a country in eastern Europe for a road trip, Bosnia & Herzegovina
                                should be
                                one of the first countries on your mind. This idyllic country often gets overshadowed by
                                its
                                neighbour, Croatia. Don’t get me wrong, Croatia is a magnificent country in itself but
                                Bosnia & Herzegovina is just something else. <br>Nature-lovers will be astounded by the
                                abundance of natural marvels that are hidden within Bosnia & Herzegovina. It is a
                                surprise
                                that it is often less travelled than its neighbours, but that also means that it is
                                typically less crowded. This also means that you will be able to travel around without
                                seeing the full effects that tourism has on the society. You can expect genuine,
                                unforgettable experiences.

                                Even though this post has a recommended itinerary for a road trip in Bosnia-Herzegovina,
                                we
                                recommend not making concrete plans but having a rough idea where you want to start and
                                end.
                                Enter Bosnia, go find a river and drive along it.</p>
                        </div>
                        <div class="blog-post mt-5 pl-1">
                            <img src="images/pulaCroatia.jpg" alt="" class="rounded float-right w-50 ml-4 mb-4"
                                id="img">
                            <h4 class="blog-post-title">Things to do in Pula, Croatia</h4>
                            <p class="blog-post-date">Nov 14, 2019 <a href="#">Anna Bernard</a></p>
                            <p>Things to do in Pula, Croatia: Travel Guide for the Gem of Istria</p>
                            <hr>
                            <h5>Where is Pula</h5>
                            <img src="images/pula.PNG" alt="" class="rounded float-right w-50 ml-4 mb-4" id="img">
                            <p>Best places in Pula, Croatia:</p>
                            <ul>
                                <li>Pula Beaches</li>
                                <li>Ambrela Beach</li>
                                <li>Stoja Beach</li>
                            </ul>
                            <p>If you are planning to visit multiple places in the country, then Pula is the best place
                                to
                                start your Croatia itinerary. Istria is the westernmost county in Croatia which makes it
                                an
                                ideal place to begin your escapades around this mesmerizing country.</p>
                            <h5>How to Reach Pula?</h5>
                            <p>It is simple to reach Pula by many different ways. We arrived here on bus from Slunj town
                                but below are all the other ways to enter Pula:</p>
                        </div>
                    </div>
                    <!--paginacja-->
                    <div>
                        <nav class="mt-5" aria-label="Paginacja strony">
                            <ul class="pagination justify-content-center">
                                <li class="page-item"><a onclick="changePage(-2)" tabindex="-1" aria-disabled="true"
                                        class="page-link">-</a>
                                </li>
                                <li class="page-item"><a onclick="changePost(1)" class="page-link active">1</a></li>
                                <li class="page-item"><a onclick="changePost(2)" class="page-link">2</a></li>
                                <li class="page-item"><a onclick="changePost(3)" class="page-link">3</a></li>
                                <li class="page-item"><a onclick="changePost(4)" class="page-link">4</a></li>
                                <li class="page-item"><a onclick="changePost(-1)" class="page-link">+</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- sidebar -->
                <aside class="col-md-4 mt-5" id="asideBar">
                    <div class="bg-light-p-4 mb-3 rounded">
                        <h4 class="font-italic">About site</h4>
                        <p>The website is the first project created by <i>Jaroslaw Chelminski</i></p>
                    </div>
                    <div class="p-4">
                        <h4 class="font-italic">Archives</h4>
                        <ol class="list-unstyled">
                            <li><a href="#" class="disabled">January</a></li>
                            <li><a href="#" class="disabled">February</a></li>
                            <li><a href="#" class="disabled">March</a></li>
                            <li><a href="#" class="disabled">April</a></li>
                            <li><a href="#" class="disabled">May</a></li>
                            <li><a href="#" class="disabled">June</a></li>
                            <li><a href="#" class="disabled">July</a></li>
                            <li><a href="#" class="disabled">August</a></li>
                            <li><a href="#" class="disabled">September</a></li>
                            <li><a href="#" class="disabled">October</a></li>
                            <li><a href="#" class="disabled">December</a></li>
                        </ol>
                    </div>
                    <div class="p-4">
                        <h4 class="font-italic">Info</h4>
                        <ol class="list-unstyled">
                            <li><a href="#" data-toggle="modal" type="button" data-target="#modalAsideOfficeBuilding"
                                    id="info">Our Office</a></li>
                            <li><a href="#" data-toggle="modal" type="button" data-target="#modalAsideCulinary"
                                    id="info">Kitchen</a></li>
                            <li><a href="#" data-toggle="modal" type="button" data-target="#modalAsideourGroup"
                                    id="info">Our Team</a></li>
                        </ol>
                    </div>
                    <div class="modal fade" id="modalAsideCulinary" tabIndex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="images/culinary.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modalAsideOfficeBuilding" tabIndex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="images/officeBuilding.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modalAsideourGroup" tabIndex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="images/ourGroup.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <!--NewsLetter-->
            <div id="newsletter-box" class="rounded p-4 mb-3 bg-light">
                <div class="d-flex justify-content-center align-content-center">
                    <div class="form-box">
                        <form action="" novalidate class="row g-3 needs-validation">
                            <div class="col-12">
                                <input type="text" placeholder="Wpisz email" class="form-control" id="emailInput"
                                    required>
                                <div class="valid-feedback">Email prawidłowy!</div>
                                <div class="invalid-feedback">Wymagane wpisanie maila!</div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="agreement" required>
                                    <label for="agreement" class="form-check-label text-light">Zgadzam się z
                                        regulaminem</label>
                                    <div class="invalid-feedback">Wymagane zaznaczenie</div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary btn-block" type="submit">
                                    Zapisz mnie na newsletter
                                </button>
                            </div>
                        </form> <!--novalidate-html nie obsluzy nam tego-->
                    </div>
                </div>
            </div>
            <!--bottomCards-->
            <div class="row mt-3" id="bottomCards">
                <div class="col-sm-6">
                    <div class="border rounded row g-0 overflow-hidden shadow-sm position-relative">
                        <div class="col p-4 d-flex flex-column">
                            <strong class="mb-2 text-primary">Trip</strong>
                            <h3>Trip</h3>
                            <div class="mb-1 text-muted">Dec 7</div>
                            <p class="card-text mb-auto">
                                don't forget to take camera!
                            </p>
                            <a href="#" data-toggle="modal" type="button" data-target="#bottomCards1">Read more</a>
                        </div>
                        <div class="col-auto d-none d-md-block">
                            <img src="images/summer.jpg" alt="" class="img-fluid" width="200px" height="250px">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="border rounded row g-0 overflow-hidden shadow-sm position-relative">
                        <div class="col p-4 d-flex flex-column">
                            <strong class="mb-2 text-primary">Island</strong>
                            <h3>Island</h3>
                            <div class="mb-1 text-muted">Dec 1</div>
                            <p class="card-text mb-auto">
                                Be aware of bears and wolfs!
                            </p>
                            <a href="#" data-toggle="modal" type="button" data-target="#bottomCards2">Read more</a>
                        </div>
                        <div class="col-auto d-none d-md-block">
                            <img src="images/woman.jpg" alt="" class="img-fluid" width="200px" height="250px">
                        </div>
                    </div>
                </div>
                <!--bottomCardsModal-->
            </div>
            <div class="modal fade" id="bottomCards1" tabIndex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <img src="images/summer.jpg" alt="">
                        <div class="modal-content-text">
                            <p>Since the views along the road are so beautiful you won't believe your eyes at times, we
                                know
                                a camera definitely comes in handy, so there are a few things to keep in mind. It
                                happens to
                                be damp and things tend to get wet. Bring plastic bags to keep your camera (as well as
                                your
                                phone and wallet) nice and dry.
                            </p>
                            <p>After all, you want to keep the great photos you take. Also,
                                when you leave your car parked on a major highway to check something out, you'll
                                probably
                                take your camera, but if for some reason you don't, be sure to lock it securely in the
                                trunk. Be aware that valuables are not safe in plain sight along the highway. Plus,
                                there's
                                no reason to leave your camera in your car - there's a good chance you'll miss a great
                                shot.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="bottomCards2" tabIndex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <img src="images/woman.jpg" alt="">
                        <div class="modal-content-text">
                            <p>There have been numerous sightings of bears and wolves in recent weeks. The best way to
                                stay safe and prevent property damage and avoid conflicts with bears is to not attract
                                them in the first place. You can safely manage attractants and reduce the likelihood of
                                attracting bears to your property by:

                                Securing and storing garbage, pet food and compost in bear and odor proof bins or
                                buildings.
                                Bird seed removal. Most birds do not need seeds during the summer months.
                                Cleaning the grill after each use.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--footer-->
        </main>
        <footer id="footer" class="text-light mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        Made by M3phX
                    </div>
                    <div class="col-12 text-center">
                        Copyright by Blog. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>`;
        }
        break;
        case "shop": {
            pageContainer2.innerHTML = ``;
        }
        break;
        case "hotels": {
            pageContainer2.innerHTML = `xD`;
        }
        break;
        case "contact": {
            pageContainer2.innerHTML = ``;
        }
        break;
    }
}