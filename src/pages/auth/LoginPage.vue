<template>
  <q-page class="signup-main-wrapper">
    <div class="signup-wrapper">
      <div class="signup-main-cont">
        <div class="signup-sub-cont">
          <div class="side-content-cont">
            <div>
              <h1>
                Kaduna <br />
                Agritech Conference
              </h1>
              <p>
                Join the Future of Agriculture. <br />Sign Up for the Kaduna
                Agritech Conference
              </p>
            </div>
          </div>
          <div class="onboarding-cont">
            <div v-if="!userRegistered" class="onboarding-title-cont">
              <h2>Welcome back!</h2>
            </div>

            <div class="stepper-section-wrapper">
              <div v-if="!userRegistered" class="stepper-title-cont">
                <h3>Sign into your account</h3>
              </div>

              <div v-if="!userRegistered" class="other-signup-options">
                <q-btn label="Continue with Google" flat>
                  <SvgIcon name="google" />
                </q-btn>
              </div>

              <div v-if="!userRegistered" class="divider-cont">
                <span>Or</span>
              </div>

              <div class="main-stepper-wrapper">
                <q-stepper
                  v-if="true"
                  v-model="step"
                  flat
                  q-pa-none
                  header-class="stepper-headd"
                >
                  <!-- Step 1: Email Input -->
                  <q-step
                    name="email"
                    title="Enter your Email"
                    :done="isEmailValid"
                  >
                    <div>
                      <q-input
                        v-model="email"
                        label="Email Address"
                        type="email"
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please enter your email',
                        ]"
                      />
                      <q-btn
                        label="Next"
                        :disabled="!email"
                        @click="goToNextStep"
                      />
                    </div>
                    <p>
                      Don't have an account?
                      <router-link to="/signup">Sign up</router-link>
                    </p>
                  </q-step>

                  <!-- Step 2: OTP Confirmation -->

                  <!-- Step 3: Set Password -->
                  <q-step name="password" title="Set Your Password">
                    <div>
                      <q-input
                        v-model="password"
                        label="Password"
                        type="password"
                        :rules="[
                          (val) =>
                            (val && val.length > 5) ||
                            'Password should be at least 6 characters',
                        ]"
                      />
                      <q-btn
                        label="Next"
                        :disabled="!password"
                        @click="handleNextStep"
                      />
                    </div>
                  </q-step>

                  <q-step name="success" title="success">
                    <div class="signup-succes">
                      <div>
                        <div class="user-icon">
                          <SvgIcon name="user" />
                        </div>
                        <div class="username-cont">
                          <p class="user-name">Redman Wordsworth</p>
                        </div>

                        <label for="">Success</label>
                      </div>
                    </div>

                    <div class="delegate-registration-type">
                      <div v-if="category === 'delegate'">
                        <q-radio
                          v-model="userType"
                          label="Individual"
                          :val="'individual'"
                        />
                        <q-radio
                          v-model="userType"
                          label="Group"
                          :val="'group'"
                        />
                      </div>
                      <div v-if="category === 'delegate'">
                        <q-select
                          v-if="userType === 'group'"
                          v-model="numberOfMembers"
                          :options="memberOptions"
                          label="Select Number of Members"
                        />
                      </div>

                      <q-btn
                        :disabled="!isContinueEnabled"
                        label="Continue"
                        @click="openDialog"
                      />
                    </div>
                  </q-step>
                </q-stepper>
              </div>

              <q-dialog
                class="delegate-dialog-form"
                v-model="dialogVisible"
                persistent
              >
                <q-card class="delegate-dialog-form-card" flat>
                  <q-card-section class="q-pa-none dialog-header-wrapper">
                    <div class="dialog-header-cont">
                      <h5>{{ dialogHeader }}</h5>
                      <q-btn
                        class="close-dialog-btn"
                        icon="close"
                        flat
                        @click="closeDialog"
                      />
                    </div>
                  </q-card-section>

                  <q-card-section class="main-form-cont">
                    <q-form class="form" @submit="submitForm">
                      <q-input v-model="form.name" label="Name" required />
                      <q-input
                        v-model="form.email"
                        label="Email"
                        type="email"
                        required
                      />
                      <q-input
                        v-model="form.phone"
                        label="Phone Number"
                        type="tel"
                        required
                      />
                      <div class="organization-logo-cont">
                        <q-input
                          v-if="hide"
                          v-model="form.organization"
                          label="Name of Organization"
                          required
                        />
                        <div class="logo-upload-cont" v-if="hide">
                          <input type="file" name="" id="file" />
                          <label for="file">Upload logo</label>
                        </div>
                      </div>
                      <q-input v-model="form.role" label="Role" required />
                      <q-input
                        v-model="form.country"
                        label="Country"
                        required
                      />
                      <q-btn
                        type="submit"
                        label="Submit"
                        :loading="isLoading"
                        flat
                      />
                    </q-form>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import SvgIcon from "src/components/SvgIcon.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    SvgIcon,
  },

  data() {
    return {
      registrationType: null,
      groupMemberCount: null,
      step: "email",
      email: "",
      otp: "",
      password: "",
      success: "",
      userRegistered: false,

      dialogVisible: false,
      hide: false,
      form: {
        name: "",
        email: "",
      },
      isLoading: false,
    };
  },

  mounted() {
    this.getSignUpTypeFromUrl();
  },

  computed: {
    isEmailValid() {
      return this.email && this.email.length > 0;
    },
    formValid() {
      if (this.category === "delegate") {
        return this.partnerInfo.businessName.length > 0;
      }
      if (this.category === "partner") {
        return this.partnerInfo.businessName.length > 0;
      }
      if (this.category === "both") {
        return this.partnerInfo.businessName.length > 0;
      }
      return false;
    },
  },

  methods: {
    // // // // // // // // // // // // //
    getSignUpTypeFromUrl() {
      const type = this.$route.query.type;
      console.log(type);

      const queryCategory = type;
      if (
        queryCategory &&
        ["delegate", "partner", "both"].includes(queryCategory)
      ) {
        this.category = queryCategory;
      }
    },

    handleNextStep() {
      this.goToNextStep();
      this.userRegistered = true;
    },

    goToNextStep() {
      this.step = this.step === "email" ? "password" : "";
    },
  },
};
</script>
