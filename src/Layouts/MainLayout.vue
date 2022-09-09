<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img class="h-8 w-auto" src="../assets/sm_logo.png" alt="Your Company" />
                </div>
                <nav class="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
                  <template v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">
                      <a href="#" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md']">
                        <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                    </div>
                    <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
                      <DisclosureButton :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
                        <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <span class="flex-1">{{ item.name }}</span>
                        <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400']" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>
                      </DisclosureButton>
                      <DisclosurePanel class="space-y-1">
                        <DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">{{ subItem.name }}</DisclosureButton>
                      </DisclosurePanel>
                    </Disclosure>
                  </template>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                      <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
        <div class="flex flex-shrink-0 items-center px-4">
          <img class="h-8 w-auto" src="../assets/sm_logo.png" alt="Your Company" />
        </div>
        <div class="mt-5 flex flex-grow flex-col">
          <nav class="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
            <template v-for="item in navigation" :key="item.name">
              <div v-if="!item.children">
                <router-link to="/" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md']">
                  <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  {{ item.name }}
                </router-link>
              </div>
              <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
                <DisclosureButton :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
                  <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="flex-1">{{ item.name }}</span>
                  <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400']" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                </DisclosureButton>
                <DisclosurePanel class="space-y-1">
                  <router-link v-for="subItem in item.children" :key="subItem.name" :to="subItem.href" class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">{{ subItem.name }}</router-link>
                </DisclosurePanel>
              </Disclosure>
            </template>
          </nav>
        </div>
        <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
          <router-link to="/" class="group block w-full flex-shrink-0">
            <div class="flex items-center">
              <div>
                <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <div class="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
        <button type="button" class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">{{ title }}</h1>
          </div>
          <div class="mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <slot />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data()
  {
    return {
      navigation : [
        { 
          name: 'Calendario', 
          icon: CalendarIcon, 
          current: this.$route.name === 'calendario', 
          href: '/' 
        },
        {
          name: 'Accettazione',
          icon: CheckIcon,
          current: this.$route.name === 'accettazione-medsport' || this.$route.name === 'accettazione-ambulatoriale' || this.$route.name === 'accettazione-fisioterapia' || this.$route.name === 'accettazione-cardiologia',
          children: [
            { name: 'Medsport', href: '/accettazione/medsport' },
            { name: 'Ambulatoriale', href: '/accettazione/ambulatoriale' },
            { name: 'Fisioterapia', href: '/accettazione/fisioterapia' },
            { name: 'Cardiologia', href: '/accettazione/cardiologia' },
          ],
        },
        {
          name: 'Anagrafiche',
          icon: FolderIcon,
          current: false,
          children: [
            { name: 'Pazienti', href: '#' },
            { name: 'Società sportive', href: '#' },
            { name: 'Medici', href: '#' },
            { name: 'Infermieri', href: '#' },
            { name: 'Ambulatori', href: '#' },
          ],
        },
        {
          name: 'Fatturazione',
          icon: BanknotesIcon,
          current: false,
          children: [
            { name: 'Chiusura cassa', href: '#' },
            { name: 'Altro', href: '#' },      
          ],
        },
        {
          name: 'Esportazioni',
          icon: ChartBarIcon,
          current: false,
          children: [
            { name: '730', href: '#' },
            { name: 'Tracciato ASL', href: '#' },
            { name: 'Dati regione', href: '#' },
            { name: 'Gesu bambino', href: '#' },
          ],
        },
        {
          name: 'Impostazioni',
          icon: CogIcon,
          current: false,
          children: [
            { name: 'Numeratori', href: '#' },
            { name: 'Members', href: '#' },
            { name: 'Calendar', href: '#' },
            { name: 'Prenotazione online', href: '#' },
          ],
        },
      ]
    }
  }
}
</script>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot , Disclosure , DisclosurePanel , DisclosureButton } from '@headlessui/vue'
import {
  BanknotesIcon,
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CogIcon,
  FolderIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const sidebarOpen = ref(false)
</script>