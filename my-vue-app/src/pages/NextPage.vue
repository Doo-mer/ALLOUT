<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function onStart() {
  router.push('/start')
}
</script>

<style scoped>
.calendar-avatar {
  /* elevation:0 으로 그림자 제거, border는 2px 정수 사용 */
  box-shadow: none !important;
  border: 2px solid #444;
  background-color: transparent !important;
}

.calendar-avatar.today {
  background-color: #8527ea !important;
  border-color: #8527ea !important;
}

.today-text {
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
}
</style>


<template>
  <v-main class="bg-neutral-700" style="min-height:100vh;">
    <v-container class="pa-0 d-flex flex-column justify-space-between bg-neutral-900"
      style="min-height:100vh; max-width:420px;">
      <!-- 상단 인사 -->
      <div class="pt-8 text-left">
        <div class="text-[1.5rem] font-weight-bold mb-1" style="color:white;">
          안녕하세요, 미모마님
        </div>
        <div class="text-[1.5rem]" style="color:#888; font-weight:500;">
          오늘은 무슨 일이 있으셨나요?
        </div>
      </div>

      <!-- 캘린더 (5x3 원형) -->
      <div class="d-flex flex-column align-center mt-6 mb-4" style="gap:8px;">
        <div v-for="row in 4" :key="row">
          <v-avatar v-for="col in 5" :key="`${row}-${col}`" size="77" class="calendar-avatar"
            :class="{ today: row === 1 && col === 4 }">
            <span v-if="row === 1 && col === 4" class="today-text">
              오늘!
            </span>
          </v-avatar>
        </div>
      </div>

      <!-- 중앙 원형 버튼 -->
      <div class="d-flex justify-center my-6 text-center">
        <v-btn color="#8527EA" class="text-white"
          style="width:120px; height:120px; font-size:1.5rem; border-radius:50%; box-shadow:0 4px 24px rgba(133,39,234,0.27);"
          elevation="8" @click="onStart">
          시작
        </v-btn>
      </div>

      <!-- 하단 고정 메뉴 -->
      <v-sheet class="pa-3 d-flex align-center justify-space-between" style="
            position:fixed;
            left:0; right:0; bottom:0;
            background:#181818;
            border-radius:16px 16px 0 0;
            max-width:420px; margin:0 auto; width:100vw;
          " elevation="8">
        <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 2rem;">
          <div class="d-flex align-center" style="gap:8px;">
            <v-btn rounded="circle" style="background:#404040; width: 10rem;">
              <span class="text-caption font-weight-bold" style="color:white;">
                고민 기록
              </span>
            </v-btn>
          </div>
          <div class="d-flex align-center" style="gap:8px;">
            <v-btn class="rounded-pill" style="background:#404040; width: 10rem;">
              <span class="text-caption font-weight-bold" style="color:white;">
                분석보고서
              </span>
            </v-btn>
          </div>
        </div>
      </v-sheet>
      <!-- 하단 서브 텍스트 -->
      <div class="d-flex justify-space-between px-4 pb-2" style="
            position:fixed;
            left:0; right:0; bottom:0.5rem;
            max-width:420px; margin:0 auto; width:100vw;
            pointer-events:none;
          ">
      </div>
    </v-container>
  </v-main>
</template>