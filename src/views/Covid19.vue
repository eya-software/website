<template>
  <div id="covid19" class="initiative">
    <div class="section">
      <h1>Voices During the Virus</h1>
      <p>We started our first initiative, Voices During the Virus, to:</p>
      <ol>
        <li>To give a voice to those involved</li>
        <li>To educate on COVID-19 related issues</li>
        <li>To show how YOU can help</li>
      </ol>
      <p>Our initiative’s most recent project was raising money for a non-profit that’s making face shields for medical professionals! We are happy to say that, working with other people, Empowering Youth Action helped raise over $8,000 for medical professionals across the bay area. We will be announcing a new project within the coming weeks, so stay tuned to our Voices During the Virus initiative!</p>
    </div>
    <!--
    <div class="gofundme section grey">
      <iframe
        src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=eya-seed-money&image=1&coinfo=1&preview=1"
        type="text/html"
      >
      </iframe>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'Covid19'
}
</script>

<style scoped lang="scss">
.section {
  max-width: 900px;
}

.gofundme {
  padding-top: 50px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 400px;
  height: 480px;
  outline: none;
  border: none;
}
</style>
