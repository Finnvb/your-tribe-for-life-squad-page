<script>
     export let image;

  
</script>

<header>
  <h1>FDND.</h1>

  <div>

    <img src="{image}" alt="menuButton" on:click={console.log("hallo")}/>
    <p>Menu</p>
  
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1rem;
  }

  img {
    cursor: pointer;
  }
</style>
