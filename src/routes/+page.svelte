<svelte:head>
	<title>Store Sphere | Home</title>
	<meta name="description" content="Home" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
	<div class="container mx-auto px-4 text-center">
		<h1 class="mb-6 text-5xl font-bold">Store and Manage Your Files with Ease</h1>
		<p class="mb-8 text-xl">
			Store Sphere is an open-source file storage solution that lets you create buckets, upload
			files, and manage them securely.
		</p>
		<div class="space-x-4">
			<a
				href="/auth/register"
				class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-gray-100"
			>
				Get Started
			</a>
			<a
				href="https://github.com/DanteDeLordran/store-sphere"
				target="_blank"
				class="rounded-lg border border-white bg-transparent px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-600"
			>
				View on GitHub
			</a>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold">Why Choose Store Sphere?</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Feature 1 -->
			<div class="rounded-lg bg-white p-8 text-center shadow-md">
				<div class="mb-4 text-4xl">📁</div>
				<h3 class="mb-4 text-xl font-bold">Create Buckets</h3>
				<p class="text-gray-600">
					Organize your files into customizable buckets for better management and accessibility.
				</p>
			</div>

			<!-- Feature 2 -->
			<div class="rounded-lg bg-white p-8 text-center shadow-md">
				<div class="mb-4 text-4xl">⬆️</div>
				<h3 class="mb-4 text-xl font-bold">Upload & Download</h3>
				<p class="text-gray-600">
					Easily upload and download files from your buckets with just a few clicks.
				</p>
			</div>

			<!-- Feature 3 -->
			<div class="rounded-lg bg-white p-8 text-center shadow-md">
				<div class="mb-4 text-4xl">🔒</div>
				<h3 class="mb-4 text-xl font-bold">Secure & Open Source</h3>
				<p class="text-gray-600">
					You own your data. Store Sphere is open-source, so you can trust its transparency.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Call-to-Action Section -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
		<p class="mb-8 text-xl">Sign up now and start managing your files effortlessly.</p>
		<a
			href="/auth/register"
			class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-gray-100"
		>
			Sign Up for Free
		</a>
	</div>
</section>

<section class="bg-white py-16">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-12 text-3xl font-bold">What Our Users Say</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="rounded-lg bg-gray-50 p-8 shadow-md">
				<p class="text-gray-600 italic">
					"Store Sphere is the best file management tool I've ever used!"
				</p>
				<p class="mt-4 font-bold">- User 1</p>
			</div>
			<div class="rounded-lg bg-gray-50 p-8 shadow-md">
				<p class="text-gray-600 italic">
					"The open-source nature of Store Sphere gives me peace of mind."
				</p>
				<p class="mt-4 font-bold">- User 2</p>
			</div>
		</div>
	</div>
</section>
