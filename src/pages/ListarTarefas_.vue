<template>
  <div>
    <q-btn @click="fetchTasks">Carregar Tarefas</q-btn>
    <q-list>
      <q-item>
        <q-item-section>Título</q-item-section>
        <q-item-section>Descrição</q-item-section>
        <q-item-section>Categoria</q-item-section>
         <q-item-section></q-item-section>
         <q-item-section></q-item-section>
      </q-item>
      <q-item v-for="task in tasks" :key="task.id">
        <q-item-section>{{ task.title }}</q-item-section>
        <q-item-section>{{ task.description }}</q-item-section>
        <q-item-section>{{ task.category }}</q-item-section>
         <q-item-section>excluir </q-item-section>
         <q-item-section> editar</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      const response = await api.get('/tasks');
      this.tasks = response.data;
    },
  },
};
</script>
