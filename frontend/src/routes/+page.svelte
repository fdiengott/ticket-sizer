<script>
    import { socket } from '$lib/realtime';
	import { onMount } from 'svelte';

    let storyScores = [1, 2, 3, 5, 8, 13]
    let epicScores = [20, 40, 100]

    let isStory = true;

    let users = [];
    let thisUser = '';

    const addScore = points => e => {
        console.log(points);

        socket.emit("addScore", { username: 'username', points })
    }

    let connected = false;
    let showConnectedBanner = false;
    const toggleShowConnectedBanner = () => {
        showConnectedBanner = true;

        setTimeout(() => {
            if (connected) {
                showConnectedBanner = false
            }
        }, 1000);
    }

    $: toggleShowConnectedBanner();


    const handleSubmit = () => {

    }

    onMount(() => {
        socket.on('connect', () => {
            connected = true;
        })

        socket.on("login", user => {
            users.push(user);
        })

        // socket.on("vote", )
    })
</script>

<style>

</style>

{#if showConnectedBanner}
    <div class="banner">Connected</div>
{/if}

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" value={}>
</form>


<ul>
    {#each users as user}
        <li>{user}</li>
    {/each}
</ul>

<ul>
    {#each (isStory ? storyScores : epicScores) as score}
        <button on:click={addScore(score)}>{score}</button>
    {/each}
</ul>
