<template>
  <q-page class="signup-main-wrapper">
    <q-btn label="Click me" color="primary" @click="persistent = true" />
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
              <h2>Welcome</h2>
            </div>

            <div class="stepper-section-wrapper">
              <div v-if="!userRegistered" class="stepper-title-cont">
                <h3>Register today</h3>
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
                        @blur="checkEmailExistence"
                      />
                      <q-btn
                        label="Next"
                        :disabled="!email"
                        @click="goToNextStep"
                      />
                    </div>
                  </q-step>

                  <!-- Step 2: OTP Confirmation -->
                  <q-step name="otp" title="Enter OTP">
                    <div>
                      <q-input
                        v-model="otp"
                        label="OTP"
                        :rules="[
                          (val) =>
                            (val && val.length === 6) ||
                            'Enter the 6-digit OTP sent to your email',
                        ]"
                      />
                      <q-btn label="Next" :disabled="!otp" @click="verifyOtp" />
                    </div>
                  </q-step>

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

                      <q-card class="bg-transparent" flat>
                        <q-card-section>
                          <div class="text-h6">Select Registration Type</div>
                          <q-radio
                            v-model="registrationType"
                            val="single"
                            label="Single Registration"
                          />
                          <q-radio
                            v-model="registrationType"
                            val="group"
                            label="Group Registration"
                          />
                        </q-card-section>

                        <!-- Group Member Dropdown -->
                        <q-card-section v-if="registrationType === 'group'">
                          <q-select
                            v-model="groupMemberCount"
                            :options="[2, 3, 5]"
                            label="Select Number of Members"
                            outlined
                          />
                        </q-card-section>

                        <!-- Continue Button -->
                        <q-card-actions align="right">
                          <q-btn
                            :disable="!canContinue"
                            label="Continue"
                            color="primary"
                            @click="openDialog"
                          />
                        </q-card-actions>
                      </q-card>
                    </div>
                  </q-step>
                </q-stepper>
              </div>
            </div>
          </div>
        </div>

        <q-dialog v-model="isDialogOpen" persistent>
          <q-card>
            <q-card-section>
              <div class="text-h6">Registration Form</div>
              <q-btn
                flat
                icon="close"
                color="black"
                @click="isDialogOpen = false"
                class="absolute top right"
              />
            </q-card-section>

            <!-- Stepper -->
            <q-stepper v-model="currentStep" header-nav animated>
              <!-- Main User Details -->
              <q-step :name="1" title="Main User" subtitle="Your Details">
                <q-card>
                  <q-card-section>
                    <q-input
                      v-model="form.mainUser.fullName"
                      label="Full Name"
                      outlined
                      :rules="[(val) => !!val || 'Full Name is required']"
                    />
                    <q-input
                      v-model="form.mainUser.email"
                      label="Email Address"
                      outlined
                      :rules="[(val) => !!val || 'Email Address is required']"
                    />
                    <q-input
                      v-model="form.mainUser.phone"
                      label="Phone Number"
                      outlined
                      :rules="[(val) => !!val || 'Phone Number is required']"
                    />
                    <q-input
                      v-model="form.mainUser.organizationName"
                      label="Organization Name"
                      outlined
                      :rules="[
                        (val) => !!val || 'Organization Name is required',
                      ]"
                    />
                    <q-file
                      v-model="form.mainUser.organizationLogo"
                      label="Organization Logo"
                      :rules="[
                        (val) => !!val || 'Organization Logo is required',
                      ]"
                    />
                    <q-input
                      v-model="form.mainUser.role"
                      label="Role/Position"
                      outlined
                      :rules="[(val) => !!val || 'Role/Position is required']"
                    />
                  </q-card-section>
                  <q-card-actions>
                    <q-btn
                      v-if="totalSteps > 1"
                      label="Next"
                      color="primary"
                      @click="goToNextStep"
                      :disable="!isStepValid"
                    />
                    <q-btn
                      v-if="totalSteps === 1"
                      label="Submit"
                      color="primary"
                      @click="submitForm"
                    />
                  </q-card-actions>
                </q-card>
              </q-step>

              <!-- Group Member Steps -->
              <q-step
                v-for="(member, index) in form.otherMembers"
                :key="index"
                :name="`${index + 2}`"
                :title="`Member ${index + 1}`"
                subtitle="Details for Member"
              >
                <q-card>
                  <q-card-section>
                    <q-input
                      v-model="member.fullName"
                      label="Full Name"
                      outlined
                      :rules="[(val) => !!val || 'Full Name is required']"
                    />
                    <q-input
                      v-model="member.email"
                      label="Email Address"
                      outlined
                      :rules="[(val) => !!val || 'Email Address is required']"
                    />
                    <q-input
                      v-model="member.phone"
                      label="Phone Number"
                      outlined
                      :rules="[(val) => !!val || 'Phone Number is required']"
                    />
                    <q-input
                      v-model="member.role"
                      label="Role/Position"
                      outlined
                      :rules="[(val) => !!val || 'Role/Position is required']"
                    />
                  </q-card-section>
                  <q-card-actions>
                    <q-btn
                      v-if="index + 2 < totalSteps"
                      label="Next"
                      color="primary"
                      @click="goToNextStep"
                      :disable="!isStepValid"
                    />
                    <q-btn
                      v-else
                      label="Submit"
                      color="primary"
                      @click="submitForm"
                    />
                  </q-card-actions>
                </q-card>
              </q-step>
            </q-stepper>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
import SvgIcon from "src/components/SvgIcon.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  data() {
    return {
      registrationType: null,
      groupMemberCount: null,
      isDialogOpen: false,
      currentStep: 1,
      step: "email",
      email: "",
      otp: "",
      password: "",
      category: "",
      success: "",
      userRegistered: false,

      form: {
        mainUser: {
          fullName: "",
          email: "",
          phone: "",
          organizationName: "",
          organizationLogo: null,
          role: "",
        },
        otherMembers: [],
      },
      partnerInfo: {
        businessName: "",
        businessPhone: "",
        website: "",
        businessType: "",
      },
      categoryOptions: [
        { label: "Delegate", value: "delegate" },
        { label: "Partner", value: "partner" },
      ],
    };
  },

  components: {
    SvgIcon,
  },

  computed: {
    isStepValid() {
      const currentStepForm = this.getCurrentStepForm();
      return Object.values(currentStepForm).every(
        (field) => field !== "" && field !== null
      );
    },
    canContinue() {
      if (this.registrationType === "single") return true; // Single is ready
      if (this.registrationType === "group") return !!this.groupMemberCount; // Group needs member count
      return false;
    },
    totalSteps() {
      return 1 + (this.form.otherMembers.length || 0); // Main User + Group Members
    },
    isEmailValid() {
      return this.email && this.email.length > 0;
    },
    formValid() {
      if (this.category === "delegate") {
        return this.delegateInfo.name.length > 0;
      }
      if (this.category === "partner") {
        return this.partnerInfo.businessName.length > 0;
      }
      if (this.category === "both") {
        return (
          this.delegateInfo.name.length > 0 &&
          this.partnerInfo.businessName.length > 0
        );
      }
      return false;
    },
  },
  mounted() {
    this.getSignUpTypeFromUrl();
  },
  methods: {
    getCurrentStepForm() {
      if (this.currentStep === 1) {
        return this.form.mainUser;
      }
      return this.form.otherMembers[this.currentStep - 2];
    },
    openDialog() {
      if (this.registrationType === "group") {
        this.setupGroupMembers(this.groupMemberCount);
      }
      this.currentStep = 1; // Reset to the first step
      this.isDialogOpen = true;
    },
    handleNextStep() {
      this.goToNextStep();
      this.userRegistered = true;
    },
    goToNextFormStep() {
      if (this.currentStep < this.totalSteps) this.currentStep++;
    },
    setupGroupMembers(count) {
      this.form.otherMembers = Array.from({ length: count }, () => ({
        fullName: "",
        email: "",
        phone: "",
        role: "",
      }));
    },
    getSignUpTypeFromUrl() {
      const type = this.$route.query.type; // Retrieves the 'type' parameter
      console.log(type); // Logs 'delegate'

      const queryCategory = type;
      if (
        queryCategory &&
        ["delegate", "partner", "both"].includes(queryCategory)
      ) {
        this.category = queryCategory;
      }
    },
    // Step 1: Check if email exists
    checkEmailExistence() {
      // Simulating an API call
      const emailExists = false; // Example condition
      if (emailExists) {
        this.$q
          .dialog({
            title: "Account Exists",
            message:
              "An account with this email already exists. Would you like to pull the account information?",
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
            // Pull data and continue
          })
          .onCancel(() => {
            // Handle cancellation
          });
      } else {
        // Proceed to OTP Step
        this.sendOtp();
      }
    },
    // Step 2: Send OTP to email
    sendOtp() {
      // Simulate sending OTP and proceed to next step
      console.log("Sending OTP to", this.email);
      this.step = "otp";
    },
    // Step 3: Verify OTP
    verifyOtp() {
      // Simulate OTP verification
      this.step = "password";
    },
    // Step 4: Proceed to category selection
    nextCategoryStep() {
      this.step = "profile";
    },
    // Step 5: Submit the form
    submitForm() {
      console.log("Form Submitted:", this.form);
      this.isDialogOpen = false; // Close dialog after submission
    },
    submitProfileInfor() {
      console.log("Form Submitted:", this.form);
    },
    // Proceed to next step
    goToNextStep() {
      this.step =
        this.step === "email"
          ? "otp"
          : this.step === "otp"
          ? "password"
          : "success";
    },
  },
  setup() {
    return {
      shape: ref("single"),
      persistent: ref(true),
      // isDialogOpen: ref(false),
    };
  },
};
</script>

<style scoped>
/* Your styling here */
</style>

<template>
  <div>
    <q-radio v-model="userType" label="Individual" :val="'individual'" />
    <q-radio v-model="userType" label="Group" :val="'group'" />

    <q-select
      v-if="userType === 'group'"
      v-model="numberOfMembers"
      :options="memberOptions"
      label="Select Number of Members"
    />

    <q-btn
      :disabled="!isContinueEnabled"
      label="Continue"
      @click="openDialog"
    />

    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ dialogHeader }}</div>
          <q-form @submit="submitForm">
            <q-input v-model="form.name" label="Name" required />
            <q-input v-model="form.email" label="Email" type="email" required />
            <q-input
              v-model="form.phone"
              label="Phone Number"
              type="tel"
              required
            />
            <q-input v-model="form.organization" label="Organization" />
            <q-btn type="submit" label="Submit" :loading="isLoading" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userType: null,
      numberOfMembers: 0,
      memberOptions: [1, 2, 3, 4, 5],
      dialogVisible: false,
      dialogHeader: "Member 1/1", // Default dialog header
      form: {
        name: "",
        email: "",
        phone: "",
        organization: "",
      },
      isLoading: false,
      remainingMembers: 0,
      currentMember: 1,
    };
  },
  computed: {
    isContinueEnabled() {
      return this.userType === "individual" || this.numberOfMembers > 0;
    },
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
      if (this.userType === "group") {
        this.remainingMembers = this.numberOfMembers;
        this.dialogHeader = `Member ${this.currentMember}/${this.numberOfMembers}`; // Update header with total members
      }
    },
    async submitForm() {
      this.isLoading = true;
      try {
        await this.saveUserData(this.form);

        if (this.userType === "group" && this.remainingMembers > 1) {
          this.remainingMembers--;
          this.currentMember++;
          this.dialogHeader = `Member ${this.currentMember}/${this.numberOfMembers}`; // Update header with total members
          this.form = {}; // Clear form for the next member
        } else {
          this.$router.push("/profile"); // Redirect when all members are registered
        }
      } catch (error) {
        console.error("Error saving user data:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async saveUserData(data) {
      return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a save delay
    },
  },
};
</script>
