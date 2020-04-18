<template>
  <div 
    class="card"
    v-bind:id="id"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    >
    <slot />
  </div>
</template>

<script>
export default {
    props : ['id', 'draggable'],
    methods : {
        dragStart: e => {
            const target = e.target;
            e.dataTransfer.setData('card_id', target.id)
            setTimeout(() => {
                target.style.display = "none";
            }, 0);
        }
    }
}
</script>

<style>

</style>