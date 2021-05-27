<template>
  <div id="chapters">
    <div class="section">
      <h1>Chapters</h1>
      <ul>
        <li>Bellarmine</li>
        <li>Mitty</li>
        <li>Carlmont</li>
        <li>Valley Christian</li>
        <li>Leland</li>
        <li>Dreyfoos School of Arts</li>
      </ul>
      <div class="container">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GVxJ1ICziSJqhv2sykd4jkUtVLKTxmYX" width="100%" height="600"></iframe>
      </div>
      <p>Email us at <a href="mailto:contact@empoweringyouthaction.org" target="_top">contact@empoweringyouthaction.org</a> if you are interested in joining a chapter at one of these schools or starting a chapter at a new school!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapters'
}
</script>

<style scoped lang="scss">
#chapters {
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

.container {
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.container iframe {
  border: none;
  outline: none;
}

p {
  margin-top: 40px;
}

a {
  color: #2980b9;
}
</style>
