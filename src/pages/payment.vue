<template>
  <f7-page name="payment">
    <div class="page">
      <div class="page-content">
        <div class="navbar navbar-style-1">
          <div class="navbar-inner">
            <a href="/home/" class="link back">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z"
                  fill="black"
                />
              </svg>
            </a>
            <div class="title">Payment</div>
          </div>
        </div>
        <div class="container">
          <div class="logo-content">
            <h1 class="logo-name fs-35 mt-40">Pembayaran</h1>
            <p class="text-align-center pt20">Yosef Murya Kusuma A</p>
            <div class="payment">
              <div class="title">Rp.27.500.000</div>
            </div>
            <p class="text-align-right">JUMLAH TAGIHAN</p>
            <p class="text-align-left">28 Oktober 2021</p>
            <hr class="dash" />
            <li class="row">
              <div class="col-50">Tiang besi telepon</div>
              <div class="col-25">20 Kg</div>
              <div class="col-25">20.000.000</div>
            </li>
            <li class="row">
              <div class="col-50">Kabel telepon</div>
              <div class="col-25">20 Kg</div>
              <div class="col-25">5.000.000</div>
            </li>
            <li class="row">
              <div class="col-50">PPN 10%</div>
              <div class="col-25"></div>
              <div class="col-25">2.500.000</div>
            </li>
            <hr class="dash" />
            <div class="total">
              <div class="row">
                <div class="col-50">Total</div>
                <div class="col-25"></div>
                <div class="col-25">27.500.000</div>
              </div>
            </div>
          </div>
          <div class="form-elements">
            <form class="form-elements">
              <div class="list">
                <ul class="row">
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-title item-label">Tujuan ke :</div>
                      <div class="item-input-wrap">
                        <input type="text" placeholder="" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-title item-label">Pengiriman dari :</div>
                      <div class="item-input-wrap">
                        <input type="text" placeholder="Alamat" class="form-control" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="/home/" class="button-large rounded-xl button button-fill">BAYAR</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
