<template>
  <div class="home">
    <div class="pageText">
      <h1>Choose the language you want to have a quiz on: </h1>
    </div>
    <div class="java">
      <h2>Java</h2>
    </div>
    <div class="javaScript">
      <h2>JavaScript</h2>
    </div>
    <div class="cSharp">
      <h2>C#</h2>
    </div>
  </div>
</template>

<style>

.pageText {
  font-size: 1.2em;
  margin: 1em;
  padding: 0;
  text-align: center;
  color: #c84b31;
}

.java, .javaScript, .cSharp {
  max-width: 35em;
  margin: 5em auto auto auto;
  display: flex;
  background-color: #2d4263;
  border-radius: 0.5em;
  padding: 0.5em 0.5em 1em 0.5em;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

h2 {
  font-size: 2.2em;
}

.home {
  margin: 1em;

}

@media screen and (max-width: 1024px) {
  .pageText {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 1024px) {
  .java, .javaScript, .cSharp {
    margin-top: 2.5em;
  }
}

</style>