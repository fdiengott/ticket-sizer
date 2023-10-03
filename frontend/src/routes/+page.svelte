<script>
    import { socket } from '$lib/realtime';
	import { onMount } from 'svelte';
    import { users as userStore } from '../store.js';
	import LoginForm from '../components/LoginForm.svelte';
	import UsersList from '../components/UsersList.svelte';

    let users = [];
    let username = '';
    let isAdmin = false;
    let loggedIn = false;

    userStore.subscribe(prevUsers => {
        users = [...prevUsers];
    });

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
        socket.emit("login", { username, admin: isAdmin })

        loggedIn = true;
    }

    onMount(() => {
        socket.on('connect', () => {
            connected = true;
        })

        socket.on('new-user', user => {
            userStore.update(() => [...users, user])
            // users = [...users, user]
        })

        // socket.on("vote", )
    });



</script>

{#if showConnectedBanner}
    <div class="banner">Connected</div>
{/if}

{#if !loggedIn}
    <LoginForm {handleSubmit} bind:username={username} {isAdmin} />
{:else}
    <div>Ready</div>
{/if}

<UsersList {users} />

<style>

</style>
