<template>
  <div class="footer">
    <div class="nav-box-wrapper">
        <router-link to="/index">
            <div class="nav-box">
              <div class="nav-icon">
                  <img src="../assets/news.png" >
              </div>
              <div class="nav-text">主页</div>
            </div>
        </router-link>
      </div>

    <div class="nav-box-wrapper">
        <router-link to="/hostList">
            <div class="nav-box">
              <div class="nav-icon">
                <img src="../assets/hotnews.png">
              </div>
              <div class="nav-text">精选</div>
            </div>
        </router-link>
    </div>

      <div class="nav-box-wrapper">
          <router-link to="/UserCenter">
              <div class="nav-box">
                <div class="nav-icon">
                  <img src="../assets/user.png">
                </div>
                <div class="nav-text">我的</div>
              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style type="text/stylus" scoped lang="stylus">
  .footer
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    display: flex
    width: 100%
    text-align: center
    background: #fff
    a
      color: #000
      text-decoration: none
    .nav-box-wrapper
      flex: 1
      .nav-box
        padding: 7px 0
      .nav-icon
        width: 24px;
        height: 24px;
        margin: 0 auto 5px;
        img
          display: block;
          width: 100%;
          height: 100%;
      .nav-text
        color: inherit;
        font-size: 12px;
        line-height: 1;
      .router-link-active
        .nav-box
          background-color: #eaeaea;
          color: #26a2ff;


</style>
