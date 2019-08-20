<template>
	<div class="harf shadow mr-3">
		<span v-if="acik">{{deger}}</span>
		<span v-else></span>
	</div>
</template>

<script>
export default {
	props: {
		deger: {
			type: String,
			default: ""
		},
		acik: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
.harf {
	width: 80px;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30pt;
}
</style>