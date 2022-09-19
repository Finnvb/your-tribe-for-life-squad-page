<script>
    export let title;
    export let text;
    export let image;
</script>


    <section >
        <h2>{title}</h2>
        <p>{text}</p>
        <img src="{image}" alt="bgImage">
    </section>


<style>


    section {
        background-color: black;
        display: flex;
        justify-content: end;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        width: calc(100% / 3);
        height: 100vh;
        position: relative;
        transition: 400ms;
 
 
      
    }

    section:hover{
        width: 40%;
        /* filter: blur(0); */
    }

    section:hover::before {
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    

    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        /* filter: blur(2px); */
    }

 
    h2 {
        font-weight: bold;
        font-size: 3rem;
        z-index: 10;
    }

    p {
        z-index: 10;
    }


    section::before {
        content: "";
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
 
    
    }

</style>
