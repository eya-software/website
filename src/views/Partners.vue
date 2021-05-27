<template>
  <div id="partners">
    <div class="section">
      <h1>Our Partners</h1>
      <div class="logos">
        <a href="http://generationup.net/" target="_blank">
          <img src="@/assets/partners/genup.png">
        </a>
        <a href="https://www.skysthelimitfund.org/" target="_blank">
          <img src="@/assets/partners/skysthelimitfund.png">
        </a>
        <img src="@/assets/partners/crementum.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners'
}
</script>

<style scoped lang="scss">
#partners {
  position: absolute;
  margin-top: 80px;
}

.logos {
  display: flex;
  flex-direction: column;
}

a {
  width: 100%;
  max-width: 400px;
}

img {
  width: 100%;
  margin: 20px;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 5px;
  overflow: hidden;
}
</style>
