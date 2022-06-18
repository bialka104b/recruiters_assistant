<template>
    <div>
        <!-- {{user.name}} -->
    </div>
</template>

<script lang="ts">
export default {
    props: ['user'],
    data() { 
        return {
            data: {
                name: '',
                surname: ''
            }
        }
    }
}
</script>