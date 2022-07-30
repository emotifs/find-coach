<template>
  <section>
    <baseCard>
      <h2>Register as a coach now!</h2>
      <CoachForm />
    </baseCard>
  </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm";
export default {
  name: "CoachRegistration",
  components: {CoachForm},
};
</script>

<style scoped></style>
