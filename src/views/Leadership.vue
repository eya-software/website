<template>
  <div id="leadership">
    <div class="section">
      <h1>Leadership</h1>
      <div class="grid">
        <div class="card">
          <h3>Veer Juneja</h3>
          <h4>President and Founder</h4>
          <img src="@/assets/leaders/veer.jpg">
          <p>Hi! I am a Senior at Bellarmine College Preparatory in San Jose, California. Empowering Youth Action to me is not only an activism movement, but a community. When all of us come together and work to incite actually meaningful change, I know we can achieve massive feats. Asides from helping lead Empowering Youth Action, I participate in Speech and Debate and play soccer.</p>
        </div>
        <div class="card">
          <h3>Michael Lutz</h3>
          <h4>Operations Director and Founder</h4>
          <img src="@/assets/leaders/michael.jpg">
          <p>Hey! I am a Senior at Bellarmine College Preparatory, a passionate STEM student, an avid Speech and Debater, and a firm believer in making our voices heard. I believe that action in the face of adversity is the cornerstone of our organization - to take concrete action with nation-wide impacts. I believe that we can take significant measures against our nation’s many societal issues and enact visible change on societal and legislative levels.</p>
        </div>
        <div class="card">
          <h3>John Xu</h3>
          <h4>Content Director and Founder</h4>
          <img src="@/assets/leaders/john.jpg">
          <p>Hi! I’m a student at Bellarmine college preparatory. As youth, it’s really easy to underestimate the power of our voices and ability to enact concrete change within our society. However, with the exacerbation of issues such as climate change and mental health, it is imperative that we work together to make our impact and create change by tackling these problems headon.</p>
        </div>
        <div class="card">
          <h3>Saket Budhia</h3>
          <h4>Content Director and Founder</h4>
          <img src="@/assets/leaders/saket.jpg">
          <p>Hello! I am a Senior at Bellarmine College Preparatory in San Jose, California. I wanted to help start this club because I believe that the youth of today deserve to have a say in our future. I want to give myself and people like myself the chance to speak out against the injustices we see in our society and hold our politicians accountable for looking after our future. In addition to Empowering Youth Action, I’m also involved in Boy Scouts, Speech and Debate, and various forms of music.</p>
        </div>
        <div class="card">
          <h3>Saurav Kumar</h3>
          <h4>Tech Director</h4>
          <img src="@/assets/leaders/saurav.jpg">
          <p>Hey! I'm a Senior at Bellarmine, passionate about entrepreneurship and deep tech. I joined Empowering Youth Action to advocate for issues I care about. With the leverage of tech, students like me can make a difference in communities around the world. In my free time, I love learning about space and building apps (check out lapisnews.app!). </p>
        </div>
        <div class="card">
          <h3>Ryan Alappatt</h3>
          <h4>Finance Director</h4>
          <img src="@/assets/leaders/ryan.jpg">
          <p>Hi there! I’m a senior at Bellarmine College Prep, down in San Jose, California! As a passionate student of organizational finance, ardent public speaker, and a first-hand witness of the power of youth activism, I strive for potent and meaningful change. In seeking social justice not only in my community, but in neighborhoods across the nation, I believe that the power of grassroots activism is second to none, and I hope to utilize my talents towards enhancing societal standards. When I’m not working with EYA, I enjoy indie films, making guacamole, and reading anything you would recommend. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leadership'
}
</script>

<style scoped lang="scss">
#leadership {
  position: absolute;
  margin-top: 80px;
}

.grid {
  display: inline-block;
  margin-left: -20px;
  margin-right: -20px;
}

.card {
  display: inline-block;
  width: 300px;
  height: 670px;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}

.mobile .card {
  width: calc(100vw - 40px);
  height: auto;
}

img {
  width: 100%;
  border-radius: 5px;
  margin: 20px 0;
}

.mobile img {
  width: calc(100vw - 80px);
}

h3 {
  font-size: 22px;
}

h4 {
  font-weight: normal;
  font-size: 16px;
}
</style>
