<template>

<div class="settings">
  <header>Настройки</header>
  <div class="container">

    <div class="section">
      <div class="section__header">
        Звонок через SIP
        <Switcher v-model="settings.calltype"/>
      </div>
      <div class="section__body">
        <p class="text-muted">
          Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт.
          Будет выглядеть так, будто звонки совершаются с разных номеров.
        </p>
      </div>
    </div>

    <div class="section">
      <div class="section__header">
        Учётная запись
      </div>
      <div class="section__body">
        <div class="section__fields">
          <InputField :value="settings.companyname" readonly>
            <template #label>Компания</template>
          </InputField>
          <InputField :value="settings.login" readonly>
            <template #label>Логин</template>
          </InputField>
          <InputField v-model="settings.phone">
            <template #label>Номер телефона</template>
          </InputField>
          <InputField v-model="settings.fname">
            <template #label>Имя</template>
          </InputField>
          <InputField v-model="settings.lname">
            <template #label>Фамилия</template>
          </InputField>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section__header">
        Оповещения о новых подборках
      </div>
      <div class="section__body">
        <p class="text-muted">
          Выберите, куда будут приходить уведомления при появлении автомобилей,
          которые подходят под критерии вашей подборки.
        </p>
        <RadioSelector v-model="settings.sendMethod"/>
      </div>
    </div>

  </div>
</div>

</template>

<script lang="ts">
import { mapState } from "vuex";
import InputField from '@/components/InputField/InputField.vue';
import Switcher from '@/components/Switcher/Switcher.vue';
import RadioSelector from "@/components/RadioSelector/RadioSelector.vue";

export default {
  components: {
    InputField,
    Switcher,
    RadioSelector
  },
  computed: {
    ...mapState(['settings'])
  }
}
</script>

<style src="./Settings.scss" scoped/>