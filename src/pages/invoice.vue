<template>
  <f7-page name="invoice">
    <div class="page-content content-area pt-40">
      <div class="container">
        <div class="top-bar">
          <a href="/notifications-app/" class="notification-bar">
            <div class="info">
              <span class="text">Good Morning</span>
              <h2 class="title">Williams</h2>
            </div>
            <div class="media">
              <i class="fa fa-bell fa-2x" style="color: gray"></i>
              <i class="fa fa-circle active"></i>
            </div>
          </a>
        </div>
      </div>
      <div class="card data-table">
        <table>
          <thead>
            <tr>
              <th class="label-cell">Nama Barang</th>
              <th class="numeric-cell text-align-left">Kg / Dimensi</th>
              <th class="numeric-cell text-align-left">Kota Asal</th>
              <th class="numeric-cell text-align-left">Kota Tujuan</th>
              <th class="numeric-cell text-align-left">Harga (Rp)</th>
              <th class="numeric-cell text-align-left">Status Pembayaran</th>
              <th class="numeric-cell text-align-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell text-align-left">15</td>
              <td class="numeric-cell text-align-left">Yogyakarta</td>
              <td class="numeric-cell text-align-left">Jakarta</td>
              <td class="numeric-cell text-align-left">27.500.000</td>
              <td class="numeric-cell text-align-left">Lunas / Belum Bayar</td>
              <td class="numeric-cell text-align-left"></td>
            </tr>
            <tr>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell text-align-left">15</td>
              <td class="numeric-cell text-align-left">Yogyakarta</td>
              <td class="numeric-cell text-align-left">Jakarta</td>
              <td class="numeric-cell text-align-left">27.500.000</td>
              <td class="numeric-cell text-align-left">Lunas / Belum Bayar</td>
              <td class="numeric-cell text-align-left"></td>
            </tr>
            <tr>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell text-align-left">15</td>
              <td class="numeric-cell text-align-left">Yogyakarta</td>
              <td class="numeric-cell text-align-left">Jakarta</td>
              <td class="numeric-cell text-align-left">27.500.000</td>
              <td class="numeric-cell text-align-left">Lunas / Belum Bayar</td>
              <td class="numeric-cell text-align-left"></td>
            </tr>
          </tbody>
        </table>
        <div class="data-table-footer">
          <div class="data-table-rows-select">
            Per page:
            <div class="input input-dropdown">
              <select>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <div class="data-table-pagination">
            <span class="data-table-pagination-label">1-5 of 10</span>
            <a href="#" class="link disabled">
              <i class="icon icon-prev color-gray"></i>
            </a>
            <a href="#" class="link">
              <i class="icon icon-next color-gray"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
