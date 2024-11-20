<template>
  <q-layout>
    <!-- Header, Footer, and other layout elements -->
    <q-header class="profile-page-header">
      <div class="header-wrapper bg-transparent">
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
                    <q-btn flat label="Home">
                      <!-- <SvgIcon name="delegate"/> -->
                    </q-btn>
                  </li>
                  <li>
                    <!-- @click="showNotification('partner')" -->
                    <q-btn flat label="Logout">
                      <!-- <SvgIcon name="office"/> -->
                    </q-btn>
                  </li>
                </ul>
                <!-- <q-btn
                  class="user-profile"
                  flat
                  to="profile"
                  :disable="isMeetingAvailable === false"
                  ><SvgIcon name="user"
                /></q-btn> -->
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
    </q-header>

    <q-page-container>
      <!-- This will be where LoginPage or SignupPage will be injected -->
      <router-view />
    </q-page-container>

    <q-footer class="profile-page-footer">
      <div class="text-center">
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "ProfileLayout",
};
</script>
