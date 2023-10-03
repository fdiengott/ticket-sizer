<script>
    import { socket } from '$lib/realtime';
    import { users as userStore } from '../store.js';

    let users = [];

    let isStory = true;

    let storyScores = [1, 2, 3, 5, 8, 13]
    let epicScores = [20, 40, 100]

    const addScore = points => e => {
        console.log(points);

        socket.emit("addScore", { username: 'username', points })
    }
</script>

<ul>
    {#each (isStory ? storyScores : epicScores) as score}
        <button on:click={addScore(score)}>{score}</button>
    {/each}
</ul>
