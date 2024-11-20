<template>
  <q-page class="">
    <!-- Header Section-->
    <div class="header-wrapper">
      <div>
        <div>
          <div class="site-name-logo-cont">
            <div class="site-logo-cont">
              <img src="/head-logo.png" alt="" />
            </div>
            <!-- <div class="site-name">
              <h1><span>Agri</span><span>Tech</span></h1>
            </div> -->
          </div>

          <div class="cta-header-btn-cont">
            <nav>
              <ul>
                <li>
                  <!-- @click="showNotification('delegate')" -->
                  <q-btn
                    flat
                    label="Delegate"
                    @click="goToSignup('delegate')"
                    :disable="isMeetingAvailable === false"
                    ><SvgIcon name="delegate"
                  /></q-btn>
                </li>
                <li>
                  <!-- @click="showNotification('partner')" -->
                  <q-btn
                    flat
                    label="Partner with us"
                    @click="goToSignup('partner')"
                    :disable="isMeetingAvailable === false"
                    ><SvgIcon name="office"
                  /></q-btn>
                </li>
              </ul>
              <q-btn
                class="user-profile"
                flat
                to="profile"
                :disable="isMeetingAvailable === false"
                ><SvgIcon name="user"
              /></q-btn>
            </nav>

            <div class="hamburger-menu">
              <label class="hamburger">
                <input type="checkbox" v-model="isChecked" />
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div
          class="navbar-cont"
          :style="{
            height: isChecked ? ($q.screen.xs ? '100px' : '60px') : '0px',
            padding: isChecked ? '20px' : '0px',
            opacity: isChecked ? '1' : '0',
          }"
        >
          <nav>
            <ul>
              <li><router-link to="#Home">Home</router-link></li>
              <li><router-link to="#about">About</router-link></li>
              <li><router-link to="#contact">Contact</router-link></li>
              <!-- <li><router-link to="#Sponsors">Sponsors</router-link></li> -->
            </ul>
          </nav>
          <q-btn
            v-if="$q.screen.xs"
            flat
            class="q-pa-xl"
            label="Delegate"
            @click="showNotification('delegate')"
            :disable="isMeetingAvailable === false"
            ><SvgIcon name="delegate"
          /></q-btn>
        </div>
      </div>
    </div>

    <div class="hero-section-wrapper">
      <div>
        <div class="hero-section-intro-cont">
          <h1>
            “Empowering your role in Northern Agriculture with Innovation and
            Strategic Collaboration” <br />
            <p>
              <span>25</span> & <span>26</span>-<span>Feb</span>-<span
                >2025</span
              >
            </p>
          </h1>
        </div>

        <div class="hero-section-additional">
          <div class="hero-logos-cont">
            <div><img src="/gslsqr.jpg" alt="" /></div>
            <div><img src="/prospsponsors/logo4-044.png" alt="" /></div>
            <div><img src="/prospsponsors/logo4-055.png" alt="" /></div>
          </div>
          <div class="hero-sub-title-cont">
            <p>
              The Kaduna Agritech International Conference will gather 350+
              delegates and industry leaders driving the future of agriculture.
            </p>
            <div class="hero-nav-cont">
              <p>Sign up</p>
              <nav>
                <ul>
                  <li v-if="!$q.screen.xs">
                    <q-btn
                      flat
                      label="Delegate"
                      @click="showNotification('delegate')"
                      :disable="isMeetingAvailable === false"
                    />
                  </li>
                  <li>
                    <q-btn
                      flat
                      label="Partner"
                      @click="showNotification('partner')"
                      :disable="isMeetingAvailable === false"
                    />
                  </li>
                  <li>
                    <q-btn
                      flat
                      label="Bootcamp"
                      @click="showNotification('bootcamp')"
                      :disable="isMeetingAvailable === false"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-wrapper">
      <div class="parallax-cont">
        <q-parallax :height="700">
          <template v-slot:media>
            <img src="/parallax01.png" />
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center parallax-title-cont"
              :style="{
                opacity: 1 + (1 - scope.percentScrolled) * 0.55,
                top: scope.percentScrolled * 60 + '%',
                left: 0,
                right: 0,
              }"
            >
              <div class="parallax-text-content">
                <h1 class="text-center">Kaduna Agritech Conference 2025</h1>
                <div>
                  <p class="text-center">YEAR-ROUND AGRICULTURE</p>
                </div>
              </div>
            </div>
          </template>
        </q-parallax>
      </div>
    </div>

    <!-- Infinite flash -->

    <!-- <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <q-img src="/pic1.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic2.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic3.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic4.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic5.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic6.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic7.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic8.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic9.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic10.jpg" spinner-color="white" style="" />>
        </div>
        <div class="slide">
          <q-img src="/pic1.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic2.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic3.jpg" spinner-color="white" style="" />
        </div>
        <div class="slide">
          <q-img src="/pic1.jpg" spinner-color="white" style="" />
        </div>
      </div>
    </div> -->

    <!-- Main content Section -->

    <section class="main-body-wrapper">
      <div class="body-cont">
        <div id="about" class="about-the-conference">
          <div>
            <div class="about-description-cont">
              <h2>Innovating Northern Agriculture</h2>
              <p>
                The Kaduna Agritech International Conference 2025 empowers
                Northern Nigeria's agricultural sector through innovation and
                sustainability. This event brings together industry leaders,
                farmers, and stakeholders to explore advanced technologies and
                collaborative solutions that address regional challenges and
                enhance food security.
              </p>
              <p>
                In partnership with Kaduna State Ministries of Agriculture
                (KDMoA), Business Innovation and Technology (KDMoBIT), Greysoft
                convenes experts to share insights and stimulate discussions.
                This collaboration highlights our commitment to fostering
                positive change in agriculture, striving for a resilient and
                prosperous future for Northern Nigeria's farming community.
              </p>
            </div>
            <div class="about-image-cont">
              <div class="">
                <img src="/about001.png" alt="" />
              </div>

              <span
                v-for="(counter, index) in counters"
                :key="index"
                class="counter-item"
              >
                <h2>{{ counter.value }}+</h2>
                <p>{{ counter.label }}</p>
              </span>
            </div>
          </div>
        </div>

        <div class="year-round-agric-wrapper">
          <div>
            <div class="year-round-title-cont">
              <h2>
                Introducing <br />
                The Kaduna AgriTech Conference 2025
              </h2>
              <p>“Year-Round Agriculture”</p>
            </div>

            <div class="year-round-text-content-cont01">
              <p>
                Introducing the 2025 Kaduna Agritech Conference, where we’re
                bringing together an unprecedented range of expertise and
                technological innovation to strengthen year-round farming in
                Northern Nigeria.
              </p>
            </div>

            <div class="year-round-text-img-cont">
              <div class="year-round-img-cont">
                <img src="/yra.png" alt="" />
              </div>
              <div class="year-round-main-text-cont">
                <p>
                  Building on the impactful success of 2024, the 2025 conference
                  will focus on "Year-Round Agriculture," leveraging advanced
                  techniques and technology to enhance Wet and Dry season
                  farming for optimal yield. This year’s thematic focus includes
                  advanced irrigation systems, vertical farming, fertilizer
                  application tailored for seasonal shifts, and cutting-edge
                  storage solutions to minimize post-harvest losses.
                </p>

                <div v-if="!$q.screen.xs">
                  <p>
                    Participants can expect sessions dedicated to integrating
                    AI, IoT, drones, and data analytics into agricultural
                    practices, transforming decision-making and efficiency
                    across the agricultural value chain. The event will also
                    provide an interactive platform for farmers, agribusinesses,
                    investors, and policymakers to exchange insights, expand
                    market access, and discuss ways to implement sustainable
                    agricultural solutions at scale.
                  </p>

                  <p>
                    The 2025 conference reflects our commitment to the Kaduna
                    State Ministry of Agriculture's vision for sustainable,
                    technology-driven agriculture that meets the unique
                    challenges of Northern Nigeria's agrarian economy
                  </p>
                </div>
                <div v-if="showMore && $q.screen.xs">
                  <p>
                    Participants can expect sessions dedicated to integrating
                    AI, IoT, drones, and data analytics into agricultural
                    practices, transforming decision-making and efficiency
                    across the agricultural value chain. The event will also
                    provide an interactive platform for farmers, agribusinesses,
                    investors, and policymakers to exchange insights, expand
                    market access, and discuss ways to implement sustainable
                    agricultural solutions at scale.
                  </p>

                  <p>
                    The 2025 conference reflects our commitment to the Kaduna
                    State Ministry of Agriculture's vision for sustainable,
                    technology-driven agriculture that meets the unique
                    challenges of Northern Nigeria's agrarian economy
                  </p>
                </div>

                <q-btn
                  label="Read More"
                  v-if="!showMore && $q.screen.xs"
                  color="black"
                  flat
                  @click="toggleReadMore"
                ></q-btn>
                <q-btn
                  label="Read Less"
                  v-if="showMore && $q.screen.xs"
                  color="black"
                  flat
                  @click="toggleReadMore"
                ></q-btn>
              </div>
            </div>
            <div class="year-round-key-outcomes">
              <div class="year-round-key-outcomes-title">
                <h6>Key Outomes</h6>
              </div>
              <div>
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  ref="scrollElement"
                >
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="thematic-focus">
          <div>
            <div>
              <div>
                <h2>Conference Themes <span>2025</span></h2>
              </div>
              <div class="thematic-group-1">
                <div class="theme-1">
                  <div class="thematic-icon-cont">
                    <img src="/whyjoin/thematic01.png" alt="" />
                  </div>
                  <div class="thematic-description-cont">
                    <h6>Year-Round Agriculture Innovation</h6>
                    <p>
                      Leveraging advanced irrigation technologies, this theme
                      explores digital monitoring, automated scheduling, and
                      water-efficient systems to support continuous,
                      multi-seasonal farming. This approach enhances production
                      consistency and optimizes resource usage, essential for
                      achieving regional food security.
                    </p>
                  </div>
                </div>
                <div class="theme-2">
                  <div class="thematic-icon-cont">
                    <img src="/whyjoin/reliability.png" alt="" />
                  </div>
                  <div class="thematic-description-cont">
                    <h6>Yield Enhancement</h6>
                    <p>
                      This theme promotes the use of smart, quality-assured
                      inputs, backed by data-driven platforms and precision
                      agriculture tools, to maximize crop yields. By ensuring
                      farmers have access to these resources alongside Good
                      Agricultural Practices (GAP), the goal is to improve
                      productivity and sustainability across agricultural
                      operations.
                    </p>
                  </div>
                </div>
              </div>

              <div class="thematic-group-2">
                <div class="theme-3">
                  <div class="thematic-icon-cont">
                    <img src="/whyjoin/drone.png" alt="" />
                  </div>
                  <div class="thematic-description-cont">
                    <h6>Urban Farming Technology</h6>
                    <p>
                      Focused on modern urban agriculture solutions, such as
                      vertical farming, hydroponics, and IoT-integrated home
                      horticulture, this theme showcases how technology can
                      transform limited spaces into productive farming units.
                      These innovations offer sustainable food production
                      options within urban settings, reducing environmental
                      impact and enhancing accessibility.
                    </p>
                  </div>
                </div>
                <div class="theme-4">
                  <div class="thematic-icon-cont">
                    <img src="/whyjoin/robot-arm.png" alt="" />
                  </div>
                  <div class="thematic-description-cont">
                    <h6>Innovative Post-Harvest Management</h6>
                    <p>
                      This area addresses reducing post-harvest losses by
                      employing tech-enabled storage solutions, such as smart
                      warehouses and blockchain-based supply tracking. Improved
                      access to storage and financial technology ensures farmers
                      retain more of their yield while facilitating smoother
                      market integration and distribution.
                    </p>
                  </div>
                </div>
              </div>

              <q-btn
                label="More"
                color="black"
                flat
                @click="isDialogOpen = true"
              />

              <q-dialog v-model="isDialogOpen" seamless>
                <q-card rounded>
                  <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">More on Conference Themes</div>
                    <q-space />
                    <q-btn
                      icon="close"
                      flat
                      round
                      dense
                      @click.stop.prevent="isDialogOpen = false"
                    />
                  </q-card-section>

                  <q-card-section>
                    Additionally, key areas of discussion will include
                    season-specific fertilizer applications, improved seed
                    management practices, and the integration of AI and IoT to
                    boost agricultural productivity. The agenda will also delve
                    into climate-resilient farming techniques, strategies for
                    scaling agriculture for export, and an exploration of
                    effective agricultural policy frameworks tailored for
                    Africa’s unique landscape. <br />
                    <br />
                    Further discussions will emphasize the importance of
                    integrating small-scale producers into global data
                    ecosystems, harmonizing agricultural data for the benefit of
                    stakeholders, leveraging research to drive sector
                    innovation, expanding market access for smallholder farmers,
                    and promoting financial inclusion in underserved regions.
                    Each topic aims to equip participants with insights for
                    achieving sustainable growth and resilience in agriculture
                    across the continent
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>

        <div class="what-to-expect-wrapper" v-if="!$q.screen.xs">
          <div>
            <div class="what-to-expect-title-cont">
              <h2>What to expect</h2>
            </div>
            <div>
              <div class="what-to-expect-cont-0">
                <div></div>
                <div>Innovative Agritech Solutions</div>
                <div></div>
              </div>

              <div class="what-to-expect-cont-1">
                <div>Business Matchmaking</div>
                <div>
                  Hear from Industry Experts in the Agri-business Sector
                </div>
                <div>Access to New Markets</div>
              </div>

              <div class="what-to-expect-cont-2">
                <div></div>
                <div>
                  Understand the vision of the Northern Agricultural ecosystem
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="what-to-expect-wrapper" v-if="$q.screen.xs">
          <div>
            <div class="what-to-expect-title-cont">
              <h2>What to expect</h2>
            </div>
            <div>
              <div class="what-to-expect-cont-xs">
                <div>Innovative Agritech Solutions</div>
                <div>Business Matchmaking</div>
                <div>
                  Hear from Industry Experts in the Agri-business Sector
                </div>
                <div>Access to New Markets</div>
                <div>
                  Understand the vision of the Northern Agricultural ecosystem
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="why-join-us">
          <div>
            <div>
              <div class="key-point-heading-cont">
                <h2>Why you should join us</h2>
                <p>
                  With opportunities for delegates, sponsors, and exhibitors,
                  each sector will gain invaluable benefits through the rich
                  interactions, data insights, and business connections to be
                  made during the conference.
                </p>
              </div>
              <div class="key-points-wrapper">
                <div class="key-point-cont">
                  <div class="k-point-cont0-1">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin01.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Farmers</h6>
                      <p>
                        This event offers a unique opportunity to discover and
                        adopt cutting-edge agritech solutions tailored to
                        improve crop yield, sustainability, and overall
                        profitability. Engage directly with innovators and
                        industry experts to gain insights into best practices,
                        from precision farming techniques to climate resilience.
                      </p>
                    </div>
                  </div>
                  <div class="k-point-cont0-2">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin02.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Researchers</h6>
                      <p>
                        The conference provides a collaborative platform to
                        showcase your research, connect with industry
                        professionals, and find new funding or partnerships to
                        bring innovative agricultural advancements from the lab
                        to the field. This setting facilitates exchange with
                        those working directly in agribusiness, enabling
                        impactful research translation.
                      </p>
                    </div>
                  </div>
                  <div class="k-point-cont0-3">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin03.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Agribusiness Owners</h6>
                      <p>
                        Attending allows you to network with key players across
                        the agricultural value chain, access groundbreaking
                        technologies, and explore ways to streamline and scale
                        your business operations. This event is a prime avenue
                        for market access, fostering valuable connections that
                        may drive growth and innovation in your enterprise
                      </p>
                    </div>
                  </div>
                </div>

                <div class="key-point-cont">
                  <div class="k-point-cont0-1">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin04.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Investors</h6>
                      <p>
                        Discover high-potential investment opportunities in
                        agtech, where groundbreaking solutions are being
                        developed to tackle agriculture's most pressing issues.
                        This conference introduces you to startups, esta
                      </p>
                    </div>
                  </div>
                  <div class="k-point-cont0-2">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin05.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Donor Partners</h6>
                      <p>
                        Engage with various stakeholders to gain insights into
                        how your contributions can be strategically directed
                        toward impactful projects. With a focus on
                        sustainability and technological adoption, this platform
                        allows you to assess and support initiatives that offer
                        long-term benefits for the agricultural sector and food
                        security.
                      </p>
                    </div>
                  </div>
                  <div class="k-point-cont0-3">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin06.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Agritech Innovators</h6>
                      <p>
                        Showcase your products to an audience actively seeking
                        technological advancements. Network with potential
                        clients, partners, and investors, gaining real-time
                        feedback to refine and scale your solutions. It's a
                        unique environment to meet the end users of your
                        technology and see how it can be tailored to meet their
                        needs
                      </p>
                    </div>
                  </div>
                </div>

                <div class="key-point-cont">
                  <div class="k-point-cont0-1">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin07.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Policymakers</h6>
                      <p>
                        With the agricultural landscape rapidly evolving,
                        attending offers policymakers the chance to interact
                        with stakeholders directly impacted by existing
                        regulations. It also provides data-driven insights and
                        feedback that can inform the creation of effective
                        policies, supporting innovation while addressing
                        farmers’ needs
                      </p>
                    </div>
                  </div>
                  <div class="k-point-cont0-2">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin08.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Fertilizer and Seed Companies</h6>
                      <p>
                        Gain access to a large audience of farmers,
                        agribusinesses, and distributors looking for reliable
                        and quality inputs. By participating, you can educate
                        attend- ees on the importance of quality products and
                        showcase how your offerings enhance productivi- ty,
                        particularly under climate-challenged conditions.
                      </p>
                    </div>
                  </div>
                  <div class="k-point-cont0-3">
                    <div class="k-point-icon-cont">
                      <img src="/whyjoin/whyjoin09.png" alt="" />
                    </div>
                    <div class="k-point-content-cont">
                      <h6>Storage and Mechanization Companies</h6>
                      <p>
                        Addressing post-harvest losses and improving storage
                        capacity are critical challenges in the sector. This
                        conference gives you a platform to showcase innovative
                        storage solutions, mechanization options, and equipment
                        that ensure crop quality, sustainability, and greater
                        market access for farmers and businesses alike
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bootcamp-pitchathon-highlights">
          <div>
            <div class="gallery_1" unique-script-id="w-w-dm-id">
              <div class="responsive-container-block bigContainer">
                <div class="responsive-container-block Container">
                  <p class="text-blk heading">Bootcamp 2024</p>
                  <p class="text-blk subHeading">
                    The 2024 Kaduna Agritech Conference hosted a robust two-week
                    Bootcamp at GreyHobb, where participants received guidance
                    from industry experts, seasoned mentors, researchers, and
                    leading figures in agribusiness. This immersive Bootcamp
                    fostered skill development and deeper knowledge, setting the
                    stage for the dynamic Pitchathon event. Participants
                    presented innovative agricultural solutions to a panel of
                    esteemed judges, competing for recognition and prizes.
                    Thanks to sponsorship from the Bank of Agriculture, winning
                    projects gained support for further development and
                    real-world agricultural impact.
                  </p>
                  <div class="responsive-container-block imgContainer">
                    <div class="project project1">
                      <img class="smallImage" src="/bootcamp/bootcamp05.jpg" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <button class="close">Close X</button>
                          <div class="hdImgs">
                            <img
                              class="squareImg"
                              src="/bootcamp/bootcamp05.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="btn-box">
                        <button class="btn">View</button>
                      </div>
                    </div>
                    <div class="project project2">
                      <img class="smallImage" src="/bootcamp/bootcamp01.jpg" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <button class="close">Close X</button>
                          <div class="hdImgs">
                            <img
                              class="squareImg"
                              src="bootcamp/bootcamp01.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="btn-box">
                        <button class="btn">View</button>
                      </div>
                    </div>
                    <div class="project project3">
                      <img class="smallImage" src="bootcamp/bootcamp06.jpg" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <button class="close">Close X</button>
                          <div class="hdImgs">
                            <img
                              class="squareImg"
                              src="bootcamp/bootcamp06.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="btn-box">
                        <button class="btn">View</button>
                      </div>
                    </div>
                    <div class="project project4">
                      <img class="smallImage" src="/bootcamp/bootcamp02.jpg" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <button class="close">Close X</button>
                          <div class="hdImgs">
                            <img
                              class="squareImg"
                              src="/bootcamp/bootcamp02.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="btn-box">
                        <button class="btn">View</button>
                      </div>
                    </div>
                    <div class="project project5">
                      <img class="smallImage" src="/bootcamp/bootcamp03.jpg" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <button class="close">Close X</button>
                          <div class="hdImgs">
                            <img
                              class="squareImg"
                              src="/bootcamp/bootcamp03.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="btn-box">
                        <button class="btn">View</button>
                      </div>
                    </div>
                    <div class="project project6">
                      <img class="smallImage" src="/bootcamp/bootcamp04.jpg" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <button class="close">Close X</button>
                          <div class="hdImgs">
                            <img
                              class="squareImg"
                              src="/bootcamp/bootcamp04.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="btn-box">
                        <button class="btn">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="past-sponsors-wrapper">
          <div>
            <div class="past-sponsors-titlecont">
              <h2>Partners from Kaduna Agritech Conference 2024</h2>
            </div>
            <div class="past-spons-cont-00">
              <Sponsors />
            </div>
          </div>
        </div> -->

        <!-- <div class="sponsor-partnership-opportunities">
          <div>
            <div class="sponsor-options-cont0-1">
              <div class="sponsor-options-img-cont">
                <h2>Sponsorship Options</h2>
              </div>
              <div class="sponsor-options-content-cont">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam atque, asperiores amet iure dolore rem, illo illum
                    sunt, exercitationem quae sint magni totam dolorum esse nisi
                    officia aliquam excepturi. Laboriosam!
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam atque, asperiores amet iure dolore rem, illo illum
                    sunt, exercitationem quae sint magni totam dolorum esse nisi
                    officia aliquam excepturi. Laboriosam!
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam atque, asperiores amet iure dolore rem, illo illum
                    sunt, exercitationem quae sint magni totam dolorum esse nisi
                    officia aliquam excepturi. Laboriosam!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="sponsor-options-cont0-2">
                <div class="sponsor-options-img-cont">
                  <h2>Sponsorship Options</h2>
                </div>
                <div class="sponsor-options-content-cont">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aperiam atque, asperiores amet iure dolore rem, illo illum
                      sunt, exercitationem quae sint magni totam dolorum esse
                      nisi officia aliquam excepturi. Laboriosam!
                    </p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aperiam atque, asperiores amet iure dolore rem, illo illum
                      sunt, exercitationem quae sint magni totam dolorum esse
                      nisi officia aliquam excepturi. Laboriosam!
                    </p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aperiam atque, asperiores amet iure dolore rem, illo illum
                      sunt, exercitationem quae sint magni totam dolorum esse
                      nisi officia aliquam excepturi. Laboriosam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="gallery-wrapper">
          <div>
            <div class="gallery-title-cont">
              <h2>
                Conference <br v-if="$q.screen.xs" />
                Highlights 2024
              </h2>
              <p>
                Relive moments from the last conference and see what’s in store
                for 2025!
              </p>
            </div>

            <!-- Desktop -->
            <div class="gallery-parent-cont" v-if="!$q.screen.xs">
              <div class="g-item-1">
                <img src="/highlights/highlight11.jpg" alt="" />
              </div>
              <div class="g-item-2">
                <img src="/bootcamp/bootcamp03.jpg" alt="" />
              </div>
              <div class="g-item-3">
                <img src="/highlights/highlight08.jpg" alt="" />
              </div>
              <div class="g-item-4">
                <img src="/highlights/highlight03.jpg" alt="" />
              </div>
              <div class="g-item-5">
                <img src="/highlights/highlight04.jpg" alt="" />
              </div>
              <div class="g-item-6">
                <img src="/highlights/highlight05.jpg" alt="" />
              </div>
              <div class="g-item-7">
                <img src="/highlights/highlight01.jpg" alt="" />
              </div>
              <div class="g-item-8">
                <img src="/highlights/highlight07.jpg" alt="" />
              </div>
              <div class="g-item-9">
                <img src="/highlights/highlight02.jpg" alt="" />
              </div>
              <div class="g-item-10">
                <img src="/highlights/highlight06.jpg" alt="" />
              </div>
              <div class="g-item-11">
                <img src="/highlights/highlight09.jpg" alt="" />
              </div>
              <div class="g-item-12">
                <img src="/highlights/highlight10.jpg" alt="" />
              </div>
            </div>

            <!-- Mobile -->
            <div class="gallery-parent-cont-xs" v-if="$q.screen.xs">
              <div class="g-item-1">
                <img src="/highlights/highlight11.jpg" alt="" />
              </div>
              <div class="g-item-2">
                <img src="/bootcamp/bootcamp03.jpg" alt="" />
              </div>
              <div class="g-item-3">
                <img src="/highlights/highlight08.jpg" alt="" />
              </div>
              <div class="g-item-4">
                <img src="/highlights/highlight03.jpg" alt="" />
              </div>
              <div class="g-item-5">
                <img src="/highlights/highlight02.jpg" alt="" />
              </div>
              <div class="g-item-6">
                <img src="/highlights/highlight05.jpg" alt="" />
              </div>
              <div class="g-item-7">
                <img src="/highlights/highlight04.jpg" alt="" />
              </div>
              <div class="g-item-8">
                <img src="/highlights/highlight07.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="prospective-sponsors-wrapper">
          <div>
            <div class="prosp-spons-title">
              <h2>Partners/Sponsors</h2>
              <p>Prospective</p>
            </div>

            <div class="prosp-spons-logos-cont" v-if="!$q.screen.xs">
              <div>
                <div><img src="/prospsponsors/logo1-01.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo1-02.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo1-03.png" alt="" /></div>
                <div><img src="/prospsponsors/logo1-04.png" alt="" /></div>
                <div><img src="/prospsponsors/logo1-05.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo1-06.jpg" alt="" /></div>
                <div><img src="/prospsponsors/boi.png" alt="" /></div>
                <div><img src="/prospsponsors/logo1-08.png" alt="" /></div>
              </div>
              <div>
                <div><img src="/prospsponsors/logo2-01.jpeg" alt="" /></div>
                <div><img src="/prospsponsors/logo2-02.png" alt="" /></div>
                <div><img src="/prospsponsors/logo2-03.png" alt="" /></div>
                <div><img src="/prospsponsors/logo2-04.png" alt="" /></div>
                <div><img src="/prospsponsors/logo2-05.png" alt="" /></div>
                <div><img src="/prospsponsors/logo2-06.png" alt="" /></div>
                <div><img src="/prospsponsors/logo2-07.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo2-08.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo2-09.png" alt="" /></div>
              </div>
              <div>
                <div><img src="/prospsponsors/logo3-01.png" alt="" /></div>
                <div><img src="/prospsponsors/logo3-02.png" alt="" /></div>
                <div><img src="/prospsponsors/logo3-03.png" alt="" /></div>
                <div><img src="/prospsponsors/logo3-04.png" alt="" /></div>
                <div><img src="/prospsponsors/logo3-05.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo3-06.png" alt="" /></div>
                <div><img src="/prospsponsors/logo3-07.jpeg" alt="" /></div>
                <div><img src="/prospsponsors/logo3-08.jpeg" alt="" /></div>
                <div><img src="/prospsponsors/logo3-09.png" alt="" /></div>
              </div>
              <div>
                <div><img src="/prospsponsors/logo4-01.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo4-02.png" alt="" /></div>
                <div><img src="/prospsponsors/logo4-03.png" alt="" /></div>
                <div><img src="/prospsponsors/logo4-04.png" alt="" /></div>
                <div><img src="/prospsponsors/logo4-05.png" alt="" /></div>
                <div><img src="/prospsponsors/logo4-06.png" alt="" /></div>
                <div><img src="/prospsponsors/logo4-07.png" alt="" /></div>
              </div>
              <div>
                <div><img src="/prospsponsors/logo5-01.png" alt="" /></div>
                <div><img src="/prospsponsors/logo5-02.jpg" alt="" /></div>
                <div><img src="/prospsponsors/logo5-03.png" alt="" /></div>
                <div><img src="/prospsponsors/logo5-04.png" alt="" /></div>
                <div><img src="/prospsponsors/logo5-05.png" alt="" /></div>
                <div><img src="/prospsponsors/logo5-06.png" alt="" /></div>
                <div><img src="/prospsponsors/logo5-07.png" alt="" /></div>
                <div><img src="/prospsponsors/logo5-08.png" alt="" /></div>
              </div>
            </div>

            <div class="prospective-sponsors-xs" v-if="$q.screen.xs">
              <ProspectiveSponsors />
            </div>
          </div>
        </div>

        <div class="business-meet-match-wrapper">
          <div>
            <div class="business-meet-title-cont">
              <h2>Business Meet-Match Networking</h2>
              <p>
                Connect with key stakeholders in agriculture, agritech
                innovators, investors, and policy-makers in focused,
                pre-arranged sessions. Elevate your networking experience with
                high-value meetings that make an impact.
              </p>
            </div>
            <div class="business-main-content-cont">
              <div class="business-meet-img-cont">
                <img src="/meet-1.png" alt="" />
              </div>
              <div class="business-text-content-cont">
                <div>
                  <div>
                    <div>
                      <h6>Dedicated Time Slots</h6>
                      <p>
                        Each meeting has a reserved time slot to ensure
                        productive discussions.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h6>Reserved Meeting Tables</h6>
                      <p>
                        Tables are pre-assigned, creating a professional
                        setting.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h6>High-Value Connections</h6>
                      <p>
                        Opportunities to connect with key stakeholders,
                        investors, agribusiness leaders, and potential partners.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="business-meet-cta-cont">
                  <nav>
                    <ul>
                      <li>
                        <q-btn
                          flat
                          label="Book a Meet"
                          @click="showNotification('book-meeting')"
                          :disable="isMeetingAvailable === false"
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="invest-oppor-wrapper">
          <div>
            <div class="invest-oppor-title-cont">
              <h2>
                Investment Opportunities at the <br />
                Kaduna Agritech Conference 2025
              </h2>
            </div>

            <div class="invest-oppor-main-cont">
              <div class="invest-oppor-img-cont">
                <img src="/ddi.png" alt="" />
              </div>

              <div class="invest-oppor-text-cont">
                <div>
                  <p>
                    The Kaduna Agritech Conference 2025 presents investors with
                    exclusive opportunities to partner with some of the region's
                    most promising agritech startups, who will showcase
                    innovative solutions over the course of the event.
                    Specifically designed to facilitate impactful connections,
                    the conference features a two-week Bootcamp prior to the
                    main event, where participants refine their concepts and
                    prepare for the final-day Pitchathon. This Pitchathon will
                    culminate in the selection of three standout startups, which
                    will be directly introduced to investors for funding
                    consideration.
                  </p>
                </div>

                <div v-if="!$q.screen.xs">
                  <p>
                    Investment in these startups provides equity stakes, with
                    incubation and acceleration managed by Greysoft Technologies
                    in partnership with the <a href="">Founder Institute</a>.
                    Startups securing funding will then participate in an
                    incubation program with access to ongoing mentorship to
                    enhance their growth trajectory. Investors are encouraged to
                    elevate their brand presence and engagement in the region by
                    sponsoring or exhibiting at the conference. Additionally,
                    virtual investors can opt to have booths designed and hosted
                    by proxies, ensuring brand visibility and a strong presence
                    at this dynamic event
                  </p>
                </div>

                <div v-if="showMore2 && $q.screen.xs">
                  <p>
                    Investment in these startups provides equity stakes, with
                    incubation and acceleration managed by Greysoft Technologies
                    in partnership with the <a href="">Founder Institute</a>.
                    Startups securing funding will then participate in an
                    incubation program with access to ongoing mentorship to
                    enhance their growth trajectory. Investors are encouraged to
                    elevate their brand presence and engagement in the region by
                    sponsoring or exhibiting at the conference. Additionally,
                    virtual investors can opt to have booths designed and hosted
                    by proxies, ensuring brand visibility and a strong presence
                    at this dynamic event
                  </p>
                </div>

                <q-btn
                  v-if="!showMore2 && $q.screen.xs"
                  label="Read More"
                  color="black"
                  flat
                  :ripple="false"
                  @click="toggleReadMore2"
                ></q-btn>
                <q-btn
                  v-if="showMore2 && $q.screen.xs"
                  label="Read Less"
                  color="black"
                  flat
                  :ripple="false"
                  @click="toggleReadMore2"
                ></q-btn>
              </div>
            </div>
          </div>
        </div>

        <div class="call-for-papers-wrapper">
          <div>
            <div v-if="$q.screen.xs" class="call-for-papers-title">
              <h2>Call for papers</h2>
            </div>
            <div class="call-for-papers-content-cont">
              <div class="call-for-papers-img-cont">
                <img src="/cfrp.png" alt="" />
              </div>

              <div class="call-for-papers-text-cont">
                <div v-if="!$q.screen.xs" class="call-for-papers-title">
                  <h2>Call for papers</h2>
                </div>

                <div>
                  <p>
                    We invite agricultural institutions, both local and
                    international, to submit paper proposals for the Kaduna
                    Agritech Conference theme "Year-Round Agriculture". Selected
                    papers will contribute to a policy proposal on agricultural
                    innovation and sustainability, in partnership with the
                    Kaduna State Ministry of Agriculture and Bureau of
                    Statistics.
                  </p>

                  <p>
                    If your institution is involved in agriculture through
                    research, innovation, or practical solutions, we welcome
                    your contributions. Your insights will help shape policies
                    for agricultural growth and data-driven development in the
                    region.
                  </p>
                </div>
              </div>
            </div>

            <div class="call-for-papers-nav-cont">
              <nav>
                <ul>
                  <li>
                    <q-btn
                      flat
                      label="Submit Paper"
                      @click="showNotification('proposal')"
                      :disable="isMeetingAvailable === false"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div id="contact" class="contact-us-wrapper">
          <div>
            <div class="contact-us-title-cont">
              <h2>Get in touch</h2>
            </div>
            <div>
              <div class="contact-us-img-cont">
                <img src="/customercare.jpg" alt="" />
              </div>
              <div class="contact-us-form">
                <form action="">
                  <div>
                    <div>
                      <label for="fullName">Full name *</label>
                      <input
                        placeholder="Full name"
                        id="fullName"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label for="email">Email *</label>
                      <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="subject">Subject</label>
                    <input placeholder="Subject" id="subject" type="text" />
                    <label for="message">Message *</label>
                    <input
                      placeholder="Message"
                      id="message"
                      type="text"
                      requierd
                    />
                  </div>

                  <div>
                    <button type="">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="our-contact-wrapper">
          <div>
            <div class="our-contact-cont">
              <div>
                <div>
                  <div>
                    <SvgIcon name="location" />
                  </div>
                  <h4>OUR ADDRESS</h4>
                  <div>
                    <p>31 Gwari Ave, Barnawa, Kaduna 800242, Kaduna</p>
                  </div>
                </div>
                <div>
                  <div>
                    <SvgIcon name="email" />
                  </div>
                  <h4>OUR E-MAIL</h4>
                  <div>
                    <a href="mailto:agtech@greysoft.ng"
                      ><p>agritech@greysoft.ng</p></a
                    >
                    <a href="mailto:hi@greysoft.ng"
                      ><p>agrictech.partners@greysoft.ng</p></a
                    >
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <SvgIcon name="phone" />
                  </div>
                  <h4>PHONE</h4>
                  <div>
                    <a href="tel:+2347086142959"><p>+234 708 614 2959</p></a>
                    <a href="tel:+2348035356090"><p>+234 803 535 6090</p></a>
                    <a href="tel:+2348068689839"><p>+234 806 868 9839</p></a>
                  </div>
                </div>
                <div>
                  <div>
                    <SvgIcon name="time" />
                  </div>
                  <h4>WORKING HOURS</h4>
                  <div>
                    <p>Monday - Friday: 8:00 - 5:00</p>
                    <p>Saturday: 10:00 - 5:00</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="find-us-map-cont">
              <iframe
                class="full-width full-height"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4844850498507!2d7.421222374865766!3d10.462420564907529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d357f98309353%3A0xc594d708d5d0fa5a!2sGreysoft%20Technologies%20Limited!5e0!3m2!1sen!2sng!4v1730949719811!5m2!1sen!2sng"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Footer Section -->
        <div class="main-footer-wrapper">
          <div>
            <div class="main-footer-cont">
              <div>
                <div class="site-name-cont">
                  <h1>Kaduna AgriTech Conference</h1>
                </div>
                <div class="footer-nav-wrapper">
                  <nav>
                    <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Contact</a></li>
                      <li><a href="">Sponsor</a></li>
                    </ul>
                  </nav>
                </div>
                <div class="social-link-cont">
                  <a href=""><SvgIcon name="instagram" /></a>
                  <a href=""><SvgIcon name="x" /></a>
                  <a href=""><SvgIcon name="youtube" /></a>
                  <a href=""><SvgIcon name="facebook" /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-cont">
            <p>&copy; 2024 Greysoft Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div :class="elementClass">
        <CustomNotifier
          v-if="notificationVisible"
          :class="elementClass"
          :message="notificationMessage"
          :color="notificationColor"
          :position="notificationPosition"
          :timeout="notificationTimeout"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import { ref } from "vue";
import SvgIcon from "../components/SvgIcon.vue";
import Sponsors from "src/components/Sponsors.vue";
import ProspectiveSponsors from "src/components/ProspectiveSponsors.vue";
import CustomNotifier from "src/components/CustomNotifier.vue";

export default {
  name: "IndexPage",

  data() {
    return {
      showMore: false,
      showMore2: false,
      elementClass: "",
      text: "",
      containerHeight: "0px",
      isChecked: false,
      items: [
        { text: "Innovative solutions to agricultural challenges" },
        {
          text: "Access to shared data for agribusinesses, partners, investors and policy makers",
        },
        { text: "Policy Proposal for the benefit of all key stakeholders" },
      ],
      counters: [
        { value: 0, target: 350, label: "delegates" },
        { value: 0, target: 25, label: "speakers" },
        { value: 0, target: 33, label: "sponsors" },
      ],
      notificationVisible: false,
      notificationMessage: "",
      notificationColor: "green",
      notificationPosition: "bottom-left",
      notificationTimeout: 10000,

      isMeetingAvailable: true,
      isTicketAvailable: true,
    };
  },

  components: {
    SvgIcon,
    Sponsors,
    ProspectiveSponsors,
    CustomNotifier,
  },

  mounted() {
    this.initScript();
    this.$nextTick(() => {
      this.observeElements();
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.counters.forEach((counter) => this.updateCount(counter));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.$nextTick(() => {
      document.querySelectorAll(".counter-item").forEach((element) => {
        observer.observe(element);
      });
    });

    setTimeout(() => {
      this.isChecked = true;

      setTimeout(() => {
        this.isChecked = false;
      }, 3000);
    }, 500);
  },

  methods: {
    goToSignup(type) {
      this.$router.push({ path: "/signup", query: { type } });
    },
    toggleReadMore() {
      this.showMore = !this.showMore;
    },
    toggleReadMore2() {
      this.showMore2 = !this.showMore2;
    },
    initScript() {
      const btnBox = document.querySelectorAll(
        '[unique-script-id="w-w-dm-id"] .btn-box'
      );
      const closeBtn = document.querySelectorAll(
        '[unique-script-id="w-w-dm-id"] .close'
      );

      // Show overlay on button click
      btnBox.forEach((button) => {
        button.addEventListener("click", function () {
          this.parentElement.querySelector(".overlay").style.display = "block";
        });
      });

      // Hide overlay on close click
      closeBtn.forEach((button) => {
        button.addEventListener("click", function () {
          document.querySelectorAll(".overlay").forEach((overlay) => {
            overlay.style.display = "none";
          });
        });
      });
    },
    toggleHeight() {
      this.containerHeight = this.containerHeight === "0px" ? "200px" : "0px";
      console.log(this.containerHeight);
    },
    observeElements() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry.target); // Log the element being observed
            if (entry.isIntersecting) {
              console.log(`${entry.target} is in view!`);
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target); // Stop observing once in view
            }
          });
        },
        { threshold: 0.1 }
      );

      // Now, this.$refs.scrollElement is an array, so we can directly loop over it
      this.$refs.scrollElement.forEach((element) => {
        observer.observe(element); // Observe each element
      });
    },
    showNotification(actionType) {
      switch (actionType) {
        case "book-meeting":
          this.notificationMessage =
            "Booking a meeting is currently unavailable  until on February 15th, 2025";
          // this.notificationColor = "pink";
          break;
        case "delegate":
          this.notificationMessage =
            "Online Delegate registration is currently unavailable until on December 1st, 2025";
          // this.notificationColor = "orange";
          break;
        case "partner":
          this.notificationMessage =
            "Online Partnership registration is currently unavailable until December 1st, 2025";
          // this.notificationColor = "blue";
          break;
        case "bootcamp":
          this.notificationMessage =
            "Bootcamp registration is currently unavailable until December 15th, 2025";
          // this.notificationColor = "blue";
          break;
        case "proposal":
          this.notificationMessage =
            "Paper submission is currently unavailable until December 1st, 2025";
          // this.notificationColor = "blue";
          break;
        default:
          this.notificationMessage = "Action not recognized";
        // this.notificationColor = "gray";
      }

      this.notificationVisible = true;

      setTimeout(() => {
        this.elementClass = "hide-custom-notify";
        console.log("yesssss");
      }, this.notificationTimeout - 2000);

      setTimeout(() => {
        this.notificationVisible = false;
        this.elementClass = "";
      }, this.notificationTimeout);
    },
    updateCount(counter) {
      const increment = counter.target / 200;

      const interval = setInterval(() => {
        if (counter.value < counter.target) {
          counter.value = Math.ceil(counter.value + increment);
        } else {
          clearInterval(interval);
        }
      }, 90);
    },
  },

  setup() {
    return {
      alert: ref(false),
      slide: ref(1),
      autoplay: ref(true),
      address: ref(""),
      isDialogOpen: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
    };
  },
};
</script>

<!--  -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap");

.gallery_1 * {
  font-family: Nunito, sans-serif;
}

.gallery_1 .text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  line-height: 25px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.gallery_1 img {
  object-fit: cover;
}

.gallery_1 .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

@media screen and (max-width: 767px) {
  .gallery_1 .responsive-container-block {
    padding: 0 !important;
  }
}

.gallery_1 .responsive-container-block.bigContainer {
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
}

.gallery_1 .responsive-container-block.Container {
  max-width: 1320px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  /* margin-top: 50px; */
  margin-right: auto;
  /* margin-bottom: 50px; */
  margin-left: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gallery_1 .text-blk.heading {
  line-height: 45px;
  font-weight: 600;
  color: #333333;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 50px;
  margin-left: 0px;
}

.gallery_1 .text-blk.subHeading {
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  max-width: 750px;
  color: #2c5f2d;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 50px;
  margin-left: 0px;
}

.gallery_1 .responsive-container-block.imgContainer {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  min-height: auto;
  height: 720px;
  position: relative;
}

.gallery_1 .overlay {
  position: fixed;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(71, 69, 69, 0.7);
  height: 100%;
  width: 100%;
  max-height: 100%;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: none;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.gallery_1 .overlay-inner {
  top: 50%;
  right: 0px;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: white;
  max-width: 700px;
  width: 100%;
  padding-top: 35px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  opacity: 1;
}

.overlay-inner .hdImgs {
  height: 80vh;
  overflow: hidden;
}

.overlay-inner .hdImgs img {
  height: 100% !important;
  width: 100% !important;
  object-fit: contain;
}

.gallery_1 .close {
  position: absolute;
  top: 9px;
  right: 15px;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  color: #474545;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-bottom-color: initial;
  border-left-color: initial;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.gallery_1 .overlay-inner img {
  height: auto;
  width: 100%;
  transform: none;
}

.gallery_1 .close:hover {
  cursor: pointer;
}

.gallery_1 .project {
  position: absolute;
  width: 39.8%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

.gallery_1 .btn-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  margin: 50px 0 0;
  transition: margin 0.3s ease, opacity 0.3s ease-in;
  opacity: 0;
}

.gallery_1 .project:hover .btn-box {
  margin: 0 0 0;
  opacity: 1;
}

.gallery_1 .btn {
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 10px;
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background-color: #fff;
  border: none;
}

.gallery_1 .smallImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery_1 .project.project1 {
  width: 39.8%;
  height: 66.67%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.gallery_1 .project.project2 {
  bottom: 0px;
  top: auto;
  right: auto;
  width: 59.75%;
  height: 32.6%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.gallery_1 .project.project3 {
  left: 40.2%;
  right: auto;
  bottom: auto;
  width: 19.4%;
  height: 32.98%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.gallery_1 .project.project4 {
  left: 40.2%;
  top: 33.7%;
  width: 19.5%;
  height: 32.98%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.gallery_1 .project.project5 {
  right: 0px;
  left: auto;
  bottom: auto;
  width: 39.8%;
  height: 32.6%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.gallery_1 .project.project6 {
  bottom: 0px;
  top: auto;
  left: auto;
  right: 0px;
  width: 39.8%;
  height: 66.67%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

@media (max-width: 1024px) {
  .gallery_1 .responsive-container-block.imgContainer {
    height: 600px;
  }

  .gallery_1 .text-blk.subHeading {
    font-size: 18px;
    line-height: 27px;
  }
}

@media (max-width: 768px) {
  .gallery_1 .project.project5 {
    top: 520px;
    width: 100%;
    left: 0px;
    right: auto;
    bottom: auto;
    height: 200px;
  }

  .gallery_1 .responsive-container-block.imgContainer {
    height: 930px;
  }

  .gallery_1 .project.project1 {
    width: 64%;
    height: 300px;
  }

  .gallery_1 .project.project3 {
    left: auto;
    width: 35%;
    height: 145px;
    right: 0px;
  }

  .gallery_1 .project.project4 {
    left: auto;
    width: 35%;
    height: 145px;
    top: 155px;
    right: 0px;
  }

  .gallery_1 .project.project6 {
    height: 200px;
    width: 100%;
  }

  .gallery_1 .project.project2 {
    width: 100%;
    top: 310px;
    height: 200px;
  }

  .gallery_1 .project {
    width: 100%;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .gallery_1 .overlay-inner {
    width: 90%;
  }

  .gallery_1 .text-blk.subHeading {
    line-height: 25px;
    font-size: 17px;
    max-width: 600px;
  }

  .gallery_1 .text-blk.heading {
    font-size: 30px;
    line-height: 40px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 15px;
    margin-left: 0px;
  }
}

@media (max-width: 500px) {
  .gallery_1 .responsive-container-block.imgContainer {
    height: 890px;
  }

  .gallery_1 .responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  .gallery_1 .text-blk.heading {
    font-size: 30px;
    line-height: 35px;
  }

  .gallery_1 .text-blk.subHeading {
    font-size: 16px;
    line-height: 22px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 30px;
    margin-left: 0px;
  }

  .gallery_1 .project.project1 {
    height: 250px;
  }

  .gallery_1 .project.project3 {
    height: 123px;
  }

  .gallery_1 .project.project4 {
    height: 123px;
    top: 127px;
  }

  .gallery_1 .project.project2 {
    top: 260px;
  }

  .gallery_1 .project.project5 {
    top: 470px;
  }

  .gallery_1 .project.project6 {
    top: 680px;
  }
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.wk-desk-1 {
  width: 8.333333%;
}

.wk-desk-2 {
  width: 16.666667%;
}

.wk-desk-3 {
  width: 25%;
}

.wk-desk-4 {
  width: 33.333333%;
}

.wk-desk-5 {
  width: 41.666667%;
}

.wk-desk-6 {
  width: 50%;
}

.wk-desk-7 {
  width: 58.333333%;
}

.wk-desk-8 {
  width: 66.666667%;
}

.wk-desk-9 {
  width: 75%;
}

.wk-desk-10 {
  width: 83.333333%;
}

.wk-desk-11 {
  width: 91.666667%;
}

.wk-desk-12 {
  width: 100%;
}

@media (max-width: 1024px) {
  .wk-ipadp-1 {
    width: 8.333333%;
  }

  .wk-ipadp-2 {
    width: 16.666667%;
  }

  .wk-ipadp-3 {
    width: 25%;
  }

  .wk-ipadp-4 {
    width: 33.333333%;
  }

  .wk-ipadp-5 {
    width: 41.666667%;
  }

  .wk-ipadp-6 {
    width: 50%;
  }

  .wk-ipadp-7 {
    width: 58.333333%;
  }

  .wk-ipadp-8 {
    width: 66.666667%;
  }

  .wk-ipadp-9 {
    width: 75%;
  }

  .wk-ipadp-10 {
    width: 83.333333%;
  }

  .wk-ipadp-11 {
    width: 91.666667%;
  }

  .wk-ipadp-12 {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .wk-tab-1 {
    width: 8.333333%;
  }

  .wk-tab-2 {
    width: 16.666667%;
  }

  .wk-tab-3 {
    width: 25%;
  }

  .wk-tab-4 {
    width: 33.333333%;
  }

  .wk-tab-5 {
    width: 41.666667%;
  }

  .wk-tab-6 {
    width: 50%;
  }

  .wk-tab-7 {
    width: 58.333333%;
  }

  .wk-tab-8 {
    width: 66.666667%;
  }

  .wk-tab-9 {
    width: 75%;
  }

  .wk-tab-10 {
    width: 83.333333%;
  }

  .wk-tab-11 {
    width: 91.666667%;
  }

  .wk-tab-12 {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .wk-mobile-1 {
    width: 8.333333%;
  }

  .wk-mobile-2 {
    width: 16.666667%;
  }

  .wk-mobile-3 {
    width: 25%;
  }

  .wk-mobile-4 {
    width: 33.333333%;
  }

  .wk-mobile-5 {
    width: 41.666667%;
  }

  .wk-mobile-6 {
    width: 50%;
  }

  .wk-mobile-7 {
    width: 58.333333%;
  }

  .wk-mobile-8 {
    width: 66.666667%;
  }

  .wk-mobile-9 {
    width: 75%;
  }

  .wk-mobile-10 {
    width: 83.333333%;
  }

  .wk-mobile-11 {
    width: 91.666667%;
  }

  .wk-mobile-12 {
    width: 100%;
  }
}
</style>
