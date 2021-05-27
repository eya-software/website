<template>
  <div id="join">
    <div class="section">
      <h1>Get Involved</h1>
      <p>If you are interested in making your voices heard and promote concrete legislative change regarding social issues, consider becoming involved!</p>
      <ul>
        <li>Stay up to date with our media on Instagram, Facebook, Twitter, and Blog Posts</li>
        <li>Form an Empowering Youth Action chapter at your school!</li>
        <li>Join a local Empowering Youth Action chapter near you!</li>
      </ul>
      <div class="buttons">
        <a href="mailto:contact@empoweringyouthaction.org" target="_top">Contact Us!</a>
      </div>
      <img src="@/assets/change2.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join'
}
</script>

<style scoped lang="scss">
#join {
  position: absolute;
  margin-top: 80px;
  align-items: center;
  vertical-align: middle;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.section {
  max-width: 900px;
}

img {
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
}
</style>
