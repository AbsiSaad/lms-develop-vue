import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'
import { sessionStore } from './session'

export const useSettings = defineStore('settings', () => {
	const isSettingsOpen = ref(false)
	const activeTab = ref(null)

	const allowGuestAccess = createResource({
		url: 'lms.lms.api.get_lms_setting',
		params: { field: 'allow_guest_access' },
		auto: true,
		cache: ['allowGuestAccess'],
		onError(error) {
			console.error("Failed to fetch guest access settings:", error || 'Unknown error');
		}
	})

	const preventSkippingVideos = createResource({
		url: 'lms.lms.api.get_lms_setting',
		params: { field: 'prevent_skipping_videos' },
		auto: true,
		cache: ['preventSkippingVideos'],
		onError(error) {
			console.error("Failed to fetch prevent skipping videos setting:", error || 'Unknown error');
		}
	})

	const sidebarSettings = createResource({
		url: 'lms.lms.api.get_sidebar_settings',
		cache: 'Sidebar Settings',
		auto: false,
		onError(error) {
			console.error("Failed to fetch sidebar settings:", error || 'Unknown error');
		}
	})

	return {
		isSettingsOpen,
		activeTab,
		allowGuestAccess,
		preventSkippingVideos,
		sidebarSettings,
	}
})
