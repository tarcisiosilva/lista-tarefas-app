<template>
  <q-page>
    <div class="q-pa-md">
      <h2>Minhas Tarefas</h2>
      <q-list bordered>
       <q-item class="">
          <q-item-section>Tarefas</q-item-section>
          <q-item-section>Data</q-item-section>
          <q-item-section>Status</q-item-section>
          <q-item-section></q-item-section>
          <q-item-section></q-item-section>
          <q-item-section></q-item-section>
        </q-item>
        <q-item v-for="tarefa in tasks" :key="tarefa.id" clickable>
          <q-item-section>{{ tarefa.title }}</q-item-section>
          <q-item-section>{{ tarefa.data_tarefa }}</q-item-section>
          <q-item-section>{{ tarefa.status }}</q-item-section>
          <q-item-section><buttom>Visualizar</buttom></q-item-section>
          <q-item-section><buttom>Editar</buttom></q-item-section>
          <q-item-section><buttom>Excluir</buttom></q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
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
    // Função para buscar tarefas do backend
    async fetchTasks() {
      try {
        const response = await api.get("/tasks");
        this.tasks = response.data; // Atualiza a lista de tarefas
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        this.$q.notify({
          type: "negative",
          message: "Erro ao carregar as tarefas.",
        });
      }
    },
  },
  mounted() {
    // Chama a função automaticamente quando o componente é montado
    this.fetchTasks();
  },
};
</script>

