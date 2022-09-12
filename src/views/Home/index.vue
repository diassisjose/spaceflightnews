<template>
  <Header />
  <section class="w-4/5 mx-auto">
    <card-content
      @modalNews="handleNews"
    />
  </section>
  <div>
  </div>
  <BtnLoader
  />
</template>
<script>
import Header from '@/components/Header'
import CardContent from '@/components/CardContent'
import BtnLoader from './BtnLoader'
import useModal from '../../hooks/useModal'
export default {
  components: {
    Header,
    CardContent,
    BtnLoader
  },
  setup () {
    const modal = useModal()

    function handleNews () {
      modal.open({
        component: 'ModalNews'
      })
    }

    return {
      handleNews
    }
  }
}
</script>
