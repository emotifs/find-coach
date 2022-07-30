<template>
  <section>
    <CoachFilter @change-filter="setFilters"> </CoachFilter>
  </section>

  <section>
    <baseCard>
      <div class="controls">
        <baseButton mode="outline">Refresh</baseButton>
        <baseButton link to="/register">Register for as Coach</baseButton>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
          {{ coach.firstName }}
        </CoachItem>
      </ul>

      <h3 v-else>No coaches found</h3>
    </baseCard>
  </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem";
import CoachFilter from "@/components/coaches/CoachFilter";
export default {
  name: "CoachList",
  components: { CoachItem, CoachFilter },
  data(){
    return{
      activeFilters : {
        fronted : true,
        backend : true,
        career : true
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches =  this.$store.getters["coaches/coaches"];
      return coaches.filter(coach => {
        if(this.activeFilters.fronted && coach.areas.includes('fronted')){
          return true;
        }

        if(this.activeFilters.backend && coach.areas.includes('backend')){
          return true;
        }

        if(this.activeFilters.career && coach.areas.includes('career')){
          return true;
        }

        return false;
      })
    },

    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods : {
    setFilters(updatedFilters){
      this.activeFilters = updatedFilters;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
