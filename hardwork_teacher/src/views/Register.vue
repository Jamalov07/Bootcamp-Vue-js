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
          class="flex flex-col justify-between gap-5 w-[357px] text-[#212121] font-medium mx-[16px]"
        >
          <h1 class="text-[28px]">Ro'yhatdan o'tish</h1>
          <form
            action="#"
            class="flex flex-col justify-between h-full gap-5"
            @submit="StuffRegister"
          >
            <!--  -->
            <label
              for="name"
              class="w-full block text-[13px] h-[80px]"
              :class="wrongName ? 'text-[#C72616]' : ''"
            >
              <p>Ism*</p>
              <input
                @click="changeWrongName"
                v-model="name"
                placeholder="Ismingizni kiriting"
                type="text"
                name="name"
                class="w-full my-[7px] px-[14px] py-[10px] text-[16px] text-[#212121] placeholder:text-[#D9D9D9] placeholder:text-[16px] border rounded-[7px] outline-none focus:ring-2 ring-blue-500"
                :class="wrongName ? 'border-[#C72616]' : 'border-[#E2E1E2]'"
              />
              <div class="flex gap-[6px]" v-if="wrongName">
                <img src="../assets/images/Frame (2).svg" alt="info" />
                <p>Ism 3 harfdan oshishi kerak!</p>
              </div>
            </label>
            <label
              for="lastname"
              class="w-full block text-[13px] h-[80px]"
              :class="wrongLastName ? 'text-[#C72616]' : ''"
            >
              <p>Familiya*</p>
              <input
                @click="changeWrongLastName"
                v-model="lastname"
                placeholder="Familiyangizni kiriting"
                type="text"
                name="lastname"
                class="w-full my-[7px] px-[14px] py-[10px] text-[16px] text-[#212121] placeholder:text-[#D9D9D9] placeholder:text-[16px] border rounded-[7px] outline-none focus:ring-2 ring-blue-500"
                :class="wrongLastName ? 'border-[#C72616]' : 'border-[#E2E1E2]'"
              />
              <div class="flex gap-[6px]" v-if="wrongLastName">
                <img src="../assets/images/Frame (2).svg" alt="info" />
                <p>Familiya 4 harfdan oshishi kerak!</p>
              </div>
            </label>
            <label
              for="tel"
              class="w-full block text-[13px] h-[80px]"
              :class="wrongLogin ? 'text-[#C72616]' : ''"
            >
              <p>Telefon raqam*</p>
              <input
                @click="changeWrongPhone"
                v-model="phone"
                placeholder="Telefon raqamingizni kiriting"
                type="tel"
                name="tel"
                class="w-full my-[7px] px-[14px] py-[10px] text-[16px] text-[#212121] placeholder:text-[#D9D9D9] placeholder:text-[16px] border rounded-[7px] outline-none focus:ring-2 ring-blue-500"
                :class="wrongLogin ? 'border-[#C72616]' : 'border-[#E2E1E2]'"
              />
              <div class="flex gap-[6px]" v-if="wrongLogin">
                <img src="../assets/images/Frame (2).svg" alt="info" />
                <p>Yaroqsiz raqam</p>
              </div>
            </label>
            <label
              for="password"
              class="w-full text-[13px] h-[80px]"
              :class="wrongPassword ? 'text-[#C72616]' : ''"
            >
              <p>Parol*</p>
              <div
                @click="selectPassword"
                class="flex px-[14px] border ring-blue-500 rounded-[7px] my-[7px] wrapper"
                :class="[
                  isPasswordSelected ? 'ring-2' : '',
                  wrongPassword ? 'border-[#C72616]' : 'border-[#E2E1E2]',
                ]"
              >
                <input
                  @click="changeWrongPassword"
                  v-model="password"
                  placeholder="Parolni kiriting"
                  :type="isPasswordType ? 'password' : 'text'"
                  name="password"
                  class="w-full py-[10px] text-[16px] placeholder:text-[#D9D9D9] placeholder:text-[16px] text-[#212121] ring-0 outline-none"
                />
                <img
                  @click="changePasswordType"
                  v-if="!wrongPassword && isPasswordType"
                  src="../assets/images/Frame.svg"
                  alt="eye"
                />
                <img
                  @click="changePasswordType"
                  v-if="!wrongPassword && !isPasswordType"
                  src="../assets/images/Frame (1).svg"
                  alt="eye"
                />
                <img
                  @click="changePasswordType"
                  v-if="wrongPassword"
                  src="../assets/images/Frame (3).svg"
                  alt="eye"
                />
              </div>
              <div class="flex gap-[6px]" v-if="wrongPassword">
                <img src="../assets/images/Frame (2).svg" alt="info" />
                <p>Yaroqsiz parol</p>
              </div>
            </label>
            <label
              for="role"
              class="w-full text-[13px] h-[80px]"
              :class="notSelectedRole ? 'text-[#C72616]' : ''"
            >
              <p>Hodim*</p>
              <div
                @click="changeRoleModal"
                name="role"
                class="flex px-[14px] border rounded-[7px] my-[7px] wrapper items-center"
                :class="[
                  notSelectedRole ? 'border-[#C72616]' : 'border-[#E2E1E2]',
                  !role_id ? 'text-[#D9D9D9]' : 'text-[#212121]',
                ]"
              >
                <h1
                  class="w-full py-[10px] text-[16px]"
                  name="rolename"
                  :class="notSelectedRole ? 'text-[#C72616]' : ''"
                >
                  {{ roleName }}
                </h1>
                <i
                  class="bx bx-chevron-down text-xl"
                  :class="[
                    notSelectedRole ? 'text-[#C72616]' : '',
                    isRoleModalOpen ? 'rotate-180' : '',
                  ]"
                ></i>
              </div>
              <div class="flex gap-[6px]" v-if="notSelectedRole">
                <img src="../assets/images/Frame (2).svg" alt="info" />
                <p>Role tanlanishi kerak</p>
              </div>

              <div
                name="modal"
                v-if="isRoleModalOpen"
                class="z-10 text-[16px] relative bg-white flex flex-col justify-between p-[14px] h-[168px] w-full rounded-[7px] border border-[#E2E1E2]"
              >
                <div
                  class="flex gap-[10px]"
                  name="modalEl"
                  @click="setRoleid(1, 'Admin')"
                >
                  <div
                    name="icon"
                    class="w-5 h-5 rounded-full"
                    :class="
                      role_id === 1
                        ? 'border-8 border-[#734DB6]'
                        : 'border border-[#D9D9D9]'
                    "
                  ></div>
                  <h1 name="rolename">Admin</h1>
                </div>
                <div
                  class="flex gap-[10px]"
                  name="modalEl"
                  @click="setRoleid(2, 'Ustoz')"
                >
                  <div
                    name="icon"
                    class="w-5 h-5 rounded-full"
                    :class="
                      role_id === 2
                        ? 'border-8 border-[#734DB6]'
                        : 'border border-[#D9D9D9]'
                    "
                  ></div>
                  <h1 name="rolename">Ustoz</h1>
                </div>
                <div
                  class="flex gap-[10px]"
                  name="modalEl"
                  @click="setRoleid(3, 'Buxgalter')"
                >
                  <div
                    name="icon"
                    class="w-5 h-5 rounded-full"
                    :class="
                      role_id === 3
                        ? 'border-8 border-[#734DB6]'
                        : 'border border-[#D9D9D9]'
                    "
                  ></div>
                  <h1 name="rolename">Buxgalter</h1>
                </div>
                <div
                  class="flex gap-[10px]"
                  name="modalEl"
                  @click="setRoleid(4, 'Manager')"
                >
                  <div
                    name="icon"
                    class="w-5 h-5 rounded-full"
                    :class="
                      role_id === 4
                        ? 'border-8 border-[#734DB6]'
                        : 'border border-[#D9D9D9]'
                    "
                  ></div>
                  <h1 name="rolename">Manager</h1>
                </div>
              </div>
            </label>
            <!--  -->
            <button
              type="submit"
              class="w-full rounded-[7px] py-[10px] px-auto text-[16px] text-white"
              :class="
                phone.length > 6 &&
                password.length > 6 &&
                name.length > 3 &&
                lastname.length > 4 &&
                role_id
                  ? 'bg-[#734DB6]'
                  : 'bg-[#CCBDE7]'
              "
            >
              Tizimga kirish
            </button>
          </form>
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
  name: "Register",
  data() {
    return {
      isPasswordSelected: false,
      isPasswordType: true,
      wrongLogin: false,
      wrongPassword: false,
      wrongName: false,
      wrongLastName: false,
      notSelectedRole: false,
      isRoleModalOpen: false,
      phone: "",
      password: "",
      name: "",
      lastname: "",
      role_id: 0,
      roleName: "Tanlanmagan",
    };
  },
  methods: {
    selectPassword() {
      this.isPasswordSelected = true;
    },
    noSelectPassword(e) {
    //   console.log(e.target);
      if (e.target.name !== "password") {
        if (e.target.alt !== "eye") {
          if (!e.target.classList.contains("wrapper")) {
            this.isPasswordSelected = false;
          }
        }
      }
      if (!e.target.classList.contains("bx")) {
        if (e.target.getAttribute("name") !== "rolename") {
          if (e.target.getAttribute("name") !== "role") {
            if (e.target.getAttribute("name") !== "modal") {
              if (e.target.getAttribute("name") !== "icon") {
                if (e.target.getAttribute("name") !== "modalEl") {
                  this.isRoleModalOpen = false;
                }
              }
            }
          }
        }
      }
    },
    changePasswordType() {
      this.isPasswordType = !this.isPasswordType;
    },
    changeWrongPhone() {
      this.wrongLogin = false;
    },
    changeWrongPassword() {
      this.wrongPassword = false;
    },
    changeWrongName() {
      this.wrongName = false;
    },
    changeWrongLastName() {
      this.wrongLastName = false;
    },
    changNotSelectedRole() {
      this.notSelectedRole = false;
    },
    changeRoleModal() {
      this.isRoleModalOpen = !this.isRoleModalOpen;
      this.changNotSelectedRole();
    },
    setRoleid(id, name) {
      this.role_id = id;
      this.roleName = name;
    },
    setWrong(nameb1, lastnameb2, loginb3, passwordb4, roleb5) {
      this.wrongName = nameb1;
      this.wrongLastName = lastnameb2;
      this.wrongLogin = loginb3;
      this.wrongPassword = passwordb4;
      this.notSelectedRole = roleb5;
    },
    async StuffRegister(e) {
      e.preventDefault();
      if (this.name.length < 4) {
        this.setWrong(true, false, false, false, false);
      } else if (this.lastname.length < 5) {
        this.setWrong(false, true, false, false, false);
      } else if (this.phone.length < 6) {
        this.setWrong(false, false, true, false, false);
      } else if (isNaN(+this.phone)) {
        this.setWrong(false, false, true, false, false);
      } else if (this.password.length < 6) {
        this.setWrong(false, false, false, true, false);
      } else if (!isNaN(+this.password)) {
        this.setWrong(false, false, false, true, false);
      } else if (!this.role_id) {
        this.setWrong(false, false, false, false, true);
      } else {
        const newStuff = {
          name: this.name,
          lastname: this.lastname,
          phone_number: this.phone,
          password: this.password,
          role_id: this.role_id,
        };
        console.log(newStuff);
      }
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
