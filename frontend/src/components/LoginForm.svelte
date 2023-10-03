<script>
    export let username;
    export let isAdmin;
    export let handleSubmit;
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="username">Enter a username</label>
    <input id="username" type="text" bind:value={username}>

    <label for="admin">Are you the admin?</label>
    <input type="checkbox" name="admin" id="admin" bind:checked={isAdmin}>

    <button type="submit">Join</button>
</form>
