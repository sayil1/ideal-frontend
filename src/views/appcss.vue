<template>
    <div>

    </div>
</template>
<style lang="css">
template {
  margin-left: 10px;
  margin-right: 10px;
}

.div1 {
  background-image: url("../assets/icmb.jpg");
  /* background: rgba(21, 22, 21, 0.1); */
  background-size: cover;
  background-position: center ;
}

.img {
  background-image: url("../assets/new.jpg");
 filter: grayscale(100%);
}

[class*="col-"] {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  .car {
    font-size: 2px;

    margin: 0px;
  }
  .car-head {
    font-size: 40px;
    color: orange;
    text-align: center;
    padding-top: 50px;
  }
  .car-text {
    font-size: 14px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    padding-top: 20px;

    text-align: center;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    background-color: #f5cf8e; /* Yellow */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff; /* Blue */
  }
  .car {
    padding: 30px;
  }
  .car-head {
    font-size: 80px;
    color: orange;
    text-align: center;
  }
  .car-text {
    font-size: 25px;
    /* background-color: rgba(21, 22, 21, 0.4); */
    height: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 45px;
  }
}
</style>