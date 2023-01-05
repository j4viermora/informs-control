<script lang="ts" setup>
import { DatesUtils } from "../../utils";
import { useInforms } from "../../composables";
import { Mouths } from "../../types/common.types";
import { ref } from "vue";

const { addInform, getInforms, isLoading } = useInforms();
const date = new DatesUtils();

// addInform();
getInforms();

const hours = ref<number>();
const publications = ref<number>();
const reVisit = ref<number>();
const bibleCourses = ref<number>();
const pubId = ref<string>("");
const mouth = ref<Mouths>(date.getMouth());
const year = ref<string>(date.getYear());

const inputs = [
  {
    label: "Horas",
    type: "number",
    value: hours,
    required: true,
  },
  {
    label: "Publicaciones",
    type: "number",
    value: publications,
    required: false,
  },
  {
    label: "Revisitas",
    type: "number",
    value: reVisit,
    required: false,
  },
  {
    label: "Cursos de Biblia",
    type: "number",
    value: bibleCourses,
    required: false,
  },
];

const submit = () => {
  addInform({
    hours: hours.value,
    publications: publications.value,
    reVisit: reVisit.value,
    bibleCourse: bibleCourses.value,
    pubId: pubId.value,
    date: date.getDate(),
    groupId: "1",
    year: year.value,
    mouth: mouth.value,
  })
    .then(() => {
      resetForm();
    })
    .catch((err) => {
      alert(err);
    });
};

const resetForm = () => {
  hours.value = 0;
  publications.value = 0;
  reVisit.value = 0;
  bibleCourses.value = 0;
  pubId.value = "";
  mouth.value = date.getMouth();
  year.value = date.getYear();
};
</script>
<template>
  <div v-if="isLoading">
    <h2>Registrando...</h2>
  </div>
  <div v-else="!isLoading" class="centered">
    <div class="card form-card">
      <div class="card-content">
        <h2 class="title is-4">Informe mes de {{ mouth }} {{ year }}</h2>
        <form @submit.prevent="submit">
          <div class="field">
            <label class="label">Mes</label>
            <div class="control">
              <div class="select full">
                <select v-model="mouth" required>
                  <option value="">Selecciona un mes</option>
                  <option value="enero">Enero</option>
                  <option value="febrero">Febrero</option>
                  <option value="marzo">Marzo</option>
                  <option value="abril">Abril</option>
                  <option value="mayo">Mayo</option>
                  <option value="junio">Junio</option>
                  <option value="julio">Julio</option>
                  <option value="agosto">Agosto</option>
                  <option value="septiembre">Septiembre</option>
                  <option value="octubre">Octubre</option>
                  <option value="noviembre">Noviembre</option>
                  <option value="diciembre">Diciembre</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Año</label>
            <div class="control">
              <input
                v-model="year"
                class="input"
                type="number"
                min="2000"
                max="2030"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Publicador</label>
            <div class="control">
              <div class="select full">
                <select v-model="pubId" required>
                  <option value="">Selecciona un publicador</option>
                  <option value="javier_mora">Javier Mora</option>
                  <option value="suleima_de_mora">Suleima de mora</option>
                </select>
              </div>
            </div>
          </div>
          <div v-for="{ label, type, value, required } in inputs">
            <div class="field mb-4">
              <label class="label">{{ label }}</label>
              <div class="control">
                <input
                  v-model="value.value"
                  class="input"
                  :type="type"
                  :required="required"
                />
              </div>
            </div>
          </div>
          <button class="button is-primary" type="submit">Registar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-card {
  min-width: 350px;
}
.centered {
  display: grid;
  place-items: center;
}
</style>
