<template>
  <div id="movement">
    <div class="section">
      <h1>What We Do</h1>
      <p>Empowering Youth Action is a movement founded by youth, for youth looking to make a difference in the politics of the United States. We use social media campaigns, events, fundraisers, meetings with politicians, and other means of information to spread awareness about the important issues we face.</p>
      <img src="@/assets/gathering.jpg">
    </div>
    <div class="section grey">
      <h1>Why Join?</h1>
      <p>If you are interested in educating yourself about key issues, giving yourself important advocacy skills for the future, or understanding how activism movements work, then this club will is for you! We give you a platform to talk about the issues that YOU care about!</p>
    </div>
    <div class="section">
      <h1>Get involved</h1>
      <p>If you are interested in joining, please click the button below!</p>
      <div class="buttons">
        <a href="/join">Join</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movement'
}
</script>

<style scoped lang="scss">
#movement {
  position: absolute;
  margin-top: 80px;
  align-items: center;
  vertical-align: middle;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
}

.section {
  max-width: 900px;
}
</style>
