<template>
  <div id="home">
    <div id="content">
      <div class="mission">
        <h1>OUR MISSION</h1>
        <p>Our mission at Empowering Youth Action: is to educate youth on important current issues, encourage each other to advocate for issues we care about, and inspire youth to make our voices heard through social media campaigns, large events, discussions with lawmakers, and other forms of advocacy.</p>
        <div class="buttons">
          <a href="/join">Get Involved</a>
          <a href="/movement">Learn More</a>
        </div>
      </div>
      <div class="section announcements">
        <h1>ANNOUNCING...</h1>
        <h2>Our Initiative on Education Inequality</h2>
        <div class="buttons">
          <a href="/initiatives/education">Learn More</a>
        </div>
      </div>
      <div class="section instagram grey">
        <h1>INSTAGRAM FEED</h1>
        <a href="https://www.instagram.com/empoweringyouthaction/" target="_blank">Visit Instagram Account</a>
        <div class="posts">
          <iframe src="https://www.instagram.com/p/B_d9JnZJXzq/embed/captioned" width="320" height="425" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
          <iframe src="https://www.instagram.com/p/B_XyeL1JJ01/embed/captioned" width="320" height="425" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
          <iframe src="https://www.instagram.com/p/B_QwF2Xplac/embed/captioned" width="320" height="425" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
          <iframe src="https://www.instagram.com/p/B_GQSlIJxGv/embed/captioned" width="320" height="425" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
        </div>
      </div>
      <Footer></Footer>
    </div>
    <div class="background">
      <img style="opacity: 0.8" src="@/assets/background2.jpg"/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>

<style scoped lang="scss">
.background {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(45deg, #2980b9, #2c3e50);
}

.background img {
  min-width: 100%;
  min-height: 100%;
  width: 100vw;
  object-fit: cover;
}

.background:after {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  box-shadow: inset 0px 0px 200px black;
}

#content {
  position: absolute;
  margin-top: 80px;
  height: calc(100vh - 80px);
  width: 100vw;
  z-index: 0;
}

.mission {
  position: absolute;
  color: white;
  margin-top: calc(50vh - 40px - 200px);
  height: 320px;
  width: 700px;
  margin-left: 100px;
  background: linear-gradient(45deg, #2980b9, #2c3e50);
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 1);
}

.mission h1 {
  font-size: 48px;
  line-height: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
}

.mission p {
  line-height: 150%;
}

.mission .buttons {
  margin-top: 45px;
}

.mobile .mission {
  margin-left: 0;
  width: 100vw;
  border-radius: 0;
  height: auto;
}

.announcements {
  margin-top: calc(100vh - 80px);
  height: 300px;
  padding: 50px 100px;
}

.mobile .announcements {
  margin-top: calc(100vh - 40px);
  height: 250px;
  padding: 0 20px;
}

.instagram {
  width: 100vw;
  height: 680px;
  padding: 50px 100px;
  height: 700px;
}

.mobile .instagram {
  padding: 50px 20px;
}

.instagram a {
  color: #2980b9;
  font-size: 18px;
  margin: 20px 0;
  text-decoration: underline;
  display: block;
}

.instagram .posts {
  display: flex;
  width: calc(100vw - 200px);
  height: 450px;
  overflow: scroll;
}

.mobile .instagram .posts {
  width: calc(100vw - 40px);
}

.instagram .posts iframe {
  border-radius: 5px;
  margin-right: 50px;
}
</style>
