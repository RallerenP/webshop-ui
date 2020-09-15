<div class="w-full bg-blue banner-container">
    <img src="/images/apple.jpg">
    <div class="bg-pink-300 banner-content-container w-full h-full">
        <div class="banner-content">
            <p class="text-4xl bold">
                Eat Well.<br>
                <span class="text-glitch">Live</span> Well.
            </p>
            <hr class="border-black border-bottom border-b-4 w-2/6"/>
            <p>
              Welcome to <b>Real Apples™</b>, the home of the healthy, apple-soul infused snack bar.
            </p>

        </div>
    </div>
</div>

<style lang="scss">
    .banner-container {
        height: calc(100vh - 6rem - 4rem);
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;

            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .banner-content {
            width: 200px;
            position: absolute;
            top: 50%;
            left: 25%;
            transform: translate(-50%, -50%);

            hr {

            }
        }
    }

    .text-glitch {
        text-shadow: rgba(10, 189, 240, 0.298039) 3px 3px 0px, rgba(254, 1, 1, 0.298039) -3px -3px 0px;
    }
</style>