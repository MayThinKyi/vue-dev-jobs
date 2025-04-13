import AddJobView from '@/views/AddJobView.vue'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import UpdateJobView from '@/views/UpdateJobView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:jobId',
      name: 'Job Details',
      component: JobView,
    },
    {
      path: '/job/add',
      name: 'Add Job',
      component: AddJobView,
    },
    {
      path: '/job/update/:jobId',
      name: 'Update Job',
      component: UpdateJobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: NotFoundView,
    },
  ],
})

export default router
