<script>
    export let title;
    export let text;
    export let image;
    export let link;
</script>



<section>
  
    <h2>{title}</h2>
    <p>{text}</p>
    <a href={link}>
    <img src={image} alt="bgImage" />
</a>
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

    section:hover {
        width: 40%;
    }

    a:hover::before {
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    }

    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }


    h2 {
        font-weight: bold;
        font-size: 3rem;
        z-index: 10;
        width: 4rem;
    }

    p {
        z-index: 10;
    }

    a::before {
        content: "";
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

a{
    z-index: 5;
}


    @media (max-width: 40em) {
        img {
            width: 100vw;
        }

        section:hover {
            background-color: rgba(0, 0, 0, 0);
            cursor: pointer;
        }
    }
</style>
