<template>
    <v-app>
      <v-main>
        <v-container fluid class="pa-0 fill-height">
          <!-- Header -->
          <v-app-bar
            color="#1a1a1a"
            flat
            density="compact"
            class="px-4"
          >
            <v-btn
              icon
              variant="text"
              color="white"
              size="small"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            
            <v-spacer />
            
            <span class="text-white text-body-1 font-weight-medium">일기</span>
            
            <v-spacer />
          </v-app-bar>
  
          <!-- Main Content -->
          <div class="chat-container d-flex flex-column">
            <!-- Avatar Section -->
            <div class="avatar-section d-flex justify-center align-center">
              <div class="avatar-circle">
                <div class="avatar-eyes">
                  <div class="eye left-eye"></div>
                  <div class="eye right-eye"></div>
                </div>
              </div>
            </div>
  
            <!-- Message Input Section -->
            <div class="message-section px-6">
              <v-textarea
                v-model="message"
                placeholder="고민에 대해 자세히 얘기주세요"
                variant="solo"
                bg-color="#2a2a2a"
                color="white"
                rows="4"
                no-resize
                hide-details
                class="message-input"
              />
              
              <!-- Send Button -->
              <v-btn
                color="#8B5CF6"
                block
                size="large"
                rounded="xl"
                class="mt-4 send-button"
                @click="sendMessage"
              >
                다음
              </v-btn>
            </div>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const message = ref('')
  
  const sendMessage = () => {
    if (message.value.trim()) {
      console.log('Message sent:', message.value)
    }
    router.push("/finish")

  }
  </script>
  
  <style scoped>
  .chat-container {
    background: linear-gradient(180deg, #1a1a1a 0%, #000000 100%);
    min-height: calc(100vh - 64px);
    padding-top: 60px;
  }
  
  .avatar-section {
    flex: 1;
    max-height: 300px;
    margin-bottom: 40px;
  }
  
  .avatar-circle {
    width: 120px;
    height: 120px;
    background: white;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .avatar-eyes {
    display: flex;
    gap: 20px;
  }
  
  .eye {
    width: 12px;
    height: 12px;
    background: #000;
    border-radius: 50%;
  }
  
  .message-section {
    padding-bottom: 60px;
  }
  
  .message-input :deep(.v-field__input) {
    color: white !important;
    font-size: 16px;
    line-height: 1.4;
  }
  
  .message-input :deep(.v-field__input)::placeholder {
    color: #999 !important;
    opacity: 1;
  }
  
  .message-input :deep(.v-field) {
    border-radius: 16px !important;
    box-shadow: none !important;
  }
  
  .message-input :deep(.v-field__outline) {
    display: none;
  }
  
  .send-button {
    height: 56px !important;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  
  .send-button :deep(.v-btn__content) {
    color: white;
  }
  </style>