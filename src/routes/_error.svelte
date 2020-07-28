<script>
	export let status;
	export let error;
</script>

<style>
	.container {
		margin:40px;
	}
</style>
<svelte:head>
	<title>Error : {status}</title>
</svelte:head>

{#if status === 404}
	<div class="container">
		<article class="message is-warning">
			<div class="message-header">
				<p>Page Not Found</p>
			</div>
			<div class="message-body">
				Click <a href="/">here</a> to go back to Home page
			</div>
		</article>
	</div>
{:else}
	<div class="container">
		<article class="message is-danger">
			<div class="message-header">
				<p>Error</p>
			</div>
			<div class="message-body">
				{error.message}
			</div>
		</article>
	</div>
{/if}
