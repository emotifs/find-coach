<template>
  <section>
    <baseCard>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData"/>
    </baseCard>
  </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm";
export default {
  name: "CoachRegistration",
  components: {CoachForm},
  methods : {
    saveData(data){
      this.$store.dispatch('coaches/registerCoach', data)
    }
  }
};
</script>

<style scoped></style>
