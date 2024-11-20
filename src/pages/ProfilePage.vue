<template>
  <q-page class="profile-page">
    <!-- Profile Header -->
    <div class="main">
      <div class="profile-section-wrapper">
        <div class="profile-section-cont">
          <div class="user-profile-pic-cont">
            <!-- <q-img
              :src="userProfile.imageUrl"
              alt="Profile Image"
              class="profile-image"
              spinner-color="white"
            /> -->

            <SvgIcon name="user" />
          </div>

          <div class="user-name-cont">
            <h2>{{ userProfile.fullName }}</h2>
            <p>{{ userProfile.email }}</p>
          </div>
        </div>
      </div>

      <!-- Profile Details -->
      <div class="other-members-section-wrapper">
        <q-tabs
          v-model="tab"
          dense
          class="profile-nav-tab"
          active-class="active-color"
          indicator-color="transparent"
          align="justify"
          narrow-indicator
        >
          <q-tab name="profile-details" label="Profile details" />
          <q-tab name="members" label="Members" />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          class="user-info-member-tab-wrapper"
        >
          <q-tab-panel name="profile-details" class="main-user-details-panel">
            <div class="main-user-details-cont">
              <label v-if="accountActive"
                ><SvgIcon name="user" />Your profile is active!</label
              >
              <label v-else
                ><SvgIcon name="user" />Your registration is currently pending
                approval. You will be notified once it has been
                confirmed.</label
              >

              <div>
                <ul>
                  <li>
                    <SvgIcon name="user" /><span>
                      Account type &#8226; <label>{{ accountType }}</label>
                    </span>
                  </li>
                  <li>
                    <SvgIcon
                      :name="accountActive ? 'acc_active' : 'acc_pending'"
                    />
                    <span>
                      Account status &#8226;
                      <label>{{ accountActive ? "Active" : "Pending" }}</label>
                    </span>
                  </li>
                  <li>
                    <SvgIcon name="user_outline" /><span>{{
                      userProfile.fullName
                    }}</span>
                  </li>
                  <li>
                    <SvgIcon name="role" /><span>{{ userProfile.role }}</span>
                  </li>
                </ul>

                <ul>
                  <li>
                    <SvgIcon name="email_outline" /><span>{{
                      userProfile.email
                    }}</span>
                  </li>
                  <li>
                    <SvgIcon name="phone_outline" /><span>{{
                      userProfile.phone
                    }}</span>
                  </li>
                  <li>
                    <SvgIcon name="organization" /><span>{{
                      userProfile.organization
                    }}</span>
                  </li>
                  <li>
                    <SvgIcon name="globe" /><span>{{
                      userProfile.country
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="members" class="member-profile-tab-panel">
            <div class="member-profile-cards-cont">
              <q-card
                v-for="(user, index) in users"
                :key="index"
                class="member-profile-card"
                flat
              >
                <div class="members-pro-pic-cont">
                  <!-- <q-img
                :src="userProfile.imageUrl"
                alt="Profile Image"
                class="profile-image"
                spinner-color="white"
              /> -->

                  <SvgIcon name="user" />
                </div>
                <q-card-section class="member-card-section-1">
                  <div class="other-members-name-cont">
                    <h6>{{ user.name }}</h6>
                  </div>
                  <div class="text-grey other-members-role-cont">
                    <p>{{ user.role }}</p>
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section class="member-card-section-2">
                  <p><b>Email:</b> {{ user.email }}</p>
                  <p><b>Phone:</b> {{ user.phone }}</p>
                  <p><b>Country:</b> {{ user.country }}</p>
                  <p><b>Organization:</b> {{ user.organization }}</p>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <!-- Edit Profile Button -->
    </div>
  </q-page>
</template>

<script>
import SvgIcon from "src/components/SvgIcon.vue";
import { ref } from "vue";

export default {
  name: "ProfilePage",

  data() {
    return {
      accountStatus: "Pending",
      accountType: "Delegate",
      accountActive: false,
      users: [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          role: "Developer",
          organization: "TechSoft Inc.",
          phone: "+1234567890",
          country: "United States",
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "Product Designer",
          organization: "DesignHub",
          phone: "+2349876543",
          country: "Nigeria",
        },
        {
          name: "Carlos Reyes",
          email: "carlos.reyes@example.com",
          role: "Data Analyst",
          organization: "DataMax",
          phone: "+56912345678",
          country: "Chile",
        },
      ],
    };
  },

  components: {
    SvgIcon,
  },
  setup() {
    const isEditing = ref(false);
    const userProfile = ref({
      fullName: "Redman Wordsworth",
      email: "redman@example.com",
      role: "Professor",
      phone: "+2348000000000",
      organization: "DesignHub",
      country: "Nigeria",
      imageUrl: "https://via.placeholder.com/150", // Placeholder image
    });

    // Save profile function
    const saveProfile = () => {
      // You can add an API call or any logic to save the profile
      console.log("Profile saved:", userProfile.value);
      isEditing.value = false;
    };

    // Cancel edit function
    const cancelEdit = () => {
      isEditing.value = false;
      // Optionally reset the profile values if necessary
    };

    return {
      isEditing,
      userProfile,
      saveProfile,
      cancelEdit,
      tab: ref("profile-details"),
    };
  },
};
</script>

<style scoped></style>
