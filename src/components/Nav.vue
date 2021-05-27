<template>
  <div id="nav">
    <div class="left">
      <a href="/">
        <img src="@/assets/EYA_Compressed.png">
      </a>
      <a href="/">
        <h1>{{ $store.state.mobile ? 'EYA' : 'EMPOWERING YOUTH ACTION' }}</h1>
      </a>
    </div>
    <div class="right" v-if="!$store.state.mobile">
      <a href="/">Home</a>
      <div class="dropdown">
        <p>About</p>
        <div class="dropdown-content">
          <a href="/movement">Movement</a>
          <a href="/leadership">Leadership</a>
          <a href="/chapters">Chapters</a>
          <a href="/partners">Partners</a>
        </div>
      </div>
      <div class="dropdown">
        <p>Initiatives</p>
        <div class="dropdown-content">
          <a href="/initiatives/covid19">COVID 19</a>
          <a href="/initiatives/education">Education</a>
        </div>
      </div>
      <a href="/join">Contact</a>
    </div>
    <div class="right" v-else>
      <div
        class="menu"
        @click="toggle"
      >
        {{ open ? 'Close Menu' : 'Open Menu' }}
      </div>
    </div>
    <div class="bottom" v-if="open">
      <ul>
        <li><a href="/">Home</a></li>
        <li>About</li>
        <ul>
          <li><a href="/movement">Movement</a></li>
          <li><a href="/leadership">Leadership</a></li>
          <li><a href="/chapters">Chapters</a></li>
          <li><a href="/partners">Partners</a></li>
        </ul>
        <li>Initiatives</li>
        <ul>
          <li><a href="/initiatives/covid19">COVID 19</a></li>
          <li><a href="/initiatives/education">Education</a></li>
        </ul>
        <li><a href="/join">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle: function() {
      this.open = !this.open;
    }
  }
}
</script>

<style scoped lang="scss">
#nav {
  position: fixed;
  background-color: white;
  color: #162229;
  height: 80px;
  width: 100vw;
  z-index: 10;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

img {
  height: 60px;
  margin: 10px 0;
  margin-right: 10px;
}

h1 {
  margin: 0;
  height: 80px;
  line-height: 80px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0 0 0 20px;
}

.menu {
  line-height: 80px;
  cursor: pointer;
}

.left {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  float: left;
}

.right {
  float: right;
  margin-right: 20px;
}

.right {
  a, .dropdown {
    color: #162229;
    float: left;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    margin: 0;
    padding: 0;
    height: 80px;
    line-height: 80px;
    text-align: center;
    width: 100px;
  }

  .dropdown a {
    font-size: 16px;
  }

  .dropdown p {
    border: none;
    outline: none;
    color: #162229;
    height: 80px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    z-index: 1;
  }

  a:hover, .dropdown:hover .p {
    text-decoration: none;
  }

  .dropdown-content  {
    display: none;
    overflow: hidden;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .dropdown-content a {
    height: 80px;
    background: #eee;
  }

  .dropdown-content, .dropdown-content a  {
    z-index: 1;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
  }
}

.bottom {
  background: #eee;
  width: 100vw;
  height: calc(100vh - 80px);
  position: fixed;
  margin-top: 80px;
  font-size: 36px;
}

.bottom > ul {
  margin: 20px 10px;
}

.bottom a {
  color: #2980b9;
}
</style>
