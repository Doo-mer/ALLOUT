<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goToNextPage() {
  router.push('/next')
}
</script>

<template>
  <div style="background-color: gray; height: 100%; width: 100%; position: absolute;">
    <div style="background-color: black; height: 100%; width: 400px; position: absolute; left: 50%; transform: translate(-50%, 0);">
      <div class="text-center my-12">
        <div class="text-[3.5rem]" style="font-family: RixInooAriDuriR, sans-serif; color: white;">
          ALL OUT
        </div>
        <div class="text-[1rem] text-white">
          잠들기 전 마음을 털어놓는 시간
        </div>
      </div>
      <!-- 2. 중앙 : 스타 SVG (가로·세로 모두 중앙 정렬) -->
      <svg style="margin: 0 auto; margin-top: 8rem;" width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="white" points="50,0 56,30 80,20 70,44 100,50 70,56 80,80 56,70 50,100 44,70 20,80 30,56 0,50 30,44 20,20 44,30" />
      </svg>

      <!-- 3. 하단 : 버튼 -->
      <div class="mb-8 px-8" style="position: absolute; text-align: center; margin: 0 auto; bottom: 2rem; width: 100%;">
        <button style="background-color: blueviolet; width: 100%; height: 3rem; border-radius: 2rem;"
          color="purple accent-4" class="text-white" @click="goToNextPage">
          시작하기
        </button>
      </div>
    </div>
  </div>

</template>