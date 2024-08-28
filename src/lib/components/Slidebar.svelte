<script>
	import fly from "./transitions.js";
	export let open = false;
</script>

{#if open}
	<div class="drawer" transition:fly={{ x: "100%" }}>
		<center><h1 class="symbol-info">Attribution</h1></center>
		<p>
			This work came from threejs 
			<a href="https://github.com/mrdoob/three.js/blob/master/examples/css3d_periodictable.html">
			examples</a> and then adapted to sveltekit. To show more information, click on one of the 
			elements. 

			In the dialog box there is a link to even more information about the specific element.
		</p>
		<p>
			See this <a href="https://jsfiddle.net/9tng8dp0/2/">fiddle</a> for a reference on how the 'pointerdown'
			event was used on the CSS3DObjects.
		</p>

		<p>Data Attribution:<br><a href="https://github.com/Bowserinator/Periodic-Table-JSON">
				https://github.com/Bowserinator/Periodic-Table-JSON</a>
		</p>
		<p> Source code may be found <a href="https://github.com/awindest/periodic-table-3d">here</a></p>
		<p>			
			Future plans are maybe migrate to Threlte.
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
		background: rgba(255, 255, 255, 0.25);
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
