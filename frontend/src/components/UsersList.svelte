<script>
    export let users;
</script>

<aside>
    <ul>
        {#each users as user, i}
            <li id={`user-${i}`}>
                {#if user.admin}
                <span class="admin-badge">Admin</span>
                {/if}
                {user.username}
            </li>
        {/each}
    </ul>
</aside>
