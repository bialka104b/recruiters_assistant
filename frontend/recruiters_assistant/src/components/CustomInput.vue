<template>
    <div class="w-100 bigcheck">
        <label class="bigcheck">
            <input type="checkbox" class="bigcheck" id="android"
            name="android"
            value="android"
            />
            <span class="bigcheck-target"></span>
            Android
        </label>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
	msg: string;
}>();
</script>