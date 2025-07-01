<template>
    <v-app>
      <v-main class="bg-black d-flex flex-column justify-center align-center text-center">
        <v-container class="fill-height d-flex flex-column justify-center align-center">
          <!-- 아이콘 이미지 -->
          <v-img
            src="../assets/Popper.png"
            alt="축하 이모지"
            max-width="150"
            class="mb-6"
          ></v-img>
  
          <!-- 텍스트 -->
          <div>
            <h1 class="text-white text-h4 font-weight-bold mb-2">축하해요!</h1>
            <p class="text-grey-lighten-1 text-body-1">일기를 모두 작성했어요</p>
          </div>
  
          <!-- 버튼 -->
          <v-spacer class="my-8"></v-spacer>
          <v-btn
            color="deep-purple-accent-4"
            size="large"
            rounded
            class="text-white px-12"
            @click="toHomepage"
          >
            다음
          </v-btn>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const toHomepage = () => {
    router.push('/')
  }
</script>
  
  <style scoped>
  .v-btn {
    font-weight: bold;
  }

  
  </style>
  