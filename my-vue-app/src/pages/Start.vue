<template>
    <v-app>
      <!-- 상단 앱바 -->
      <v-app-bar
        flat
        color="transparent"
        class="text-white"
      >
        <v-btn icon @click="goBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title class="mx-auto">일기</v-toolbar-title>
      </v-app-bar>
  
      <v-main class="bg-black">
        <v-container
          fluid
          class="d-flex flex-column justify-space-between px-4"
          style="min-height: 100vh;"
        >
          <!-- 질문 -->
          <div class="mt-8">
            <div class="text-h6 font-weight-medium" style="color:white;">
              기분이 어떠신가요?
            </div>
          </div>
  
          <!-- 이모지 선택 -->
          <div class="d-flex justify-space-around my-6">
            <v-btn
              v-for="(emoji, idx) in emojis"
              :key="idx"
              class="emoji-btn"
              :class="{ active: selected === idx }"
              @click="selected = idx"
              variant="text"
            >
              <span class="text-h4">{{ emoji }}</span>
            </v-btn>
          </div>
  
          <!-- 다음 버튼 -->
          <div class="mb-6">
            <v-btn
              block
              color="#8527EA"
              class="text-white"
              height="56"
              rounded="lg"
              @click="onNext"
            >
              다음으로
            </v-btn>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const emojis = ['😭', '😓', '😐', '😊', '😆']
  const selected = ref<number|null>(null)
  
  function goBack() {
    router.back()
  }
  
  function onNext() {
    if (selected.value === null) {
      // 선택 유도
      alert('하나를 선택해 주세요.')
      return
    }
    // 다음 페이지로 이동
    router.push('/detail')
  }
  </script>
  
  <style scoped>
  .bg-black {
    background-color: #000 !important;
  }
  
  /* 이모지 버튼 기본 스타일 */
  .emoji-btn {
    width: 56px;
    height: 56px;
    min-width: 0;
    border-radius: 50%;
    transition: background-color 0.2s;
    color: #888;
  }
  
  /* 선택된 이모지 강조 */
  .emoji-btn.active {
    background-color: #333;
    color: #fff;
  }
  </style>
  