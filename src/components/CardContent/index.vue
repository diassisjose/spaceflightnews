<template>
  <div class="flex flex-row w-full p-10 mx-auto md:w-2/3">
    <div
      class="flex-none w-2/5"
    >
      <img class="object-cover w-full h-72" src="../../assets/images/image.jpg" alt="logo">
    </div>
    <div class="w-3/5 pt-4 pl-10 space-y-2">
      <h3 class="text-4xl font-brandBold">Lorem ipsum dolor sit.</h3>
      <div class="flex justify-between">
        <span class="py-1 text-sm">dd/mm/yyyy</span>
        <span class="px-4 py-1 text-white bg-brand-main">NewSite</span>
      </div>
      <p class="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi asperiores quibusdam aspernatur expedita optio,
        quam alias aliquid blanditiis. Quis officia dicta possimus velit.
      </p>
      <div class="flex">
        <button
          class="px-8 py-3 text-white transition rounded bg-brand-info hover:bg-brand-main"
          @click="() => emit('modalNews')"
        >
          Ver mais
        </button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  setup (_, { emit }) {
    return { emit }
  }
}
</script>
