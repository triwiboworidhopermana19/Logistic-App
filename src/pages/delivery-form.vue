<template>
  <f7-page name="delivery">
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
            <h1 class="logo-name fs-28">Pengiriman</h1>
          </div>
          <div class="form-elements">
            <form @submit.prevent="signUp">
              <div class="list">
                <ul class="row">
                  <li class="item-content col-100 item-input item-input-with-value">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="username" type="text" placeholder="Nama Pengirim" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="text" placeholder="Alamat" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Kota" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Nama Penerima" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Alamat" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Telp" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Isi Paket" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Berat (Kg)" class="form-control" />
                      </div>
                    </div>
                  </li>
                  <li class="item-content col-100 item-input">
                    <div class="item-inner">
                      <div class="item-input-wrap">
                        <input v-model="email" type="email" placeholder="Pengemasan" class="form-control" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="clearfix text-align-center pb-30">
                <button type="submit" :class="`button-large button button-fill rounded-xl ${!formValid ? 'button-orange' : ''}`" :disabled="!formValid">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script></script>
