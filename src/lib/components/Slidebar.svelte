<script>
	import fly from "./transitions.js";
	export let open = false;
</script>

{#if open}
	<div class="drawer" transition:fly={{ x: "100%" }}>
		<center><h1>Attribution</h1></center>
		<p>
			This work came from threejs 
			<a href="https://github.com/mrdoob/three.js/blob/master/examples/css3d_periodictable.html">
			examples</a> and then adapted to sveltekit.
			Currently trying to implement click on an element and have more
			information popup in a dialog box. 
			See this <a href="https://jsfiddle.net/9tng8dp0/2/">fiddle</a> for a reference.
			And then maybe migrate to Threlte.
		</p>


	</div>
{/if}

<style>
	.drawer {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		padding: 25px;
		height: 100vh;
		width: 400px;
		box-shadow: 0px 0px 12px rgba(0,255,255,0.5);;
        border-left: 1px solid rgba(127,255,255,0.25);
/* 		
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: -2px 0px 6px -1px rgba(0, 0, 0, 0.1); */
		background: rgba(255, 255, 255, 0.25);
		/* background-color: rgba(0,255,255,0.5); */
		background-color: rgba(0,127,127,0.5);

		backdrop-filter: blur(20px);
		overflow: auto;
	}
	div {
		font-size: 20px;
		color: #FFFFFF;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	}
</style>
