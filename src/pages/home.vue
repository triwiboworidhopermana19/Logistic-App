<template>
  <f7-page name="home" class="page page-home">
    <!-- Page Content -->
    <div class="page-content content-area pt-40">
      <!-- Search backdrop -->
      <div class="searchbar-backdrop"></div>

      <div class="container">
        <div class="top-bar">
          <a href="/notifications-app/" class="notification-bar">
            <div class="info">
              <span class="text">Good Morning</span>
              <h2 class="title">Williams</h2>
            </div>
            <div class="media">
              <i class="fa fa-bell fa-2x" style="color:gray"></i>
              <i class="fa fa-circle active"></i>
            </div>
          </a>
          
        </div>

        <!-- Search -->
        <form data-search-container=".search-list" data-search-in=".item-title" class="searchbar searchbar-init search-box list-search-bx">
          <div class="searchbar-inner">
            <div class="searchbar-input-wrap">
              <input type="search" placeholder="Search beverages or foods" />
              <i class="searchbar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.65925 19.3102C11.8044 19.3103 13.8882 18.5946 15.5806 17.2764L21.9653 23.6612C22.4423 24.1218 23.2023 24.1086 23.663 23.6316C24.1123 23.1664 24.1123 22.4288 23.663 21.9636L17.2782 15.5788C20.5491 11.3682 19.7874 5.30335 15.5769 2.03244C11.3663 -1.23846 5.30149 -0.476784 2.03058 3.73376C-1.24033 7.9443 -0.478646 14.0092 3.73189 17.2801C5.42702 18.597 7.51269 19.3113 9.65925 19.3102ZM4.52915 4.52732C7.36245 1.69396 11.9561 1.69391 14.7895 4.52721C17.6229 7.36052 17.6229 11.9542 14.7896 14.7876C11.9563 17.6209 7.36261 17.621 4.52925 14.7877C4.5292 14.7876 4.5292 14.7876 4.52915 14.7876C1.69584 11.9749 1.67915 7.39796 4.49181 4.56465C4.50424 4.55217 4.51667 4.53974 4.52915 4.52732Z"
                    fill="#C9C9C9"
                  />
                </svg>
              </i>
            </div>
          </div>
        </form>
        <div class="list simple-list searchbar-not-found">
          <ul>
            <li>Nothing found</li>
          </ul>
        </div>

        <!-- Products -->
        <div data-space-between="20" data-slides-per-view="auto" data-centered-slides="false" class="swiper-container swiper-init main-swiper mb-40 overlay-swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/1.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Lokasi Pelanggan</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/2.png" alt="" width="300px" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Indonesian Tea</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/3.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Creamy Ice Coffe</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/4.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Creamy Ice Coffe</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#4</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/5.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Creamy Ice Coffe</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/6.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Creamy Ice Coffe</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/7.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Indonesian Tea</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card-overlay style-1 bg-primary">
                <div class="dz-media">
                  <img src="@/assets/img/card/8.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="item-title title">
                    <a href="/item-details/">Creamy Ice Coffe</a>
                  </h5>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">#8</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Categories -->
        <div class="title-bar">
          <h4 class="dz-title">Menu</h4>
        </div>
        <div data-space-between="20" data-slides-per-view="auto" data-centered-slides="false" class="swiper-container swiper-init mb-40 main-swiper categories-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-file-invoice-dollar fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 10px">
                  <h5 class="title"><a href="/products/">Cek Tarif</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-calendar-alt fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 2px">
                  <h5 class="title">
                    <a href="/products/"
                      >Jadwal <br />
                      Pengiriman</a
                    >
                  </h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-cubes fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 10px">
                  <h5 class="title"><a href="/products/">Packing</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/delivery/">
                    <i class="fas fa-shipping-fast fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 2px">
                  <h5 class="title">
                    <a href="/delivery/"
                      >Kirim <br />
                      Paket</a
                    >
                  </h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-box fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 10px">
                  <h5 class="title"><a href="/products/">Drop Off</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-people-carry fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 2px">
                  <h5 class="title"><a href="/products/">Paket <br>Diterima</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/lokasi-tujuan/">
                    <i class="fas fa-map-marked-alt fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 2px">
                  <h5 class="title"><a href="/lokasi-tujuan/">Lokasi <br>Tujuan</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/collection/">
                    <i class="fas fa-truck fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 10px">
                  <h5 class="title"><a href="/collection/">Collection</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-truck fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 10px">
                  <h5 class="title"><a href="/products/">Delivery</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="categories-bx">
                <div class="icon-bx">
                  <a href="/products/">
                    <i class="fas fa-qrcode fa-3x"></i>
                  </a>
                </div>
                <div class="dz-content" style="padding-top: 10px">
                  <h5 class="title"><a href="/products/">Scan</a></h5>
                  <!-- <span class="menus text-primary">67 Menus</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Featured Beverages -->
        <div class="title-bar">
          <h4 class="dz-title">Featured Beverages</h4>
          <a href="/products/" class="button text-capitalize">More</a>
        </div>
        <div class="list search-list mt-0 mb-20 searchbar-found item-list">
          <ul class="row">
            <li class="col-100 medium-50">
              <div class="item-bx item-list">
                <div class="dz-media">
                  <a href="/item-details/"><img src="@/assets/img/products/product1.jpg" alt="" /></a>
                  <div class="rating"><i class="fa fa-star"></i> 3.8</div>
                </div>
                <div class="dz-info">
                  <div class="dz-head">
                    <h6 class="item-title">
                      <a href="/item-details/">Hot Creamy Cappuccino Latte Ombe</a>
                    </h6>
                  </div>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">$12.6</li>
                      <li class="pts text-primary">50 Pts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-100 medium-50">
              <div class="item-bx item-list">
                <div class="dz-media">
                  <a href="/item-details/"><img src="@/assets/img/products/product2.jpg" alt="" /></a>
                  <div class="rating"><i class="fa fa-star"></i> 3.8</div>
                </div>
                <div class="dz-info">
                  <div class="dz-head">
                    <h6 class="item-title">
                      <a href="/item-details/">Creamy Mocha Ome Coffee </a>
                    </h6>
                  </div>
                  <div class="dz-meta">
                    <ul>
                      <li class="price">$12.6</li>
                      <li class="pts text-primary">50 Pts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </f7-page>
</template>
