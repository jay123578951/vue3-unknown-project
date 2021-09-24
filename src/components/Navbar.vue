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
            <router-link to="/index" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/watches" class="nav-link">
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
        <router-link to="/cart" class="cart-btn">
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
</template>

<style lang="scss" scoped>
.navbar {
  z-index: 1000;
}
</style>
