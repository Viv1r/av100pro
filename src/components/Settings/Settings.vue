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
          <InputField :value="settings.companyname" readonly alwaysActive>
            <template #label>Компания</template>
          </InputField>
          <InputField :value="settings.login" readonly alwaysActive>
            <template #label>Логин</template>
          </InputField>
          <InputField v-model="settings.phone" alwaysActive>
            <template #label>Номер телефона</template>
          </InputField>
          <InputField v-model="settings.fname" alwaysActive>
            <template #label>Имя</template>
          </InputField>
          <InputField v-model="settings.lname" alwaysActive>
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
        <RadioSelector :options="sendMethod" v-model="settings.sendMethod">
          <template #2>
            <InputField v-model="settings.email"/>
          </template>
          <template #1>
            <InputField v-model="settings.telegramChat"/>
          </template>
        </RadioSelector>
      </div>
    </div>

    <div class="section">
      <div class="section__header">
        Переход в карточку
      </div>
      <div class="section__body">
        <p class="text-muted">
          Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.
        </p>
        <RadioSelector :options="redirecttarget" v-model="settings.redirecttarget"/>
      </div>
    </div>

    <div class="section" style="margin-bottom: 20px">
      <div class="section__header">
        Прочие настройки
      </div>
      <div class="section__body">
        <DropdownList :options="timezone" v-model="settings.timezone">
          <template #label>Часовой пояс</template>
        </DropdownList>
        <Checkbox v-model="settings.locklenta" hint="Лента будет автоматически обновляться 1 раз в 3 секунды">
          <template #label>Автоматически переходить к новым объявлениям</template>
        </Checkbox>
        <Checkbox v-model="settings.lentacolor" hint="Включение зеленого/желтого цвета">
          <template #label>Включить цвета в ленте</template>
        </Checkbox>
      </div>
    </div>

    <div class="section">
      <div class="section__header"></div>
      <div class="section__body">
        <div class="btn-save__wrapper">
          <button class="btn-save" @click.prevent="uploadSettings()">
            Сохранить
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

</template>

<script>
import { mapState, mapActions } from "vuex";
import InputField from '@/components/InputField/InputField.vue';
import Switcher from '@/components/Switcher/Switcher.vue';
import RadioSelector from "@/components/RadioSelector/RadioSelector.vue";
import DropdownList from "@/components/DropdownList/DropdownList.vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import sendMethod from "@/forms/sendMethod";
import redirecttarget from "@/forms/redirecttarget";
import timezone from "@/forms/timezone";

export default {
  components: {
    InputField,
    Switcher,
    RadioSelector,
    DropdownList,
    Checkbox
  },
  computed: {
    ...mapState(['settings']),
    redirecttarget: () => redirecttarget,
    sendMethod: () => sendMethod,
    timezone: () => timezone
  },
  methods: {
    ...mapActions(['uploadSettings'])
  }
}
</script>

<style src="./Settings.scss" scoped/>