<template>
  <div @click="noSelectPassword" class="max-w-[1440px] mx-auto">
    <div class="flex justify-between">
      <div class="flex h-screen items-center justify-end w-[513px] relative">
        <div
          class="flex items-center absolute top-[30px] left-[30px] gap-[16px]"
        >
          <img
            src="../assets/images/telegram-cloud-document-2-5474430221027386155 2.svg"
            alt="logo"
          />
          <h1 class="text-[20px] font-medium">Hardwork</h1>
        </div>
        <div
          class="flex flex-col justify-between w-[357px] h-[340px] text-[#212121] font-medium"
        >
          <h1 class="text-[28px]">Kirish</h1>
          <label
            for="tel"
            class="w-full block text-[13px]"
            :class="false ? 'text-[#C72616]' : ''"
          >
            <p>Telefon raqam*</p>
            <input
              v-model="phone"
              placeholder="Telefon raqamingizni kiriting"
              type="tel"
              name="tel"
              class="w-full my-[7px] px-[14px] py-[10px] text-[16px] placeholder:text-[#D9D9D9] placeholder:text-[16px] border border-[#E2E1E2] rounded-[7px] outline-none focus:ring-2 ring-blue-500"
              :class="false ? 'border-[#C72616]' : 'border-[#E2E1E2]'"
            />
            <div class="flex gap-[6px]" v-if="false">
              <img src="../assets/images/Frame (2).svg" alt="info" />
              <p>Raqam noto'g'ri</p>
            </div>
          </label>

          <label
            for="password"
            class="w-full text-[13px]"
            :class="false ? 'text-[#C72616]' : ''"
          >
            <p>Parol*</p>
            <div
              @click="selectPassword"
              class="flex px-[14px] border border-[#E2E1E2] ring-blue-500 rounded-[7px] my-[7px] wrapper"
              :class="isPasswordSelected ? 'ring-2' : ''"
            >
              <input
                v-model="password"
                placeholder="Parolni kiriting"
                :type="isPasswordType ? 'password' : 'text'"
                name="password"
                class="w-full py-[10px] text-[16px] placeholder:text-[#D9D9D9] placeholder:text-[16px] ring-0 outline-none"
              />
              <img
                @click="changePasswordType"
                v-if="isPasswordType"
                src="../assets/images/Frame.svg"
                alt="eye"
              />
              <img
                @click="changePasswordType"
                v-if="!isPasswordType"
                src="../assets/images/Frame (1).svg"
                alt="eye"
              />
            </div>
            <div class="flex gap-[6px]" v-if="false">
              <img src="../assets/images/Frame (2).svg" alt="info" />
              <p>Parol noto'g'ri</p>
            </div>
          </label>
          <button
            class="w-full rounded-[7px] py-[10px] px-auto text-[16px] text-white"
            :class="
              phone.length > 5 && password.length > 5
                ? 'bg-[#734DB6]'
                : 'bg-[#CCBDE7]'
            "
          >
            Tizimga kirish
          </button>
        </div>
      </div>
      <div class="w-[927px] h-screen grad flex justify-center items-center">
        <img
          src="../assets/images/Privacy policy-rafiki (1) 1.png"
          alt="img"
          class="w-[633px] h-[633px] ml-32"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isPasswordSelected: false,
      isPasswordType: true,
      phone: "",
      password: "",
    };
  },
  methods: {
    selectPassword() {
      this.isPasswordSelected = true;
    },
    noSelectPassword(e) {
      console.log(e.target);
      if (e.target.name !== "password") {
        if (e.target.alt !== "eye") {
          if (!e.target.classList.contains("wrapper")) {
            this.isPasswordSelected = false;
          }
        }
      }
    },
    changePasswordType() {
      this.isPasswordType = !this.isPasswordType;
    },
  },
};
</script>

<style scoped>
.grad {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
  background: linear-gradient(324.83deg, #4a00e0 0.62%, #8e2de2 92.11%);
}
</style>
