<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Watches
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Watchmakers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Loupe magazine
            </router-link>
          </li>
        </ul>
        <router-link to="/admin" class="login-btn">
          <button type="button" class="btn">
            <span class="material-icons">shopping_cart</span>
          </button>
        </router-link>
        <router-link to="/admin" class="login-btn">
          <button type="button" class="btn">
            <span class="material-icons">account_circle</span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
  <section class="banner-back">
    <div class="banner-back-bottom" data-speed="-0.1" ref="backBtm"></div>
    <div class="banner-back-middle" data-speed="-0.4" ref="backMid"></div>
    <div class="banner-title">
      <div class="d-flex justify-content-center align-items-center">
        <img src="/images/banner-watch.png" alt="">
        <div>
          <h1>Clearly brilliant</h1>
          <p>The incredible NEW C60 #tide.</p>
          <p>Wave-pattern sapphire dial. Chronometer</p>
          <p>movement. Water-resistance to 600m.</p>
        </div>
      </div>
    </div>
    <div class="banner-back-top" data-speed="-0.4" ref="backTop"></div>
  </section>
  <section>
    <div class="container">
      <div class="row justify-content-around align-items-end mb-5">
        <div class="col-4">
          <img style="width: 100%" src="/images/watch-01.jpg" alt="">
          <div class="introduction">
            <div class="introduction-info" data-speed="-0.08" ref="watchFirst">
              <h3>Saving paradise</h3>
              <p>From the eco-themed issue of Loupe magazine:
                how conservationists are removing plastic waste from the Seychelles’ Aldabra Atoll –
                and preserving local wildlife in the process.</p>
            </div>
          </div>
        </div>
        <div class="col-4 position-relative">
          <img style="width: 100%" src="/images/watch-02.jpg" alt="">
          <div class="introduction">
            <div class="introduction-info" data-speed="-0.08" ref="watchSecondary">
              <h3>The #tide is right</h3>
              <p>How one business converts ocean plastic into a
                material ideal for premium watch straps – and the
                C60 #tide. Christopher Ward and #tide will
                together donate £5 from the sale of each #tide
                strap to Blue Marine Foundation.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-end mb-5">
        <div class="col-4 position-relative">
          <img style="width: 100%" src="/images/watch-03.jpg" alt="">
          <div class="introduction">
            <div class="introduction-info" data-speed="-0.07" ref="watchThird">
              <h3>Protecting the ‘lungs of the sea’</h3>
              <p>How ‘blue carbon’ stored on the ocean
                floor prevents climate change – and why it’s
                under threat. Exclusive by Charles Clover,
                co-founder, Blue Marine Foundation.</p>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row justify-content-center align-items-end pb-5">
        <div class="col-4 position-relative">
          <img style="width: 100%" src="/images/watch-04.jpg" alt="">
          <div class="introduction">
            <div class="introduction-info" data-speed="-0.06" ref="watchFourth">
              <h3>Snow patrol</h3>
              <p>We talk to CW Challenger and
                explorer-conservationist Tom Hicks
                about his upcoming expedition to
                the North Pole – and the new
                watch inspired by his efforts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white pb-5 mb-5">
    <div class="container">
      <h2 class="text-center my-5 pt-5">Featured watches</h2>
      <div class="row">
        <div class="col-4">
          <div class="card">
            <img src="/images/watch-05.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">C65 Sandhurst</h5>
              <p class="card-text">38mm   Black   Automatic   Brushed Steel</p>
              <p class="card-text">$1,115.00</p>
              <a href="#" class="btn btn-primary">Add to bag</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <img src="/images/watch-06.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">C1 Moonglow</h5>
              <p class="card-text">40.5mm   Black   Automatic   Black Cordovan Leather</p>
              <p class="card-text">$1,995.00</p>
              <a href="#" class="btn btn-primary">Add to bag</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <img src="/images/watch-07.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">C65 Super Compressor</h5>
              <p class="card-text">41mm   Ocean Blue   Automatic   Brushed Steel</p>
              <p class="card-text">$1,215.00</p>
              <a href="#" class="btn btn-primary">Add to bag</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-start align-items-center mb-5">
    <div class="back-store-img"></div>
    <div class="back-store-text">
      <h5>A simple aim...</h5>
      <h2>To put premium watches within the reach of everyone</h2>
      <ul>
        <li>
          <span class="material-icons">verified</span>
          Designed in England Made in Switzerland
        </li>
        <li>
          <span class="material-icons">savings</span>
          Honest pricing, fair margins
        </li>
        <li>
          <span class="material-icons">construction</span>
          60 day free returns 60 month movement guarantee
        </li>
      </ul>
    </div>
  </section>
  <footer>
    <p class="text-center mb-5">© 2009 - 2021</p>
  </footer>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  mounted() {
    const {
      backTop, backMid, backBtm,
      watchFirst, watchSecondary, watchThird, watchFourth,
    } = this.$refs;

    window.addEventListener('scroll', () => {
      const scrollPositionY = window.pageYOffset;
      backTop.style.transform = `translateY(${scrollPositionY * backTop.dataset.speed}px)`;
      backMid.style.transform = `translateY(${scrollPositionY * backMid.dataset.speed}px)`;
      backBtm.style.transform = `translateY(${scrollPositionY * backBtm.dataset.speed}px)`;
      watchFirst.style.transform = `translateY(${scrollPositionY * watchFirst.dataset.speed}px)`;
      watchSecondary.style.transform = `translateY(${scrollPositionY * watchSecondary.dataset.speed}px)`;
      watchThird.style.transform = `translateY(${scrollPositionY * watchThird.dataset.speed}px)`;
      watchFourth.style.transform = `translateY(${scrollPositionY * watchFourth.dataset.speed}px)`;
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  background: #0F161E;
}
.navbar {
  z-index: 1;
  background: #0F161E;
}
.login-btn {
  span {
    display: block;
    font-size: 2rem;
  }
}
.banner-back {
  position: relative;
  height: 100vh;
  background: #0F161E;
  .banner-title {
    position: absolute;
    white-space: nowrap;
    color: white;
    top: 15%;
    left: 48%;
    transform: translateX(-50%);
    img {
      width: 350px;
      margin: 3rem;
    }
    h1 {
      font-size: 72px;
    }
    p {
      font-size: 20px;
      margin-bottom: 0;
    }
  }
  .banner-back-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/banner-back-01.png');
    background-size: 100% 100%;
  }
  .banner-back-middle {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/banner-back-02.png');
    background-size: 100% 100%;
  }
  .banner-back-bottom {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/banner-back-03.png');
    background-size: 100% 100%;
  }
}
.introduction {
  position: relative;
  height: 150px;
  .introduction-info {
    position: absolute;
    bottom: 0;
    right: -36px;
    color: white;
    width: 80%;
    p {
      margin-bottom: 0;
      opacity: 0.7;
    }
  }
}
.back-store-img {
  width: 55%;
  height: 600px;
  background-image: url('/images/watch-08.jpg');
  background-size: cover;
  background-position: center center;
  margin-right: 3rem;
}
.back-store-text {
  width: 30%;
  color: white;
  h2 {
    margin-bottom: 3rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    span {
      display: block;
      font-size: 3rem;
      margin-right: 1rem;
    }
  }
}
</style>
