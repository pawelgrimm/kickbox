<script>
	import kickbox from "./kickbox.svg";
	import logo from "./logo.svg"
</script>

<header>
	<div class="banner"></div>
	<img class="logo" src={logo} alt="kickbox logo"/>
	<img class="kickbox" src={kickbox} alt="large text that says kickbox"/>
	<div class="columns">
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
	</div>
<!--	<nav>-->
<!--		<svg viewBox="0 0 2 3" aria-hidden="true">-->
<!--			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />-->
<!--		</svg>-->
<!--		<ul>-->
<!--			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>-->
<!--			<li class:active={$page.url.pathname === '/about'}>-->
<!--				<a sveltekit:prefetch href="/about">About</a>-->
<!--			</li>-->
<!--			<li class:active={$page.url.pathname === '/todos'}>-->
<!--				<a sveltekit:prefetch href="/todos">Todos</a>-->
<!--			</li>-->
<!--		</ul>-->
<!--		<svg viewBox="0 0 2 3" aria-hidden="true">-->
<!--			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />-->
<!--		</svg>-->
<!--	</nav>-->

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		position: relative;
		display: flex;
		justify-content: space-between;
		z-index: -1000;
		height: 100vh;
		width: 100vw;
	}
	.banner {
		position: absolute;
		left: 0;
		top: 0;
		width: calc(2 * var(--column-width) + var(--margin) + var(--gutter));
		background: var(--accent-color);
		height: 100vh;
	}

	.kickbox {
		position: absolute;
		left: calc(2 * var(--column-width) + var(--margin) + 2 * var(--gutter));
		top: var(--margin);
		width: calc(10 * var(--column-width) + 9 * var(--gutter));
	}

	.logo {
		position: absolute;
		left: calc(var(--margin) + var(--gutter));
		top: var(--margin);
		width: calc((2 * var(--column-width)) - var(--margin) - var(--gutter));

		/*width: calc(0.59 * (2 * var(--column-width) + var(--margin) + var(--gutter)));*/
	}

	.columns {
		display: none;
		/*display: flex;*/
		position: absolute;
		top:0;
		left: 0;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
		gap: var(--gutter);
		margin: 0 var(--margin);
	}

	.column {
		background: rgba(255,0,0,.2);
		width: var(--column-width);
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
