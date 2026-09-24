<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const links = [
  {
    label: 'LinkedIn',
    detail: 'linkedin.com/in/rachelolmsted',
    href: 'https://www.linkedin.com/in/rachelolmsted/',
    icon: 'mdi-linkedin',
  },
  {
    label: 'Dribbble',
    detail: 'dribbble.com/rachelolmsted',
    href: 'https://dribbble.com/rachelolmsted',
    icon: 'mdi-dribbble',
  },
  {
    label: 'Email',
    detail: 'rachel.olmsted@slalom.com',
    href: 'mailto:rachel.olmsted@slalom.com',
    icon: 'mdi-email-outline',
  },
]

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <v-app>
    <v-main class="page-shell">
      <v-container class="fill-height py-8" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="7" lg="5" xl="4">
            <v-card class="pa-6 pa-sm-8 text-center" elevation="12" rounded="xl">
              <div class="d-flex justify-end">
                <v-btn
                  :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
                  :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                  variant="text"
                  @click="toggleTheme"
                />
              </div>

              <v-avatar class="profile-avatar mb-5" color="primary" size="116">
                <v-img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
                  alt="Rachel Olmsted portrait"
                />
              </v-avatar>

              <p class="text-overline text-primary mb-2">Hello, I’m</p>
              <h1 class="text-h3 text-sm-h2 font-weight-bold mb-3">Rachel Olmsted</h1>
              <p class="text-body-1 text-medium-emphasis mx-auto mb-7 bio">
                I build thoughtful experiences, spark meaningful connections, and help
                teams turn ideas into action.
              </p>

              <div class="d-flex flex-column ga-3" aria-label="Primary links">
                <v-btn
                  v-for="link in links"
                  :key="link.label"
                  :href="link.href"
                  :target="link.href.startsWith('http') ? '_blank' : undefined"
                  :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
                  block
                  class="text-none link-button"
                  color="primary"
                  rounded="lg"
                  size="large"
                  variant="tonal"
                >
                  <v-icon class="mr-3" size="20">{{ link.icon }}</v-icon>
                  <span class="button-content text-left">
                    <strong class="d-block">{{ link.label }}</strong>
                    <small class="d-block text-medium-emphasis">{{ link.detail }}</small>
                  </span>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 8%, rgba(88, 184, 255, 0.35), transparent 25%),
    radial-gradient(circle at 88% 92%, rgba(115, 240, 207, 0.26), transparent 30%),
    linear-gradient(135deg, #071b2e 0%, #0d2d45 48%, #102d2e 100%);
}

.profile-avatar {
  border: 4px solid rgba(115, 240, 207, 0.8);
  box-shadow: 0 14px 35px rgba(90, 180, 255, 0.35);
}

.bio {
  max-width: 360px;
}

.link-button {
  min-height: 68px;
}

.button-content {
  min-width: 0;
}
</style>