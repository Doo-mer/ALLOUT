<template>
  <v-app>
    <v-container>
      <v-row align="center">
        <v-col cols="12" class="text-center">
          <v-div class="text-[3.5rem] font-bold">ALL OUT</v-div>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-div class="text-sm">자기 전 마음을 털어놓는 시간</v-div>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-div>우아악</v-div>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn>시작하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const feature = ref();
</script>