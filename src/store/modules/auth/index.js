import mutations from "@/store/modules/auth/mutations";
import getters from "@/store/modules/auth/getters";
import actions from "@/store/modules/auth/actions";
export default {
  state() {
    return {
      userId: null,
      token : null,
      tokenExpiration : null,
      didLogout : false
    };
  },
  mutations,
  actions,
  getters
}
