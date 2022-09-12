<template>
  <header>
    <div class="flex items-center justify-end w-4/5 h-24 mx-auto">
      <form>
        <div class="px-4">
          <input class="px-4 py-2 border-2 rounded w-52" type="search" name="Search" id="" placeholder="Search">
          <button class="px-4 py-2 text-white bg-brand-main">P</button>
        </div>
      </form>
      <div class="">
        <select class="px-4 py-2" name="Sort" id="">
          <option value="">Mais antigas</option>
          <option value="">Mais novas</option>
        </select>
      </div>
    </div>
    <div class="py-4">
      <img class="w-24 mx-auto md:w-28 lg:w-36" src="../../assets/images/logo.png" alt="logo">
      <h1 class="py-6 text-2xl text-center md:py-10 lg:text-4xl text-brand-main font-brandRegular">Space Flight News</h1>
    </div>
  </header>

</template>
<script>
export default {
}
</script>
