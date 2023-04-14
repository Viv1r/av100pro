<template>

<div class="dropdown-list">
    <label class="dropdown-list__label">
        <slot name="label"></slot>
    </label>
    <div class="dropdown-list__container">
        <div class="dropdown-list__heading" @click="active = !active">
            {{ selectedItem.name || placeholder }}
            <img src="@/assets/svg/dropdown-arrow.svg" alt=" " class="arrow" :class="{ flip: active }">
        </div>
        <div v-if="active" class="dropdown-list__options">
            <div
                v-for="(option, index) in options"
                class="option"
                :class="{selected: selectedItem.uid === option.uid}"
                @click="selectItem(option)"
                :key="index"
            >
                {{ option.name }}
            </div>
        </div>
    </div>
</div>

</template>

<script lang="ts">
import type { Option } from '@/types/Option';

export default {
    data() {
        return {
            active: false
        }
    },
    props: {
        value: {
            default: undefined
        },
        options: {
            type: Array<Option>,
            default: []
        },
        placeholder: {
            type: String,
            default: 'Выберите элемент'
        }
    },
    computed: {
        selectedItem(): any {
            return this.options.find((item: Option) => item.uid === this.value) ?? {};
        }
    },
    methods: {
        selectItem(item: Option) {
            this.value = item.uid;
            this.$emit('input', item.uid);
            this.active = false;
        }
    },
    emits: ['input']
}
</script>

<style src="./DropdownList.scss" scoped></style>