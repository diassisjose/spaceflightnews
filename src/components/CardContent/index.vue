<template>
  <div class="flex flex-row w-full p-10 mx-auto md:w-2/3">
    <div
      class="flex-none w-2/5"
    >
      <img class="object-cover w-full h-64" :src="imageUrl" alt="logo">
    </div>
    <div class="w-3/5 pt-4 pl-10 space-y-2">
      <h3 class="text-3xl font-brandBold">{{ title }}</h3>
      <div class="flex justify-between">
        <span class="py-1 text-sm">{{ publishedDate }}</span>
        <span class="px-4 py-1 text-sm text-white bg-brand-main">{{ newsSite }}</span>
      </div>
      <p class="text-md">{{ summaryReduced }}...  </p>
      <div class="flex">
        <button
          class="px-8 py-3 text-sm text-white transition rounded bg-brand-info hover:bg-brand-main"
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
  props: [
    'imageUrl',
    'title',
    'publishedAt',
    'newsSite',
    'summary'
  ],
  setup (_, { emit }) {
    return { emit }
  },
  computed: {
    summaryReduced () {
      return this.summary.substring(0, 120)
    },
    publishedDate () {
      const date = this.publishedAt.substring(0, 10)
      return date.split('-').reverse().join('/')
    }
  }
}
</script>
