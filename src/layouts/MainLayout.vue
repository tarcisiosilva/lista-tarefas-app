<template>
  <q-layout view="hHh lpR fFf">
    <!-- Cabeçalho -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleDrawer" aria-label="Menu" />
        <q-toolbar-title>
          Lista de Tarefas
        </q-toolbar-title>
        <q-btn flat round dense icon="settings" @click="onSettings" aria-label="Configurações" />
      </q-toolbar>
    </q-header>

    <!-- Barra Lateral -->
    <q-drawer show-if-above v-model="drawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple to="/tarefas">
          <q-item-section avatar>
            <q-icon name="checklist" />
          </q-item-section>
          <q-item-section >Tarefas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/relatorios">
          <q-item-section avatar>
            <q-icon name="analytics" />
          </q-item-section>
          <q-item-section>Relatórios</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Conteúdo Principal -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Rodapé -->
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>
          © 2025 Minha Aplicação
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      drawerOpen: true, // Controle do estado da barra lateral
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    onSettings() {
      this.$q.notify({
        message: "Configurações em desenvolvimento!",
        type: "info",
      });
    },
  },
};
</script>

<style scoped>
/* Estilo opcional para o layout */
.q-toolbar-title {
  font-weight: bold;
}
</style>
