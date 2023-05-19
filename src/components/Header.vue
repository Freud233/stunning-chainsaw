<template>
	<header id="header-menu"
		class="sticky top-0 z-10 flex h-14 bg-[#F4B400]  py-3 shadow-sm transition-all dark:bg-gray-800"
		x-data="{ open : false }">
		<div class="container mx-auto flex h-full justify-between">
			<div class="flex h-full items-center gap-6">
				<div class="mr-2 h-full">
					<a href="/" class="inline-flex h-full items-center">
						<span id="site-title" class="text-lg font-medium text-gray-900 dark:text-slate-100">ZhangDoDo</span>
					</a>
				</div>
				<ul class="hidden items-center gap-8 sm:flex">
					<li class="relative cursor-pointer text-sm font-medium transition-all" x-data="dropdown">
						<router-link	class="text-gray-600 hover:text-blue-600 dark:text-slate-50 dark:hover:text-gray-300" to="/categorys/1" >首页</router-link>
					</li>
					<li class="relative cursor-pointer text-sm font-medium transition-all" x-data="dropdown">
						<a class="text-gray-600 hover:text-blue-600 dark:text-slate-50 dark:hover:text-gray-300"
							href="/archives/docker%20install">Doker</a>

					</li>
					<li class="relative cursor-pointer text-sm font-medium transition-all" x-data="dropdown">
						<a class="text-gray-600 hover:text-blue-600 dark:text-slate-50 dark:hover:text-gray-300"
							href="/tags/halo">DODO</a>

					</li>
					<li class="relative cursor-pointer text-sm font-medium transition-all" x-data="dropdown">
						<a class="text-gray-600 hover:text-blue-600 dark:text-slate-50 dark:hover:text-gray-300" href="/about">关于</a>

					</li>
				</ul>
			</div>
			<div class="flex items-center">
				<ul x-data="colorSchemeSwitcher" class="flex items-center gap-4">
					<li class="sm:hidden">
						<div class="i-tabler-menu-2 text-lg text-gray-600 hover:text-blue-600 dark:text-slate-100">
							<a class="block" href="#">
								<img src="../assets/svg/AdjustmentsHorizontal.svg" alt="">
							</a>
						</div>
					</li>
					<li x-data="dropdown" class="relative cursor-pointer transition-all">
						<div
							class="cursor-pointer text-lg text-gray-600 transition-all hover:text-blue-600 dark:text-slate-100 i-gg-sun">
						</div>
					</li>
					<!-- https://github.com/halo-sigs/plugin-search-widget -->
					<li>
						<a href="javascript:SearchWidget.open()" title="搜索"
							class="text-gray-600 hover:text-blue-600 dark:text-slate-100">
							<div class="i-tabler-search text-lg"></div>
						</a>
					</li>
					<li x-data="dropdown" class="relative cursor-pointer transition-all">
						<div>
							<div class="h-5 w-5 text-gray-600 hover:text-blue-600 dark:text-slate-100">
								<img class="h-5 w-5 rounded-full" src="../assets/svg/MagnifyingGlass.svg" alt="Anonymous User">
							</div>
							<ul x-show="show" x-transition:enter="transition ease-out duration-100"
								x-transition:enter-start="transform opacity-0 scale-95"
								x-transition:enter-end="transform opacity-100 scale-100"
								x-transition:leave="transition ease-in duration-75"
								x-transition:leave-start="transform opacity-100 scale-100"
								x-transition:leave-end="transform opacity-0 scale-95"
								class="absolute right-0 z-10 mt-2 w-40 divide-y divide-gray-50 overflow-hidden rounded bg-white shadow dark:divide-slate-600 dark:bg-slate-700"
								style="display: none;">
								<li class="flex w-full items-center text-left text-sm hover:bg-gray-50 dark:hover:bg-slate-600">
									<a class="h-full w-full truncate px-4 py-2 text-gray-600 hover:text-blue-600 dark:text-slate-50 dark:hover:text-gray-300"
										href="/console">
										登录
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<div class="fixed inset-0 z-50 bg-gray-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80" aria-hidden="true"
				x-show="open" x-transition:enter="ease-in-out duration-300" x-transition:enter-start="opacity-0"
				x-transition:enter-end="opacity-100" x-transition:leave="ease-in-out duration-300"
				x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" style="display: none;"></div>
			<div class="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-lg bg-white p-4 dark:bg-slate-900" tabindex="-1"
				x-show="open" x-transition:enter="ease-out duration-200"
				x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-100"
				x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
				x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" style="display: none;">
				<div class="flex flex-row-reverse items-center justify-between">
					<button class="i-tabler-x p-1 text-xl text-gray-600 dark:text-slate-300" type="button" tabindex="0"></button>
					<h2 class="text-sm font-medium text-gray-600 dark:text-slate-300">菜单</h2>
				</div>
				<nav class="mt-6">
					<ul class="-my-2 divide-y divide-gray-100 text-sm text-gray-800 dark:divide-slate-800 dark:text-slate-100">
						<li>
							<a class="flex items-center justify-between gap-1 py-2" href="/">
								<span>首页</span>
							</a>

						</li>
						<li>
							<a class="flex items-center justify-between gap-1 py-2" href="/archives/docker%20install">
								<span>docker</span>
							</a>

						</li>
						<li>
							<a class="flex items-center justify-between gap-1 py-2" href="/tags/halo">
								<span>DODO</span>
							</a>

						</li>
						<li>
							<a class="flex items-center justify-between gap-1 py-2" href="/about">
								<span>关于</span>
							</a>

						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
