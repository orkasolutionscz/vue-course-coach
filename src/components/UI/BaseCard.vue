<template>
    <div class="cardbase">
        <slot>

        </slot>

    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
.cardbase {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>