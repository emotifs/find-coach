<template>
  <section>
    <baseCard>
      <h2>
        {{ fullName }}
      </h2>
      <h3>${{ rate }} / hour</h3>
    </baseCard>
  </section>
  <section>
    <baseCard>
      <h2>Interested? Reach out now!</h2>
      <baseButton link :to="contactLink"> Contact </baseButton>
    </baseCard>
    <router-view></router-view>
  </section>
  <section>
    <baseCard>
      <baseBadge v-for="area in areas" :key="area" :type="area" :title="area">
        {{ area }}
      </baseBadge>
      <p>{{ description }}</p>
    </baseCard>
  </section>
</template>

<script>
export default {
  name: "CoachDetails",
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },

    contactLink(){
      return this.$route.path + '/' + this.id + '/contact';
    },
    areas (){
      return this.selectedCoach.areas;
    },

    rate(){
      return this.selectedCoach.hourlyRate;
    },

    description(){
      return this.selectedCoach.description;
    }
  },

  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped></style>
