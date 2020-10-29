<template>
  <div>
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div
                  class="col-lg-6"
                  style="margin-left: auto; margin-right: auto"
                >
                  <div class="p-5">
                    <div class="text-center">
                      <strong class="h4 mb-4">Admin</strong>
                      <h1 class="h4 text-gray-900 mb-4 orange--text">
                        IDEAL IT CENTER
                      </h1>
                      <h7 v-if="authenticating" style="color: green"
                        >Authenticating...</h7
                      >
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <!-- <label class="custom-control-label" for="customCheck">Rememberr Me</label> -->
                        </div>
                      </div>
                      <!-- <a
                        href="users-views/profile.html"
                        class="btn btn-primary btn-user btn-block"
                      >Login</a>
                      <a href="admin.html" class="btn btn-primary btn-user btn-block">Login Admin</a>-->
                      <hr />
                      <div class="text-center">
                        <v-btn
                        :disabled="isDisabled" 
                          @click="login()"
                          rounded
                          block
                          large
                          color="success"
                          dark
                          >Login</v-btn
                        >
                      </div>
                      <hr />
                      <a>
                        <router-link
                          to="/"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          <v-btn
                            rounded
                            block
                            large
                            class
                            outlined
                            color="orange"
                            >Home</v-btn
                          >
                        </router-link>
                      </a>

                      <!-- <a href="index.html" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </a>-->

                      <div class="text-center">
                        <v-snackbar v-model="snackbar" :multi-line="multiLine">
                          {{ message.message }}
                          <v-btn color="red" text @click="snackbar = false"
                            >Close</v-btn
                          >
                        </v-snackbar>
                      </div>
                    </form>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Services } from "./../../service";
var serv = new Services();
export default {
  data: () => ({
    disabled: true,
    authenticating: false,
    email: "",
    password: "",
    message: "",
    errors: [],
    snackbar: false,
  }),
  methods: {
    login() {
      let details = {
        email: this.email,
        password: this.password,
      };
      this.authenticating = true;
      serv
        .postRequest("login", details)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.message = response.data;
          this.snackbar = true;
          this.authenticating = false;
          // eslint-disable-next-line no-console
          console.log(this.message, "are the eventttt");

          if (response.data.status == "ok") {
            this.$router.push("/adminIndex");
          }
        })
        .catch((e) => {
          this.errors.push(e);
          // eslint-disable-next-line no-console
          console.log(e);
        });
    },
  },
  computed: {
    isDisabled: function () {
      return !this.disabled;
    },
  },
};
</script>
<style lang="css">
@import "./admin.css";
</style>