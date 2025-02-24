<script lang="ts">
	let { data } = $props();
</script>

<h1>Users</h1>

<form method="POST">
	<label for="username">Username</label>
	<input type="text" name="username" id="username" />
	<button>Send</button>
</form>

<ul>
	{#each data.users as user}
		<li>
			<span> {user.id} </span>
			<span> {user.username} </span>
		</li>
	{/each}
</ul>
