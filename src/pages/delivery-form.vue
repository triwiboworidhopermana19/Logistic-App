<template>
  <f7-page name="delivery" >
    <div class="page account-area">
      <div class="page-content">
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
